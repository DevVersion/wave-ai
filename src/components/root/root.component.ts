import {Component} from '@angular/core';

const remote = require('electron').remote;

@Component({
  selector: 'wave-app',
  templateUrl: 'root.component.html'
})
export class RootComponent {

  closeWindow() {
    remote.getCurrentWindow().close();
  }

}
