import { useState, useContext,  } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import Button from './src/components/Button';
import { myColors } from './src/styles/Colors';
import { ThemeContext } from './src/context/ThemeContext';
import MyKeyboard from './src/components/MyKeyboard';



export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <View style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: 'black'}]}>
        <Switch
          value={theme === 'dark'}
          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
        <MyKeyboard />
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
