import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar,
  IonItem,
  IonInput,
  IonButton,
  IonIcon
 } from '@ionic/angular/standalone';
 import { addIcons } from "ionicons";
 import { logoGoogle } from "ionicons/icons";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonItem,
    IonInput, 
    IonButton,
    IonIcon, 
    CommonModule, 
    FormsModule]
})
export class LoginPage implements OnInit {

  constructor() { 
    addIcons({logoGoogle});
  }

  ngOnInit() {
  }

}
