import * as React from 'react';
import { StyleSheet, View, Text, Button, Switch, SafeAreaView, ScrollView, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, StatusBar } from 'react-native';
import { Styles } from '../styles/GlobalStyles';

export default function Screen() {
    return (
        <React.Fragment>
            <Text style={{fontSize: 40, color: 'gray', fontWeight: '200', alignSelf: "flex-end"}}>1,345.0</Text>
            <Text style={{fontSize: 96, color: 'gray', fontWeight: '200', alignSelf: "flex-end"}}>1,345.0</Text>
        </React.Fragment>
    )
}