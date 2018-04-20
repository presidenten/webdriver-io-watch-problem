describe('User list', () => {
  beforeEach(() => {
    browser.url('localhost:8080');
  });

  it('should be able to sort', () => {
    expect(browser.isVisible('.user-list')).toBe(true);
    expect($('.name').getText()).toBe('Johan');

    browser.click('.sort.ascending');
    expect($('.name').getText()).toBe('Carl');

    browser.click('.sort.descending');
    expect($('.name').getText()).toBe('Tobbe');
  });

});

