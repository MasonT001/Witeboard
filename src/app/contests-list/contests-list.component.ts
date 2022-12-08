import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contest } from '../shared/contest.model';

@Component({
  selector: 'app-contests-list',
  templateUrl: './contests-list.component.html',
  styleUrls: ['./contests-list.component.css']
})
export class ContestsListComponent implements OnInit {

  contests: Contest[] = [new Contest('Favorite Christmas Movie', 'Christmas', 892, 0, 1969), new Contest('Favorite Halloween Movie', 'halloween', 903, 1, 1969), new Contest('Favorite Tennessee Titans Player', 'Sports', 10847, 2, 1969,), new Contest('Favorite Easter Movie', 'Easter', 90761, 3, 1969)]


  // users: {
  //   username: string;
  //   name: string;
  // }[] = [{
  //   username: "John123",
  //   name: "John"
  // }]
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:any) => {
      const category = params.category
      this.contests = this.contests.filter((contests)=> {
        return contests.category === category
      })
      console.log(params)
    })
  }

}
