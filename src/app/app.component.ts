import { Component } from '@angular/core';
import { User } from './components/my-form/my-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formValid = false;
  title = 'customFormControlDemo';
  user = new User({ Description: 'Emre', Name: 'Yıldırım', Title: 'yazılımcı' });
}
