import React from 'react';
import { SafeAreaView } from "react-native";
import { WebView } from 'react-native-webview';
import { Button, StyleSheet } from "react-native";


// export default function App() {

const App = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Button color="#3a3c49"
      onPress={() => props.navigation.navigate("CreateUserScreen")}
      title="Create Movie"
    />
    <Button color="#3a3c49"
      onPress={() => props.navigation.navigate("UsersList")}
      title="Movies List"
    />
      <WebView 
        source={{ uri: '192.168.1.192:3000' }} 
      />
    </SafeAreaView>
  );
  }

const styles = StyleSheet.create({
  container: {
     flex: 1
  },
  button: {
     backgroundColor: '#3a3c49',    
  }
})

export default App;
