class HomeScreen {
      get tabLogin() {
    return $('~Login');
  }
    async openLogin() {
    await this.tabLogin.waitForDisplayed();
    await this.tabLogin.click();
  }
  }

export default new HomeScreen();
