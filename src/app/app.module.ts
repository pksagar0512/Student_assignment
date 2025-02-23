import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule], // ✅ No declarations needed
  providers: [],
})
export class AppModule {}

// ✅ Bootstrap the standalone component
bootstrapApplication(AppComponent);
