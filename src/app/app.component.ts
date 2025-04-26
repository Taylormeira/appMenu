
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { barbellSharp, bookmarkSharp, calculatorSharp, homeSharp, speedometerSharp } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/inbox', icon: 'home' },
    { title: 'Velocidade Média', url: 'velocidamedia', icon: 'speedometer' },
    { title: 'Fatorial', url: 'fatorial', icon: 'calculator' },
    { title: 'forca', url: '/folder/archived', icon: 'barbell' },
  ];
  public labels = ['Mattematica', 'Fisica'];
  constructor() {
    addIcons({ homeSharp, bookmarkSharp, speedometerSharp, barbellSharp, calculatorSharp });
  }
}
