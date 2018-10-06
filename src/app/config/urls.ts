export class Urls {
  private urlMap = {
    GET_CONIFG: '',
    GET_USER_INFO: '',
    GET_PRODUCT_INFO: '',
    GET_RENTAL_INFO: ''
  };

  constructor() {
    this.urlMap.GET_CONIFG = 'assets/config/main.config.json';
  }

  getMap() {
    return this.urlMap;
  }

  populateMap(urlObj: any) {
    console.log('Before', this.urlMap);
    this.urlMap = Object.assign(this.urlMap, urlObj);
    console.log('After', this.urlMap);
  }
}
