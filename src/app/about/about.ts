import { Component } from '@angular/core';
import { Date } from '../date';

@Component({
  selector: 'app-About',
  standalone: true,
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
  imports: []
})
export class About {
  constructor(public Date: Date) {}
}
