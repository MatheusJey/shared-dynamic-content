import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderModule } from './layout/header/header.module';
import { NgModule } from '@angular/core';
import { OverviewModule } from './views/overview/overview.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HeaderModule, OverviewModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
