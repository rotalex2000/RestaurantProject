import React, {useEffect, useState} from 'react';
import {View, Text, Modal, TextInput, StyleSheet} from 'react-native';
import CustomButton from '../../components/CustomButton';
import FAB from '../../components/FAB';
import DefaultPreferenceStorage from '../../data/DefaultPreference';
import MenuLocalRepository from '../../data/MenuLocalRepository';
import Menu from '../../models/menus/Menu';
import {Colors} from '../../resources/Colors';

const MenuDetailsScreen = ({route, navigation}) => {
  const [name, setName] = useState('');
  const [itemList, setItemList] = useState([]);

  const [newName, setNewName] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const menuLocalRepository = new MenuLocalRepository(
    new DefaultPreferenceStorage(),
  );

  useEffect(() => {
    loadMenu(route.params.menuName);
  }, []);

  const loadMenu = menuName => {
    menuLocalRepository.getMenu(menuName).then(menu => {
      if (menu) {
        setName(menu.name);
      } else {
        navigation.goBack();
      }
    });
  };

  const updateMenu = menu => {
    menuLocalRepository.updateMenu(menuName, menu).then(loadMenu(newName));
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View style={{}}>
        <Text>{name}</Text>
      </View>
      {/* <FAB onPress={() => setIsModalVisible(true)} /> */}
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={isModalVisible}
        onRequestClose={() => {}}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{position: 'absolute', top: 0, right: 0, padding: 10}}
          onPress={() => setIsModalVisible(false)}>
          Close
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignContent: 'center',
            paddingHorizontal: 20,
          }}>
          <TextInput
            value={newName}
            onChangeText={value => setNewName(value)}
            style={styles.input}
            placeholder="Name"
          />
          <CustomButton
            onPress={() => {
              updateMenu(new Menu(newName, itemList));
              setNewName('');
              setIsModalVisible(false);
            }}
            text="Save"
            style={{marginTop: 20}}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});

export default MenuDetailsScreen;
