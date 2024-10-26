import {test,expect} from '@playwright/test'

test('Date Picker Demo',async ({page})=>{

   await page.goto("https://testautomationpractice.blogspot.com/")

//    await page.fill('#datepicker','12/12/2023')

const year='2028'
const month='March'
const date='28'

await page.locator('#datepicker').click()

while(true){

const currentYear=await page.locator(".ui-datepicker-year").textContent()
const currentMonth=await page.locator(".ui-datepicker-month").textContent()

if(currentYear==year&&currentMonth==month){
    break
}
await page.locator('[title="Next"]').click()

}


//date selection

// For loop
// const dates=await page.$$('.ui-state-default')

// for(const dt of dates){
//     if(await dt.textContent()==date){
//         await dt.click()
//         break
//     }
// }



await page.locator('.ui-state-default',{hasText:`${date}`}).click()





})

