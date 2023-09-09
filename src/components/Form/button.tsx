import React from 'react';
import {TouchableOpacity} from 'react-native';
import {AppText} from '../Text';
import {colors} from '../../stylesheets/colors';

const AppButton = ({innerText, onPress}: {innerText: String; onPress: any}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: colors.background,
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: colors.primary,
        borderRadius: 10,
        marginVertical: 20,
        // paddingHorizontal: 12,
      }}>
      <AppText
        text={innerText}
        type="ButtonText"
        style={{
          color: colors.primary,
          textAlign: 'center',
          fontSize: 16,
          padding: 15,
          textTransform: 'uppercase',
          fontWeight: '700',
        }}
      />
    </TouchableOpacity>
  );
};

export default AppButton;
