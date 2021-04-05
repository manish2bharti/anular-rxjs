import { DesignUtilityService } from './../../design-utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
  userName: string = 'Manish';

  constructor(private _designUtility: DesignUtilityService) {
    this._designUtility.username.subscribe(res => {
      this.userName = res;
    })
   }

  ngOnInit() {
  }

  onChange(uname){
    console.log(uname.value)
    this._designUtility.username.next(uname.value)
  }
}
