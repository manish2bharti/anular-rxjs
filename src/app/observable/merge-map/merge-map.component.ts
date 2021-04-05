import { DesignUtilityService } from './../../design-utility.service';
import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, mergeAll, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent implements OnInit {

  constructor(private _du: DesignUtilityService) { }

  getData(data){
    return of(data + ' video uploaded')
  }
  ngOnInit() {
    const source = from(['Tech', 'Comdey', 'News']);

   //Ex-01 | Map
   source
   .pipe(
     map(res => this.getData(res))
   )
   .subscribe(res => {
    // console.log(res);
    this._du.print(res, 'elcontainer')
    // res.subscribe(res2 => {
    //   console.log(res2)
    //   this._du.print(res2, 'elcontainer')
    // })
   })

   //Ex-02 | Map + MergeAll
   source
   .pipe(
     map(res => this.getData(res)),
     mergeAll()
   )
   .subscribe(res => {
    console.log(res);
    this._du.print(res, 'elcontainer2')
   })

   //Ex-03 | MergeMap
   source
   .pipe(
     mergeMap(res => this.getData(res))
   )
   .subscribe(res => {
    console.log(res);
    this._du.print(res, 'elcontainer3')
   })

  }

 }

