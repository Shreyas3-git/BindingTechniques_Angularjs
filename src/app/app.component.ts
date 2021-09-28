import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent 
{
  title = 'Hello-World';  
  imgUrl = '';
  
  ngOnInit() : void 
  {
    this.title = 'BridgeLabz';
    this.imgUrl = '../assets/one.jpg';
  }
}
