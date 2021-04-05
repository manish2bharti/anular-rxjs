import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  dataArr = [
    {id:1, name: 'Manish', gender: 'Male'},
    {id:2, name: 'Shikha', gender: 'Female'},
    {id:3, name: 'Aavya', gender: 'Female'},
    {id:4, name: 'Amit', gender: 'Male'},
    {id:5, name: 'Deepa', gender: 'Female'},
    {id:6, name: 'Pratik', gender: 'Male'},
  ];
  data;
  data2;
  data3;

  constructor() { }

  ngOnInit() {

    const source = from(this.dataArr);

    //Ex 1: Filter by length
    source
    .pipe(
      filter(member => member.name.length > 5),
      toArray())
    .subscribe(res => {
      this.data = res;
    });

    //Ex 2: Filter by Gender
    source
    .pipe(
      filter(member => member.gender ==  'Female'),
      toArray())
    .subscribe(res => {
      this.data2 = res;
    });

    //Ex 3: Filter by nth item
    source
    .pipe(
      filter(member => member.id <=  4),
      toArray())
    .subscribe(res => {
      this.data3 = res;
    });
  }

}
