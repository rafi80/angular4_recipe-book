import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Hotdog', 
               'A recipe for the most beutiful hotdog You\'ve ever eaten',
               'http://8exll2rwl8l1f2ayejq2l9yh.wpengine.netdna-cdn.com/wp-content/uploads/2014/10/hotdog_mustard-main.jpg')  
  ];

  constructor() { }

  ngOnInit() {
  }

}
