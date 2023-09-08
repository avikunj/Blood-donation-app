import React, {ReactComponentElement} from 'react';
import {View, ViewStyle} from 'react-native';

const AppRow = ({children, style}: {children: any; style?: ViewStyle}) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        ...style,
      }}>
      {children}
    </View>
  );
};

export default AppRow;
