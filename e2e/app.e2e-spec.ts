import { BlazerRosterPage } from './app.po';

describe('blazer-roster App', () => {
  let page: BlazerRosterPage;

  beforeEach(() => {
    page = new BlazerRosterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
