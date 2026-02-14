import { Component, OnInit } from '@angular/core';
import { Shared } from '../../service/shared';

@Component({
  selector: 'app-replay-subject',
  standalone: false,
  templateUrl: './replay-subject.html',
  styleUrl: './replay-subject.css',
})
export class ReplaySubject implements OnInit{
  constructor(private sharedservice:Shared){}

  ngOnInit(): void {
    this.sharedservice.getData().subscribe((_resp:any)=> console.log(_resp));
  }
}
