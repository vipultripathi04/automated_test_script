import { Selector } from 'testcafe';

const loginButton = Selector('#login');
const usernameInput = Selector('#username');
const passwordInput = Selector('#password');
const errorMessage = Selector('#login-error-notify');

fixture('Login Tests')
  .page('https://dev.deepthought.education/login');

test('Successful Login', async (t) => {
  await t
    .typeText(usernameInput, 'vipul0406')
    .typeText(passwordInput, 'vipul999')
    .click(loginButton);
    const currentUrl = await t.eval(() => window.location.href);
    await t.expect(currentUrl).eql('https://dev.deepthought.education/dashboard');   
});

test('Failed Login', async (t) => {
  await t
    .typeText(usernameInput, 'johndoe')
    .typeText(passwordInput, 'wrongpassword')
    .click(loginButton);

  await t.expect(errorMessage.innerText).contains('Invalid login credentials');
});
