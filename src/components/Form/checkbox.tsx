import CheckBox from '@react-native-community/checkbox'
import React from 'react'

const AppCheckBox = ({value, onChange}:{value:any, onChange:any}) => {
  return (
    <CheckBox
        disabled={false}
        value={value}
        animationDuration={0}
        onCheckColor='red'
        onTintColor='red'
        boxType='square'

        style={{ marginHorizontal: 5 }}

        onValueChange={onChange}
    />
  )
}

export default AppCheckBox