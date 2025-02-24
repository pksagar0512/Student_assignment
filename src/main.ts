import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent) // ✅ Bootstraps only AppComponent
  .catch(err => console.error(err));
