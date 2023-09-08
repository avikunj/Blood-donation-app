import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SelectDropdown from 'react-native-select-dropdown';
import AppContainer from '../components/Container';
import {AppText} from '../components/Text';
import AppSelectBox from '../components/Form/selectField';
import AppButton from '../components/Form/button';

const SearchScreen = ({navigation}: {navigation: any}) => {
  const bloodGroups = ['A+', 'A-', 'O+', 'O-', 'AB+', 'AB-', 'B+', 'B-'];
  const [states, setStates] = useState(['Any', 'Haryana']);

  const [cities, setCities] = useState([
    'Any',
    'Yamunanangar',
    'Ambala',
    'Gurgaon',
    'Karnal',
  ]);

  return (
    <AppContainer
      pageSubTitle={'Search for donors in your city'}
      pageTitle={'Search'}
      navigation={navigation}>
      <AppSelectBox
        label="Search by State"
        options={states}
        onChange={() => console.log(1)}
      />
      <AppSelectBox
        label="search by City"
        options={cities}
        onChange={() => console.log(1)}
      />
      <AppSelectBox
        label="search by Blood Group"
        options={bloodGroups}
        onChange={() => console.log(1)}
      />
      {/* <AppSelectBox
        label="Plasma or blood donation?"
        options={['Blood Donation', 'Plasma']}
        onChange={() => console.log(1)}
      /> */}
      {/* <AppSelectBox
        label="Can you provide pick and drop service?"
        options={['Yes, I can', 'No, Not possible', 'Yes, if required']}
        onChange={() => console.log(1)}
      />
      <AppSelectBox
        label="In how much time do you need the unit?"
        options={[
          'Immediately',
          'Within next 2-4 hours',
          'By today',
          'Till tomorrow',
        ]}
        onChange={() => console.log(1)}
      /> */}
      <AppButton
        innerText={'Search'}
        onPress={() => navigation.navigate('SearchResults')}
      />
      <View>
        {/* <View style={{backgroundColor: '#ddd'}}>
          <View
            style={{
              padding: 20,
              borderBottomWidth: 1,
              borderBottomColor: 'red',
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <Image
                  style={{width: 80, height: 80, borderRadius: 100}}
                  source={require('../../assets/logo.png')}
                />
              </View>
              <View style={{flexWrap: 'nowrap', flex: 1}}>
                <Text style={{color: '#000'}}>
                  {' '}
                  <Text style={{color: 'red'}}> Blood Group</Text> AB+{' '}
                </Text>
                <Text style={{color: '#000'}}>
                  {' '}
                  <Text style={{color: 'red'}}> Name</Text> Avikunj{' '}
                </Text>
                <Text style={{color: '#000'}}>
                  {' '}
                  <Text style={{color: 'red'}}> Contact</Text> 7404115678{' '}
                </Text>
                <Text style={{color: '#000'}}>
                  {' '}
                  <Text style={{color: 'red', flexWrap: 'wrap'}}>
                    {' '}
                    Location
                  </Text>{' '}
                  VIP Road, Zirakpur, Chandigarh, India{' '}
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              padding: 20,
              borderBottomWidth: 1,
              borderBottomColor: 'red',
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}>
              <View>
                <Image
                  style={{width: 80, height: 80, borderRadius: 100}}
                  source={require('../../assets/logo.png')}
                />
              </View>
              <View style={{flexWrap: 'nowrap', flex: 1}}>
                <Text style={{color: '#000'}}>
                  {' '}
                  <Text style={{color: 'red'}}> Blood Group</Text> AB+{' '}
                </Text>
                <Text style={{color: '#000'}}>
                  {' '}
                  <Text style={{color: 'red'}}> Name</Text> Avikunj{' '}
                </Text>
                <Text style={{color: '#000'}}>
                  {' '}
                  <Text style={{color: 'red'}}> Contact</Text> 7404115678{' '}
                </Text>
                <Text style={{color: '#000'}}>
                  {' '}
                  <Text style={{color: 'red', flexWrap: 'wrap'}}>
                    {' '}
                    Location
                  </Text>{' '}
                  VIP Road, Zirakpur, Chandigarh, India{' '}
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              padding: 20,
              borderBottomWidth: 1,
              borderBottomColor: 'red',
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}>
              <View>
                <Image
                  style={{width: 80, height: 80, borderRadius: 100}}
                  source={require('../../assets/logo.png')}
                />
              </View>
              <View style={{flexWrap: 'nowrap', flex: 1}}>
                <Text style={{color: '#000'}}>
                  {' '}
                  <Text style={{color: 'red'}}> Blood Group</Text> AB+{' '}
                </Text>
                <Text style={{color: '#000'}}>
                  {' '}
                  <Text style={{color: 'red'}}> Name</Text> Avikunj{' '}
                </Text>
                <Text style={{color: '#000'}}>
                  {' '}
                  <Text style={{color: 'red'}}> Contact</Text> 7404115678{' '}
                </Text>
                <Text style={{color: '#000'}}>
                  {' '}
                  <Text style={{color: 'red', flexWrap: 'wrap'}}>
                    {' '}
                    Location
                  </Text>{' '}
                  VIP Road, Zirakpur, Chandigarh, India{' '}
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              padding: 20,
              borderBottomWidth: 1,
              borderBottomColor: 'red',
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}>
              <View>
                <Image
                  style={{width: 80, height: 80, borderRadius: 100}}
                  source={require('../../assets/logo.png')}
                />
              </View>
              <View style={{flexWrap: 'nowrap', flex: 1}}>
                <Text style={{color: '#000'}}>
                  {' '}
                  <Text style={{color: 'red'}}> Blood Group</Text> AB+{' '}
                </Text>
                <Text style={{color: '#000'}}>
                  {' '}
                  <Text style={{color: 'red'}}> Name</Text> Avikunj{' '}
                </Text>
                <Text style={{color: '#000'}}>
                  {' '}
                  <Text style={{color: 'red'}}> Contact</Text> 7404115678{' '}
                </Text>
                <Text style={{color: '#000'}}>
                  {' '}
                  <Text style={{color: 'red', flexWrap: 'wrap'}}>
                    {' '}
                    Location
                  </Text>{' '}
                  VIP Road, Zirakpur, Chandigarh, India{' '}
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              padding: 20,
              borderBottomWidth: 1,
              borderBottomColor: 'red',
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}>
              <View>
                <Image
                  style={{width: 80, height: 80, borderRadius: 100}}
                  source={require('../../assets/logo.png')}
                />
              </View>
              <View style={{flexWrap: 'nowrap', flex: 1}}>
                <Text style={{color: '#000'}}>
                  {' '}
                  <Text style={{color: 'red'}}> Blood Group</Text> AB+{' '}
                </Text>
                <Text style={{color: '#000'}}>
                  {' '}
                  <Text style={{color: 'red'}}> Name</Text> Avikunj{' '}
                </Text>
                <Text style={{color: '#000'}}>
                  {' '}
                  <Text style={{color: 'red'}}> Contact</Text> 7404115678{' '}
                </Text>
                <Text style={{color: '#000'}}>
                  {' '}
                  <Text style={{color: 'red', flexWrap: 'wrap'}}>
                    {' '}
                    Location
                  </Text>{' '}
                  VIP Road, Zirakpur, Chandigarh, India{' '}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              padding: 20,
              borderBottomWidth: 1,
              borderBottomColor: 'red',
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}>
              <View>
                <Image
                  style={{width: 80, height: 80, borderRadius: 100}}
                  source={require('../../assets/logo.png')}
                />
              </View>
              <View style={{flexWrap: 'nowrap', flex: 1}}>
                <Text style={{color: '#000'}}>
                  {' '}
                  <Text style={{color: 'red'}}> Blood Group</Text> AB+{' '}
                </Text>
                <Text style={{color: '#000'}}>
                  {' '}
                  <Text style={{color: 'red'}}> Name</Text> Avikunj{' '}
                </Text>
                <Text style={{color: '#000'}}>
                  {' '}
                  <Text style={{color: 'red'}}> Contact</Text> 7404115678{' '}
                </Text>
                <Text style={{color: '#000'}}>
                  {' '}
                  <Text style={{color: 'red', flexWrap: 'wrap'}}>
                    {' '}
                    Location
                  </Text>{' '}
                  VIP Road, Zirakpur, Chandigarh, India{' '}
                </Text>
              </View>
            </View>
          </View>
        </View> */}
      </View>
    </AppContainer>
  );
};

export default SearchScreen;
