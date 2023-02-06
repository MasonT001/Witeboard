import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/category.model';
import { Contest } from '../shared/contest.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [new Category('Halloween', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Jack-o%27-Lantern_2003-10-31.jpg/800px-Jack-o%27-Lantern_2003-10-31.jpg'), new Category('Christmas', 'https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY4OTA4MzI0ODc4NjkwMDAw/christmas-tree-gettyimages-1072744106.jpg'), new Category('Sports', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3043078.png&w=350&h=254'), new Category('Easter', 'https://hips.hearstapps.com/hmg-prod/images/easter-bunny-origins-1581358909.jpg')]

  contests: Contest[] = [new Contest('Favorite Christmas Movie', 'Christmas', 892, 0, 1969, "This is a contest for Christmas fans", ''), new Contest('Favorite Halloween Movie', 'Halloween', 903, 1, 1969, 'Contest for Halloween fans', ''), new Contest('Favorite Tennessee Titans Player', 'Sports', 10847, 2, 1969, 'Contest for Riley Conway', ''), new Contest('Favorite Easter Movie', 'Easter', 90761, 3, 1969, 'Contest for if you love the easter bunny!', '')]

  constructor() { }

  ngOnInit(): void {
  }

}
