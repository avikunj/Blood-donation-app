import React from 'react';
import AppContainer from '../components/Container';
import AppRow from '../components/Row';
import {AppText} from '../components/Text';
import {FlatList, Image, Text, View, useWindowDimensions} from 'react-native';
import AppImageLoader from '../components/Image/image';
import AppColumn from '../components/Column';
import AppIcon from '../components/Icon';
import AppLink from '../components/Form/link';

const SearchResultScreen = ({navigation}: {navigation: any}) => {
  const window = useWindowDimensions();
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  type ItemProps = {title: string};

  const Item = ({title}: ItemProps) => (
    <>
      <AppRow
        style={{
          padding: 10,
          marginVertical: 10,
          backgroundColor: '#ddd',
          borderRadius: 10,
        }}>
        <AppImageLoader
          styles={{alignSelf: 'center'}}
          width={80}
          height={80}
          source={require('../../assets/logo.png')}
        />
        <AppColumn>
          <AppRow style={{flexWrap: 'wrap', justifyContent: 'space-between'}}>
            <AppText
              type="Para"
              text={'Avikunj'}
              style={{
                marginLeft: 20,
                marginBottom: 5,
                color: '#000',
                fontWeight: '600',
              }}
            />
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <AppIcon
                style={{marginLeft: 15}}
                icon={'phone'}
                size={30}
                color={'red'}
              />
              <AppIcon
                style={{marginLeft: 15}}
                icon={'envelope'}
                size={30}
                color={'red'}
              />
              <AppIcon
                style={{marginLeft: 15}}
                icon={'whatsapp'}
                size={30}
                color={'red'}
              />
            </View>
          </AppRow>
          <AppText
            type="Para"
            text={'AB+'}
            style={{
              marginLeft: 20,
              marginBottom: 5,
              color: 'red',
              fontWeight: '600',
            }}
          />
          <AppText
            type="Para"
            text={'7404115678'}
            style={{marginLeft: 20, marginBottom: 5, color: '#000'}}
          />
          <AppText
            type="Para"
            text={'Mohali, Punjab'}
            style={{marginLeft: 20, marginBottom: 5, color: '#000'}}
          />
          {/* <AppLink
            style={{
              color: 'red',
              fontWeight: '500',
              textAlign: 'left',
              marginLeft: 20,
            }}
            link={null}
            text={'Request a rider for pick and drop service'}
          /> */}
        </AppColumn>
      </AppRow>
    </>
  );

  return (
    <AppContainer
      pageTitle={'Search Results'}
      pageSubTitle={'List of available donors'}
      navigation={navigation}>
      <FlatList
        data={DATA}
        style={{maxHeight: window.height - 200, overflow: 'scroll'}}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </AppContainer>
  );
};

export default SearchResultScreen;
