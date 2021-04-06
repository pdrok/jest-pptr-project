import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import Feedback from '../pages/FeedbackPage'
import TopBar from '../pages/components/TopBar'
import { username, password, timeout } from '../config'

describe('End-To-End Test', () => {
	let homePage
	let feedbackPage
	let loginPage
	let topBar

	beforeAll(async () => {
		jest.setTimeout(timeout)
		homePage = new HomePage()
		feedbackPage = new Feedback()
		loginPage = new LoginPage()
		topBar = new TopBar()
	})
	it('should load homepage', async () => {
		await homePage.visit()
		await homePage.isNavbarDisplayed()
	})

	it('should submit feedback', async () => {
		await homePage.clickFeedbackLink()
		await feedbackPage.isFeedbackFormDisplayed()
		await feedbackPage.submitFeedback(
			'Jonh Doe',
			'doe@email.com',
			'New Account',
			'New Account details'
		)
	})

	it('should login to application', async () => {
		await homePage.visit()
		await topBar.isTopBarDisplayed()
		await topBar.clickSignInButton()
		await loginPage.isLoginFormDisplayed()
		await loginPage.login(username, password)
	})
})
