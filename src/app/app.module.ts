import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderModule } from './layout/header/header.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HeaderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
