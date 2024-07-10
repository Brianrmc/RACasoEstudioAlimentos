import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.scss',
})
export class InventarioComponent {
  inventoryForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.inventoryForm = this.fb.group({
      codigo: ['', Validators.required],
      cantidadActual: [{ value: '', disabled: true }],
      cantidadNueva: ['', [Validators.required, Validators.min(0)]],
      fecha: ['', Validators.required],
      notas: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.inventoryForm.valid) {
      console.log(this.inventoryForm.value);
    } else {
      console.log('Formulario inválido');
    }
  }

  onCancel() {
    this.inventoryForm.reset();
  }
}
