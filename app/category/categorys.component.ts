import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryService } from './category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-categorys',
  templateUrl: 'app/category/categorys.component.html',
  styleUrls: ['app/category/categorys.component.css'],
  providers: [CategoryService]
})

export class CategorysComponent implements OnInit { 
  title = '카테고리 전체목록';
  categorys : Category[];
  selectedCategory: Category;

  constructor(private router: Router, private categoryService: CategoryService){}

  getCategorys(): void {
    this.categoryService.getCategorys().then(categorys => this.categorys = categorys);
  }

  ngOnInit():void {
    this.getCategorys();
  }

  onSelect(cateory: Category): void {
    this.selectedCategory = cateory;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedCategory.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.categoryService.create(name)
      .then(category => {
        this.categorys.push(category);
        this.selectedCategory = null;
      }); 
  }

  delete(category: Category): void {
  this.categoryService
      .delete(category.id)
      .then(() => {
        this.categorys = this.categorys.filter(h => h !== category);
        if (this.selectedCategory === category) { this.selectedCategory = null; }
      });
  }

}