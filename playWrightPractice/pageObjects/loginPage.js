class LoginPage{
    constructor(page){
        this.page = page;
        this.emailLocator = page.locator("#userEmail");
        this.passwordLocator = page.locator("#userPassword");
        this.loginLocator = page.locator("#login");
    }

    async gotoLoginPage(){
        await this.page.goto(process.env.Base_login_url);
    }

    async validateLoginPage(username, password){

        await this.emailLocator.fill(username);
        await this.passwordLocator.fill(password);
        await this.loginLocator.click();
    }
}

module.exports = {LoginPage};