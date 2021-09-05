import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Avatar, Searchbar} from 'react-native-paper';
import {theme} from './../../theme/theme';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  const width = Dimensions.get('window').width;

  return (
    <View style={styles.main}>
      <View style={styles.left}>
        <Avatar.Image
          size={45}
          source={{
            uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
          }}
        />
      </View>
      <View style={styles.center}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View style={styles.right}>
        <View style={styles.left}>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 40,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon size={25} name="coins" color="black" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    paddingHorizontal: 30,
    alignItems: 'center',
    height: '10%',
    display: 'flex',
    ...theme.colors.customShad,
  },
  left: {justifyContent: 'center'},
  center: {width: '70%', marginHorizontal: 40},
  right: {justifyContent: 'center'},
});