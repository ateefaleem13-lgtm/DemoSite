import{DropdownTypes} from '../pages/Dropdowns';
const { test, expect } = require('../fixture/Baseclass');



test('dropdownHandlling',async({page})=>
{
const dp=new DropdownTypes(page);
await page.waitForTimeout(3000);
await dp.StandarDropDown();
await page.waitForTimeout(3000);
await dp.multipleSelectDropdown();
await page.waitForTimeout(3000);
await dp.ChoiceOptions();
await page.waitForTimeout(3000);
await dp.DyanmicDropdown();
await page.waitForTimeout(3000);


});