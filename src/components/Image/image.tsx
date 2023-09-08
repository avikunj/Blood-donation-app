import React from 'react';
import {Image, ImageSourcePropType, ImageStyle} from 'react-native';

const AppImageLoader = ({
  width,
  height,
  source,
  styles,
}: {
  width: any;
  height: any;
  source: ImageSourcePropType;
  styles?: ImageStyle;
}) => {
  return (
    <Image
      style={{borderRadius: 10, width: width, height: height, ...styles}}
      source={source}
    />
  );
};

export default AppImageLoader;
