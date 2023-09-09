import React from 'react';
import {KeyboardType, TextInput, View} from 'react-native';
import {colors} from '../../stylesheets/colors';
import {AppText} from '../Text';

const AppInputField = ({
  keyboardType,
  label,
  placeholder,
  value,
  onChange,
  isPassword,
}: {
  keyboardType: KeyboardType;
  label: any;
  placeholder: any;
  value: any;
  onChange: any;
  isPassword?: Boolean;
}) => {
  let {primary, white, lightGrey} = colors;
  return (
    <View style={{marginVertical: 5}}>
      <AppText text={label} type="Label" />
      <TextInput
        secureTextEntry={isPassword ? true : false}
        keyboardType={keyboardType}
        value={value}
        style={{
          borderWidth: 1,
          fontFamily: 'Montserrat-Regular',
          borderColor: primary,
          borderTopWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          paddingBottom: 15,
          paddingTop: 10,
          color: white,
          paddingLeft: 10,
        }}
        placeholderTextColor={lightGrey}
        placeholder={placeholder}
        onChange={onChange}
      />
    </View>
  );
};

export default AppInputField;
