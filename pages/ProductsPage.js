const { By, Builder } = require('selenium-webdriver');

class ProductsPage{
  
  driver;
  constructor({driver} = {}){
    this.driver = driver || new Builder().forBrowser('chrome').build();
  }

  getDriver(){
    return this.driver;
  }

  async open(){
    await this.driver.get('https://www.saucedemo.com/inventory.html');
  }

  async quit(){
    await this.driver.quit();
  }
  
  txtCartNumber(){
    return this.driver.findElement(By.xpath('//span[@data-test="shopping-cart-badge"]')).getText();
  }
  
  txtProductsName(){
    return this.driver.findElement(By.xpath('//div[@data-test="inventory-item-name"]')).getText();
  }

  clickAddCartProduct(value){
    return this.driver.findElement(By.xpath(`//button[@data-test="add-to-cart-${value}"]`)).click();
  }

  clickBackProducts(){
    return this.driver.findElement(By.xpath('//button[@data-test="back-to-products"]')).click();
  }

  clickImgProducts(index){
    return this.driver.findElement(By.xpath(`//a[@data-test="item-${index}-img-link"]`)).click();
  }

  clickRemoveProduct(value){
    return this.driver.findElement(By.xpath(`//button[@data-test="remove-${value}"]`)).click();
  }

  clickTitleProducts(index){
    return this.driver.findElement(By.xpath(`//a[@data-test="item-${index}-title-link"]`)).click();
  }

}

module.exports = ProductsPage;
