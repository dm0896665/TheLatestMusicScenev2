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
});
const Tab = () => "         ";

export default function Footloose()
{

    return (

      <View style={styles.body}>
        <View style={styles.sectionContainer, style.center}>

          <Text style={styles.sectionTitle}>Footloose: Dance, Go to Hell</Text>

          <Image style={{width:400, height:300}} source={require('../img/footloose.jpg')} />

          <Text style={styles.sectionDescription}>
            <Tab/>Evangelist Bob Jones said New Yorkers were tangoing themselves to “the brink of hell,” and added, “The only difference between Manhattan and hell is that Manhattan is surrounded by water.” Taking the world by storm in 1913, the tango was so popular that the French quarter in New Orleans became known as the “Tango Belt.” We can replace “tango” with a number of other things that scared society to the brink of culture wars like this one. They all subside and turn into something lame that our parents think is groovy, swell, and so on.
          </Text>
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
