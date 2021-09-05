/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, StyleSheet, Text, View, Image} from 'react-native';
import {Avatar} from 'react-native-paper';
import H2 from './../../component/basic/H2';
import P from './../../component/basic/P';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Fontisto';
import Icon4 from 'react-native-vector-icons/EvilIcons';

import {theme} from './../../theme/theme';
const FeedPost = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Top}>
        <View style={{flexDirection: 'row', display: 'flex'}}>
          <Avatar.Image
            size={50}
            source={{
              uri: 'data:image/png;base64,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',
            }}
          />
          <View style={styles.headingSub}>
            <H2>Jenny Wilson</H2>
            <P>Allentown,New Maxico</P>
          </View>
        </View>
        <Icon size={20} name="dots-three-horizontal" />
      </View>
      <View style={styles.Content}>
        <P>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </P>
      </View>
      <View style={styles.PostImg}>
        <Image
          resizeMode="cover"
          style={{
            height: 180,
            width: '100%',
            borderRadius: 20,
          }}
          source={{
            uri: 'https://images.unsplash.com/photo-1516154182849-1a5f068beda5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
          }}
        />
        <View style={styles.CommentLike}>
          <View style={styles.three}>
            <View style={styles.row}>
              <Icon2 size={20} name="heart" color="red" style={styles.p10} />
              <P>10K</P>
            </View>
            <View style={styles.row}>
              <Icon3 size={20} name="commenting" style={styles.p10} />
              <P>10K</P>
            </View>
            <View style={styles.row}>
              <Icon3
                size={20}
                name="share-apple"
                color="red"
                style={styles.p10}
              />
              <P>10K</P>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FeedPost;

const styles = StyleSheet.create({
  container: {
    // marginVertical: 5,
    // backgroundColor: 'white',
  },
  Top: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  Content: {
    marginBottom: 10,
  },
  PostImg: {
    height: 200,
    // backgroundColor: 'red',
    ...theme.colors.customShad2,
  },
  CommentLike: {
    backgroundColor: 'white',
    height: 50,
    justifyContent: 'center',
    zIndex: 1,
    bottom: 50,
    width: '100%',
    borderTopLeftRadius: 110,
    borderRadius: 20,
    borderTopRightRadius: 0,
  },
  three: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  headingSub: {justifyContent: 'center', marginHorizontal: 20},
  row: {flexDirection: 'row'},
  p10: {paddingHorizontal: 10},
});