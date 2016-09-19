import { Component, OnInit } from '@angular/core';
import { Category } from '../category/category';
import { CategoryService } from '../category/category.service';
import { Router } from '@angular/router';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html',
    styleUrls: ['app/dashboard/dashboard.css'],
    providers: [CategoryService]
})

export class DashboardComponent implements OnInit{ 
  categorys: Category[] = [];

  constructor(private router: Router, private categoryService: CategoryService){ }

  ngOnInit(): void {
    this.categoryService.getCategorys()
      .then(categorys => this.categorys = categorys.slice(1, 5));
  }

  gotoDetail(category: Category): void { 
      let link = ['/detail', category.id];
      this.router.navigate(link);
  }
}