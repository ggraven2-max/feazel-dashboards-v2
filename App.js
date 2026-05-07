/* ============================================================
   FEAZEL DASHBOARDS · iOS app v1.2
   Hybrid native + webview wrapper around the unified web suite.

   Tabs (each with a unique native theme):
     • Home          mesh background, gradient headline, market ticker,
                     live enterprise rollup chips, webview LOB cards
     • Residential   animated rooftop chevrons, blue gradient,
                     "Doors knocked. Roofs sold." tagline
     • Multi-Family  animated grid of glowing windows, gold gradient,
                     "By the building. By the block." tagline
     • Service       animated radar pulse, teal gradient,
                     "Always on. Always Feazel." tagline

   Below every native LOB header sits a webview pointing at
   /mobile/<lob>/ on the live site. Live KPIs come from
   /data/data.json fetched once at boot.
   ============================================================ */

import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { WebView } from 'react-native-webview';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';
import Svg, {
  Path, Circle, Polyline, Polygon, Line, Rect, G,
} from 'react-native-svg';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  ActivityIndicator,
  Animated,
  Dimensions,
  Easing,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  createContext, useCallback, useContext, useEffect, useMemo, useRef, useState,
} from 'react';

// ============================================================
// CONSTANTS
// ============================================================
const SITE = 'https://feazelcommandcenter.com';
const MOBILE_BASE = `${SITE}/mobile`;
const DATA_URL = `${SITE}/data/data.json`;

const NAVY = '#1f2d4b';
const NAVY_DEEP = '#16203a';
const NAVY_DARKER = '#101a32';
const BLUE = '#5e82bc';
const BLUE_SOFT = '#7895c4';
const GOLD = '#d4a857';
const GOLD_SOFT = '#ecc88c';
const TEAL = '#6ee7d7';
const TEAL_DEEP = '#16a085';
const FG_QUIET = 'rgba(255,255,255,0.55)';
const FG_SOFT = 'rgba(255,255,255,0.78)';

const TABS = [
  { key: 'Home',    label: 'Home',         icon: 'home', color: BLUE },
  { key: 'Res',     label: 'Residential',  icon: 'res',  color: BLUE },
  { key: 'MF',      label: 'Multi-Family', icon: 'mf',   color: GOLD },
  { key: 'Service', label: 'Service',      icon: 'svc',  color: TEAL },
];

const MARKETS = [
  { name: 'Columbus',     brand: 'Feazel' },
  { name: 'Cincinnati',   brand: 'Feazel' },
  { name: 'Cleveland',    brand: 'Feazel' },
  { name: 'Dayton',       brand: 'Feazel' },
  { name: 'Detroit',      brand: 'Kearns' },
  { name: 'Grand Rapids', brand: 'Kearns' },
  { name: 'Nashville',    brand: 'MCR' },
  { name: 'Knoxville',    brand: 'Feazel' },
  { name: 'DC Metro',     brand: 'Shanco' },
  { name: 'Richmond',     brand: 'Shanco' },
  { name: 'Raleigh',      brand: 'Feazel' },
  { name: 'Charlotte',    brand: 'Feazel' },
  { name: 'Greenville',   brand: 'Feazel' },
];

const Tab = createBottomTabNavigator();
const SESSION_TS = Date.now();
const { width: SCREEN_W } = Dimensions.get('window');

// ============================================================
// LIVE DATA CONTEXT (data.json fetched once on boot)
// ============================================================
const DataContext = createContext({ data: null, loading: true });

function findKpi(kpis, label) {
  if (!Array.isArray(kpis)) return null;
  const re = new RegExp(label, 'i');
  return kpis.find(k => k && re.test(String(k.label || ''))) || null;
}
function val(k, dash = '—') { return k && k.value ? String(k.value) : dash; }

