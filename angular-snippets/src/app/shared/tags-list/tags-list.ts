import { Component } from '@angular/core';
import { TAGS_LIST } from './core/tags-list.constant';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tags-list',
  imports: [CommonModule],
  templateUrl: './tags-list.html',
  styleUrl: './tags-list.scss'
})
export class TagsList {
  tagsList = TAGS_LIST;
}
