import React from 'react';
import {TextStyle} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AppIcon = ({
  icon,
  size,
  color,
  style,
}: {
  icon: any;
  size: any;
  color: any;
  onPress?: any;
  style?: TextStyle;
}) => {
  return <Icon name={icon} size={size} color={color} style={style} />;
};

export default AppIcon;
