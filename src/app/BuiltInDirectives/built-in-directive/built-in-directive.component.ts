import { Component } from '@angular/core';

@Component({
  selector: 'app-built-in-directive',
  templateUrl: './built-in-directive.component.html',
  styleUrl: './built-in-directive.component.css'
})
export class BuiltInDirectiveComponent {

  items = ['item1', 'item2', 'item3', 'item4', 'item5'];

  isActive = false;

  value = 10;

}
