import { Component } from '@angular/core';
import { TagsList } from '../tags-list/tags-list';

@Component({
  selector: 'app-header',
  imports: [TagsList],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
