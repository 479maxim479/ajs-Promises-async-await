import GameSavingLoader from '../gameSavingLoader';
import GameSaving from '../gameSaving';

const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

const hitman = new GameSaving(JSON.parse(data));

test('тест', (done) => {
  GameSavingLoader.load().then((result) => {
    expect(result).toEqual(hitman);
  }).catch((err) => err);
  done();
});
