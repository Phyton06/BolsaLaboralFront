import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Componente legacy — redirige al nuevo catálogo de evaluaciones.
 */
@Component({
  selector: 'app-evaluacion',
  standalone: true,
  imports: [],
  template: '',
})
export class EvaluacionComponent implements OnInit {
  private readonly router = inject(Router);

  ngOnInit(): void {
    this.router.navigate(['/evaluaciones'], { replaceUrl: true });
  }
}
