import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:User = new User("John123", 'john123@gmail.com', 27)

  constructor() { }

  ngOnInit(): void {
  }

}
