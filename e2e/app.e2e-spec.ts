import { ImageChangePage } from './app.po';

describe('image-change App', function() {
  let page: ImageChangePage;

  beforeEach(() => {
    page = new ImageChangePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
