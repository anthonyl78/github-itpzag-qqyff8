import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'escape';

  nbClassicRooms = 6;
  nbVirtualRooms = 5;

  lastLi() {
    console.log('lastLi');
    return 'Amusement garanti';
  }
}
