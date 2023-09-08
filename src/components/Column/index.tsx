import React, {ReactComponentElement} from 'react';
import {View, ViewStyle} from 'react-native';

const AppColumn = ({
  children,
  extraStyles,
}: {
  children: any;
  extraStyles?: ViewStyle;
}) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        ...extraStyles,
      }}>
      {children}
    </View>
  );
};

export default AppColumn;
