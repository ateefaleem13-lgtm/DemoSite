import {expect} from '@playwright/test';
exports.MouseActions=
class MouseActions
{
 /** 
        * @param {import('@playwright/test').Page}page
        */
    constructor(page)
    {
       
        this.page=page;
        this.single_click=page.locator("//*[contains(text(),'Single Click')]");
        this.single_click_conf=page.locator("//*[contains(text(),'Single Click!')]");
        
        this.double_click=page.locator('#double-click-btn')
        this.double_click_conf=page.locator("//*[contains(text(),'Double clicked!)]");
        this.right_click=page.locator('#right-click-btn');
        this.right_click_conf=page.getByText("Right click captured (context menu blocked)");
        this.timer=page.locator('#start-delay-btn');
        this.butn_enable=page.locator('#delayed-enable-btn');


    }
  async buttonActions()
  {
    await this.single_click.click();
    
   
    await this.double_click.dblclick();
    
    await this.right_click.click({button:'right'});
    
    await this.timer.click();
    const timer=await this.timer
    
    await expect(timer).toBeVisible();
    await this.butn_enable.isEnabled();




  }


}
