/* ============================================================
   FEAZEL DASHBOARDS · iOS app v1.1
   Hybrid native + webview wrapper around the unified web suite.

   Architecture:
   - 4 LOB-centric tabs (Home, Residential, Multi-Family, Service)
   - Home tab = native splash header (animated mesh, gradient title,
     animated counters) + webview to /mobile/ for the LOB cards
     and markets grid
   - Each LOB tab = webview to /mobile/<lob>/ with pull-to-refresh
   - Custom floating pill tab bar with sliding gold indicator,
     branded SVG icons, light haptic on tap
   ============================================================ */

import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { WebView } from 'react-native-webview';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';
import Svg, { Path, Circle, Polyline, Polygon, Line } from 'react-native-svg';
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
import { useCallback, useEffect, useRef, useState } from 'react';

// === Site constants ============================================
const SITE = 'https://feazelcommandcenter.com';
const MOBILE_BASE = `${SITE}/mobile`;

// === Brand palette (mirrors redesign/shared/styles.css tokens) =
const NAVY = '#1f2d4b';
const NAVY_DEEP = '#16203a';
const NAVY_DARKER = '#101a32';
const BLUE = '#5e82bc';
const BLUE_SOFT = '#7895c4';
const GOLD = '#d4a857';
const GOLD_SOFT = '#ecc88c';
const FG_LIGHT = '#a9b3c8';
const FG_QUIET = 'rgba(255,255,255,0.55)';

// === Tab definitions ===========================================
const TABS = [
  { key: 'Home',     label: 'Home',         icon: 'home',  color: BLUE },
  { key: 'Res',      label: 'Residential',  icon: 'res',   color: BLUE },
  { key: 'MF',       label: 'Multi-Family', icon: 'mf',    color: GOLD },
  { key: 'Service',  label: 'Service',      icon: 'svc',   color: '#6ee7d7' },
];

const Tab = createBottomTabNavigator();
const SESSION_TS = Date.now();
const { width: SCREEN_W } = Dimensions.get('window');

// =================================================================
// SVG ICONS — custom Lucide-style strokes that match the website
// =================================================================
function TabIcon({ name, color, size = 22 }) {
  const stroke = color || '#fff';
  const sw = 2;
  const common = { stroke, strokeWidth: sw, strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' };
  switch (name) {
    case 'home':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24">
          <Path {...common} d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2h-4v-7H10v7H6a2 2 0 0 1-2-2z" />
        </Svg>
      );
    case 'res':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24">
          <Path {...common} d="M3 11l9-8 9 8" />
          <Path {...common} d="M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10" />
          <Path {...common} d="M10 21v-6h4v6" />
        </Svg>
      );
    case 'mf':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24">
          <Polygon {...common} points="12 2 2 7 12 12 22 7 12 2" />
          <Polyline {...common} points="2 17 12 22 22 17" />
          <Polyline {...common} points="2 12 12 17 22 12" />
        </Svg>
      );
    case 'svc':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24">
          <Path {...common} d="M14.7 6.3a4 4 0 1 1 5.66 5.66L7 25.32l-5.32-5.32L14.7 6.3Z" transform="translate(0 -3)" />
          <Path {...common} d="M3 18l3 3" />
          <Circle {...common} cx="18" cy="6" r="3" />
        </Svg>
      );
    default:
      return null;
  }
}

// =================================================================
// ANIMATED MESH BACKGROUND — slowly drifting radial gradient pattern
// matches the website hero's animated mesh feel
// =================================================================
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
      <LinearGradient
        colors={[NAVY_DEEP, NAVY, '#1a2540']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
      <Animated.View
        style={[
          styles.meshBlob,
          { backgroundColor: 'rgba(94,130,188,0.36)', top: 40, left: 40, transform: [{ translateX: tx }, { translateY: ty }] },
        ]}
      />
      <Animated.View
        style={[
          styles.meshBlob,
          { backgroundColor: 'rgba(212,168,87,0.18)', top: 60, right: 30, transform: [{ translateX: ty }, { translateY: tx }] },
        ]}
      />
      <Animated.View
        style={[
          styles.meshBlob,
          {
            backgroundColor: 'rgba(94,130,188,0.30)',
            bottom: -40,
            left: SCREEN_W * 0.4,
            transform: [{ translateX: tx }, { translateY: ty }],
          },
        ]}
      />
    </View>
  );
}

