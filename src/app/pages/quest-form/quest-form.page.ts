import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton,
  IonList, IonItem, IonInput, IonTextarea, IonIcon, ModalController
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  closeCircleOutline, checkmarkCircleOutline, bookOutline, barbellOutline, codeWorkingOutline, laptopOutline, walkOutline, waterOutline, leafOutline, bedOutline
} from 'ionicons/icons';
import { Quest } from '../../services/firebase';

@Component({
  selector: 'app-quest-form',
  templateUrl: './quest-form.page.html',
  styleUrls: ['./quest-form.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, IonContent, IonHeader, IonTitle, IonToolbar,
    IonButtons, IonButton, IonList, IonItem, IonInput, IonTextarea, IonIcon
  ]
})
export class QuestFormPage implements OnInit {

  @Input() questToEdit?: Quest;

  private modalCtrl = inject(ModalController);

  questData = {
    nome: '',
    anotacao: '',
    icone: 'book-outline' // Ícone padrão
  };

  availableIcons = ['book-outline', 'barbell-outline', 'code-working-outline', 'laptop-outline', 'walk-outline', 'water-outline', 'leaf-outline', 'bed-outline'];

  constructor() {
    addIcons({
      closeCircleOutline, checkmarkCircleOutline, bookOutline, barbellOutline, codeWorkingOutline, laptopOutline, walkOutline, waterOutline, leafOutline, bedOutline
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