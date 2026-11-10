import { expect } from '@wdio/globals';
import HomeScreen from '../../screens/HomeScreen.js';
import LoginScreen from '../../screens/LoginScreen.js';

describe('Login no app WDIO', () => {
      beforeEach(async () => {
    await HomeScreen.openLogin();
  });
 it('deve logar com credenciais válidas', async () => {
    await LoginScreen.login('teste@exemplo.com', 'Senha1234');

    await expect(LoginScreen.alertTitle).toBeDisplayed();
    await expect(LoginScreen.alertMessage).toBeDisplayed();

    await LoginScreen.alertOk.click();
  });
    it('deve exibir erro com e-mail inválido', async () => {
    await LoginScreen.login('emailinvalido', 'Senha1234');

    await expect(LoginScreen.invalidEmailMsg).toBeDisplayed();
  });
  });
