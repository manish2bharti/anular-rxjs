import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit {

  constructor() { }

  users = [
    {name: 'manish', skills: 'angular', job: {
      title: 'frontend-developer',
      exp: '10 years'
    }},
    {name: 'amit', skills: 'ux', job: {
      title: 'BE-developer',
      exp: '4 years'
    }},
    {name: 'pratik', skills: 'js', job: {
      title: 'python-developer',
      exp: '6 years'
    }},
    {name: 'bharti', skills: 'html', job: {
      title: 'java-developer',
      exp: '8 years'
    }}
  ]

  data;
  data2;
  ngOnInit() {

    //Ex - 01
    from(this.users)
    .pipe(
      // map(data => data.name),
      pluck('name'),
      toArray()
    )
    .subscribe(res => {
      console.log(res)
      this.data = res;
    })


    //Ex - 02
    from(this.users)
    .pipe(
      // map(data => data.name),
      pluck('job','title'),
      toArray()
    )
    .subscribe(res => {
      console.log(res)
      this.data2 = res;
    })
  }

}
