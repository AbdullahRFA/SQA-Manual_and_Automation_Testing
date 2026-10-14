const { test, expect } = require("@playwright/test");

// test('UI Basic Test', async ({ page })=>{

//     await page.goto('https://www.saucedemo.com/');
// })

test("basic test function", async ({ browser }) => {
  const conText = await browser.newContext();

  const page = await conText.newPage();

  await page.goto("https://www.google.com/");

  console.log(await page.getByTitle("Google"));
});

test("second test", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.pause();
});

test.only("Rahul Shetty Academy Login Page", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

  //   find the locators for username, password, and sign in button

  const username = page.locator("#username");
  const password = page.locator("#password");
  // const userType = page.locator()
  const sighnInButton = page.locator("#signInBtn");

  //   fill the username and password fields

  await username.fill("rahulshettyacademy");
  await password.fill("Learning@830$3mK2");

  //   find the locators for radio buttons and click on the last radio button

  const radioButtons = page.locator(".radiotextsty");
  await radioButtons.last().click();

  //   find the locator for okay button and click on it

  const okButton = page.locator("#okayBtn");

  await okButton.click();
  // check if the last radio button is checked or not
  await expect(radioButtons.last()).toBeChecked();

  //   find the locator for dropdown and select the option "consult"
  const dropdown = page.locator("select.form-control");

  await dropdown.selectOption("consult");

  //   find the locator for terms and conditions checkbox and click on it

  const termsAndCondition = page.locator("#terms");

  await termsAndCondition.click();

  //   check if the terms and conditions checkbox is checked or not

  await expect(termsAndCondition).toBeChecked();

  //   click on the sighn in button

  await sighnInButton.click();

  //   check if the page title is "Shop Name" or not

  await expect(page.getByTitle("Shop Name")).toBeTruthy();

  //   pause the execution
  await page.pause();
});
