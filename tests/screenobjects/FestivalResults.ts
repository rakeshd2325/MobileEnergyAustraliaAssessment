import { IOS_SELECTORS } from '../selectors/ios';
import { ANDROID_SELECTORS } from '../selectors/android';
import { expect as chaiExpect } from 'chai';

class FestivalResults{
  //method to check festival results page
    async VerifyFestivalResultsPageIsDisplayed() {
      if (browser.isIOS) {
        await $(IOS_SELECTORS.FESTIVAL_RESULTS.SCREEN).isDisplayed();
      }
      else{
        await $(ANDROID_SELECTORS.FESTIVAL_RESULTS.SCREEN).isDisplayed();
      }
    }
      //method to verify music festival names
    async VerifyFestivalName(festivalname:string) {
        if (browser.isIOS) {
            var selector = IOS_SELECTORS.FESTIVAL_RESULTS.FESTIVAL_NAME_1+festivalname+IOS_SELECTORS.FESTIVAL_RESULTS.FESTIVAL_NAME_2;
            const checkSelector= await (await $(selector)).isDisplayed();
            console.log("checkSelector:", checkSelector)
            chaiExpect(checkSelector).eql(true)
          } else{
            var selector = ANDROID_SELECTORS.FESTIVAL_RESULTS.FESTIVAL_NAME_1+festivalname+ANDROID_SELECTORS.FESTIVAL_RESULTS.FESTIVAL_NAME_2;
            const checkSelector= await (await $(selector)).isDisplayed();
            console.log("checkSelector:", checkSelector)
            chaiExpect(checkSelector).eql(true)
            }   
    }
    //method to verify band names
    async VerifyBandName(bandname: string) {
        if (browser.isIOS) {
            var selector = IOS_SELECTORS.FESTIVAL_RESULTS.BAND_NAME_1+bandname+IOS_SELECTORS.FESTIVAL_RESULTS.BAND_NAME_2;
            const checkSelector= await (await $(selector)).isDisplayed();
            console.log("checkSelector:", checkSelector)
            chaiExpect(checkSelector).eql(true)
          } else{
            var selector = ANDROID_SELECTORS.FESTIVAL_RESULTS.BAND_NAME_1+bandname+ANDROID_SELECTORS.FESTIVAL_RESULTS.BAND_NAME_2;
            const checkSelector= await (await $(selector)).isDisplayed();
            console.log("checkSelector:", checkSelector)
            chaiExpect(checkSelector).eql(true)
            }   
          }
    }
    export default new FestivalResults();