function DataProvider({ children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let cancelled = false;
    fetch(`${DATA_URL}?t=${SESSION_TS}`)
      .then(r => r.json())
      .then(j => { if (!cancelled) { setData(j); setLoading(false); } })
      .catch(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, []);
  const value = useMemo(() => ({ data, loading }), [data, loading]);
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

function useLobData(lobKey) {
  const { data } = useContext(DataContext);
  return useMemo(() => {
    if (!data) return null;
    const lob = data[lobKey] || {};
    return {
      revenue: lob.REVENUE_FORECAST || {},
      sales:   lob.SALES_OVERVIEW   || {},
      backlog: lob.BACKLOG          || {},
      installs:lob.INSTALLS_YTD     || {},
      service: lob.SERVICE_CALLS    || {},
    };
  }, [data, lobKey]);
}

// ============================================================
// SVG ICONS — tab bar
// ============================================================
function TabIcon({ name, color, size = 22 }) {
  const stroke = color || '#fff';
  const sw = 2;
  const c = { stroke, strokeWidth: sw, strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' };
  switch (name) {
    case 'home':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24">
          <Path {...c} d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2h-4v-7H10v7H6a2 2 0 0 1-2-2z" />
        </Svg>
      );
    case 'res':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24">
          <Path {...c} d="M3 11l9-8 9 8" />
          <Path {...c} d="M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10" />
          <Path {...c} d="M10 21v-6h4v6" />
        </Svg>
      );
    case 'mf':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24">
          <Polygon {...c} points="12 2 2 7 12 12 22 7 12 2" />
          <Polyline {...c} points="2 17 12 22 22 17" />
          <Polyline {...c} points="2 12 12 17 22 12" />
        </Svg>
      );
    case 'svc':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24">
          <Circle {...c} cx="12" cy="12" r="2.4" />
          <Path {...c} d="M5.5 12a6.5 6.5 0 0 1 13 0" />
          <Path {...c} d="M2.5 12a9.5 9.5 0 0 1 19 0" />
        </Svg>
      );
    default:
      return null;
  }
}

