/* ============================================================
   FEAZEL DASHBOARDS · iOS app (multi-LOB)
   Lightweight Expo wrapper around the unified web suite.
   Five tabs: Command Center, Sales, Revenue, Backlog, Installs.
   Top of every screen: segmented control to switch LOB
   between Residential and Multi-Family.

   Each tab renders the matching page from the deployed Netlify
   site inside a WebView with pull-to-refresh and a loading state.
   ============================================================ */

import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { WebView } from 'react-native-webview';
import {
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useState, useCallback, createContext, useContext } from 'react';

// === EDIT ME WHEN YOU CONFIRM THE LIVE URL =========================
const SITE = 'https://feazel-command-center.netlify.app';
const MOBILE_BASE = `${SITE}/mobile`;
// ===================================================================

// Feazel brand palette (mirrors redesign/shared/styles.css tokens)
const NAVY = '#1f2d4b';
const NAVY_DEEP = '#16203a';
const BLUE = '#5e82bc';
const TINT = '#eaf0fa';
const FG_LIGHT = '#a9b3c8';

const Tab = createBottomTabNavigator();

// Shared LOB state across all tabs. Toggle in any screen, every tab updates.
const LobContext = createContext({
  lob: 'residential',
  setLob: () => {},
});

// Lightweight inline icons. Unicode glyphs keep the bundle small and remove
// the need for react-native-svg or vector-icons.
function Icon({ name, color, size = 22 }) {
  const stroke = color || NAVY;
  const glyph = {
    home: '⌂',     // house
    sales: '↗',    // up-right arrow
    rev: '▲',      // up triangle
    backlog: '☰',  // trigram
    inst: '✓',     // check
  }[name] || '•';
  return (
    <Text style={{ color: stroke, fontSize: size, fontWeight: '700' }}>
      {glyph}
    </Text>
  );
}

// Segmented control rendered above each WebView. State lifted via context.
function LobSwitch() {
  const { lob, setLob } = useContext(LobContext);
  return (
    <View style={styles.lobSwitchWrap}>
      <TouchableOpacity
        style={[styles.lobBtn, lob === 'residential' && styles.lobBtnActive]}
        onPress={() => setLob('residential')}
        activeOpacity={0.7}
      >
        <Text style={[styles.lobBtnTxt, lob === 'residential' && styles.lobBtnTxtActive]}>
          Residential
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.lobBtn, lob === 'multi-family' && styles.lobBtnActive]}
        onPress={() => setLob('multi-family')}
        activeOpacity={0.7}
      >
        <Text style={[styles.lobBtnTxt, lob === 'multi-family' && styles.lobBtnTxtActive]}>
          Multi-Family
        </Text>
      </TouchableOpacity>
    </View>
  );
}

// Cache buster: appended to every WebView URL so iOS WebView doesn't serve
// stale HTML/CSS while we're iterating. Fresh per app boot.
const SESSION_TS = Date.now();

