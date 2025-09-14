import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Quest {
  id?: string;
  nome: string;
  icone: string;
  streakAtual: number;
  completed?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class Firebase {
  
  constructor(private firestore: Firestore) {}

  getQuests(): Observable<Quest[]> {
    const questsRef = collection(this.firestore, 'habitos');
    return collectionData(questsRef, { idField: 'id' }) as Observable<Quest[]>;
    }

  addQuest(quest: { nome: string; icone: string; }) {
    const questsRef = collection(this.firestore, 'habitos');
    return addDoc(questsRef, {
      nome: quest.nome,
      icone: quest.icone,
      streakAtual: 0,
      completed: false
    });
  }

 updateQuestStatus(questId: string, newStatus: boolean) {
    const questDocRef = doc(this.firestore, `habitos/${questId}`);
    return updateDoc(questDocRef, { completed: newStatus });
  }

    deleteQuest(questId: string) {
    const questDocRef = doc(this.firestore, `habitos/${questId}`);
    return deleteDoc(questDocRef);
  }

  updateQuest(questId: string, data: Partial<Quest>) {
    const questDocRef = doc(this.firestore, `habitos/${questId}`);
    return updateDoc(questDocRef, data);
  }

}