import { ATTUIPage } from './app.po';

describe('att-ui App', () => {
  let page: ATTUIPage;

  beforeEach(() => {
    page = new ATTUIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
