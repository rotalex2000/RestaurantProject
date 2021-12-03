import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../resources/Colors';

const FAB = ({
  onPress = () => {},
  backgroundColor = Colors.primary,
  color = Colors.white,
}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: backgroundColor,
        width: 60,
        height: 60,
        borderRadius: 30,
        position: 'absolute',
        bottom: 25,
        right: 25,
      }}
      activeOpacity={0.5}
      onPress={onPress}>
      <Text style={{color: Colors.white}}>+</Text>
    </TouchableOpacity>
  );
};

export default FAB;
