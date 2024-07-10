import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-pantalla-principal',
  standalone: true,
  imports: [NgIf, NgFor, ReactiveFormsModule],
  templateUrl: './pantalla-principal.component.html',
  styleUrl: './pantalla-principal.component.scss',
})
export class PantallaPrincipalComponent {
  productForm: FormGroup;
  categorias: string[] = ['Frutas', 'Verduras', 'Lácteos'];

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      nombre: ['', Validators.required],
      categoria: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]],
      descripcion: [''],
      cantidad: ['', [Validators.required, Validators.min(0)]],
      imagen: [''],
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
    }
  }

  onCancel() {
    this.productForm.reset();
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.productForm.patchValue({ imagen: file });
    }
  }
}
