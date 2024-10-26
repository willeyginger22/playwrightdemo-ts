import {test} from '@playwright/test'

test('Page Screen shot',async ({page})=>{

   await page.goto('https://demo.opencart.com/')
   await page.screenshot({path:'tests/Screenshots/'+Date.now()+'HomePage.png'})
   
})

test('Full Page Screen shot',async ({page})=>{

    await page.goto('https://demo.opencart.com/')
    await page.screenshot({path:'tests/Screenshots/'+Date.now()+'FullHomePage.png',fullPage:true})

})

test('Element Screen shot',async ({page})=>{

    await page.goto('https://demo.opencart.com/')
    await page.locator('//*[@id="content"]/div[2]/div[1]/form/div').screenshot({path:'tests/Screenshots/'+Date.now()+'ElementPage.png'})
  
})

