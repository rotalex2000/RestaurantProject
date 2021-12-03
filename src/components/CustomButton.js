import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../resources/Colors';

const CustomButton = ({
  onPress = () => {},
  text,
  backgroundColor = Colors.primary,
  color = Colors.white,
  style = {},
}) => {
  return (
    <TouchableOpacity
      style={[
        {
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: backgroundColor,
          padding: 15,
          borderRadius: 10,
        },
        style,
      ]}
      activeOpacity={0.5}
      onPress={onPress}>
      <Text style={{color: color}}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
