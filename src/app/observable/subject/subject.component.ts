import { DesignUtilityService } from './../../design-utility.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit , OnDestroy{
  userName = 'Manish';
  constructor(private _designUtility: DesignUtilityService) {
    this._designUtility.username.subscribe(res => {
      this.userName = res;
    })
  }

  ngOnInit() {
    this._designUtility.exclusive.next(true)
  }

  ngOnDestroy() {
    this._designUtility.exclusive.next(false)
  }

}
