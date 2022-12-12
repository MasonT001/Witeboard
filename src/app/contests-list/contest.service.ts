import { Injectable } from '@angular/core';
import { Contest } from '../shared/contest.model';

@Injectable({
  providedIn: 'root'
})
export class ContestService {

  contests: Contest[] = [new Contest('Favorite Christmas Movie', 'Christmas', 892, 0, 1969, 'This is a contest for Christmas fans'), new Contest('Favorite Halloween Movie', 'Halloween', 903, 1, 1969, ' Contest for Halloween fans'), new Contest('Favorite Tennessee Titans Player', 'Sports', 10847, 2, 1969, 'Contest for Riley Conway'), new Contest('Favorite Easter Movie', 'Easter', 90761, 3, 1969, 'Contest for if you love the easter bunny')]


  getContests() {
    // returns a copy of the array
    return this.contests.slice() 
   }

  constructor() { }
}
