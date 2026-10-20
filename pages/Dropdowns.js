import{page,expect}from '@playwright/test';
exports.DropdownTypes= 
class DropdownTypes{
    /**
     * @param {import('@playwright/test').Page}page
     */

    constructor(page)
    {
        this.page=page;
        this.options=page.locator('#standard-select');
        this.multipleOptions=page.locator('#multi-select');
        this.choice=page.locator('#custom-dropdown-toggle');
        this.selectValue=page.locator('.practice-dropdown-option');
        this.dynamicDropdown=page.locator('#dynamic-select');
    }

    async StandarDropDown()
    {
        await this.options.selectOption('Red');
        const values=await this.options.allTextContents();
        console.log(values);
        for(let value of values)
        {
            if(value==='Green')
            {
                await values.selectOption(value);
            }
        }
    }

    async multipleSelectDropdown()
    {
          await this.multipleOptions.selectOption([
    { label: 'Python' },
    { label: 'JavaScript' }
  ]);
    }

    async ChoiceOptions()
    {
        await this.choice.click();
         const opt=this.selectValue
         const count=await opt.count()

         for(let i=0;i<count;i++)
         {
            const selected_opt=opt.nth(i);
            const text=await selected_opt.textContent();
            console.log(text==='Gamma')
            {
                await selected_opt.click();
                break;
            }
         }
        
    }

    async DyanmicDropdown()
    {
         await this.dynamicDropdown.selectOption('Playwright');
    }
}