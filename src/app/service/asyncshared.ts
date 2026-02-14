import { Injectable } from '@angular/core';
import { AsyncSubject } from 'rxjs';
import { AsapAction } from 'rxjs/internal/scheduler/AsapAction';

@Injectable({
  providedIn: 'root',
})
export class Asyncshared {
  myAsyncSub$: AsyncSubject<any> = new AsyncSubject();

  displayAsyncValue(){
    this.myAsyncSub$.next(1);
    this.myAsyncSub$.next(2);
    this.myAsyncSub$.next(3);
    this.myAsyncSub$.next(4);
    this.myAsyncSub$.next(5);
    this.myAsyncSub$.complete();

    return this.myAsyncSub$.asObservable();
  }
}
