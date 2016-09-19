import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { CategorySearchService } from './category-search.service';
import { Category } from './category';

@Component({
  selector: 'category-search',
  templateUrl: 'app/category/category-search.component.html',
  styleUrls:  ['app/category/category-search.component.css'],
  providers: [CategorySearchService]
})

export class CategorySearchComponent implements OnInit {
   categorys: Observable<Category[]>;
   private searchTerms = new Subject<string>();
  
   constructor(
       private categorySearchService: CategorySearchService,
       private router: Router) {}
  
    // Push a search term into the observable stream.
    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.categorys = this.searchTerms
        .debounceTime(10)        // wait for 10ms pause in events
        .distinctUntilChanged()   // ignore if next search term is same as previous
        .switchMap(term => term   // switch to new observable each time
            // return the http search observable
            ? this.categorySearchService.search(term)
            // or the observable of empty heroes if no search term
            : Observable.of<Category[]>([]))
        .catch(error => {
            // TODO: real error handling
            console.log(error);
            return Observable.of<Category[]>([]);
        });
    }
    gotoDetail(category: Category): void {
        let link = ['/detail', category.id];
        this.router.navigate(link);
    }
}
