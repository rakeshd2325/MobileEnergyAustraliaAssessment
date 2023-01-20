import { Given, When, Then } from '@cucumber/cucumber';
import Launch from '../screenobjects/Launch';
import FestivalResults from '../screenobjects/FestivalResults';



Given('the user launches the energyaustralia sample mobile application', async () => {
    await Launch.LaunchApp();
  });

When('the festival results page is displayed', async () => {
    await FestivalResults.VerifyFestivalResultsPageIsDisplayed();
  });

Then(/^the user should see a list of (.*) with (.*)$/, async(festival_names:string, band_names:string) => {
    await FestivalResults.VerifyFestivalName(festival_names);
    await FestivalResults.VerifyBandName(band_names);
  });
