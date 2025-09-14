import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyACsxw7tXH93FOPwiYqyGlPDmf0UpPyiRE",
  authDomain: "heros-path-app-35600.firebaseapp.com",
  projectId: "heros-path-app-35600",
  storageBucket: "heros-path-app-35600.appspot.com",
  messagingSenderId: "526664744936",
  appId: "1:526664744936:web:76e7f81e18a8b408286e5d"
};

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes),

    // 👇 A CORREÇÃO ESTÁ AQUI 👇
    // Removemos o 'importProvidersFrom' e colocamos as funções diretamente.
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
});