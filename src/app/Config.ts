export class Config {
  public static url = 'https://admin.epismart-arab.com';
  // public static url = 'http://localhost:52265';
  public static api = `${Config.url}/api`;

  public static websites = `${Config.api}/Offers/GetWebsiteProduct`;
  public static requestsAddEdit = `${Config.api}/Requests`;
  public static GetGovernmentsOfCountry = `${Config.api}/Requests/GetGovernmentsOfCountry/`;


}
