import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let recipes = [
      {id: 1, name: 'Warabi Mochi'},
      {id: 2, name: 'Mushi-pan'},
      {id: 3, name: 'Kabocha Squash Pie'},
      {id: 4, name: 'Cherry Blossom Milk Pudding'},
      {id: 5, name: 'Ogura Toast'},
      {id: 6, name: 'Onsen Tamago'},
      {id: 7, name: 'Chirashi Sushi'},
      {id: 8, name: 'Yakisoba'},
      {id: 9, name: 'Miso Katsu'},
      {id: 10, name: 'Mapo Tofu'}
    ];
    return {recipes};
  }
}
