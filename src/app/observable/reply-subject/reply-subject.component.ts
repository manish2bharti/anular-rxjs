import { Subscription } from 'rxjs';
import { DesignUtilityService } from './../../design-utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reply-subject',
  templateUrl: './reply-subject.component.html',
  styleUrls: ['./reply-subject.component.css']
})
export class ReplySubjectComponent implements OnInit {

  constructor(private _du: DesignUtilityService) { }

  //List Data
  user1List = ['Angular 1', 'Angular 2'];
  user2List = [];
  user3List = [];

  //subscribe mode
  subscribeMode2 : boolean = false;
  subscribeMode3 : boolean = false;

  //sbscriptions
  subscription2: Subscription;
  subscription3: Subscription;

  ngOnInit() {
    this._du.videoEmit.subscribe(res => {
      console.log(res)
      this.user1List.push(res)
    })
  }

  //video add method
  onVideoAdd(video){
    this._du.videoEmit.next(video);
  }

  //user to subscribe
  user2Subcribe(){
    if(this.subscribeMode2){
      this.subscription2.unsubscribe();
    }else{
      this.subscription2 = this._du.videoEmit.subscribe(res => {
        this.user2List.push(res)
      })
    }
    this.subscribeMode2 = !this.subscribeMode2
  }

  user3Subcribe(){
    if(this.subscribeMode3){
      this.subscription3.unsubscribe();
    }else{
      this.subscription3 = this._du.videoEmit.subscribe(res => {
        this.user3List.push(res)
      })
    }
    this.subscribeMode3 = !this.subscribeMode3
  }

}
