import { Component, EventEmitter, Input,Output, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.modal';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css'],
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
  onSelected(){
    this.recipeSelected.emit();
  }
}
