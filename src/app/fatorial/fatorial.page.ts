import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonMenuButton, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { calculatorOutline } from 'ionicons/icons';

@Component({
  selector: 'app-fatorial',
  templateUrl: './fatorial.page.html',
  styleUrls: ['./fatorial.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton, IonCard, IonCardHeader, IonCardContent, IonItem, IonIcon, IonInput, IonButton, ReactiveFormsModule]
})
export class FatorialPage implements OnInit {
  public numero!: number;
  public fatorial!: number;
  public auxiliar?: number;

  public meuFormulario: FormGroup;

  constructor(private fb: FormBuilder) {
    addIcons({ calculatorOutline });

    this.meuFormulario = fb.group({
      numero: [null, [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit() {
  }
  onSubmit() {
    this.numero = this.meuFormulario.get('numero')?.value;
    let fat = 1;
    for (let index = 1; index <= this.numero; index++) {
        fat *= index;
         console.log("numero: ", this.numero);
         console.log("index", index)
         console.log("valor loop", this.numero!*index)
         console.log("Fatorial: ", this.fatorial);
         console.log("Fat: ", fat);
         console.log("-----------------")
    }
    this.fatorial = fat;
  }
}
