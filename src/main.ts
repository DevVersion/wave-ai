import 'core-js/es6';
import 'core-js/es7';
import 'zone.js';

import '@angular/material/core/theming/prebuilt/purple-green.css';
import 'style!./main.less'

import {NgModule} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '@angular/material';
import {RootComponent} from './components/root/root.component';
import {FlexLayoutModule} from '@angular/flex-layout/flex-layout.umd.js';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,

    /* Custom Modules */
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot()
  ],
  declarations: [RootComponent],
  bootstrap: [RootComponent]
})
export class WaveModule {}

platformBrowserDynamic().bootstrapModule(WaveModule);
