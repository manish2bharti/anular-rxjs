import { DesignUtilityService } from './../../design-utility.service';
import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {
  obsMsg;
  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit() {
    //Of

    const Obs1 = of('Manish', 'Amit', 'Pratik');
    Obs1.subscribe(res => {
      this._designUtility.print(res, 'elContainer')
    })

    const Obs2 = of({a:'Manish', b:'Amit', c:'Pratik'});
    Obs2.subscribe(res => {
      this.obsMsg = res;
      // this._designUtility.print(this.obsMsg, 'elContainer2')
    })


    //from
    const Obs3 = from(['ManishA', 'AmitA', 'PratikA']);
    Obs3.subscribe(res => {
      this._designUtility.print(res, 'elContainer3')
    })

    //from-promise
    const promise = new Promise(resolve=>{
      setTimeout(() => {
        resolve('Promise Resolved')
      }, 1000)
    })

    const Obs4 = from(promise);
    Obs4.subscribe(res => {
      console.log('from promise:'+ res)
      this._designUtility.print(res, 'elContainer4')
    })


    //from-string
    const Obs5 = from('Welcome to Anglar');
    Obs5.subscribe(res => {
      console.log('from promise:'+ res)
      this._designUtility.print(res, 'elContainer5')
    })
  }

}
