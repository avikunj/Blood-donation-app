import React, {useEffect, useState} from 'react';
import {Text, TextStyle} from 'react-native';
import {colors} from '../../stylesheets/colors';

export const AppText = ({
  text,
  type,
  style,
}: {
  text: String;
  type:
    | 'Heading'
    | 'SubHeading'
    | 'Para'
    | 'ButtonText'
    | 'Label'
    | 'Link'
    | 'Info';
  style?: TextStyle;
}) => {
  const [state, setState] = useState<TextStyle>({});
  let {primary, white, lightGrey} = colors;

  useEffect(() => {
    switch (type) {
      case 'Heading':
        setState({
          ...state,
          fontFamily: 'Montserrat-SemiBold',
          fontSize: 24,
          color: white,
        });
        break;
      case 'SubHeading':
        setState({
          ...state,
          fontFamily: 'Montserrat-Regular',
          fontSize: 16,
          color: white,
        });
        break;
      case 'Label':
        setState({
          ...state,
          fontFamily: 'Montserrat-SemiBold',
          fontSize: 14,
          color: primary,
          textTransform: 'uppercase',
          paddingLeft: 10,
        });
        break;
      case 'Link':
        setState({
          ...state,
          fontFamily: 'Montserrat-Regular',
          fontSize: 16,
          color: white,
          textDecorationLine: 'underline',
        });
        break;
      case 'Info':
        setState({
          ...state,
          fontFamily: 'Montserrat-Regular',
          fontSize: 16,
          color: white,
          fontWeight: '600',
        });
        break;
      case 'ButtonText':
        setState({
          ...state,
          fontFamily: 'Montserrat-SemiBold',
          fontSize: 20,
          color: primary,
          textTransform: 'uppercase',
          textAlign: 'center',
          padding: 20,
        });
        break;
      case 'Para':
        setState({
          ...state,
          fontFamily: 'Montserrat-Regular',
          fontSize: 16,
          color: '#fff',
          textAlign: 'left',
        });
        break;

      default:
        setState({
          ...state,
          fontFamily: 'Montserrat-SemiBold',
          fontSize: 30,
          color: '#fff',
        });
        break;
    }
  }, [type]);

  return (
    <Text
      style={{
        ...state,
        ...style,
      }}>
      {text}
    </Text>
  );
};
