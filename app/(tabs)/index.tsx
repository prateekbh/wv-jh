import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: 'https://www.websecgeeks.com/2016/04/json-hijacking.html' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
