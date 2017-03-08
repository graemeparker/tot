import { browser, element, by } from 'protractor';

export class TotPage {
  navigateTo() {
    return browser.get('/');
  }

  getToolbarTitle() {
    return element(by.id('tot-title')).getText();
  }

  getToolbarVersion() {
    return element(by.id('tot-version')).getText();
  }
}
