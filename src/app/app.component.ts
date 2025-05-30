import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestService } from '../core/services/test.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers: [TestService, HttpClient],
})
export class AppComponent implements OnInit {
  title = 'layer-clothing-ui';
  apiResponse: any;

  constructor(private readonly testServcie: TestService) {

  }

  ngOnInit(): void {
    this.testDynamicApi();
  }

  testDynamicApi() {
    this.testServcie.testApiInformation().subscribe({
      next: (data: any) => {
        this.apiResponse = data;
        console.log('Product fetched successfully', data);
      },
      error: (err: any) => {
        console.error('Error fetching product:', err);
      },
      complete: () => {
        console.log('Product fetch operation completed.');
      }
    });
  }
}
