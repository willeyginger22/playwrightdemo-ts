import {expect, test} from '@playwright/test'

test.describe('first test',()=>{

   
test("Single File Demo",async ({page})=>{

    await page.goto("https://demo.automationtesting.in/FileUpload.html")
    
    await page.locator("#input-4").setInputFiles('tests/UploadFiles/testfile1.pdf')

    await expect(page.locator("button[title='Clear selected files']")).toBeVisible()

})

test("Multiple Files Demo",async ({page})=>{

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    
    await page.waitForSelector('#filesToUpload')

    await page.locator('#filesToUpload').setInputFiles(['tests/UploadFiles/testfile1.pdf','tests/UploadFiles/testfile2.pdf'])

    await expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('testfile1.pdf')
    await expect(await page.locator('#fileList li:nth-child(2)')).toHaveText('testfile2.pdf')

    await page.waitForTimeout(4000)
    
    //Remove the files
    await page.locator('#filesToUpload').setInputFiles([])
    await page.waitForTimeout(3000)

    await expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected')

})

})

