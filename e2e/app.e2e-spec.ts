import { CiasteczkowyPotworPage } from './app.po';

describe('ciasteczkowy-potwor App', function() {
  let page: CiasteczkowyPotworPage;

  beforeEach(() => {
    page = new CiasteczkowyPotworPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
