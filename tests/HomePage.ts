import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {

    readonly page: Page;
    readonly productList: string;
    readonly addToCartbtn: string;
    readonly cart: string;

   
    constructor(page) {
      this.page = page;
      this.productList= '//*[@id="tbodyid"]/div/div/div/h4/a';
      this.addToCartbtn='//a[text()="Add to cart"]';
      this.cart='#cartur';
     }

 
    async addProductToCart(productName) {
        await this.page.waitForSelector(this.productList)
        const productList = await this.page.$$(this.productList);
         for (const product of productList) {
             if (productName === await product.textContent()) {
                
                await product.click()
                break
                }
           }
          await this.page.once('dialog', async dialog=>{
            if(dialog.message().includes('added')){
            await dialog.accept(); 
           }
           
          })
          await this.page.waitForSelector(this.addToCartbtn)
          await this.page.locator(this.addToCartbtn).click()
    }

    async gotoCart() {
        await this.page.waitForSelector(this.cart)
        await this.page.locator(this.cart).click()
       }

}