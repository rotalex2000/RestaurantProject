class MenuLocalRepository {
  constructor(localStorage) {
    this.localStorage = localStorage;
  }

  async saveMenu(menu) {
    await this.localStorage.saveMenu(menu);
  }

  async getAllMenus() {
    let menus = await this.localStorage.getAllMenus();
    return menus;
  }

  async getMenu(name) {
    let menu = await this.localStorage.getMenu(name);
    return menu;
  }

  async clearAllMenus() {
    await this.localStorage.clearAllMenus();
  }
}

export default MenuLocalRepository;
