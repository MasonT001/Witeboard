import { Component, OnInit } from '@angular/core';
import { Contest } from '../shared/contest.model';

@Component({
  selector: 'app-contests-list',
  templateUrl: './contests-list.component.html',
  styleUrls: ['./contests-list.component.css']
})
export class ContestsListComponent implements OnInit {

  contests: Contest[] = [
    new Contest("Family Market", "Grocery Stores", 10, 0, 1985),
    new Contest("Family Market", "Grocery Stores", 10, 0, 1985),
    new Contest("Family Market", "Grocery Stores", 10, 0, 1985),
    new Contest("Family Market", "Grocery Stores", 10, 0, 1985),
    new Contest("Family Market", "Grocery Stores", 10, 0, 1985),
    new Contest("Family Market", "Grocery Stores", 10, 0, 1985),
    new Contest("Family Market", "Grocery Stores", 10, 0, 1985),
    new Contest("Family Market", "Grocery Stores", 10, 0, 1985),
    new Contest("Family Market", "Grocery Stores", 10, 0, 1985),

  ]

  // users: {
  //   username: string;
  //   name: string;
  // }[] = [{
  //   username: "John123",
  //   name: "John"
  // }]
  constructor() { }

  ngOnInit(): void {
  }

}
