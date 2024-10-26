import {test,expect, chromium, firefox} from '@playwright/test'

test('Handling Pages/Windows',async ()=>{
   
  
    const browser=await chromium.launch()
    const context=await browser.newContext()

    const page1=await context.newPage()
    const page2=await context.newPage()

    const allPages=context.pages()
    console.log("No of pages",allPages.length)


    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page1).toHaveTitle('OrangeHRM')


    await page2.goto("https://www.orangehrm.com/")
    await expect(page2).toHaveTitle("Human Resources Management Software | OrangeHRM")

    await page1.waitForTimeout(3000)


})

test('Handling Multiple Pages/Windows',async ()=>{
   
  
    const browser=await chromium.launch()
    const context=await browser.newContext()

    const page1=await context.newPage()
    
    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page1).toHaveTitle('OrangeHRM')

    

    const newPagePromise=context.waitForEvent('page')
    await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click()
    const newPage=await newPagePromise

    await expect(newPage).toHaveTitle('Human Resources Management Software | OrangeHRM')


    await page1.waitForTimeout(3000)
    await newPage.waitForTimeout(3000)


    await page1.waitForTimeout(3000)


})



