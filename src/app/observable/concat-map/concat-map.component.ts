import { DesignUtilityService } from './../../design-utility.service';
import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatAll, concatMap, delay, map } from 'rxjs/operators';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css']
})
export class ConcatMapComponent implements OnInit {

  constructor(private _du : DesignUtilityService) { }

  getData(data){
    return of(data + ' video uploded').pipe(delay(2000))
  }

  ngOnInit() {

    const source = from(['Tech', 'Comdey', 'News']);

    //Ex - 01 | Concat
    source
    .pipe(
      map(res => this.getData(res) )
    )
    .subscribe(res => {
      this._du.print(res, 'elcontainer')
    })


   //Ex-02 | Map + ConcatAll
   source
   .pipe(
     map(res => this.getData(res)),
     concatAll()
   )
   .subscribe(res => {
    console.log(res);
    this._du.print(res, 'elcontainer2')
   })

    //Ex-03 | ConcatMap
    source
    .pipe(
      concatMap(res => this.getData(res))
    )
    .subscribe(res => {
     console.log(res);
     this._du.print(res, 'elcontainer3')
    })


  }

}
