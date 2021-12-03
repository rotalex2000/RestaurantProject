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

  async clearAllMenus() {
    await this.localStorage.clearAllMenus();
  }
}

export default MenuLocalRepository;
