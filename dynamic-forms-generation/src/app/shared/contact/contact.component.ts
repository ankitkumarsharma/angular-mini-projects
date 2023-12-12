import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LABELS } from '../../core/app.constant';
import { LabelsModel } from '../../core/app.models';
import { CONSTANTS, CONTACT_INFO } from './core/contact.constant';
import { ContactInfoModel } from './core/contact.models';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  labels:LabelsModel = LABELS;
  moreInfoLabel: string = CONSTANTS.moreInfo;
  contactInfo:ContactInfoModel[] = CONTACT_INFO;
}
