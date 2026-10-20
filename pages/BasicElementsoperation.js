import { expect } from '@playwright/test';
exports.BasicElements=
class BasicElements {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
  this.page = page;
  this.username = page.getByPlaceholder('Enter your name');
  this.password = page.getByPlaceholder('Enter password');
  this.email = page.getByPlaceholder('Enter email');
  this.phone = page.getByPlaceholder('Enter phone');
  this.about = page.getByPlaceholder('Tell us about yourself');
  this.submit = page.getByRole('button', { name: 'Submit form' });
  this.confirmation = page.getByText('Form submitted successfully');
}
async formfill(username, password, email, phone) {
  await this.username.fill(username);
  await this.password.fill(password);
  await this.email.fill(email);
  await this.phone.fill(phone);
  await this.about.fill('Hello sreenidhi');
  await this.submit.click();
  await expect(this.confirmation).toHaveText('Form submitted successfully');
}
}
