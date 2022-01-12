import * as React from 'react';
import { Text, View, StyleSheet, Platform, FlatList, Button, Image } from 'react-native';
import { Appbar, Searchbar } from 'react-native-paper';
import Constants from 'expo-constants';
import objects from "./data.json"; // Data file for flatlist

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

//import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import DdMenu from './dd-menu-list';
export default function ListView({ navigation }) {
  
  const [ddVisible, setDDVisible] = useState(true);
  const [searchVisible, setsearchVisible] = useState(false);
  const [objectData, setObjectData] = React.useState(objects);
  const ItemView = ({item}) => { return (
      <View>
        <Text onPress={() => onItemClick(item)}>{item.name}, atrašanās vieta: {item.location}</Text>
        <Image style={styles.img} source={{
          uri: item.imgsrc
        }}/>
      </View>
  )}

  const ItemSeparatorView = () => {
    return (
      <View
        style={{ height: 0.5, width: '100%', backgroundColor: '#C8C8C8' }}
      />
    );
  };

  const onItemClick = (item) => {
    alert('Objekts: '+item.name+', atrašanās vieta: '+item.location);
  }

  const addElement = () => {
    alert("Šeit pievieno jaunu ierakstu")
  }


  return (
    <View style={ddVisible ? styles.bgShadowView : null}>
    <Appbar.Header
      theme={{ colors: { primary: '#3E658A'} }} style={styles.menuBar}>
      <Appbar.Content title="Item list" />
      <Appbar.Action icon="magnify" onPress={() =>{setsearchVisible(searchVisible=>!searchVisible)}} />
      <Appbar.Action icon={MORE_ICON} onPress={() =>{setDDVisible(ddVisible=>!ddVisible)}} />
    </Appbar.Header>
    {searchVisible && <Searchbar placeholder="Search" onSubmitEditing={() =>{setsearchVisible(searchVisible=>!searchVisible)}}/>}
    {ddVisible && <DdMenu  />}
    <Button
          title="Pievienot jaunu ierakstu"
          onPress={addElement} />

      <FlatList
        ItemSeparatorComponent={ItemSeparatorView}
        keyExtractor = {item => item.id}  
      />
        renderItem = {ItemView}
        data={objectData}
    </View>
  );
  
}

const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 50
  }
  menuBar: {
    padding: 0,
    margin: 0,
  },
  bgShadowView:{
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    flex: 1,
  }
});
