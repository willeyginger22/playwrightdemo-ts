import {test,expect} from '@playwright/test'

test('Video Recording Demo 1',async ({page})=>{

    await page.goto("https://demoblaze.com/index.html")

    await page.waitForTimeout(3000)
    
    await page.locator('id=login2').click()
    await page.locator('#loginusername').fill('sukumar1991')
    await page.locator('#loginpassword').fill('123')
    await page.locator('//button[@onclick="logIn()"]').click()
    await page.waitForSelector('//a[@onclick="logOut()"]')
    const logoutlink=await page.locator('//a[@onclick="logOut()"]')
    await expect(logoutlink).toBeVisible();

    

})


// test("Video Recording Demo 2",async ({page})=>{

//     await page.goto("https://demo.automationtesting.in/Register.html")

//     //Assertions
//     await expect(page.getByPlaceholder("First Name")).toBeVisible()
//     await expect(page.getByPlaceholder("First Name")).toBeEmpty()
//     await expect(page.getByPlaceholder("First Name")).toBeEnabled()
//     await expect(page.getByPlaceholder("First Name")).toBeEditable()


//     //To Handle input text
//     // await page.getByPlaceholder("First Name").fill("Sukumar")
//     await page.locator("//input[@placeholder='First Name']").fill("Sukumar")
//     // await page.fill("//input[@placeholder='First Name']","Sukumar") 

// })

