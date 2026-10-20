import {test,expect} from '@playwright/test';


test.beforeEach(async({page})=>{
await page.goto('https://www.sreenidhirajakrishnan.com/practice#section-1');



});
module.exports={test,expect};