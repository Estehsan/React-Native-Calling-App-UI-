import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {theme} from '../../theme/theme';
import H2 from '../basic/H2';
import H2W from '../basic/H2W';
import WP from '../basic/WP';
import H3 from '../basic/H3';
import H1 from '../basic/H1';

const HorizontalListStars = ({item}) => {
  return (
    <View style={[styles.ListOfStars, {backgroundColor: 'white'}]}>
      <Image
        source={{
          uri: item.profileImg,
        }}
        resizeMode="cover"
        style={{
          height: '100%',
          width: '100%',
          borderRadius: 0,
          opacity: 0.8,
        }}
      />
      <View style={styles.over}>
        <H2>{item.name}</H2>
        <H3>Sub Title</H3>
      </View>
    </View>
  );
};

export default HorizontalListStars;

const styles = StyleSheet.create({
  ListOfStars: {
    height: 200,
    width: 150,
    borderRadius: 20,
    alignItems: 'center',
    marginRight: 20,
    marginBottom: 30,
    ...theme.colors.customShad,
  },
  over: {
    position: 'absolute',
    bottom: 5,
    width: '90%',
    marginHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    ...theme.colors.customShad2,
  },
});
