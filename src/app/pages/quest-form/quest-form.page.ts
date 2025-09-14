import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// 👇 1. Importe os componentes que vamos usar no formulário
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonItem, IonInput, ModalController 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { closeCircleOutline, checkmarkCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-quest-form',      // <- CORRIGIDO
  templateUrl: './quest-form.page.html', // <- CORRIGIDO
  styleUrls: ['./quest-form.page.scss'],   // <- CORRIGIDO
  standalone: true,
  // 👇 2. Adicione os novos componentes à lista de imports
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    IonButtons, IonButton, IonIcon, IonItem, IonInput
  ]
})
export class QuestFormPage { // <- CORRIGIDO

  // 3. Injeta o ModalController para podermos fechar a "janelinha"
  private modalCtrl = inject(ModalController);
  
  questName: string = ''; // Variável para guardar o nome da quest

  constructor() {
    addIcons({ closeCircleOutline, checkmarkCircleOutline });
  }

  // Função para o botão "Cancelar"
  cancel() {
    // A função 'dismiss' fecha o modal. 'role: cancel' nos diz que foi cancelado.
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  // Função para o botão "Salvar"
  confirm() {
    // A função 'dismiss' fecha o modal, enviando os dados de volta.
    return this.modalCtrl.dismiss(this.questName, 'confirm');
  }
}