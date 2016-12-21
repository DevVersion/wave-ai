import 'core-js/es6';
import 'core-js/es7';
import 'zone.js';

import {NgModule, Component} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'wave-app',
  template: '<span>Welcome</span>'
})
export class WaveAppComponent {}


@NgModule({
  imports: [
    BrowserModule,
    CommonModule
  ],
  declarations: [WaveAppComponent],
  bootstrap: [WaveAppComponent]
})
export class WaveModule {}

platformBrowserDynamic().bootstrapModule(WaveModule);
