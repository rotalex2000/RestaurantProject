import React, {useEffect, useState} from 'react';
import {View, Text, Modal, TextInput, StyleSheet} from 'react-native';
import CustomButton from '../../components/CustomButton';
import FAB from '../../components/FAB';
import DefaultPreferenceStorage from '../../data/DefaultPreference';
import MenuLocalRepository from '../../data/MenuLocalRepository';
import Menu from '../../models/menus/Menu';
import {Colors} from '../../resources/Colors';

const MenuScreen = ({route, navigation}) => {
  const [menus, setMenus] = useState([]);
  const [newMenuName, setNewMenuName] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const menuLocalRepository = new MenuLocalRepository(
    new DefaultPreferenceStorage(),
  );

  useEffect(() => {
    // menuLocalRepository.clearAllMenus();
    updateMenuList();
  }, []);

  const MenuItem = ({name}) => {
    return (
      <View>
        <Text
          onPress={() => navigation.navigate('MenuDetails', {menuName: name})}>
          {name}
        </Text>
      </View>
    );
  };

  const menuList =
    menus.length > 0 ? (
      menus.map(menuItem => (
        <MenuItem key={menuItem.name} name={menuItem.name} />
      ))
    ) : (
      <></>
    );

  const updateMenuList = () => {
    menuLocalRepository.getAllMenus().then(newMenus => {
      if (newMenus) {
        setMenus(newMenus);
      } else {
        setMenus([]);
      }
    });
  };

  const addMenu = menu => {
    menuLocalRepository.saveMenu(menu).then(updateMenuList());
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View style={{}}>{menuList}</View>
      <FAB onPress={() => setIsModalVisible(true)} />
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
            value={newMenuName}
            onChangeText={value => setNewMenuName(value)}
            style={styles.input}
            placeholder="Name"
          />
          <CustomButton
            onPress={() => {
              addMenu(new Menu(newMenuName, []));
              setNewMenuName('');
              setIsModalVisible(false);
            }}
            text="Add"
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

export default MenuScreen;
