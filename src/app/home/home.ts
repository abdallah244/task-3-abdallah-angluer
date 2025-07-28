import { Component } from '@angular/core';
import { Date } from '../date';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: []
})
export class Home {
  constructor(public Date: Date) {}
}
