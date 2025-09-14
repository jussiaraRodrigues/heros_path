import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalController, IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonIcon, IonLabel, IonButton, IonFab, IonFabButton } from '@ionic/angular/standalone';
import { QuestFormPage } from '../quest-form/quest-form.page';
import { addIcons } from 'ionicons';
import { bookOutline, barbellOutline, checkmarkCircle, flameOutline, ellipseOutline, codeWorkingOutline, addOutline } from 'ionicons/icons';
import { Firebase, Quest } from 'src/app/services/firebase';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonIcon,
    IonLabel,
    IonButton,
    IonFab,
    IonFabButton
  ],
})
export class DashboardPage {

  private firebase = inject(Firebase);
  private modalCtrl = inject(ModalController);
  public quests$: Observable<Quest[]>;

  constructor(){
    this.quests$ = this.firebase.getQuests();
    addIcons({ bookOutline, barbellOutline, checkmarkCircle, flameOutline, codeWorkingOutline, ellipseOutline, addOutline });
  }

 completeQuest(quest: Quest) {

    if (quest.id) {
      const newStatus = !quest.completed;

      this.firebase.updateQuestStatus(quest.id, newStatus)
        .then(() => {
         })
        .catch(err => {
          console.error('ERRO: Firebase service retornou um erro.', err);
        });
    } else {
      console.error('ERRO GRAVE: A quest clicada não tem ID.');
    }
  }

  async openQuestForm() {
    const modal = await this.modalCtrl.create({
      component: QuestFormPage,
    });

    await modal.present();

    // Isso vai pegar os dados quando o modal for fechado pelo botão "Salvar"
    const { data, role } = await modal.onWillDismiss();
    if (role === 'confirm') {
      // Se o usuário salvou, 'data' terá o nome da nova quest
      console.log('Nova quest para adicionar:', data);
      const novaQuest = { nome: data, icone: 'book-outline' }; // Usando um ícone padrão por enquanto
      this.firebase.addQuest(novaQuest);
    }
  }
}
