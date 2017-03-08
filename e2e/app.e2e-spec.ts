import { TotPage } from './app.po';

describe('Tot App', function () {
  let page: TotPage;

  beforeEach(() => {
    page = new TotPage();
    page.navigateTo();
  });

  it('should display title saying "Tot"', () => {
    expect(page.getToolbarTitle()).toEqual('Tot');
  });

  it('should display version saying "v0.0.1"', () => {
    expect(page.getToolbarVersion()).toEqual('v0.0.1');
  });
});
