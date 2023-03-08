import { Component, OnInit } from '@angular/core';
import { ingredients } from '../shared/ingredient.modal';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: ingredients[]= [
    new ingredients("Apples",5),
    new ingredients("Apples",5),
    new ingredients("Apples",5)
  ];

  constructor() {}

  ngOnInit(): void {}
  onIngredientAdded(ingredient:ingredients){
    this.ingredients.push(ingredient)
  }
}
