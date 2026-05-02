import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { WebView } from 'react-native-webview';
import { SafeAreaView, RefreshControl, ScrollView, StyleSheet } from 'react-native';
import { useState, useCallback } from 'react';

const Tab = createBottomTabNavigator();

const NAVY = '#1B2A4A';
const ORANGE = '#E8571A';

function DashboardScreen({ url }) {
  const [refreshing, setRefreshing] = useState(false);
  const [key, setKey] = useState(0);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setKey(k => k + 1);
    setTimeout(() => setRefreshing(false), 1000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={ORANGE} />}
      >
        <WebView key={key} source={{ uri: url }} style={styles.webview} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: NAVY },
          tabBarActiveTintColor: ORANGE,
          tabBarInactiveTintColor: '#8899BB',
          headerStyle: { backgroundColor: NAVY },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Tab.Screen name="Production" children={() => <DashboardScreen url="https://residentialproductiondash.netlify.app/" />} />
        <Tab.Screen name="Sales" children={() => <DashboardScreen url="https://residentialsalesdashboard.netlify.app/" />} />
        <Tab.Screen name="Operations" children={() => <DashboardScreen url="https://residential-active-job-analysis.netlify.app/" />} />
        <Tab.Screen name="Forecast" children={() => <DashboardScreen url="https://residential-revenue-forecast.netlify.app/" />} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: NAVY },
  scrollContainer: { flex: 1 },
  webview: { flex: 1, height: 800 },
});