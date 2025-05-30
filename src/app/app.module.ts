import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestService } from '../core/services/test.service';
import { CommonModule } from '@angular/common';

// Import other components/modules as needed

@NgModule({
  declarations: [
    
    // add other components here
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [TestService, HttpClient],
})
export class AppModule { }
