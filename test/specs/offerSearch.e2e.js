import { expect } from '@wdio/globals'
import restaurantVouchersPage from '../pageobjects/restaurantVouchers.page.js'

describe('Restaurant offers search', () => {
    it('should show no results banner', async () => {
        await restaurantVouchersPage.open();
        await restaurantVouchersPage.searchRestaurantOffer('London');
        await expect(await restaurantVouchersPage.expiredInfoBanner.waitForDisplayed()).toBe(true);
        await expect(await restaurantVouchersPage.noSearchResultsHeading.waitForDisplayed()).toBe(true);
    });

// deliberately failing test cases
    it('should not show "no results banner"', async () => {
        await restaurantVouchersPage.open();
        await restaurantVouchersPage.searchRestaurantOffer('London');
        await expect(await restaurantVouchersPage.expiredInfoBanner.waitForDisplayed()).toBe(false);
        // Introduce a pause with a promise to allow time for the screenshot to be taken
        await new Promise(resolve => setTimeout(resolve, 5000));
    });

})