// =================================================================
// HERO HEADER — gradient title, freshness pill, fade-up entrance
// =================================================================
function HeroHeader() {
  const insets = useSafeAreaInsets();
  const fade = useRef(new Animated.Value(0)).current;
  const slide = useRef(new Animated.Value(12)).current;
  useEffect(() => {
    Animated.parallel([
      Animated.timing(fade, { toValue: 1, duration: 700, delay: 180, easing: Easing.out(Easing.cubic), useNativeDriver: true }),
      Animated.timing(slide, { toValue: 0, duration: 700, delay: 180, easing: Easing.out(Easing.cubic), useNativeDriver: true }),
    ]).start();
  }, [fade, slide]);

  return (
    <View style={[styles.heroWrap, { paddingTop: insets.top + 8 }]}>
      <View style={styles.heroTopRow}>
        <Text style={styles.heroBrandTag}>COO Office</Text>
        <FreshnessPill />
      </View>
      <Animated.View style={{ opacity: fade, transform: [{ translateY: slide }] }}>
        <Text style={styles.heroTitle}>One picture</Text>
        <Text style={styles.heroTitleAccent}>across 13 markets.</Text>
        <Text style={styles.heroIntro}>
          Pick a side to dive in. Combined enterprise rollup below.
        </Text>
      </Animated.View>
    </View>
  );
}

function FreshnessPill() {
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
        <Animated.View
          style={[
            styles.dotHalo,
            { transform: [{ scale: haloScale }], opacity: haloOpacity },
          ]}
        />
        <View style={styles.dot} />
      </View>
      <Text style={styles.freshnessTxt}>{stamp}</Text>
    </View>
  );
}

