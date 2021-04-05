import { Component, OnInit } from '@angular/core';
import { from , interval, of, Subscription } from 'rxjs';
import { take, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {

  users = [
    {'name': 'Manish', 'skill': 'Angular'},
    {'name': 'Bharti', 'skill': 'HTML'},
    {'name': 'Amit', 'skill': 'CSS'},
    {'name': 'Pratik', 'skill': 'JS'}
  ]
  constructor() { }

  sourceSub: Subscription;

  ngOnInit() {

    // Ex - 1
    const source = interval(1000);
    this.sourceSub =  source.pipe(
      take(5),
      toArray()
    )
    .subscribe(res => {
      console.log(res);
    })

    //Ex - 2
    const source2 = from(this.users);
    source2
    .pipe(toArray())
    .subscribe(res => {
      console.log(res)
    })


    //Ex - 3
    const source3 = of('Manish', 'Bharti', 'Angular')
    source3
    .pipe(toArray())
    .subscribe(res => {
      console.log(res)
    })
  }

}
