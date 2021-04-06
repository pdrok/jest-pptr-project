import HomePage from '../pages/HomePage'
import Feedback from '../pages/FeedbackPage'
import TopBar from '../pages/components/TopBar'

describe('Example', () => {
	let homepage
	let feedbackpage
	let topbar

	beforeAll(async () => {
		jest.setTimeout(15000)
		homepage = new HomePage()
		feedbackpage = new Feedback()
		topbar = new TopBar()
	})
	it('homepage should work', async () => {
		await homepage.visit()
	})

	it('navbar should be displayed', async () => {
		await homepage.isNavbarDisplayed()
		await topbar.isTopBarDisplayed()
	})

	it('feedback should work', async () => {
		await feedbackpage.visit()
		await feedbackpage.isFeedbackFormDisplayed()
		await feedbackpage.submitFeedback(
			'John Doe',
			'doe@mail.com',
			'need help',
			'somebody help me'
		)
		await feedbackpage.wait(5000)
	})
})
