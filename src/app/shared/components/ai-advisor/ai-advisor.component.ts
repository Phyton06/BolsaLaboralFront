import { Component, signal, computed, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '../icon/icon.component';
import { GeminiService, GeminiResponse } from '../../services/gemini.service';

@Component({
  selector: 'app-ai-advisor',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent],
  template: `
    @if (isOpen) {
      <!-- Overlay -->
      <div class="overlay" (click)="close()"></div>

      <!-- Modal -->
      <div class="modal">
        <!-- Header -->
        <div class="modal-header">
          <div class="modal-title">
            <app-icon name="flame" [size]="20" color="var(--warn-600)" />
            <h2>Asesor de Carrera IA</h2>
          </div>
          <button class="close-btn" (click)="close()">
            <app-icon name="x" [size]="18" />
          </button>
        </div>

        <!-- Tabs -->
        <div class="tabs">
          @for (tab of tabs; track tab) {
            <button
              class="tab"
              [class.active]="activeTab() === tab.id"
              (click)="switchTab(tab.id)"
            >
              <app-icon [name]="tab.icon" [size]="14" />
              {{ tab.label }}
            </button>
          }
        </div>

        <!-- Content -->
        <div class="modal-body">
          @switch (activeTab()) {
            @case ('market') {
              <div class="tab-content">
                <h3>Análisis del Mercado Laboral</h3>
                <p class="desc">Basado en las 6 ofertas actuales en la bolsa</p>
                @if (loading().market) {
                  <div class="loading">Procesando con Gemini...</div>
                } @else if (error().market) {
                  <div class="error">{{ error().market }}</div>
                } @else if (analysis().market) {
                  <pre class="markdown">{{ analysis().market }}</pre>
                } @else {
                  <button class="btn primary" (click)="analyzeMarket()">
                    <app-icon name="flame" [size]="14" /> Analizar Mercado
                  </button>
                }
              </div>
            }

            @case ('cv') {
              <div class="tab-content">
                <h3>Diagnóstico de CV</h3>
                <p class="desc">Pega tu CV para ver qué tan compatible es con las ofertas</p>
                <textarea
                  class="cv-textarea"
                  placeholder="Pega aquí el texto de tu CV..."
                  [(ngModel)]="cvText"
                  rows="8"
                ></textarea>
                @if (loading().cv) {
                  <div class="loading">Analizando CV con Gemini...</div>
                } @else if (error().cv) {
                  <div class="error">{{ error().cv }}</div>
                } @else if (analysis().cv) {
                  <pre class="markdown">{{ analysis().cv }}</pre>
                } @else {
                  <button
                    class="btn primary"
                    [disabled]="!cvText().trim()"
                    (click)="diagnoseCV()"
                  >
                    <app-icon name="flame" [size]="14" /> Diagnosticar CV
                  </button>
                }
              </div>
            }

            @case ('plan') {
              <div class="tab-content">
                <h3>Plan de Mejora</h3>
                <p class="desc">12 semanas de roadmap personalizado</p>
                @if (loading().plan) {
                  <div class="loading">Generando plan...</div>
                } @else if (error().plan) {
                  <div class="error">{{ error().plan }}</div>
                } @else if (analysis().plan) {
                  <pre class="markdown">{{ analysis().plan }}</pre>
                } @else {
                  <button class="btn primary" (click)="generatePlan()">
                    <app-icon name="flame" [size]="14" /> Generar Plan
                  </button>
                }
              </div>
            }
          }
        </div>
      </div>
    }
  `,
  styles: [`
    .overlay {
      position: fixed; inset: 0; background: rgba(0,0,0,0.5);
      z-index: 1000; display: grid; place-items: center;
    }
    .modal {
      background: #fff; border-radius: 16px; width: 90%; max-width: 720px;
      max-height: 85vh; display: flex; flex-direction: column;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3); overflow: hidden;
    }
    .modal-header {
      display: flex; align-items: center; justify-content: space-between;
      padding: 16px 20px; border-bottom: 1px solid var(--ink-200);
    }
    .modal-title { display: flex; align-items: center; gap: 10px; }
    .modal-title h2 { margin: 0; font-size: 18px; font-weight: 600; color: var(--ink-900); }
    .close-btn {
      background: none; border: none; cursor: pointer; padding: 4px;
      color: var(--ink-500); display: flex; border-radius: 6px;
    }
    .close-btn:hover { background: var(--ink-100); }
    .tabs {
      display: flex; gap: 4px; padding: 12px 20px; border-bottom: 1px solid var(--ink-200);
    }
    .tab {
      padding: 8px 14px; border-radius: 6px; font-size: 13px; font-weight: 500;
      border: none; cursor: pointer; background: transparent; color: var(--ink-600);
      display: flex; align-items: center; gap: 6px; transition: all 0.15s;
    }
    .tab:hover { background: var(--ink-100); }
    .tab.active { background: var(--brand-50); color: var(--brand-700); font-weight: 600; }
    .modal-body { flex: 1; overflow-y: auto; padding: 20px; }
    .tab-content { display: flex; flex-direction: column; gap: 16px; }
    .tab-content h3 { margin: 0; font-size: 16px; font-weight: 600; color: var(--ink-900); }
    .desc { margin: 0; font-size: 13px; color: var(--ink-500); }
    .cv-textarea {
      width: 100%; padding: 12px; border: 1px solid var(--ink-200);
      border-radius: 8px; font-family: 'IBM Plex Mono', monospace; font-size: 12px;
      resize: vertical; min-height: 150px; background: var(--ink-50);
    }
    .cv-textarea:focus { outline: none; border-color: var(--brand-600); box-shadow: 0 0 0 3px var(--brand-100); }
    .btn {
      padding: 10px 16px; border-radius: 6px; font-size: 13px; font-weight: 600;
      border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;
      font-family: inherit; transition: all 0.15s;
    }
    .btn.primary { background: var(--brand-700); color: #fff; }
    .btn.primary:hover { background: var(--brand-800); }
    .btn.primary:disabled { opacity: 0.5; cursor: not-allowed; }
    .loading {
      text-align: center; padding: 40px; color: var(--ink-500);
      font-style: italic; display: flex; align-items: center; justify-content: center; gap: 8px;
    }
    .error { padding: 16px; background: var(--err-100); color: var(--err-600); border-radius: 8px; font-size: 13px; }
    .markdown {
      white-space: pre-wrap; font-family: 'IBM Plex Sans', sans-serif; font-size: 13px;
      line-height: 1.6; color: var(--ink-800); margin: 0;
    }
  `]
})
export class AiAdvisorComponent {
  @Input() isOpen = false;
  @Output() isOpenChange = new EventEmitter<boolean>();
  activeTab = signal<'market' | 'cv' | 'plan'>('market');
  cvText = signal('');

