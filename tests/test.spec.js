const{test,expect}=require('@playwright/test');


test('Basic Elements',async({page})=>{

await page.goto("https://demoqa.com/");
await page.locator("//*[@class='card-body']/child::h5[contains(text(),'Elements')]").click();

await page.getByText("Text Box",{exact:true}).click();
await page.getByPlaceholder("Full Name").fill("hgjhgh");
await page.getByRole('button',{name:"submit"}).click();
await page.locator("//span[@class='text' and contains(text(),'Check Box')]").click();
const checkbutn=await page.locator(".rc-tree-checkbox");
checkbutn.check();
await expect(checkbutn).toBeChecked();
await page.locator("//span[@class='text' and contains(text(),'Web Tables')]").click();


const text=await page.locator("//td[contains(text(),'Cierra')]/following-sibling::td[contains(text(),'Insurance')]").textContent();
console.log(text);

if (text.match('Insurance'))
{
    await page.locator("//*[@class='action-buttons']/child::span[@class='mr-2' and  @id='edit-record-1']").click();
    await page.locator("#firstName").clear();
    await page.locator("#firstName").fill("INA MIKA DIKA");
    await page.locator("//div[@class='text-right col-md-2 col-sm-12']/child::button[@class='btn btn-primary']").click();

}

await page.locator("//span[@class='text' and contains(text(),'Buttons')]").click();
await page.locator("#doubleClickBtn").dblclick();
const btnText=await page.locator('#doubleClickMessage').textContent();
expect(btnText).toHaveText('You have done a double click');
console.log(btnText);













})