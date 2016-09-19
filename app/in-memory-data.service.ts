import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let categorys = [
        { id: 1, name: '영화', code: 'movie' },
        { id: 2, name: 'TV다시보기', code: 'tvshow' },
        { id: 3, name: '앱', code: 'app' },
        { id: 4, name: '실시간방송', code: 'livetv' },
        { id: 5, name: '실시간프로그램', code: 'epg-program' },
        { id: 6, name: 'Youtube', code: 'youtube' },
        { id: 7, name: '웹바로가기', code: 'web' },
        { id: 8, name: '프리미엄', code: 'premium'},
        { id: 9, name: '뉴스', code:'news'},
    ]
    return {categorys};
  }
}
