export default class Topbar {
	async isTopBarDisplayed() {
		await page.waitForSelector('.brand')
		await page.waitForSelector('#signin_button')
	}

	async clickSignInButton() {
		await page.click('#signin_button')
	}
}
