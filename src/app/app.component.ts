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
  Url = 'http://www.bridgelabz.com';
  userName : string = "";

  ngOnInit() : void 
  {
    this.title = 'BridgeLabz';
    this.imgUrl = '../assets/one.jpg';
  }

  onClick($event)
  {
    console.log('save button is clicked',$event);
    window.open(this.Url,'_blank');
  }
  
}
