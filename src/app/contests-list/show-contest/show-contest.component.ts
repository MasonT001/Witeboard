import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contest } from 'src/app/shared/contest.model';
import { ContestService } from '../contest.service';

@Component({
  selector: 'app-show-contest',
  templateUrl: './show-contest.component.html',
  styleUrls: ['./show-contest.component.css']
})
export class ShowContestComponent implements OnInit {
  
  contest = new Contest('','',0,0,0,'','')

  constructor(private route: ActivatedRoute, private contestService: ContestService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      const contestName = params.name
      
        this.contest = this.contestService.getContests().find((contest) => {
          return contest.name === contestName
        })
      
    })
  }


}
