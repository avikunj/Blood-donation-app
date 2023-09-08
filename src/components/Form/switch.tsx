import React from 'react';
import {Switch} from 'react-native';
import {colors} from '../../stylesheets/colors';
const AppSwitch = ({state, handleChange}: {state: any; handleChange: any}) => {
  return (
    <Switch
      value={state}
      onChange={handleChange}
      thumbColor={colors.white}
      ios_backgroundColor={colors.lightGrey}
      trackColor={{false: colors.lightGrey, true: colors.primary}}
    />
  );
};

export default AppSwitch;
