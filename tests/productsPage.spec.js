const assert = require('assert');
const LoginPage = require('../pages/LoginPage');

describe('Login', function () {
    this.timeout(10000);

    it('Success Login', async () => {
        const loginPage = new LoginPage();
        await loginPage.open();
        await loginPage.typeCorrectUsername();
        await loginPage.typeCorrectPassword();
        await loginPage.clickSubmit();
        assert.equal(await loginPage.txtProducts(), 'Products');
        await loginPage.quit();
    });

    it('Login with Incorrect Username', async () => {
        const loginPage = new LoginPage();
        await loginPage.open();
        await loginPage.typeIncorrectUsername();
        await loginPage.typeCorrectPassword();
        await loginPage.clickSubmit();
        assert.equal(await loginPage.txtError(), 'Epic sadface: Username and password do not match any user in this service');
        await loginPage.quit();
    });

});