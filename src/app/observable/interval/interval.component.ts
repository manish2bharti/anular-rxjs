import { DesignUtilityService } from './../../design-utility.service';
import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

  obsMsg: string = '';
  videoIntervalSubscription: Subscription;
  videoTimerSubscription: Subscription;
  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit() {
    const broadIntervalCastVideos = interval(1000);
    const broadTimeerCastVideos = timer(5000, 1000); //delay(delay, timer)
    this.videoIntervalSubscription =  broadIntervalCastVideos.subscribe(res => {
      console.log(res);
      this.obsMsg = 'interval video' + res;
      this._designUtility.print(this.obsMsg, 'elContainer')
      if(res >= 5){
        this.videoIntervalSubscription.unsubscribe();
      }
    })

    this.videoTimerSubscription =  broadTimeerCastVideos.subscribe(res => {
      console.log(res);
      this.obsMsg = 'timer video' + res;
      this._designUtility.print(this.obsMsg, 'elContainer2')
      if(res >= 5){
        this.videoTimerSubscription.unsubscribe();
      }
    })
  }

}
