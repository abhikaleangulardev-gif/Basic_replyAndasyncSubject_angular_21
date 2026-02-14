import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ReplaySubject } from './component/replay-subject/replay-subject';
import { HeaderPage } from './header/header-page/header-page';
import { provideHttpClient } from '@angular/common/http';
import { AsyncSubject } from './component/async-subject/async-subject';

@NgModule({
  declarations: [
    App,
    ReplaySubject,
    HeaderPage,
    AsyncSubject
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
