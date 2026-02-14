import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Shared {
    myReplaySub$ = new ReplaySubject(4);

    getData(){
      this.myReplaySub$.next(1);
      this.myReplaySub$.next(2);
      this.myReplaySub$.next(3);
      this.myReplaySub$.next(4);
      this.myReplaySub$.next(5);

      return this.myReplaySub$.asObservable();
    }

}
