import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CategoryService } from './category.service';
import { Category } from './category';

@Component({
    selector: 'category-detail',
    templateUrl:'app/category/category-detail.component.html',
    styleUrls: ['app/category/category-detail.component.css'],
    providers: [CategoryService]
})

export class CategoryDetailComponent implements OnInit{
    @Input()
    category: Category;

    constructor(
      private categoryService: CategoryService,
      private route: ActivatedRoute
    ){}

    ngOnInit(): void {
      this.route.params.forEach((params: Params) => {
        let id = +params['id'];
        this.categoryService.getCategory(id).then(category => this.category = category);
      });
    }

    goBack(): void {
      window.history.back();
    }

    save(): void {
      this.categoryService.update(this.category).then(this.goBack);
    }
}
