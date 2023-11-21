import { $ } from '@wdio/globals'
import Page from './page.js';


class RestaurantVouchersPage extends Page {
    /* page elements */

    get locationInput () {
        return $('[data-qa="el:locationDropdown enabled:true"]');
    }

    get findRestaurantsButton () {
        return $('[data-qa="el:findRestaurantsVoucherButton"]');
    }

    get expiredInfoBanner () {
        return $('[data-qa="el:expiredInfoBanner"]');
    }

    get noSearchResultsHeading () {
        return $('[data-qa="el:noSearchResultsHeading"]');
    }

    /* page methods */
    
    open () {
        return super.open('/restaurant-vouchers.html');
    }

    async searchRestaurantOffer(location) {
      await this.locationInput.waitForDisplayed();
      await this.locationInput.setValue(location);
      await this.findRestaurantsButton.click();
    }

}

export default new RestaurantVouchersPage();