// ============================================================
// SHARED: small helpers used across LOB headers
// ============================================================
function useFadeUp(deps = []) {
  const fade = useRef(new Animated.Value(0)).current;
  const slide = useRef(new Animated.Value(14)).current;
  useEffect(() => {
    fade.setValue(0); slide.setValue(14);
    Animated.parallel([
      Animated.timing(fade,  { toValue: 1, duration: 600, delay: 80,  easing: Easing.out(Easing.cubic), useNativeDriver: true }),
      Animated.timing(slide, { toValue: 0, duration: 600, delay: 80,  easing: Easing.out(Easing.cubic), useNativeDriver: true }),
    ]).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return { opacity: fade, transform: [{ translateY: slide }] };
}

// Inline Feazel wordmark (white). Path data lifted verbatim from
// redesign/assets/feazel-logo-inline-white.svg so the brand mark is
// pixel-identical to the web suite without bundling an extra asset.
function FeazelWordmark({ width = 180 }) {
  const VB_W = 630.17;
  const VB_H = 71.47;
  const height = (width * VB_H) / VB_W;
  return (
    <Svg width={width} height={height} viewBox={`0 0 ${VB_W} ${VB_H}`}>
      <G fill="#ffffff">
        <Path d="M185.5,14.13v15.26h34.2v14.33h-34.2v27.75h-15.77V-.2h54.57v14.33h-38.81Z" />
        <Path d="M247.14,71.47V-.2h54.06v14.03h-38.39v14.54h33.79v14.03h-33.79v15.05h38.91v14.03h-54.57Z" />
        <Path d="M379.17,71.47l-6.51-15.96h-30.09l-6.51,15.96h-15.96L350.6-.2h14.43l30.5,71.67h-16.37ZM357.62,18.61l-9.45,23.08h18.91l-9.45-23.08Z" />
        <Path d="M414.95,71.47v-11.98l39.42-45.87h-38.19V-.2h58.46v11.98l-39.42,45.87h39.42v13.82h-59.69Z" />
        <Path d="M499.83,71.47V-.2h54.06v14.03h-38.4v14.54h33.79v14.03h-33.79v15.05h38.91v14.03h-54.57Z" />
        <Path d="M578.67,71.47V-.2h15.77v57.34h35.73v14.33h-51.5Z" />
      </G>
      <G fill="#ffffff">
        <Polygon points="27.04 34.87 62.89 34.87 35.85 71.47 0 71.47 27.04 34.87" />
        <Polygon points="89.58 0 53.73 0 106.54 71.47 142.39 71.47 89.58 0" />
        <Polygon points="62.89 34.87 27.04 34.87 54.09 71.47 89.93 71.47 62.89 34.87" />
      </G>
    </Svg>
  );
}

function FreshnessPill({ tint = '#4ade80' }) {
  const pulse = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, { toValue: 1, duration: 1200, easing: Easing.out(Easing.quad), useNativeDriver: false }),
        Animated.timing(pulse, { toValue: 0, duration: 1200, easing: Easing.in(Easing.quad), useNativeDriver: false }),
      ]),
    ).start();
  }, [pulse]);
  const haloScale = pulse.interpolate({ inputRange: [0, 1], outputRange: [1, 2.4] });
  const haloOpacity = pulse.interpolate({ inputRange: [0, 1], outputRange: [0.5, 0] });
  const today = new Date();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const stamp = `${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;
  return (
    <View style={styles.freshnessPill}>
      <View style={styles.dotWrap}>
        <Animated.View style={[styles.dotHalo, { backgroundColor: tint, transform: [{ scale: haloScale }], opacity: haloOpacity }]} />
        <View style={[styles.dot, { backgroundColor: tint }]} />
      </View>
      <Text style={styles.freshnessTxt}>{stamp}</Text>
    </View>
  );
}

function KpiChip({ label, value, accent = '#fff' }) {
  return (
    <View style={styles.kpiChip}>
      <Text style={styles.kpiChipL}>{label}</Text>
      <Text style={[styles.kpiChipV, { color: accent }]}>{value}</Text>
    </View>
  );
}

// ============================================================
// HOME — animated mesh + market ticker + live rollup chips
// ============================================================
function AnimatedMesh() {
  const drift = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(drift, { toValue: 1, duration: 18000, easing: Easing.inOut(Easing.quad), useNativeDriver: true }),
        Animated.timing(drift, { toValue: 0, duration: 18000, easing: Easing.inOut(Easing.quad), useNativeDriver: true }),
      ]),
    ).start();
  }, [drift]);
  const tx = drift.interpolate({ inputRange: [0, 1], outputRange: [-30, 30] });
  const ty = drift.interpolate({ inputRange: [0, 1], outputRange: [-20, 20] });
  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      <LinearGradient colors={[NAVY_DEEP, NAVY, '#1a2540']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={StyleSheet.absoluteFill} />
      <Animated.View style={[styles.meshBlob, { backgroundColor: 'rgba(94,130,188,0.36)', top: 40, left: 40, transform: [{ translateX: tx }, { translateY: ty }] }]} />
      <Animated.View style={[styles.meshBlob, { backgroundColor: 'rgba(212,168,87,0.18)', top: 60, right: 30, transform: [{ translateX: ty }, { translateY: tx }] }]} />
      <Animated.View style={[styles.meshBlob, { backgroundColor: 'rgba(94,130,188,0.30)', bottom: -40, left: SCREEN_W * 0.4, transform: [{ translateX: tx }, { translateY: ty }] }]} />
    </View>
  );
}

function MarketTicker() {
  const tx = useRef(new Animated.Value(0)).current;
  // Repeat the markets twice so the loop wraps without a visible jump
  const items = useMemo(() => [...MARKETS, ...MARKETS], []);
  useEffect(() => {
    Animated.loop(
      Animated.timing(tx, { toValue: -SCREEN_W * 1.4, duration: 28000, easing: Easing.linear, useNativeDriver: true }),
    ).start();
  }, [tx]);
  return (
    <View style={styles.tickerWrap} pointerEvents="none">
      <Animated.View style={[styles.tickerStrip, { transform: [{ translateX: tx }] }]}>
        {items.map((m, i) => (
          <View key={`${m.name}-${i}`} style={styles.tickerItem}>
            <Text style={styles.tickerName}>{m.name}</Text>
            <Text style={styles.tickerBrand}>{m.brand}</Text>
          </View>
        ))}
      </Animated.View>
    </View>
  );
}

function HomeHero({ data }) {
  const insets = useSafeAreaInsets();
  const intro = useFadeUp([]);
  const r  = data?.residential?.REVENUE_FORECAST?.kpis || [];
  const m  = data?.multiFamily?.REVENUE_FORECAST?.kpis || [];
  const s  = data?.service?.REVENUE_FORECAST?.kpis || [];
  const rs = data?.residential?.SALES_OVERVIEW?.kpis  || [];
  const ms = data?.multiFamily?.SALES_OVERVIEW?.kpis  || [];

  const invoicedR = val(findKpi(r, 'Invoiced YTD'));
  const invoicedM = val(findKpi(m, 'Invoiced YTD'));
  const invoicedS = val(findKpi(s, 'Invoiced YTD'));
  const signedR   = val(findKpi(rs, 'Signed Contracts YTD'));
  const signedM   = val(findKpi(ms, 'Signed Contracts YTD'));

  return (
    <View style={[styles.heroWrap, { paddingTop: insets.top + 6 }]}>
      <View style={styles.heroLogoRow}>
        <FeazelWordmark width={210} />
      </View>
      <View style={styles.heroTopRow}>
        <Text style={styles.heroBrandTag}>COO Office</Text>
        <FreshnessPill />
      </View>
      <Animated.View style={intro}>
        <Text style={styles.heroTitle}>One picture</Text>
        <Text style={styles.heroTitleAccent}>across 13 markets.</Text>
      </Animated.View>
      <View style={styles.heroChipRow}>
        <KpiChip label="Res Inv"      value={invoicedR} accent={BLUE_SOFT} />
        <KpiChip label="MF Inv"       value={invoicedM} accent={GOLD} />
        <KpiChip label="Svc Inv"      value={invoicedS} accent={TEAL} />
      </View>
      <View style={styles.heroChipRow}>
        <KpiChip label="Res Signed YTD" value={signedR} />
        <KpiChip label="MF Signed YTD"  value={signedM} />
      </View>
      <MarketTicker />
    </View>
  );
}

function HomeScreen({ navigation }) {
  const { data } = useContext(DataContext);
  const [loading, setLoading] = useState(true);
  const [errored, setErrored] = useState(false);
  const [reloadKey, setReloadKey] = useState(Date.now());
  const url = `${MOBILE_BASE}/?embed=1&t=${SESSION_TS}_${reloadKey}`;

  const onShouldStartLoad = useCallback((req) => {
    const u = req.url || '';
    if (!u.startsWith(SITE)) return false;
    if (/\/mobile\/residential\//.test(u))  { navigation.navigate('Res');     return false; }
    if (/\/mobile\/multi-family\//.test(u)) { navigation.navigate('MF');      return false; }
    if (/\/mobile\/service\//.test(u))      { navigation.navigate('Service'); return false; }
    return true;
  }, [navigation]);

  return (
    <View style={styles.screenDark}>
      <AnimatedMesh />
      <HomeHero data={data} />
      <View style={styles.homeWebHost}>
        {!errored ? (
          <WebView
            key={`home-${reloadKey}`}
            source={{ uri: url }}
            style={styles.homeWebview}
            opaque={false}
            backgroundColor="transparent"
            pullToRefreshEnabled
            bounces
            cacheEnabled={false}
            cacheMode="LOAD_NO_CACHE"
            incognito
            onLoadStart={() => setLoading(true)}
            onLoadEnd={() => setLoading(false)}
            onError={() => { setLoading(false); setErrored(true); }}
            onShouldStartLoadWithRequest={onShouldStartLoad}
          />
        ) : <ErrorPane onRetry={() => { setErrored(false); setReloadKey(Date.now()); }} />}
        {loading && !errored ? (
          <View pointerEvents="none" style={styles.subtleLoading}>
            <ActivityIndicator size="small" color={GOLD} />
          </View>
        ) : null}
      </View>
    </View>
  );
}

// ============================================================
// RESIDENTIAL — animated rooftop chevrons, blue
// ============================================================
function RooftopBackground() {
  // Two chevron strips drifting in opposite directions for parallax
  const a = useRef(new Animated.Value(0)).current;
  const b = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(Animated.timing(a, { toValue: 1, duration: 22000, easing: Easing.linear, useNativeDriver: true })).start();
    Animated.loop(Animated.timing(b, { toValue: 1, duration: 32000, easing: Easing.linear, useNativeDriver: true })).start();
  }, [a, b]);
  const aTx = a.interpolate({ inputRange: [0, 1], outputRange: [0, -SCREEN_W] });
  const bTx = b.interpolate({ inputRange: [0, 1], outputRange: [-SCREEN_W, 0] });
  const buildChevrons = (count) => {
    const pts = [];
    const seg = 60;
    for (let i = 0; i < count; i++) {
      const x = i * seg;
      pts.push(`${x},22 ${x + seg / 2},6 ${x + seg},22`);
    }
    return pts.join(' ');
  };
  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      <LinearGradient colors={['#1a2a52', '#243a6c', '#1a2a52']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={StyleSheet.absoluteFill} />
      <Animated.View style={{ position: 'absolute', top: 60, left: 0, transform: [{ translateX: aTx }] }}>
        <Svg width={SCREEN_W * 2} height={32}>
          <Polyline points={buildChevrons(40)} stroke="rgba(120,149,196,0.35)" strokeWidth={2} fill="none" />
        </Svg>
      </Animated.View>
      <Animated.View style={{ position: 'absolute', top: 110, left: 0, transform: [{ translateX: bTx }] }}>
        <Svg width={SCREEN_W * 2} height={32}>
          <Polyline points={buildChevrons(50)} stroke="rgba(212,168,87,0.18)" strokeWidth={1.5} fill="none" />
        </Svg>
      </Animated.View>
    </View>
  );
}

// fmtBigMoney: format a raw dollar number (e.g. 125615037) as $125.6M / $6.8M etc.
function fmtBigMoney(v) {
  if (!v || isNaN(v)) return '—';
  if (v >= 1e9) return '$' + (v / 1e9).toFixed(1).replace(/\.0$/, '') + 'B';
  if (v >= 1e6) return '$' + (v / 1e6).toFixed(2).replace(/\.?0+$/, '') + 'M';
  if (v >= 1e3) return '$' + Math.round(v / 1e3) + 'K';
  return '$' + Math.round(v).toLocaleString('en-US');
}

function ResidentialHeader() {
  const insets = useSafeAreaInsets();
  const data = useLobData('residential');
  const intro = useFadeUp([data?.revenue?.kpis?.length]);
  const rf = data?.revenue?.kpis || [];
  const so = data?.sales?.kpis || [];
  const bl = data?.backlog || {};
  const targetRaw = (data?.revenue?.execSummary && data.revenue.execSummary.budget) || 0;
  const target   = fmtBigMoney(targetRaw);
  const signed   = val(findKpi(so, 'Signed Contracts YTD'));
  const invoiced = val(findKpi(rf, 'Invoiced YTD'));
  const backlog  = val(findKpi(bl.kpisExecutive || [], 'Total Portfolio Value'));
  return (
    <View style={[styles.lobHeaderWrap, { paddingTop: insets.top + 6 }]}>
      <RooftopBackground />
      <View style={styles.heroTopRow}>
        <Text style={styles.heroBrandTag}>Residential · 13 markets</Text>
        <FreshnessPill tint={BLUE_SOFT} />
      </View>
      <Animated.View style={intro}>
        <Text style={styles.lobTitle}>Residential</Text>
        <Text style={[styles.lobTagline, { color: BLUE_SOFT }]}>Doors knocked. Roofs sold.</Text>
      </Animated.View>
      <Animated.View style={[styles.kpiRowFour, intro]}>
        <KpiChip label="2026 TARGET"  value={target}   accent={GOLD} />
        <KpiChip label="SIGNED YTD"   value={signed}   accent={BLUE_SOFT} />
        <KpiChip label="INVOICED YTD" value={invoiced} accent={'#fff'} />
        <KpiChip label="OPEN BACKLOG" value={backlog}  accent={'#fff'} />
      </Animated.View>
    </View>
  );
}

// ============================================================
// MULTI-FAMILY — animated grid of glowing windows, gold
// ============================================================
function BlocksBackground() {
  const COLS = 12;
  const ROWS = 4;
  const CELL = SCREEN_W / COLS;
  const blocks = useMemo(() => Array.from({ length: COLS * ROWS }, (_, i) => i), []);
  const opacities = useMemo(() => blocks.map(() => new Animated.Value(0.05 + Math.random() * 0.15)), [blocks]);
  useEffect(() => {
    const animate = (av) => {
      const target = 0.05 + Math.random() * 0.5;
      Animated.timing(av, { toValue: target, duration: 1500 + Math.random() * 2500, useNativeDriver: false })
        .start(() => animate(av));
    };
    opacities.forEach(animate);
  }, [opacities]);
  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      <LinearGradient colors={['#2b2412', '#3a2e15', '#241d0e']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={StyleSheet.absoluteFill} />
      {blocks.map((i) => {
        const r = Math.floor(i / COLS);
        const c = i % COLS;
        return (
          <Animated.View
            key={i}
            style={{
              position: 'absolute',
              left: c * CELL + 3,
              top: 50 + r * (CELL * 0.55),
              width: CELL - 6,
              height: CELL * 0.45,
              backgroundColor: GOLD,
              opacity: opacities[i],
              borderRadius: 2,
            }}
          />
        );
      })}
    </View>
  );
}

function MultiFamilyHeader() {
  const insets = useSafeAreaInsets();
  const data = useLobData('multiFamily');
  const intro = useFadeUp([data?.revenue?.kpis?.length]);
  const rf = data?.revenue?.kpis || [];
  const so = data?.sales?.kpis || [];
  const bl = data?.backlog || {};
  const targetRaw = (data?.revenue?.execSummary && data.revenue.execSummary.budget) || 0;
  const target   = fmtBigMoney(targetRaw);
  const signed   = val(findKpi(so, 'Signed Contracts YTD'));
  const invoiced = val(findKpi(rf, 'Invoiced YTD'));
  const backlog  = val(findKpi(bl.kpisExecutive || [], 'Total Portfolio Value'));
  return (
    <View style={[styles.lobHeaderWrap, { paddingTop: insets.top + 6 }]}>
      <BlocksBackground />
      <View style={styles.heroTopRow}>
        <Text style={styles.heroBrandTag}>Multi-Family · Commercial</Text>
        <FreshnessPill tint={GOLD_SOFT} />
      </View>
      <Animated.View style={intro}>
        <Text style={styles.lobTitle}>Multi-Family</Text>
        <Text style={[styles.lobTagline, { color: GOLD_SOFT }]}>By the building. By the block.</Text>
      </Animated.View>
      <Animated.View style={[styles.kpiRowFour, intro]}>
        <KpiChip label="2026 MF TARGET" value={target}   accent={GOLD} />
        <KpiChip label="SIGNED YTD"     value={signed}   accent={GOLD_SOFT} />
        <KpiChip label="INVOICED YTD"   value={invoiced} accent={'#fff'} />
        <KpiChip label="OPEN BACKLOG"   value={backlog}  accent={'#fff'} />
      </Animated.View>
    </View>
  );
}

// ============================================================
// SERVICE — animated radar pulse, teal
// ============================================================
function RadarRing({ delay = 0 }) {
  const v = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    let mounted = true;
    const loop = () => {
      if (!mounted) return;
      v.setValue(0);
      Animated.timing(v, {
        toValue: 1, duration: 2400, delay,
        easing: Easing.out(Easing.quad), useNativeDriver: false,
      }).start(({ finished }) => { if (finished && mounted) loop(); });
    };
    loop();
    return () => { mounted = false; };
  }, [v, delay]);

  const size = v.interpolate({ inputRange: [0, 1], outputRange: [10, SCREEN_W * 0.55] });
  const opacity = v.interpolate({ inputRange: [0, 1], outputRange: [0.55, 0] });
  return (
    <Animated.View
      pointerEvents="none"
      style={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: 999,
        borderWidth: 2,
        borderColor: TEAL,
        opacity,
        left: SCREEN_W / 2,
        top: 100,
        transform: [
          { translateX: Animated.multiply(size, -0.5) },
          { translateY: Animated.multiply(size, -0.5) },
        ],
      }}
    />
  );
}

function RadarBackground() {
  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      <LinearGradient
        colors={['#0c2c2a', '#0f3d36', '#0a201f']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
      <RadarRing delay={0} />
      <RadarRing delay={800} />
      <RadarRing delay={1600} />
      <View
        style={{
          position: 'absolute',
          left: SCREEN_W / 2 - 5,
          top: 95,
          width: 10, height: 10,
          backgroundColor: TEAL,
          borderRadius: 5,
          shadowColor: TEAL,
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 1,
          shadowRadius: 8,
        }}
      />
    </View>
  );
}

function ServiceHeader() {
  const insets = useSafeAreaInsets();
  const data = useLobData('service');
  const intro = useFadeUp([data?.revenue?.kpis?.length]);
  const rf = data?.revenue?.kpis || [];
  const ps = data?.revenue?.profitabilitySummary || {};
  const targetRaw = (data?.revenue?.execSummary && data.revenue.execSummary.budget) || 0;
  const target   = fmtBigMoney(targetRaw);
  const invoiced = val(findKpi(rf, 'Invoiced YTD'));
  const pace     = val(findKpi(rf, 'Annualized Pace'));
  const gm       = ps.combinedGP_pct ? ps.combinedGP_pct.toFixed(1) + '%' : '—';
  return (
    <View style={[styles.lobHeaderWrap, { paddingTop: insets.top + 6 }]}>
      <RadarBackground />
      <View style={styles.heroTopRow}>
        <Text style={styles.heroBrandTag}>Service · Fee-for-service</Text>
        <FreshnessPill tint={TEAL} />
      </View>
      <Animated.View style={intro}>
        <Text style={styles.lobTitle}>Service</Text>
        <Text style={[styles.lobTagline, { color: TEAL }]}>Always on. Always Feazel.</Text>
      </Animated.View>
      <Animated.View style={[styles.kpiRowFour, intro]}>
        <KpiChip label="2026 TARGET"  value={target}   accent={GOLD} />
        <KpiChip label="INVOICED YTD" value={invoiced} accent={TEAL} />
        <KpiChip label="PACE"         value={pace}     accent={'#fff'} />
        <KpiChip label="COMBINED GM"  value={gm}       accent={'#fff'} />
      </Animated.View>
    </View>
  );
}

// ============================================================
// LOB SCREEN — themed header on top, webview below
// ============================================================
function makeLobScreen(lob, label, HeaderCmp) {
  return function LobScreen() {
    const [loading, setLoading] = useState(true);
    const [errored, setErrored] = useState(false);
    const [reloadKey, setReloadKey] = useState(Date.now());
    const reload = useCallback(() => { setErrored(false); setLoading(true); setReloadKey(Date.now()); }, []);
    const url = `${MOBILE_BASE}/${lob}/?embed=1&t=${SESSION_TS}_${reloadKey}`;
    return (
      <View style={styles.screenDark}>
        <HeaderCmp />
        <View style={styles.lobWebHost}>
          {!errored ? (
            <WebView
              key={`${lob}-${reloadKey}`}
              source={{ uri: url }}
              style={styles.webview}
              opaque={false}
              backgroundColor="transparent"
              pullToRefreshEnabled
              bounces
              cacheEnabled={false}
              cacheMode="LOAD_NO_CACHE"
              incognito
              onLoadStart={() => setLoading(true)}
              onLoadEnd={() => setLoading(false)}
              onError={() => { setLoading(false); setErrored(true); }}
              onShouldStartLoadWithRequest={(req) => !req.url || req.url.startsWith(SITE)}
            />
          ) : <ErrorPane onRetry={reload} />}
          {loading && !errored ? (
            <View pointerEvents="none" style={styles.subtleLoading}>
              <ActivityIndicator size="small" color={GOLD} />
            </View>
          ) : null}
        </View>
      </View>
    );
  };
}

function ErrorPane({ onRetry }) {
  return (
    <View style={styles.errorPane}>
      <Text style={styles.errorTitle}>Couldn't reach the dashboards.</Text>
      <Text style={styles.errorBody}>Check your connection, then tap retry.</Text>
      <TouchableOpacity onPress={onRetry} style={styles.retryBtn}>
        <Text style={styles.retryTxt}>Retry</Text>
      </TouchableOpacity>
    </View>
  );
}

// ============================================================
// FLOATING PILL TAB BAR
// ============================================================
function FloatingTabBar({ state, descriptors, navigation }) {
  const insets = useSafeAreaInsets();
  const indicator = useRef(new Animated.Value(state.index)).current;
  useEffect(() => {
    Animated.spring(indicator, { toValue: state.index, stiffness: 220, damping: 22, mass: 0.9, useNativeDriver: true }).start();
  }, [state.index, indicator]);

  const barWidth = SCREEN_W - 24;
  const tabWidth = barWidth / state.routes.length;
  const indicatorWidth = tabWidth - 14;
  const indicatorTranslate = indicator.interpolate({
    inputRange: state.routes.map((_, i) => i),
    outputRange: state.routes.map((_, i) => i * tabWidth + 7),
  });
  const activeColor = TABS[state.index] ? TABS[state.index].color : GOLD;

  return (
    <View style={[styles.tabBarOuter, { paddingBottom: insets.bottom > 0 ? insets.bottom : 12 }]} pointerEvents="box-none">
      <BlurView intensity={32} tint="dark" style={[styles.tabBarPill, { width: barWidth }]}>
        <View style={styles.tabBarInner}>
          <Animated.View style={[styles.tabIndicator, { width: indicatorWidth, transform: [{ translateX: indicatorTranslate }] }]}>
            <LinearGradient colors={[activeColor, GOLD]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={StyleSheet.absoluteFill} />
          </Animated.View>
          {state.routes.map((route, idx) => {
            const isFocused = state.index === idx;
            const tabDef = TABS.find(t => t.key === route.name) || TABS[idx];
            const onPress = () => {
              if (Platform.OS === 'ios') Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
              const event = navigation.emit({ type: 'tabPress', target: route.key, canPreventDefault: true });
              if (!isFocused && !event.defaultPrevented) navigation.navigate(route.name);
            };
            return (
              <Pressable
                key={route.key}
                onPress={onPress}
                style={({ pressed }) => [styles.tabBtn, { width: tabWidth, opacity: pressed ? 0.65 : 1 }]}
                accessibilityRole="button"
                accessibilityState={{ selected: isFocused }}
              >
                <TabIcon name={tabDef.icon} color={isFocused ? '#fff' : 'rgba(255,255,255,0.55)'} size={22} />
                <Text style={[styles.tabLbl, isFocused && styles.tabLblActive]}>{tabDef.label}</Text>
              </Pressable>
            );
          })}
        </View>
      </BlurView>
    </View>
  );
}

// ============================================================
// MAIN APP
// ============================================================
const ResScreen = makeLobScreen('residential',  'Residential',  ResidentialHeader);
const MFScreen  = makeLobScreen('multi-family', 'Multi-Family', MultiFamilyHeader);
const SvcScreen = makeLobScreen('service',      'Service',      ServiceHeader);

export default function App() {
  return (
    <SafeAreaProvider>
      <DataProvider>
        <StatusBar style="light" />
        <NavigationContainer>
          <Tab.Navigator
            tabBar={(props) => <FloatingTabBar {...props} />}
            screenOptions={{ headerShown: false, sceneStyle: { backgroundColor: NAVY_DARKER } }}
          >
            <Tab.Screen name="Home"    component={HomeScreen} />
            <Tab.Screen name="Res"     component={ResScreen} />
            <Tab.Screen name="MF"      component={MFScreen} />
            <Tab.Screen name="Service" component={SvcScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </DataProvider>
    </SafeAreaProvider>
  );
}

// ============================================================
// STYLES
// ============================================================
const styles = StyleSheet.create({
  screenDark:  { flex: 1, backgroundColor: NAVY_DARKER },
  webview:     { flex: 1, backgroundColor: 'transparent' },
  homeWebview: { flex: 1, backgroundColor: 'transparent' },

  // Mesh background
  meshBlob: {
    position: 'absolute',
    width: 320,
    height: 320,
    borderRadius: 200,
    opacity: 0.9,
    transform: [{ scale: 1.4 }],
  },

  // Hero (Home)
  heroWrap: {
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  heroLogoRow: {
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  heroTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  heroBrandTag: {
    color: FG_QUIET,
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  heroTitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: -0.5,
    lineHeight: 32,
  },
  heroTitleAccent: {
    color: GOLD,
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: -0.5,
    fontStyle: 'italic',
    lineHeight: 32,
    marginBottom: 12,
  },
  heroChipRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
  },

  // Freshness pill
  freshnessPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    paddingHorizontal: 9,
    paddingVertical: 4,
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
    borderRadius: 999,
  },
  dotWrap: { width: 8, height: 8, alignItems: 'center', justifyContent: 'center' },
  dot: { width: 7, height: 7, borderRadius: 99 },
  dotHalo: { position: 'absolute', width: 7, height: 7, borderRadius: 99 },
  freshnessTxt: { color: FG_SOFT, fontSize: 10.5, fontWeight: '500' },

  // Generic KPI chip
  kpiChip: {
    flex: 1,
    paddingHorizontal: 9,
    paddingVertical: 7,
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.10)',
    borderRadius: 10,
  },
  kpiChipL: {
    color: 'rgba(255,255,255,0.58)',
    fontSize: 9,
    fontWeight: '600',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  kpiChipV: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: -0.3,
    marginTop: 3,
  },

  // Market ticker (Home)
  tickerWrap: {
    marginTop: 10,
    marginHorizontal: -16,
    height: 30,
    overflow: 'hidden',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(255,255,255,0.07)',
    backgroundColor: 'rgba(0,0,0,0.18)',
    justifyContent: 'center',
  },
  tickerStrip: {
    flexDirection: 'row',
    gap: 22,
    paddingHorizontal: 16,
  },
  tickerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  tickerName: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.4,
  },
  tickerBrand: {
    color: 'rgba(255,255,255,0.42)',
    fontSize: 9,
    fontWeight: '600',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },

  // LOB native header (Res / MF / Svc)
  lobHeaderWrap: {
    paddingHorizontal: 16,
    paddingBottom: 14,
  },
  lobTitle: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: -0.6,
    lineHeight: 32,
  },
  lobTagline: {
    fontSize: 13,
    fontWeight: '600',
    fontStyle: 'italic',
    letterSpacing: 0.2,
    marginTop: 2,
    marginBottom: 10,
  },
  kpiRowFour: {
    flexDirection: 'row',
    gap: 6,
  },

  // Webviews
  homeWebHost: { flex: 1, marginTop: 8 },
  lobWebHost:  { flex: 1, marginTop: 4 },
  subtleLoading: {
    position: 'absolute',
    top: 30, left: 0, right: 0,
    alignItems: 'center',
  },

  // Error
  errorPane: {
    flex: 1,
    backgroundColor: '#eaf0fa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 28,
    gap: 14,
  },
  errorTitle: { color: NAVY, fontSize: 18, fontWeight: '700' },
  errorBody:  { color: '#3a3f4a', fontSize: 14, textAlign: 'center', lineHeight: 20 },
  retryBtn:   { backgroundColor: BLUE, paddingHorizontal: 20, paddingVertical: 10, borderRadius: 8, marginTop: 6 },
  retryTxt:   { color: '#fff', fontWeight: '700', letterSpacing: 0.3 },

  // Floating tab bar
  tabBarOuter: {
    position: 'absolute',
    left: 0, right: 0, bottom: 0,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  tabBarPill: {
    height: 64,
    borderRadius: 22,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.10)',
    backgroundColor: 'rgba(22,32,58,0.82)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 18,
    elevation: 18,
  },
  tabBarInner: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
  },
  tabIndicator: {
    position: 'absolute',
    top: 6, bottom: 6,
    borderRadius: 16,
    overflow: 'hidden',
    opacity: 0.95,
  },
  tabBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
    paddingHorizontal: 4,
  },
  tabLbl: {
    color: 'rgba(255,255,255,0.55)',
    fontSize: 10.5,
    fontWeight: '600',
    letterSpacing: 0.2,
    marginTop: 2,
  },
  tabLblActive: {
    color: '#fff',
    fontWeight: '700',
  },
});
