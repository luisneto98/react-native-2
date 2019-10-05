import React from 'react';
import moment from 'moment';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

export default function AccelerationItem({ item }) {
  return (
	  <View style={{backgroundColor: 'grey', marginLeft: 10, padding: 7, borderRadius: 15}}>
      <Text style={{color: 'white', fontSize: 17}} >{item}</Text>
    </View>
  );
}
