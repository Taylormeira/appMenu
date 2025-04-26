import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,  IonButton, IonInput, IonItem,IonButtons, IonMenuButton, IonCard, IonCardHeader, IonCardContent, IonIcon, IonText } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { speedometerOutline, timeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-velocidamedia',
  templateUrl: './velocidamedia.page.html',
  styleUrls: ['./velocidamedia.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonInput, IonItem, IonButton, IonButtons, IonMenuButton, IonCard, IonCardHeader, IonCardContent, IonIcon, ReactiveFormsModule, IonText]
})
export class VelocidamediaPage implements OnInit {
  public distancia!: number;
  public tempo?: number;
  public velocidadeMedia?: number;

  public meuFormulario: FormGroup;

  constructor(private fb:FormBuilder) {
    addIcons({speedometerOutline,timeOutline});

    this.meuFormulario = fb.group({
      distancia: [null, [Validators.required, Validators.min(1)]],
      tempo: [null, [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit() {
  }
  onSubmit(){
    this.distancia = this.meuFormulario.get('distancia')?.value;
    this.tempo = this.meuFormulario.get('tempo')?.value;
    
    this.velocidadeMedia = this.distancia!/this.tempo!;
  }

}