  loading = signal({ market: false, cv: false, plan: false });
  error = signal({ market: '', cv: '', plan: '' });
  analysis = signal({ market: '', cv: '', plan: '' });

  tabs = [
    { id: 'market' as const, icon: 'chart', label: 'Mercado' },
    { id: 'cv' as const, icon: 'file', label: 'CV' },
    { id: 'plan' as const, icon: 'target', label: 'Plan' },
  ];

  private jobData = [
    { title:'Desarrollador Full-Stack Jr.', company:'Soluciones Pacífico', loc:'Tepic, Nay.', tags:['Angular','Node.js','PostgreSQL'], sal:'$18,000 - 22,000' },
    { title:'Analista de Datos', company:'Banorte Digital', loc:'Remoto · Nacional', tags:['SQL','Power BI','Python'], sal:'$16,500 - 20,000' },
    { title:'Ing. de Mantenimiento', company:'Aeropuertos GAP', loc:'Tepic, Nay.', tags:['Eléctrico','PLC','Hidráulica'], sal:'$15,000 - 18,000' },
    { title:'QA Automation Trainee', company:'Tequila Software', loc:'Compostela, Nay.', tags:['Cypress','Jest','CI/CD'], sal:'$14,000 - 16,000' },
    { title:'Desarrollador Frontend', company:'Vidanta Tech', loc:'Bahía de Banderas', tags:['React','Tailwind','TypeScript'], sal:'$17,000 - 21,000' },
    { title:'Coord. Tecnologías Hotel', company:'Hard Rock Riviera', loc:'Bahía de Banderas', tags:['Redes','Soporte','ERP'], sal:'$19,000 - 24,000' },
  ];

  constructor(private geminiService: GeminiService) {}

  open(): void { this.isOpenChange.emit(true); }
  close(): void { this.isOpenChange.emit(false); }

  switchTab(tab: 'market' | 'cv' | 'plan'): void {
    this.activeTab.set(tab);
  }

  async analyzeMarket(): Promise<void> {
    this.loading.update(l => ({ ...l, market: true }));
    this.error.update(e => ({ ...e, market: '' }));
    try {
      const result = await this.geminiService.analyzeJobMarket(this.jobData);
      this.analysis.update(a => ({ ...a, market: result }));
    } catch (err) {
      this.error.update(e => ({ ...e, market: err instanceof Error ? err.message : 'Error desconocido' }));
    } finally {
      this.loading.update(l => ({ ...l, market: false }));
    }
  }

  async diagnoseCV(): Promise<void> {
    if (!this.cvText().trim()) return;
    this.loading.update(l => ({ ...l, cv: true }));
    this.error.update(e => ({ ...e, cv: '' }));
    try {
      const result = await this.geminiService.diagnoseCV(this.cvText(), this.jobData);
      this.analysis.update(a => ({ ...a, cv: result }));
    } catch (err) {
      this.error.update(e => ({ ...e, cv: err instanceof Error ? err.message : 'Error desconocido' }));
    } finally {
      this.loading.update(l => ({ ...l, cv: false }));
    }
  }

  async generatePlan(): Promise<void> {
    this.loading.update(l => ({ ...l, plan: true }));
    this.error.update(e => ({ ...e, plan: '' }));
    try {
      const result = await this.geminiService.analyzeJobMarket(this.jobData);
      // Reuse market analysis to generate a 12-week plan
      const planPrompt = `Basado en este análisis:\n${result}\n\nGenera un PLAN DE MEJORA de 12 semanas con pasos concretos para que un egresado sea más competitivo.`;
      const planResult = await this.geminiService['callGemini'](planPrompt);
      this.analysis.update(a => ({ ...a, plan: planResult }));
    } catch (err) {
      this.error.update(e => ({ ...e, plan: err instanceof Error ? err.message : 'Error desconocido' }));
    } finally {
      this.loading.update(l => ({ ...l, plan: false }));
    }
  }
}
