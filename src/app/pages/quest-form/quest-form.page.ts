import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonList,
  IonItem, IonInput, IonTextarea, ModalController, IonSelect, IonSelectOption, IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { Quest } from '../../services/firebase';
import {
  closeCircleOutline, checkmarkCircleOutline, waterOutline, balloonOutline,
  storefrontOutline, alarmOutline, beerOutline, libraryOutline, bicycleOutline,
  bookOutline, calendarOutline, leafOutline, pawOutline, restaurantOutline,
  medkitOutline, laptopOutline, airplaneOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-quest-form',
  templateUrl: './quest-form.page.html',
  styleUrls: ['./quest-form.page.scss'],
  standalone: true,

  imports: [
    CommonModule, FormsModule, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton,
    IonList, IonItem, IonInput, IonTextarea, IonSelect, IonSelectOption, IonIcon
  ]
})
export class QuestFormPage implements OnInit {

  @Input() questToEdit?: Quest;
  private modalCtrl = inject(ModalController);

  questData = {
    nome: '',
    anotacao: '',
    icone: 'book-outline'
  };

  constructor() {
    addIcons({
      closeCircleOutline, checkmarkCircleOutline, waterOutline, balloonOutline,
      storefrontOutline, alarmOutline, beerOutline, libraryOutline, bicycleOutline,
      bookOutline, calendarOutline, leafOutline, pawOutline, restaurantOutline,
      medkitOutline, laptopOutline, airplaneOutline
    });
  }

  ngOnInit() {
    if (this.questToEdit) {
      this.questData.nome = this.questToEdit.nome;
      this.questData.anotacao = this.questToEdit.anotacao || '';
      this.questData.icone = this.questToEdit.icone;
    }
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.questData, 'confirm');
  }
}