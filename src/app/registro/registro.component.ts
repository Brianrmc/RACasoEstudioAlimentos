import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {
  orderForm: FormGroup;
  metodosPago: string[] = ['Tarjeta de Crédito', 'Transferencia Bancaria'];

  constructor(private fb: FormBuilder) {
    this.orderForm = this.fb.group({
      nombreCliente: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      fecha: ['', Validators.required],
      detalles: [''],
      metodoPago: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.orderForm.valid) {
      console.log(this.orderForm.value);
    }
  }

  onCancel() {
    this.orderForm.reset();
  }

}
