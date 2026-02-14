import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReplaySubject } from './component/replay-subject/replay-subject';

const routes: Routes = [
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'replaysubject',component:ReplaySubject}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
