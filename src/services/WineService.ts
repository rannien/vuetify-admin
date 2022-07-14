export default class WineService {
  static async index() {
    return fetch('http://localhost/api/v1/wines').then((r) => r.json());
  }
}
