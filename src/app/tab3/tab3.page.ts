import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  public bigButtons: any = true;
  public roundButtons: any = true;
  public listButtons: any = true;

  constructor() {
  }

  public ngOnInit() {
    this.bigButtons = localStorage.getItem('bigButtons') === '1' ? true : false;
    this.roundButtons = localStorage.getItem('roundButtons') === '1' ? true : false;
    this.listButtons = localStorage.getItem('listButtons') === '1' ? true : false;
  }

  public openLink(cmd: string) {
    window.open(cmd);
  }

  public bigButtonsChange(event) {
    localStorage.setItem('bigButtons', event === true ? '1' : '0');
  }

  public roundButtonsChange(event) {
    localStorage.setItem('roundButtons', event === true ? '1' : '0');
  }

  public listButtonsChange(event) {
    localStorage.setItem('listButtons', event === true ? '1' : '0');
  }
}
