const {test, expect} = require ('@playwright/test');


// test('UI Basic Test', async ({ page })=>{

//     await page.goto('https://www.saucedemo.com/');
// })

test("basic test function", async ({browser})=>{

    const conText = await browser.newContext()

    const page = await conText.newPage()

    await page.goto('https://www.google.com/');

    console.log(await page.getByTitle("Google"))

}


)


test.only('second test', async ({page})=>{

    await page.goto('https://www.saucedemo.com/');

    await page.pause()
})
