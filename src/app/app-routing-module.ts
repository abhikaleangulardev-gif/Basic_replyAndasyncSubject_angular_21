import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReplaySubject } from './component/replay-subject/replay-subject';
import { AsyncSubject } from './component/async-subject/async-subject';

const routes: Routes = [
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'replaysubject',component:ReplaySubject},
  {path:'ayncsubject',component:AsyncSubject},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
