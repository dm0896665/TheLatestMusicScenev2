import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
} from 'react-native';

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
  button:
  {
    padding: 80,
  }
});

export default function Home({navigation})
{
    const pressHandler = () => {
        navigation.navigate('Footloose');
    }
    const pressHandlers = () => {
        navigation.navigate('Elvis');
    }

    return (


      <View style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems:'center',
              textAlign:'center', alignSelf: 'stretch'
            }}>
              <View >
                        <Text style={styles.sectionTitle}>Cool "Musci" Stories</Text>
              </View>

              <View  style={{width: 200, height: 300}} >
                        <View>
                            <Text style={styles.sectionDescription}>
                              Footloose: Dance, Go to Hell
                            </Text>
                        </View>

                        <View>
                            <Image style={{width:200, height:200}} source={require('../img/footloose.jpg')} />
                        </View>

                        <View>
                            <Button style={style.button} title='Learn More' onPress={pressHandler}/>
                        </View>
              </View>

              <View style={{width: 200, height: 300}} >

                        <Text style={styles.sectionDescription, style.center, style.big}>
                            Elvis Presley: Musician, Entertainer, Federal Agent
                          </Text>

                        <Image style={{width:200, height:200}} source={require('../img/nixonelvis.jpg')} />

                        <Button title='Learn More' onPress={pressHandlers}/>
              </View>
            </View>
    )
}

const styles = StyleSheet.create({
  scrollView: {
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
