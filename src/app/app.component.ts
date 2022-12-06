import { Component } from '@angular/core';
import { User } from './shared/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'witeboard';

  user = new User('Billy', 'billy@gmail.com', 69, 'monkeyMan09090!')
}
