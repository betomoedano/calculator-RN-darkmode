import { useState, useContext,  } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import Button from './src/components/Button';
import { myColors } from './src/styles/Colors';
import { ThemeContext } from './src/context/ThemeContext';



export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <View style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: 'black'}]}>
        <Switch
          value={theme === 'dark'}
          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
        <Button title="1" isBlue onPress={() => alert('Hello')} />
        <Button title="1" isGray onPress={() => alert('Hello')} />
        <Button title="1" onPress={() => alert('Hello')} />
      </View>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
