import { Component } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component'; 
import { ButtonClickComponent } from './button-click/button-click.component';
import { InputBoxComponent } from './input-box/input-box.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ToggleMessageComponent } from './toggle-message/toggle-message.component';
import { ParentComponent } from './parent/parent.component';
import { RegistrationComponent } from './registration/registration.component';
import { ToggleVisibilityComponent } from './toggle-visibility/toggle-visibility.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ModalComponent } from './modal/modal.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WelcomeComponent, ButtonClickComponent, InputBoxComponent,ItemListComponent,ToggleMessageComponent,ParentComponent,RegistrationComponent,ToggleVisibilityComponent,PaginationComponent,ModalComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
