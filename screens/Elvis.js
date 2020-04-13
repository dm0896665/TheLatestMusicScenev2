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
  scrollView
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
});
const Tab = () => "         ";

export default function Elvis()
{

    return (

      <ScrollView style={styles.body}>
        <View style={styles.sectionContainer, style.center}>

          <Text style={styles.sectionTitle}>Elvis Presley: Musician, Entertainer, Federal Agent</Text>

          <Image style={{width:400, height:300}} source={require('../img/nixonelvis.jpg')} />

          <Text style={styles.sectionDescription}>
            <Tab/>It's nice to know where Kanye inherited his sense of entitlement, and that Michael Jackson wasn't the first pop star to completely lose his mind. Elvis Presley waltzed up to the White House gates one morning with a six-page handwritten letter in hand requesting a meeting with ol' Tricky Dick Nixon. Presley told the president that he should make him a “federal agent at large” to help fight the spread of drugs and communism. A couple years down the road The King was found dead sitting on a pile of his own shit, and Tricky Dick resigned after getting caught with his hand in the Democratic headquarters cookie jar. Looks like the dynamic duo didn't pan out so well.
          </Text>
        </View>
      </ScrollView>
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
    padding: 10,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    padding: 10,
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
