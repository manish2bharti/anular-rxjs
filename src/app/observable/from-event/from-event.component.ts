import { DesignUtilityService } from './../../design-utility.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit {

  constructor(private _designUtility: DesignUtilityService) { }
  @ViewChild('addBtn') addBtn: ElementRef;
  ngOnInit() {
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(res => {
      var str = 'video' + count++;
      this._designUtility.print(str, 'elContainer');
      this._designUtility.print(str, 'elContainer2');
    });
  }

}
