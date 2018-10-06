import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search/search.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  on: boolean = false;
  items: Array<string>;
  filterItems: Array<string>;
  terms$ = new Subject<string>();
  searchTerm: string = '';
  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.searchService
      .search(this.terms$)
      .subscribe(
        (results: Array<string>) =>
          (this.items = this.getFilter(this.searchTerm, results))
      );
  }

  private getFilter(term: string, res: Array<string>) {
    this.filterItems = [];
    res.filter((value: any) => {
      if (value.name.toLowerCase().indexOf(term.toLowerCase()) !== -1) {
        this.filterItems.push(value);
      }
    });

    return this.filterItems;
  }

  showMessage(value: any) {
    console.log(value);
  }
}
