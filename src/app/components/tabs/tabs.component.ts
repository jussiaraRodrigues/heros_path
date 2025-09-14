import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// 👇 Lista de imports bem mais simples agora 👇
import { IonIcon, IonButton, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personCircleOutline, footstepsOutline, earthOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  standalone: true,
  imports: [
    RouterModule,
    IonIcon,
    IonButton,
    IonRouterOutlet
  ],
})
export class TabsComponent {
  constructor() {
    addIcons({ personCircleOutline, footstepsOutline, earthOutline });
  }
}