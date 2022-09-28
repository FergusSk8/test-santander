import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CtrlLoaderService {
  private showLoader = new BehaviorSubject<boolean>(false);

  public show$ = this.showLoader.asObservable();

  public show(): void {
    this.showLoader.next(true);
  }

  public hide(): void {
    this.showLoader.next(false);
  }
}
