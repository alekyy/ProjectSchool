import { Component, Input } from '@angular/core';
import { MenuItem } from '@app/shared/models/menu';

@Component({
  selector: 'app-toolbar-menu',
  templateUrl: './toolbar-menu.component.html',
  styleUrls: ['./toolbar-menu.component.scss'],
})
export class ToolbarMenuComponent {
  @Input() shadow = false;
  @Input() popText = false;
  @Input() menuTitle = '';
  @Input() itemsMenu: MenuItem[] = [];

  constructor() {}
}
