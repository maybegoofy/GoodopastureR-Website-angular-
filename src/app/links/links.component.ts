import { Component } from '@angular/core';

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [],
  template: '
    <section class="links">
      <img class="linkPhoto"
      [src]="links.photo"
      alt="link to {{ links.name }}">
  '
  /*templateUrl: './links.component.html',*/
  styleUrl: './links.component.less'
})
export class LinksComponent {

}
