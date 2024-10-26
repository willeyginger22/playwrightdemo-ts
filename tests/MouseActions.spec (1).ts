import { expect, test } from '@playwright/test'

test.describe('Mouse Actions Demo', () => {


    test("Mouse Hover", async ({ page }) => {

        await page.goto("https://demo.opencart.com/")

        const desktop = page.locator("//a[normalize-space()='Desktops']")
        const PC = page.locator("//a[normalize-space()='PC (0)']")

        await desktop.hover()
        await PC.hover()

        await PC.click()


    })

    test("Mouse Right Click", async ({ page }) => {

        await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")

        await page.locator("//span[@class='context-menu-one btn btn-neutral']").click({ button: 'right'})

        await expect(page.locator("//span[text()='Copy']")).toBeVisible()

        await page.close()
    })






    test("Mouse Double Click", async ({ page }) => {

        await page.goto("https://testautomationpractice.blogspot.com/")

        await page.locator('//button[@ondblclick="myFunction1()"]').dblclick()

        const text = page.locator("#field2")
        await expect(text).toHaveValue('Hello World!')


    })


    test("Mouse Drag and Drop Demo-approach1", async ({ page }) => {

        await page.goto("http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")

        const rome = page.locator("#box6")
        const Italy = page.locator("#box106")

        //Hover over
        await rome.hover()
        await page.mouse.down()

        //go to target element
        await Italy.hover()
        await page.mouse.up()

    })



    test("Mouse Drag and Drop Demo-approach2", async ({ page }) => {

        await page.goto("http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")

        const rome = page.locator("#box6")
        const Italy = page.locator("#box106")

        await rome.dragTo(Italy)



    })

    test("Scroll and view", async ({ page }) => {

        await page.goto("https://www.countries-ofthe-world.com/flags-of-the-world.html")

        await page.locator("//img[@alt='Flag of India']").scrollIntoViewIfNeeded({ timeout: 30000 })

        // await page.locator("//img[@alt='Flag of India']").click()

        //asertions


    })

})

