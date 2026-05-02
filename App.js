/* ============================================================
   FEAZEL DASHBOARDS · iOS app
   Lightweight Expo wrapper around the unified web suite.
   Five tabs: Command Center, Sales, Revenue, Backlog, Installs.
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
import { useState, useCallback, useRef } from 'react';

// === EDIT ME WHEN YOU CONFIRM THE LIVE URL =========================
// Netlify domain for the unified suite (the redesign/ folder).
// If your real Netlify subdomain differs, swap it here and rebuild.
const SITE = 'https://feazel-dashboards-v2.netlify.app';
// ===================================================================

// Feazel brand palette (mirrors redesign/shared/styles.css tokens)
const NAVY = '#1f2d4b';
const NAVY_DEEP = '#16203a';
const BLUE = '#5e82bc';
const TINT = '#eaf0fa';
const FG_LIGHT = '#a9b3c8';

const Tab = createBottomTabNavigator();

// Lightweight inline icons. Unicode glyphs keep the bundle small and remove
// the need for react-native-svg or vector-icons.
function Icon({ name, color, size = 22 }) {
  const stroke = color || NAVY;
  const glyph = {
    home: '⌂',     // house
    sales: '↗',    // up-right arrow
    rev: '▲',      // up triangle
    backlog: '☰',  // trigram (stacked layers feel)
    inst: '✓',     // check
  }[name] || '•';
  return (
    <Text style={{ color: stroke, fontSize: size, fontWeight: '700' }}>
      {glyph}
    </Text>
  );
}

function DashboardScreen({ url, label }) {
  const [loading, setLoading] = useState(true);
  const [errored, setErrored] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  const reload = useCallback(() => {
    setErrored(false);
    setLoading(true);
    setReloadKey((k) => k + 1);
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.webHost}>
        {!errored ? (
          <WebView
            key={reloadKey}
            source={{ uri: url }}
            style={styles.webview}
            pullToRefreshEnabled
            bounces
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
            // Keep navigation inside the suite. External links would jump
            // out to Safari, which is fine but we just block them for now.
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
  return (
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
          {() => <DashboardScreen url={`${SITE}/`} label="Command Center" />}
        </Tab.Screen>

        <Tab.Screen
          name="Sales"
          options={{
            title: 'Residential Sales Overview',
            tabBarLabel: 'Sales',
            tabBarIcon: ({ color }) => <Icon name="sales" color={color} />,
          }}
        >
          {() => (
            <DashboardScreen
              url={`${SITE}/sales-overview/`}
              label="Sales Overview"
            />
          )}
        </Tab.Screen>

        <Tab.Screen
          name="Forecast"
          options={{
            title: 'Residential Revenue Forecast',
            tabBarLabel: 'Forecast',
            tabBarIcon: ({ color }) => <Icon name="rev" color={color} />,
          }}
        >
          {() => (
            <DashboardScreen
              url={`${SITE}/revenue-forecast/`}
              label="Revenue Forecast"
            />
          )}
        </Tab.Screen>

        <Tab.Screen
          name="Backlog"
          options={{
            title: 'Job Backlog & Production',
            tabBarLabel: 'Backlog',
            tabBarIcon: ({ color }) => <Icon name="backlog" color={color} />,
          }}
        >
          {() => (
            <DashboardScreen url={`${SITE}/backlog/`} label="Backlog" />
          )}
        </Tab.Screen>

        <Tab.Screen
          name="Installs"
          options={{
            title: 'Residential Installs YTD',
            tabBarLabel: 'Installs',
            tabBarIcon: ({ color }) => <Icon name="inst" color={color} />,
          }}
        >
          {() => (
            <DashboardScreen url={`${SITE}/installs-ytd/`} label="Installs" />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: NAVY_DEEP },
  webHost: { flex: 1, backgroundColor: '#fff' },
  webview: { flex: 1, backgroundColor: '#fff' },
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
