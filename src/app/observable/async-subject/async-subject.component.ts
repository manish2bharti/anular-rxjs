import { Subscription } from 'rxjs';
import { DesignUtilityService } from './../../design-utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.css']
})
export class AsyncSubjectComponent implements OnInit {

  constructor(private _du: DesignUtilityService) { }
  asyncVideoEmit;
  ngOnInit() {
    this._du.asyncVideoEmit.subscribe(res => {
      this.asyncVideoEmit = res;
    })
  }

  //video add method
  onVideoAdd(video){
    console.log(video)
    this._du.asyncVideoEmit.next(video);
  }

  onComplete(){
    this._du.asyncVideoEmit.complete();
  }
}
