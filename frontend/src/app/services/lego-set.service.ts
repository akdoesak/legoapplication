import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { LegoSet } from '../models/lego-set.model';

@Injectable({
  providedIn: 'root'
})
export class LegoSetService {
  private apiUrl = 'http://localhost:8080/api/legosets';
  private legoSets = new BehaviorSubject<LegoSet[]>([]);

  constructor(private http: HttpClient) {
    this.loadLegoSets();
  }

  private loadLegoSets(): void {
    this.http.get<LegoSet[]>(this.apiUrl)
      .subscribe(sets => this.legoSets.next(sets));
  }

  getLegoSets(): Observable<LegoSet[]> {
    return this.legoSets.asObservable();
  }

  addLegoSet(legoSet: LegoSet): void {
    this.http.post<LegoSet>(this.apiUrl, legoSet)
      .pipe(
        tap(newSet => {
          const currentSets = this.legoSets.getValue();
          this.legoSets.next([...currentSets, newSet]);
        })
      )
      .subscribe();
  }

  removeLegoSet(id: number): void {
    this.http.delete(`${this.apiUrl}/${id}`)
      .pipe(
        tap(() => {
          const currentSets = this.legoSets.getValue();
          this.legoSets.next(currentSets.filter(set => set.id !== id));
        })
      )
      .subscribe();
  }
}