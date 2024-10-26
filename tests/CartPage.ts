import { expect, type Locator, type Page } from '@playwright/test';

export class CartPage {
   
    readonly page:Page;
    readonly noOfProducts:string;

    constructor(page) {
      this.page = page;
      this.noOfProducts= '//tbody[@id="tbodyid"]/tr/td[2]'
     
    }

    async checkProductInCart(productName:string) {
        await this.page.waitForSelector(this.noOfProducts)
        const productsInCart=await this.page.$$(this.noOfProducts)
        for (const product of productsInCart) {
            console.log(await product.textContent())
            if (productName === await product.textContent()) {
               console.log(productName)
               return true;
               break;
               }
          }
       
     }
    
 }