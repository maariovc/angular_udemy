import { Component, OnInit } from '@angular/core';
import { getLocaleDateTimeFormat, getLocaleDateFormat } from '@angular/common';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [`.details { color: white; }`]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  allowAddUserName = false;
  serverCreated = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  userName = '';
  servers = ['Test server', 'Test server 2'];
  showDetails = false;
  details = [];

  constructor() { 
    setTimeout(() => { 
      this.allowNewServer = true;
     }, 2000);
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  addUserName() {
    this.userName = '';
  }
  onUserNameValueChanged(event: Event) {
    if (this.userName != '') {
      this.allowAddUserName = true;
    }
    else {
      this.allowAddUserName = false;
    }
  }

  onDetails(){
    if (this.showDetails) {
      this.showDetails = false;
    } else {
      this.showDetails = true;
    }
    this.details.push(Date.now());
  }

  getDetailsColor(){
    return this.details.length > 5 ? "lightBlue" : "none";
  }
}
