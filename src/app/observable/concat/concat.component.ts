import { DesignUtilityService } from './../../design-utility.service';
import { Component, OnInit } from '@angular/core';
import { concat, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css']
})
export class ConcatComponent implements OnInit {

  constructor(private _du: DesignUtilityService) { }

  ngOnInit() {
    const sourceTech = interval(1000).pipe(
      map(v=> ' Video #'+ (v+1)),
      take(5)
    );
    const sourceComedy = interval(1000).pipe(
      map(v=> ' Comedy #'+ (v+1)),
      take(3)
    );
    const sourceNews = interval(1000).pipe(
      map(v=> ' News #'+ (v+1)),
      take(4)
    );

    const  FinalObs = concat(sourceTech, sourceComedy, sourceNews);

    FinalObs.subscribe(res => {
      console.log(res)
      this._du.print(res, 'elcontainer')
    })
  }

}
