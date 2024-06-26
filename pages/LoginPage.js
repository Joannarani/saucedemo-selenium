const { By, Builder } = require('selenium-webdriver');

class LoginPage{

  driver;
  constructor({driver} = {}){
    this.driver = driver || new Builder().forBrowser('chrome').build();
  }

  getDriver(){
    return this.driver;
  }

  async open(){
    await this.driver.get('https://www.saucedemo.com/');
  }

  async quit(){
    await this.driver.quit();
  }

  txtUsername() {
    return this.driver.findElement(By.xpath('//input[@data-test="username"]'));
  } 

  txtPassword() {
    return this.driver.findElement(By.xpath('//input[@data-test="password"]'));
  }

  txtError(){
    return this.driver.findElement(By.xpath('//h3[@data-test="error"]')).getText();
  }

  txtProducts(){
    return this.driver.findElement(By.xpath('//span[@data-test="title"]')).getText();
  }

  //action

  typeCorrectUsername(){
    return this.txtUsername().sendKeys("standard_user");
  }

  typeIncorrectUsername(){
    return this.txtUsername().sendKeys("user");
  }

  typeCorrectPassword(){
    return this.txtPassword().sendKeys("secret_sauce");
  }

  typeIncorrectPassword(){
    return this.txtPassword().sendKeys("123");
  }

  clickSubmit(){
    return this.driver.findElement(By.xpath('//input[@data-test="login-button"]')).click();
  }

}

module.exports = LoginPage;
