import { DesignUtilityService } from './../../design-utility.service';
import { Component, OnInit } from '@angular/core';
import { merge, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css']
})
export class MergeComponent implements OnInit {

  constructor(private _du: DesignUtilityService) { }

  ngOnInit() {
    const sourceTech = interval(3000).pipe(
      map(v=> ' Video #'+ (v+1)),
      take(5)
    );
    const sourceComedy = interval(4000).pipe(
      map(v=> ' Comedy #'+ (v+1)),
      take(3)
    );
    const sourceNews = interval(3500).pipe(
      map(v=> ' News #'+ (v+1)),
      take(4)
    );

    const  FinalObs = merge(sourceTech, sourceComedy, sourceNews);

    FinalObs.subscribe(res => {
      console.log(res)
      this._du.print(res, 'elcontainer')
    })
  }

}
