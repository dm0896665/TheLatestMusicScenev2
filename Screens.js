/*import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { AuthContext } from "./context";
import {NavigationContext } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

const style = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  big: {
    fontSize: 17,
  },
  red: {
    color: 'red',
  },
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const Home = ({ navigation }) => (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        {global.HermesInternal == null ? null : (
          <View style={styles.engine}>
            <Text style={styles.footer}>Engine: Hermes</Text>
          </View>
        )}
        <View style={styles.body}>
          <View style={styles.sectionContainer, style.center}>

            <Text style={styles.sectionTitle}>Cool "Musci" Stories</Text>

            <Text style={styles.sectionDescription}>
              Footloose: Dance, Go to Hell
            </Text>

            <Image style={{width:200, height:200}} source={require('./img/footloose.jpg')} />

            <Button title="Learn More" onPress={() => navigation.push("Footloose")}/>

            <Text style={styles.sectionDescription, style.center, style.big}>
                Elvis Presley: Musician, Entertainer, Federal Agent
              </Text>

            <Image style={{width:200, height:200}} source={require('./img/nixonelvis.jpg')} />

            <Button title="Learn More" onPress={() => navigation.push("Elvis")}/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
);

export const Elvis = ({ navigation }) => {

  return (
    <ScreenContainer>
      <Text>Sign In Screen</Text>
      <Button title="Sign In" onPress={() => signIn()} />
      <Button
        title="Create Account"
        onPress={() => navigation.push("CreateAccount")}
      />
    </ScreenContainer>
  );
};

export const Footloose = () => {

  return (
    <ScreenContainer>
      <Text>Create Account Screen</Text>
      <Button title="Sign Up" onPress={() => signUp()} />
    </ScreenContainer>
  );
};*/