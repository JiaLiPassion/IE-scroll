import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  name = 'Angular';

  ngAfterViewInit() {
    window.addEventListener('scroll', e => console.log('scroll'))
  }
}
