import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Category } from './category';

@Injectable()
export class CategoryService{

    private categoryURL = 'app/categorys'
    private headers = new Headers({'Content-Type':'application/json'});

    constructor(private http:Http){}

    private handleError(error:any): Promise<any>{
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getCategorys(): Promise<Category[]> {
        return this.http.get(this.categoryURL).toPromise().
            then(response => response.json().data as Category[]).
            catch(this.handleError);
    }

    getCategory(id: number): Promise<Category> {
        return this.getCategorys().then(categorys => categorys.find(category => category.id === id ));
    }

    update(category: Category):Promise<Category> {
        const url = `${this.categoryURL}/${category.id}`;
        return this.http
        .put(url, JSON.stringify(category), {headers: this.headers})
        .toPromise()
        .then(() => category)
        .catch(this.handleError);
    }

    create(name: string): Promise<Category> {
        return this.http
        .post(this.categoryURL, JSON.stringify({name: name}), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data)
        .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        let url = `${this.categoryURL}/${id}`;
        return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
    }

}