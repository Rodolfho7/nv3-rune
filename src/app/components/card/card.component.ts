import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnChanges {

  @Input() titulo: string = '';
  @Input() skill: string | null = '';

  skillClasses = {};

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('change');
    if (changes.skill) {
      this.skillClasses = {
        'text-green-800': this.skill === 'farming' || this.skill === 'fletching',
        'bg-green-300': this.skill === 'farming' || this.skill === 'fletching',
        'text-gray-800': this.skill === 'mining' || this.skill === 'runecrafting',
        'bg-gray-300': this.skill === 'mining' || this.skill === 'runecrafting',
        'text-blue-800': this.skill === 'fishing' || this.skill === 'divination',
        'bg-blue-300': this.skill === 'fishing' || this.skill === 'divination',
        'text-yellow-900': this.skill === 'woodcutting' || this.skill === 'firemaking',
        'bg-yellow-500': this.skill === 'woodcutting' || this.skill === 'firemaking',
        'text-indigo-800': this.skill === 'agility',
        'bg-indigo-300': this.skill === 'agility',
        'text-yellow-800': this.skill === 'archaeology' || this.skill === 'invention',
        'bg-yellow-400': this.skill === 'archaeology' || this.skill === 'invention',
        'text-yellow-700': this.skill === 'construction' || this.skill === 'crafting' || this.skill === 'dungeoneering',
        'bg-yellow-300': this.skill === 'construction' || this.skill === 'crafting' || this.skill === 'dungeoneering',
        'text-pink-700': this.skill === 'cooking',
        'bg-pink-300': this.skill === 'cooking',
        'text-green-900': this.skill === 'herblore',
        'bg-green-400': this.skill === 'herblore',
        'text-yellow-400': this.skill === 'hunter',
        'bg-yellow-700': this.skill === 'hunter',
        'text-gray-300': this.skill === 'slayer',
        'bg-gray-600': this.skill === 'slayer',
        'text-yellow-300': this.skill === 'smithing',
        'bg-yellow-800': this.skill === 'smithing',
        'text-pink-300': this.skill === 'thieving',
        'bg-pink-800': this.skill === 'thieving'
      }
    }
  }
}
