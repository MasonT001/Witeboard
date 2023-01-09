import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contest } from '../shared/contest.model';
import { ContestService } from './contest.service';

@Component({
  selector: 'app-contests-list',
  templateUrl: './contests-list.component.html',
  styleUrls: ['./contests-list.component.css']
})
export class ContestsListComponent implements OnInit {

  contests: Contest[] = []

  constructor(private route: ActivatedRoute, private contestService: ContestService) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: any) => {
      const category = params.category

      if (params.category) {
        this.contests = this.contestService.getContests().filter((contests) => {
          return contests.category === category
        })
      } else {
        // if params.cateogory is undefined, then set this.contests to all the contests 
        console.log("params category is undefined!")
        this.contests = this.contestService.getContests()
      }

      // Otherwise, grab all the contests by that category

      console.log(params)
    })

  }

}
