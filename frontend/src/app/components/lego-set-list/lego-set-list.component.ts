import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegoSetService } from '../../services/lego-set.service';
import { LegoSet } from '../../models/lego-set.model';

@Component({
  selector: 'app-lego-set-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="list-container">
      <h2>My Lego Sets</h2>
      <div class="lego-sets">
        <div *ngFor="let set of legoSets$ | async" class="lego-set-item">
          <div class="set-info">
            <h3>{{ set.name }}</h3>
            <p>Set Number: {{ set.setNumber }}</p>
          </div>
          <button (click)="removeSet(set.id!)" class="remove-button">Remove</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .list-container {
      max-width: 800px;
      margin: 20px auto;
      padding: 20px;
    }
    .lego-sets {
      display: grid;
      gap: 20px;
    }
    .lego-set-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      border: 1px solid #ddd;
      border-radius: 4px;
      background-color: #fff;
    }
    .set-info h3 {
      margin: 0 0 5px 0;
    }
    .set-info p {
      margin: 0;
      color: #666;
    }
    .remove-button {
      background-color: #ff4444;
      color: white;
      border: none;
      padding: 8px 12px;
      border-radius: 4px;
      cursor: pointer;
    }
    .remove-button:hover {
      background-color: #cc0000;
    }
  `]
})
export class LegoSetListComponent {
  legoSets$ = this.legoSetService.getLegoSets();

  constructor(private legoSetService: LegoSetService) {}

  removeSet(id: number) {
    this.legoSetService.removeLegoSet(id);
  }
}