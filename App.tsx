import React from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import Test from './src/components/Test';
import { NativeRouter, Route, Link } from 'react-router-native';
import Home from './src/components/Home';

export default function App() {
    return (
        <NativeRouter>
            <SafeAreaView>
                <View>
                    <Link to="/">
                        <Text>Home</Text>
                    </Link>
                </View>
                <View>
                    <Link to="/home">
                        <Text>Test</Text>
                    </Link>
                </View>
            </SafeAreaView>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Test} />
        </NativeRouter>
    );
}
