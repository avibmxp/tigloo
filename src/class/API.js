const BASE_URL = "https://jsonplaceholder.typicode.com";
export default class API {
  constructor(type, limit = null) {
    this.type = type
    this.limit = limit;
  }

  getUrl() {
    if(this.limit) return `${BASE_URL}/${this.type}?_limit=${this.limit}`
    else return `${BASE_URL}/${this.type}`
  }
}
