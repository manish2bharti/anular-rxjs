import { Injectable } from '@angular/core';
import { AsyncSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  exclusive = new Subject<boolean>();

  username = new Subject<string>();

  videoEmit = new ReplaySubject<string>(3, 5000);

  asyncVideoEmit = new AsyncSubject();
  constructor() { }

  print(str, containerId){
    let el = document.createElement('li');
    el.innerText = str;
    document.getElementById(containerId).appendChild(el)
  }
}