// =================================================================
// HOME SCREEN — native hero on top, webview on the bottom for the
// LOB cards + market grid + quick links
// =================================================================
function HomeScreen({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [errored, setErrored] = useState(false);
  const [reloadKey, setReloadKey] = useState(Date.now());
  const url = `${MOBILE_BASE}/?embed=1&t=${SESSION_TS}_${reloadKey}`;

  // Intercept clicks on the LOB cards inside the webview and route them
  // back to the matching native tab so we don't double-load the webview.
  const onShouldStartLoadWithRequest = useCallback((req) => {
    const u = req.url || '';
    if (!u.startsWith(SITE)) return false;
    if (/\/mobile\/residential\//.test(u))   { navigation.navigate('Res');     return false; }
    if (/\/mobile\/multi-family\//.test(u))  { navigation.navigate('MF');      return false; }
    if (/\/mobile\/service\//.test(u))       { navigation.navigate('Service'); return false; }
    return true;
  }, [navigation]);

  return (
    <View style={styles.screenDark}>
      <AnimatedMesh />
      <HeroHeader />
      <View style={styles.homeWebHost}>
        {!errored ? (
          <WebView
            key={`home-${reloadKey}`}
            source={{ uri: url }}
            style={styles.homeWebview}
            opaque={false}
            backgroundColor="transparent"
            allowsBackForwardNavigationGestures={false}
            pullToRefreshEnabled
            bounces
            cacheEnabled={false}
            cacheMode="LOAD_NO_CACHE"
            incognito
            onLoadStart={() => setLoading(true)}
            onLoadEnd={() => setLoading(false)}
            onError={() => { setLoading(false); setErrored(true); }}
            onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
          />
        ) : (
          <ErrorPane onRetry={() => { setErrored(false); setReloadKey(Date.now()); }} />
        )}
        {loading && !errored ? (
          <View pointerEvents="none" style={styles.subtleLoading}>
            <ActivityIndicator size="small" color={GOLD} />
          </View>
        ) : null}
      </View>
    </View>
  );
}

// =================================================================
// LOB SCREEN — clean webview wrapper for the per-LOB hub
// =================================================================
function makeLobScreen(lob, label) {
  return function LobScreen() {
    const insets = useSafeAreaInsets();
    const [loading, setLoading] = useState(true);
    const [errored, setErrored] = useState(false);
    const [reloadKey, setReloadKey] = useState(Date.now());

    const reload = useCallback(() => { setErrored(false); setLoading(true); setReloadKey(Date.now()); }, []);
    const url = `${MOBILE_BASE}/${lob}/?t=${SESSION_TS}_${reloadKey}`;

    return (
      <View style={[styles.screenLight, { paddingTop: insets.top }]}>
        {!errored ? (
          <WebView
            key={`${lob}-${reloadKey}`}
            source={{ uri: url }}
            style={styles.webview}
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
        ) : (
          <ErrorPane onRetry={reload} />
        )}
        {loading && !errored ? (
          <View pointerEvents="none" style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color={BLUE} />
            <Text style={styles.loadingTxt}>Loading {label}…</Text>
          </View>
        ) : null}
      </View>
    );
  };
}

// =================================================================
// ERROR PANE
// =================================================================
function ErrorPane({ onRetry }) {
  return (
    <View style={styles.errorPane}>
      <Text style={styles.errorTitle}>Couldn't reach the dashboards.</Text>
      <Text style={styles.errorBody}>
        Check your connection, then tap retry.
      </Text>
      <TouchableOpacity onPress={onRetry} style={styles.retryBtn}>
        <Text style={styles.retryTxt}>Retry</Text>
      </TouchableOpacity>
    </View>
  );
}

// =================================================================
// FLOATING PILL TAB BAR — custom navigator UI with sliding indicator
// =================================================================
function FloatingTabBar({ state, descriptors, navigation }) {
  const insets = useSafeAreaInsets();
  const indicator = useRef(new Animated.Value(state.index)).current;
  useEffect(() => {
    Animated.spring(indicator, {
      toValue: state.index,
      stiffness: 220,
      damping: 22,
      mass: 0.9,
      useNativeDriver: true,
    }).start();
  }, [state.index, indicator]);

  // Pill geometry: tab bar fills the screen minus 16px gutters; each
  // tab is 1/4 of the inner width.
  const barWidth = SCREEN_W - 24;
  const tabWidth = barWidth / state.routes.length;
  const indicatorWidth = tabWidth - 14;
  const indicatorTranslate = indicator.interpolate({
    inputRange: state.routes.map((_, i) => i),
    outputRange: state.routes.map((_, i) => i * tabWidth + 7),
  });

  // Active tab color drives the sliding indicator's accent
  const activeColor = TABS[state.index] ? TABS[state.index].color : GOLD;

  return (
    <View style={[styles.tabBarOuter, { paddingBottom: insets.bottom > 0 ? insets.bottom : 12 }]} pointerEvents="box-none">
      <BlurView intensity={32} tint="dark" style={[styles.tabBarPill, { width: barWidth }]}>
        <View style={styles.tabBarInner}>
          <Animated.View
            style={[
              styles.tabIndicator,
              {
                width: indicatorWidth,
                transform: [{ translateX: indicatorTranslate }],
              },
            ]}
          >
            <LinearGradient
              colors={[activeColor, GOLD]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={StyleSheet.absoluteFill}
            />
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
                style={({ pressed }) => [
                  styles.tabBtn,
                  { width: tabWidth, opacity: pressed ? 0.65 : 1 },
                ]}
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

// =================================================================
// MAIN APP
// =================================================================
const ResScreen = makeLobScreen('residential',  'Residential');
const MFScreen  = makeLobScreen('multi-family', 'Multi-Family');
const SvcScreen = makeLobScreen('service',      'Service');

export default function App() {
  return (
    <SafeAreaProvider>
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
    </SafeAreaProvider>
  );
}

// =================================================================
// STYLES
// =================================================================
const styles = StyleSheet.create({
  // Screens
  screenDark:  { flex: 1, backgroundColor: NAVY_DARKER },
  screenLight: { flex: 1, backgroundColor: '#fff' },
  webview:     { flex: 1, backgroundColor: '#fff' },

  // Mesh background
  meshBlob: {
    position: 'absolute',
    width: 320,
    height: 320,
    borderRadius: 200,
    opacity: 0.9,
    transform: [{ scale: 1.4 }],
  },

  // Hero header
  heroWrap: {
    paddingHorizontal: 18,
    paddingBottom: 14,
  },
  heroTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  heroBrandTag: {
    color: FG_QUIET,
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 2.5,
    textTransform: 'uppercase',
  },
  heroTitle: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: -0.5,
    lineHeight: 34,
  },
  heroTitleAccent: {
    color: GOLD,
    fontSize: 30,
    fontWeight: '700',
    letterSpacing: -0.5,
    fontStyle: 'italic',
    lineHeight: 34,
  },
  heroIntro: {
    color: 'rgba(255,255,255,0.78)',
    fontSize: 13,
    lineHeight: 19,
    marginTop: 10,
  },

  // Freshness pill
  freshnessPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
    borderRadius: 999,
  },
  dotWrap: { width: 8, height: 8, alignItems: 'center', justifyContent: 'center' },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 99,
    backgroundColor: '#4ade80',
  },
  dotHalo: {
    position: 'absolute',
    width: 7,
    height: 7,
    borderRadius: 99,
    backgroundColor: '#4ade80',
  },
  freshnessTxt: {
    color: 'rgba(255,255,255,0.78)',
    fontSize: 10.5,
    fontWeight: '500',
  },

  // Home webview
  homeWebHost: { flex: 1, marginTop: 8 },
  homeWebview: { flex: 1, backgroundColor: 'transparent' },
  subtleLoading: {
    position: 'absolute',
    top: 30, left: 0, right: 0,
    alignItems: 'center',
  },

  // LOB screen loading + error
  loadingOverlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(255,255,255,0.85)',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  loadingTxt: { color: NAVY, fontSize: 13, fontWeight: '600', letterSpacing: 0.3 },
  errorPane: {
    flex: 1,
    backgroundColor: '#eaf0fa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 28,
    gap: 14,
  },
  errorTitle: { color: NAVY, fontSize: 18, fontWeight: '700' },
  errorBody: { color: '#3a3f4a', fontSize: 14, textAlign: 'center', lineHeight: 20 },
  retryBtn: { backgroundColor: BLUE, paddingHorizontal: 20, paddingVertical: 10, borderRadius: 8, marginTop: 6 },
  retryTxt: { color: '#fff', fontWeight: '700', letterSpacing: 0.3 },

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
    top: 6,
    bottom: 6,
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
