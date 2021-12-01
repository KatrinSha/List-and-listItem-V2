import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lifecycle-hooks';
  parentList: any = [{
    firstName: 'Eva',
    lastName: 'Green',
    age: 41,
  },
  {
    firstName: 'Ivan',
    lastName: 'Petrovich',
    age: 24,
  },
  {
    firstName: 'Elon',
    lastName: 'Musk',
    age: 24,
  },
  ]



}
