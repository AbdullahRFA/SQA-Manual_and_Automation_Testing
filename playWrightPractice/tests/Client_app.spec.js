const { test, expect } = require("@playwright/test");
const path = require("path");

const { LoginPage } = require("../pageObjects/loginPage");
const { POManager } = require("../pageObjects/POManager");

// Dynamically points to the .env file in your root project folder
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

// test("Verify that order creation is successful", async ({ page }) => {
//   await page.goto(process.env.Base_login_url);

//   const emailPlaceholder = page.getByPlaceholder("email@example.com");
//   const passwordPlaceholder = page.getByPlaceholder("enter your passsword");

//   await emailPlaceholder.fill("momewin833@backyr.com");
//   await passwordPlaceholder.fill("Learning@830$3mk2BA");

//   const loginButton = page.locator("#login");

//   await loginButton.click();

//   await page.waitForLoadState("networkidle");

//   const productName = "ZARA COAT 3";

//   //  await page.locator(".card-body").filter({hasText: productName}).getByRole("button", {name: " View"}).click();

//   await page
//     .locator(".card-body")
//     .filter({ hasText: productName })
//     .getByRole("button", { name: "Add To Cart" })
//     .click();

//   await page.locator('button[routerlink="/dashboard/cart"]').click();

//   await page.getByRole("button", { name: "Checkout" }).click();

//   await page.getByPlaceholder("Select Country").pressSequentially("ind");

//   await page.getByText("India", { exact: true }).waitFor({
//     state: "visible",
//   });

//   await page.getByText("India", { exact: true }).click();

//   console.log("Checkout URL:", page.url());
//   console.log(
//     "Place Order count:",
//     await page.getByText("Place Order", { exact: true }).count(),
//   );

//   await page.getByText("Place Order", { exact: true }).click();

//   await expect(
//     page.getByText("Thankyou for the order.", { exact: true }),
//   ).toBeVisible();

//   await page.pause();
// });



test.only("Verify that order creation is successful using page object model", async ({ page }) => {
  await page.goto(process.env.Base_login_url);

const loginPage = new LoginPage(page);
await loginPage.gotoLoginPage();


await loginPage.validateLoginPage("momewin833@backyr.com", "Learning@830$3mk2BA");





  await page.waitForLoadState("networkidle");

  const productName = "ZARA COAT 3";

  //  await page.locator(".card-body").filter({hasText: productName}).getByRole("button", {name: " View"}).click();

  await page
    .locator(".card-body")
    .filter({ hasText: productName })
    .getByRole("button", { name: "Add To Cart" })
    .click();

  await page.locator('button[routerlink="/dashboard/cart"]').click();

  await page.getByRole("button", { name: "Checkout" }).click();

  await page.getByPlaceholder("Select Country").pressSequentially("ind");

  await page.getByText("India", { exact: true }).waitFor({
    state: "visible",
  });

  await page.getByText("India", { exact: true }).click();

  console.log("Checkout URL:", page.url());
  console.log(
    "Place Order count:",
    await page.getByText("Place Order", { exact: true }).count(),
  );

  await page.getByText("Place Order", { exact: true }).click();

  await expect(
    page.getByText("Thankyou for the order.", { exact: true }),
  ).toBeVisible();

  await page.pause();
});
