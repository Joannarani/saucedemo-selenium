const assert = require('assert');
const Base = require('../pages/base');
const ProductsPage = require('../pages/ProductsPage');

describe('Products Page', function () {
    this.timeout(10000);
    const cart = [
        "sauce-labs-backpack",
        "sauce-labs-bike-light",
        "sauce-labs-bolt-t-shirt",
        "sauce-labs-fleece-jacket",
        "sauce-labs-onesie",
        "test.allthethings()-t-shirt-(red)"
    ];
    const productsName = [
        "Sauce Labs Bike Light",
        "Sauce Labs Bolt T-Shirt",
        "Sauce Labs Onesie",
        "Test.allTheThings() T-Shirt (Red)",
        "Sauce Labs Backpack",
        "Sauce Labs Fleece Jacket"
    ];

    it('Success Click Image', async () => {
        const base = new Base();
        await base.open();
        await base.successLogin();
        const driver = base.getDriver();
        const productsPage = new ProductsPage({driver});
        await productsPage.open();
        for(i=0; i<6; i++){
            await productsPage.clickImgProducts(i);
            assert.equal(await productsPage.txtProductsName(),productsName[i]);
            await productsPage.clickBackProducts();
        }
        await productsPage.quit();
    });

    it('Success Click Title', async () => {
        const base = new Base();
        await base.open();
        await base.successLogin();
        const driver = base.getDriver();
        const productsPage = new ProductsPage({driver});
        await productsPage.open();
        for(i=0; i<6; i++){
            await productsPage.clickTitleProducts(i);
            assert.equal(await productsPage.txtProductsName(),productsName[i]);
            await productsPage.clickBackProducts();
        }
        await productsPage.quit();
    });

    it('Click Add to Cart', async () => {
        const base = new Base();
        await base.open();
        await base.successLogin();
        const driver = base.getDriver();
        const productsPage = new ProductsPage({driver});
        await productsPage.open();
        for(i=0; i<6; i++){
            await productsPage.clickAddCartProduct(cart[i]);
            assert.equal(await productsPage.txtCartNumber(),i+1);
        }
        await productsPage.quit();
    });

    it('Click Remove', async () => {
        const base = new Base();
        await base.open();
        await base.successLogin();
        const driver = base.getDriver();
        const productsPage = new ProductsPage({driver});
        await productsPage.open();
        for(i=0; i<6; i++){
            await productsPage.clickAddCartProduct(cart[i]);
        }
        for(i=0; i<5; i++){
            await productsPage.clickRemoveProduct(cart[i]);
            assert.equal(await productsPage.txtCartNumber(),5-i);
        }
        await productsPage.quit();
    });

});