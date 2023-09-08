import React from 'react';
import {AppText} from '../Text';
import {TextStyle, TouchableOpacity} from 'react-native';

const AppLink = ({
  text,
  link,
  style,
  navigation,
}: {
  text: any;
  link: any;
  style?: TextStyle;
  navigation?: any;
}) => {
  return (
    <TouchableOpacity
      onPress={() => (link ? navigation.navigate(link) : console.log(1))}>
      <AppText
        text={text}
        type="Link"
        style={{textAlign: 'center', ...style}}
      />
    </TouchableOpacity>
  );
};

export default AppLink;
