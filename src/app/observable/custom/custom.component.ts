import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from './../../design-utility.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit, OnDestroy {

  techStatus;
  techStatus2;
  names;
  nameStatus;
  subs1: Subscription;
  subs2: Subscription;
  subs3: Subscription;
  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit() {
    //ex -01 Manual
    const cusObs1 = Observable.create(observer => {
      setTimeout(()=>{
        observer.next('Angular')
      }, 1000)
      setTimeout(()=>{
        observer.next('TypeScript')
      }, 2000)
      setTimeout(()=>{
        observer.next('HTML n CSS')
        observer.complete();
      }, 3000)
      setTimeout(()=>{
        observer.next('JavaScript')
        // observer.error(new Error('Limit Exceed'));
      }, 4000)
      setTimeout(()=>{
        observer.next('Data Emit 5')

      }, 5000)

      // observer.error()
      // observer.complete()
    })

    this.subs1 = cusObs1.subscribe(res => {
      // console.log(res);
      this._designUtility.print(res, 'elContainer')
    },
    (err) => {
      this.techStatus = 'error'
    },
    () => {
      this.techStatus = 'completed'
    })



    //Ex -02 - Custome intervals
    const arr2 = ['angular', 'js', 'ts', 'html', 'css']
    const cusObs2 = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(arr2[count]);

        if(count >= 2){
          observer.error('Error emit');
        }

        if(count >= 5){
          observer.complete();
        }
        count++;
      }, 1000)
    })

    this.subs2 = cusObs2.subscribe(res =>{
      // console.log(res)
      this._designUtility.print(res, 'elContainer2')
    },
    (err) => {
      this.techStatus2 = 'error'
    },
    () => {
      this.techStatus2 = 'completed'
    });

    //Ex -03 - Random names
    const arr3 = ['Manish', 'Bharti', 'Angular', 'JS', 'TS']
    const cusObs3 = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(arr3[count]);

        if(count >= 2){
          observer.error('Error emit');
        }

        if(count >= 5){
          observer.complete();
        }
        count++;
      }, 1000)
    })

    this.subs3 = cusObs3.subscribe(res => {
      console.log(res)
      this.names = res;
    },
    (err) => {
      this.nameStatus = 'error'
    },
    () => {
      this.nameStatus = 'completed'
    })
  }

  ngOnDestroy(){
    this.subs1.unsubscribe();
    this.subs2.unsubscribe();
    this.subs3.unsubscribe();
  }

}
