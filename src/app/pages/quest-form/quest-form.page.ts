import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonLabel, IonSelect, IonSelectOption, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonItem, IonInput, ModalController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {  closeCircleOutline, checkmarkCircleOutline, bookOutline, barbellOutline, codeWorkingOutline, laptopOutline, walkOutline, waterOutline, leafOutline, bedOutline  } from 'ionicons/icons';
import { Quest } from '../../services/firebase';

@Component({
  selector: 'app-quest-form',     
  templateUrl: './quest-form.page.html', 
  styleUrls: ['./quest-form.page.scss'],  
  standalone: true,
  imports: [ IonLabel,IonSelect, IonSelectOption, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonButton, IonIcon, IonItem, IonInput ]})

  export class QuestFormPage implements OnInit { 

    @Input() questToEdit?: Quest;

  private modalCtrl = inject(ModalController);
  questName: string = '';
  selectedIcon: string = 'book-outline';

     availableIcons = [ 'book-outline', 'barbell-outline', 'code-working-outline', 'laptop-outline', 'walk-outline', 'water-outline', 'leaf-outline', 'bed-outline' ];

  constructor() {
    addIcons({  closeCircleOutline, checkmarkCircleOutline, bookOutline, barbellOutline, codeWorkingOutline, laptopOutline, walkOutline, waterOutline, leafOutline, bedOutline  });
  }

  ngOnInit() {
    if (this.questToEdit) {
      this.questName = this.questToEdit.nome;
      this.selectedIcon = this.questToEdit.icone;
    }
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    const questData = {
      nome: this.questName,
      icone: this.selectedIcon
    };
    return this.modalCtrl.dismiss(this.questName, 'confirm');
  }
}