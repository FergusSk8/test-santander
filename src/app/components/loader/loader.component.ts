import {Component, Input} from '@angular/core';
import {Subscription} from "rxjs";
import {CtrlLoaderService} from "../../services/ctrlLoader/ctrl-loader.service";

class LoaderService {
}

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {

  @Input() public view!: boolean;

  private readonly subscription: Subscription;

  constructor(public loader: CtrlLoaderService) {
    this.subscription = this.loader.show$
      .subscribe(change => this.view = change);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
