import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:User = new User("FamilyMarketEnjoyer", 'familymarketlover29@gmail.com', 1985, 'applepielover1989!')

  constructor() { }

  ngOnInit(): void {
  }

}
