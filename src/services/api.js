import { get, post } from "./rest";

export default class API {
  // getCategories
  static getCategories() {
    const url = `${process.env.REACT_APP_API_ENDPOINT}/api/categories`;
    return get({ url });
  }

  static getTimerData(key, params) {
    const url = `${process.env.REACT_APP_API_ENDPOINT}/api/data`;
    return get({ url, params: JSON.parse(params) });
  }

  static getTimerTypes() {
    const url = `${process.env.REACT_APP_API_ENDPOINT}/api/timer_types`;
    return get({ url });
  }

  static getMoonIcons() {
    const url = `${process.env.REACT_APP_API_ENDPOINT}/api/moon_icons`;
    return get({ url });
  }

  static postNewTimer({ data }) {
    const url = `${process.env.REACT_APP_API_ENDPOINT}/api/submit`;
    return post({ url, data });
  }
}
