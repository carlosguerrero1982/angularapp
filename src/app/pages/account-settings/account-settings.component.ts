import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  public link= document.querySelector('#theme');

  constructor() { }

  ngOnInit(): void {
  }

  changeTheme(tema:string){

    

    const url = `./assets/css/colors/${tema}.css`;

    this.link.setAttribute('href',url);

    localStorage.setItem('theme',url);
  }
}
