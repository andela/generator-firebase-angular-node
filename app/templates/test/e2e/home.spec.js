describe('myapp',function() {

  browser.get('http://localhost:5555');

  describe('Login Page', function() {

    it('should render the login button', function() {
      expect(element(by.id('login-button')).getText()).toBe('Login/SignUp');
    });
  });
});