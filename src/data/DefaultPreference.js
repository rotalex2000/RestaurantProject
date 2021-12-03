import DefaultPreference from 'react-native-default-preference';
import {Platform} from 'react-native';

if (Platform.OS === 'android') {
  DefaultPreference.setName('NativeStorage');
}

const MENUS = 'MENUS';

class DefaultPreferenceStorage {
  constructor() {}
  saveMenu = async menu => {
    let menus = await this.getAllMenus();
    if (menus) menus.push(menu);
    else menus = [menu];

    await DefaultPreference.set(MENUS, JSON.stringify(menus))
      .then(newMenu => {
        console.log(`Saved menu: ${JSON.stringify(menu)}`);
        return newMenu;
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  getAllMenus = async () => {
    const menus = await DefaultPreference.get(MENUS).then(receivedValue => {
      menuList = receivedValue ? JSON.parse(receivedValue) : [];
      console.log(`Menus: ${JSON.stringify(menuList)}`);
      return menuList;
    });
    return menus;
  };

  clearAllMenus = async () => {
    await DefaultPreference.clear(MENUS).then(() => {
      console.log('Cleared all menus');
    });
  };
}

export default DefaultPreferenceStorage;
