import {MouseActions} from '../pages/MouseAction';
const { test, expect } = require('../fixture/Baseclass');

test('Mouse Action and validation', async ({ page }) => {
    const actions = new MouseActions(page);
    await actions.buttonActions();
});