function DashboardScreen({ pathSuffix, label }) {
  const { lob } = useContext(LobContext);
  const [loading, setLoading] = useState(true);
  const [errored, setErrored] = useState(false);
  const [reloadKey, setReloadKey] = useState(Date.now());

  const reload = useCallback(() => {
    setErrored(false);
    setLoading(true);
    setReloadKey(Date.now());
  }, []);

  // Build URL: ${MOBILE_BASE}/${lob}/${pathSuffix}/?t=...
  const baseUrl = pathSuffix
    ? `${MOBILE_BASE}/${lob}/${pathSuffix}/`
    : `${MOBILE_BASE}/${lob}/`;
  const sep = baseUrl.indexOf('?') >= 0 ? '&' : '?';
  // Include lob in cache key so swapping LOB forces a fresh fetch
  const finalUrl = `${baseUrl}${sep}t=${SESSION_TS}_${lob}_${reloadKey}`;

  return (
    <SafeAreaView style={styles.screen}>
      <LobSwitch />
      <View style={styles.webHost}>
        {!errored ? (
          <WebView
            // Re-mount when lob changes so the WebView fully reloads
            key={`${lob}-${reloadKey}`}
            source={{ uri: finalUrl }}
            style={styles.webview}
            pullToRefreshEnabled
            bounces
            cacheEnabled={false}
            cacheMode="LOAD_NO_CACHE"
            incognito={true}
            startInLoadingState={false}
            onLoadStart={() => setLoading(true)}
            onLoadEnd={() => setLoading(false)}
            onError={() => {
              setLoading(false);
              setErrored(true);
            }}
            onHttpError={({ nativeEvent }) => {
              if (nativeEvent && nativeEvent.statusCode >= 500) {
                setErrored(true);
              }
            }}
            onShouldStartLoadWithRequest={(req) => {
              if (!req.url) return true;
              return req.url.startsWith(SITE);
            }}
            scalesPageToFit
          />
        ) : (
          <View style={styles.errorPane}>
            <Text style={styles.errorTitle}>Couldn't reach the dashboards.</Text>
            <Text style={styles.errorBody}>
              Check your connection. If this keeps happening, confirm the
              Netlify site is live and the URL in App.js matches.
            </Text>
            <TouchableOpacity onPress={reload} style={styles.retryBtn}>
              <Text style={styles.retryTxt}>Retry</Text>
            </TouchableOpacity>
          </View>
        )}
        {loading && !errored ? (
          <View pointerEvents="none" style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color={BLUE} />
            <Text style={styles.loadingTxt}>Loading {label}…</Text>
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
}

const screenOptions = {
  headerStyle: { backgroundColor: NAVY },
  headerTintColor: '#fff',
  headerTitleStyle: { fontWeight: '700', letterSpacing: 0.2 },
  tabBarStyle: {
    backgroundColor: NAVY,
    borderTopWidth: 0,
    height: 84,
    paddingTop: 6,
    paddingBottom: 24,
  },
  tabBarActiveTintColor: '#ffffff',
  tabBarInactiveTintColor: FG_LIGHT,
  tabBarLabelStyle: { fontSize: 11, fontWeight: '600', letterSpacing: 0.2 },
};

export default function App() {
  const [lob, setLob] = useState('residential');
  return (
    <LobContext.Provider value={{ lob, setLob }}>
      <NavigationContainer>
        <StatusBar style="light" />
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen
            name="Home"
            options={{
              title: 'Command Center',
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => <Icon name="home" color={color} />,
            }}
          >
            {() => <DashboardScreen pathSuffix="" label="Command Center" />}
          </Tab.Screen>

          <Tab.Screen
            name="Sales"
            options={{
              title: 'Sales Overview',
              tabBarLabel: 'Sales',
              tabBarIcon: ({ color }) => <Icon name="sales" color={color} />,
            }}
          >
            {() => <DashboardScreen pathSuffix="sales-overview" label="Sales Overview" />}
          </Tab.Screen>

          <Tab.Screen
            name="Forecast"
            options={{
              title: 'Revenue Forecast',
              tabBarLabel: 'Forecast',
              tabBarIcon: ({ color }) => <Icon name="rev" color={color} />,
            }}
          >
            {() => <DashboardScreen pathSuffix="revenue-forecast" label="Revenue Forecast" />}
          </Tab.Screen>

          <Tab.Screen
            name="Backlog"
            options={{
              title: 'Backlog',
              tabBarLabel: 'Backlog',
              tabBarIcon: ({ color }) => <Icon name="backlog" color={color} />,
            }}
          >
            {() => <DashboardScreen pathSuffix="backlog" label="Backlog" />}
          </Tab.Screen>

          <Tab.Screen
            name="Installs"
            options={{
              title: 'Installs YTD',
              tabBarLabel: 'Installs',
              tabBarIcon: ({ color }) => <Icon name="inst" color={color} />,
            }}
          >
            {() => <DashboardScreen pathSuffix="installs-ytd" label="Installs" />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </LobContext.Provider>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: NAVY_DEEP },
  webHost: { flex: 1, backgroundColor: '#fff' },
  webview: { flex: 1, backgroundColor: '#fff' },

  // Top-of-screen LOB segmented control
  lobSwitchWrap: {
    flexDirection: 'row',
    backgroundColor: NAVY_DEEP,
    paddingHorizontal: 12,
    paddingVertical: 6,
    gap: 4,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.05)',
  },
  lobBtn: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.04)',
    alignItems: 'center',
  },
  lobBtnActive: { backgroundColor: BLUE },
  lobBtnTxt: {
    color: 'rgba(255,255,255,0.62)',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.4,
  },
  lobBtnTxtActive: { color: '#fff' },

  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,0.85)',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  loadingTxt: { color: NAVY, fontSize: 13, fontWeight: '600', letterSpacing: 0.3 },
  errorPane: {
    flex: 1,
    backgroundColor: TINT,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 28,
    gap: 14,
  },
  errorTitle: { color: NAVY, fontSize: 18, fontWeight: '700' },
  errorBody: {
    color: '#3a3f4a',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
  retryBtn: {
    backgroundColor: BLUE,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 6,
  },
  retryTxt: { color: '#fff', fontWeight: '700', letterSpacing: 0.3 },
});
