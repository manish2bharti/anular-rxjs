import { DesignUtilityService } from './../../design-utility.service';
import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { delay, map, switchAll, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {

  constructor(private _du: DesignUtilityService) { }

  getData(data){
    return of(data + ' video uploaded').pipe(delay(1000))
  }

  ngOnInit(): void {
    const source = from(['Tech', 'Comdey', 'News']);

    //Ex-01 | Map

    source .pipe(
      map(data => this.getData(data))
    )
    // .subscribe(res => res.subscribe(res2 => {
    //   this._du.print(res2, 'elcontainer')
    // }))
    .subscribe(res => {
      console.log(res)
      this._du.print(res, 'elcontainer')
    })


   //Ex-02 | Map + SwitchAll
   source .pipe(
    map(data => this.getData(data)),
    switchAll()
  )
  .subscribe(res => {
    this._du.print(res, 'elcontainer2')
  })


   //Ex-03 | SwitchMap
   source .pipe(
    switchMap(data => this.getData(data))
  )
  .subscribe(res => {
    this._du.print(res, 'elcontainer3')
  })

  }

}
