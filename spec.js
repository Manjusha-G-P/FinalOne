describe('Protractor google Demo', () => {
	it('Should navigate to Demo Page', () => {
		browser.get('http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx');
		browser.getCurrentUrl().then((url) => {
			expect(url).toBe('http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx');
		});
	});
});
