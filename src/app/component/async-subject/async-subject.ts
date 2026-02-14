import { Component, inject, OnInit } from '@angular/core';
import { Asyncshared } from '../../service/asyncshared';

@Component({
  selector: 'app-async-subject',
  standalone: false,
  templateUrl: './async-subject.html',
  styleUrl: './async-subject.css',
})
export class AsyncSubject implements OnInit {
  asyncsharedservice: Asyncshared = inject(Asyncshared);

  ngOnInit(): void {
    this.asyncsharedservice.displayAsyncValue().subscribe((_resp: any) => console.log(_resp));
  }
}
