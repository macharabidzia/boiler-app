import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class LoadingService {
  private isDefaultBehavior = true;

  private loading$ = new BehaviorSubject<number>(0);

  public get loading(): Observable<boolean> {
    return this.loading$.pipe(map(x => this.isDefaultBehavior && x > 0));
  }

  public start() {
    this.loading$.next(this.loading$.value + 1);
  }

  public stop() {
    setTimeout(() => {
      this.loading$.next(this.loading$.value - 1);
    }, 300);
  }

  public fullStop() {
    this.loading$.next(0);
  }

  public resumeDefaultBehavior() {
    this.isDefaultBehavior = true;
  }

  public stopDefaultBehavior() {
    this.isDefaultBehavior = false;
  }
}