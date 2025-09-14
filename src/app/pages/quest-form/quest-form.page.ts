import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonItem, IonInput, ModalController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { closeCircleOutline, checkmarkCircleOutline } from 'ionicons/icons';
import { Quest } from '../../services/firebase';

@Component({
  selector: 'app-quest-form',      // <- CORRIGIDO
  templateUrl: './quest-form.page.html', // <- CORRIGIDO
  styleUrls: ['./quest-form.page.scss'],   // <- CORRIGIDO
  standalone: true,
  imports: [ IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonButton, IonIcon, IonItem, IonInput ]})

  export class QuestFormPage implements OnInit { 

    @Input() questToEdit?: Quest;

  private modalCtrl = inject(ModalController);
  questName: string = ''; 

  constructor() {
    addIcons({ closeCircleOutline, checkmarkCircleOutline });
  }

  ngOnInit() {
    if (this.questToEdit) {
      this.questName = this.questToEdit.nome;
    }
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.questName, 'confirm');
  }
}