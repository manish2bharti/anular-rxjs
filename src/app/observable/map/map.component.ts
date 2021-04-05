import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DesignUtilityService } from './../../design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  //subscription
  sub1: Subscription;
  sub2: Subscription;
  sub3: Subscription;

  //Messages
  msg1;
  msg2;
  msg3;

  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit() {
    const broadcastVideo = interval(1000);

    //Ex 01
    this.sub1 = broadcastVideo
    .pipe(
      map(data => 'video' + data)
    )
    .subscribe(res => {
      // console.log(res)
      this.msg1 = res;
    })

    setTimeout(() => {
      this.sub1.unsubscribe();
    },5000)


    // Ex 02
    this.sub2 = broadcastVideo
    .pipe(
      map(data => data * 10)
    )
    .subscribe(res => {
      // console.log(res)
      this.msg2 = res;
    })

    setTimeout(() => {
      this.sub2.unsubscribe();
    },5000)


    // Ex 03
    const members = from([
      {id: 1, name: 'Manish'},
      {id: 2, name: 'Amit'},
      {id: 3, name: 'Pratik'},
      {id: 4, name: 'Bharti'},
      {id: 5, name: 'Shikha'}
    ]);

    members
    .pipe(
      map(data => data.name)
    )
    .subscribe(res => {
      // this.msg3 = res;
      this._designUtility.print(res, 'elContainer')
    })
  }

}
