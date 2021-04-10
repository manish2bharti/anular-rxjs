import { concatMap, debounceTime, distinctUntilChanged, filter, pluck, switchMap } from 'rxjs/operators';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchService } from 'src/app/search.service';
import { Search } from 'src/app/appInterface/search.interface';

@Component({
  selector: 'app-switch-map-with-service',
  templateUrl: './switch-map-with-service.component.html',
  styleUrls: ['./switch-map-with-service.component.css']
})
export class SwitchMapWithServiceComponent implements AfterViewInit {

  @ViewChild('searchForm') searchForm: NgForm;

  searchResults: Search
  searchResultsCount;

  constructor(private _searchService: SearchService) { }

  ngAfterViewInit(): void {

    // this._searchService.getSearches('1').subscribe(res => {
    //   console.log(res)
    // })

    const formValue = this.searchForm.valueChanges;
    formValue
    .pipe(
      filter(() => this.searchForm.valid),
      pluck('searchTerm'),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(data => this._searchService.getSearches(data))
    )
    .subscribe(res => {
      console.log(res);
      this.searchResults = res;
      this.searchResultsCount = Object.keys(res).length;
    })
  }

}
