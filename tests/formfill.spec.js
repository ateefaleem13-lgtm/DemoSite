import {BasicElements} from '../pages/BasicElementsoperation';
import{test,expect} from '@playwright/test';


test('form filling',async({page})=>{
    await page.goto("#section-1");
    await page.waitForLoadState("networkidle");
    const form=new BasicElements(page);
    await form.formfill("ai87987","fhreg@213","gfsghfa22@gmail.com","8208817166");





});