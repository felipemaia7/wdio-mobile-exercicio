class LoginScreen {
  get inputEmail() {
    return $('~input-email');
  }

  get inputPassword() {
    return $('~input-password');
  }

  get btnLogin() {
    return $('~button-LOGIN');
  }

  // Alerta de sucesso: localizado pelo texto exibido
  get alertTitle() {
    return $('android=new UiSelector().text("Success")');
  }

  get alertMessage() {
    return $('android=new UiSelector().text("You are logged in!")');
  }

  get alertOk() {
    return $('android=new UiSelector().text("OK")');
  }

  get invalidEmailMsg() {
    return $('//*[@text="Please enter a valid email address"]');
  }

  async login(email, password) {
    await this.inputEmail.setValue(email);
    await this.inputPassword.setValue(password);
    await this.btnLogin.click();
  }
}

export default new LoginScreen();