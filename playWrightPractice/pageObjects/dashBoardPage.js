class DashBoardPage {
    constructor(page){
        this.page = page;
        this.cardBody = page.locator(".card-body");
    }

    async addProductToCart(productName){
        const productLocator = this.cardBody.filter({hasText: productName});
        const addToCartButton = productLocator.getByRole("button", {name: "Add To Cart"});
        await addToCartButton.click();
    }

    async goToCartPage(){
        const cartButton = this.page.locator('button[routerlink="/dashboard/cart"]');
        await cartButton.click();
    }
}

module.exports = {DashBoardPage};

