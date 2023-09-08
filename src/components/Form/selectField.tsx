import React from 'react';
import {View} from 'react-native';
import {AppText} from '../Text';
import SelectDropdown from 'react-native-select-dropdown';

const AppSelectBox = ({
  label,
  options,
  onChange,
}: {
  label: string;
  options: any;
  onChange: any;
}) => {
  return (
    <View style={{marginVertical: 5}}>
      <AppText text={label} type="Label" />
      <SelectDropdown
        search={true}
        data={options ?? []}
        buttonStyle={{
          backgroundColor: '#000',
          flex: 1,
          borderBottomColor: 'red',
          borderBottomWidth: 1,
          width: '100%',
        }}
        buttonTextStyle={{
          color: '#fff',
          textAlign: 'left',
          paddingLeft: 0,
          marginLeft: 0,
          fontSize: 15,
        }}
        defaultButtonText="Select"
        dropdownStyle={{backgroundColor: '#000'}}
        rowStyle={{padding: 0, borderBottomWidth: 1, borderBottomColor: 'red'}}
        rowTextStyle={{color: '#ddd', textAlign: 'left'}}
        selectedRowTextStyle={{fontWeight: 'bold'}}
        searchInputStyle={{padding: 0}}
        searchInputTxtStyle={{textAlign: 'left'}}
        onSelect={(selectedItem, index) => {
          onChange(selectedItem, index);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item;
        }}
      />
    </View>
  );
};

export default AppSelectBox;
