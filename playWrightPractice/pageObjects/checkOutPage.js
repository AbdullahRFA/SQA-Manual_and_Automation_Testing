
class CheckOutPage {
  constructor(page) {
    this.page = page;
  }

  async selectCountry(countryName) {
    await this.page.getByPlaceholder("Select Country").type(countryName, {
      delay: 100,
    });

    await this.page.getByText(countryName, { exact: true }).waitFor({
      state: "visible",
    });

    await this.page.getByText(countryName, { exact: true }).click();
  }

  async placeOrder() {
    console.log("Checkout URL:", this.page.url());
    console.log(
      "Place Order count:",
      await this.page.getByText("Place Order", { exact: true }).count(),
    );

    await this.page.getByText("Place Order", { exact: true }).click();
  }
}

module.exports = { CheckOutPage };

