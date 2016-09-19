import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Category } from './category';

@Injectable()
export class CategorySearchService {
  constructor(private http: Http) {}
  search(term: string): Observable<Category[]> {
    return this.http
               .get(`app/categorys/?name=${term}`)
               .map((r: Response) => r.json().data as Category[]);
  }
}
