import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

export interface GeminiRequest {
  contents: {
    parts: { text: string }[];
  }[];
  generationConfig?: {
    temperature?: number;
    topK?: number;
    topP?: number;
    maxOutputTokens?: number;
  };
}

export interface GeminiResponse {
  candidates: {
    content: {
      parts: { text: string }[];
    };
  }[];
}

@Injectable({ providedIn: 'root' })
export class GeminiService {
  private readonly apiKey = environment.geminiApiKey || '';
  private readonly apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

  /**
   * Analiza las ofertas de trabajo y genera recomendaciones personalizadas
   */
  async analyzeJobMarket(jobs: { title: string; company: string; tags: string[]; sal: string }[]): Promise<string> {
    const prompt = `
Eres un asesor de carrera IA para egresados de la Universidad Tecnológica de la Costa.

Analiza estas ofertas de trabajo actuales:
${JSON.stringify(jobs, null, 2)}

Genera un análisis profesional que incluya:
1. **Tendencias de habilidades más demandadas** (top 5)
2. **Brecha de habilidades** - qué les falta a los egresados para ser más competitivos
3. **Plan de mejora de 12 semanas** con pasos concretos
4. **Recomendación de certificaciones** basadas en las ofertas

Usa un tono profesional, motivador y técnico. Formatea con Markdown.
    `;

    return this.callGemini(prompt);
  }

  /**
   * Diagnóstico de CV basado en ofertas objetivo
   */
  async diagnoseCV(cvText: string, targetJobs: { title: string; tags: string[] }[]): Promise<string> {
    const prompt = `
Eres un experto en reclutamiento técnico evaluando CVs.

CV del candidato:
${cvText}

Ofertas objetivo:
${JSON.stringify(targetJobs, null, 2)}

Genera:
1. **Puntuación de compatibilidad**: X/100
2. **Fortalezas** identificadas
3. **Debilidades** para las ofertas objetivo
4. **Sugerencias de redacción** para mejorar el CV
5. **Palabras clave faltantes** que debería incluir

Sé específico y constructivo. Formatea con Markdown.
    `;

    return this.callGemini(prompt);
  }

  /**
   * Valida requisitos de una oferta para empresas
   */
  async validateJobRequirements(title: string, requirements: string[], industryStandards: string[]): Promise<string> {
    const prompt = `
Eres un consultor de RRHH experto en tecnología.

Oferta: ${title}
Requisitos actuales: ${JSON.stringify(requirements)}
Estándares de la industria: ${JSON.stringify(industryStandards)}

Analiza si los requisitos son:
1. **Realistas** - ¿Están al nivel de la industria?
2. **Necesarios** - ¿Hay requisitos innecesarios que ahuyenten candidatos?
3. **Inclusivos** - ¿Podrían discrimininar injustamente?
4. **Sugerencias** - ¿Qué agregar o quitar?

Proporciona un análisis estructurado con recomendaciones concretas. Formatea con Markdown.
    `;

    return this.callGemini(prompt);
  }

  private async callGemini(prompt: string): Promise<string> {
    if (!this.apiKey) {
      return 'Error: Gemini API Key no configurada. Agrega GEMINI_API_KEY en environment.ts';
    }

    const url = `${this.apiUrl}?key=${this.apiKey}`;

    const request: GeminiRequest = {
      contents: [{
        parts: [{ text: prompt }]
      }],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 2048,
      }
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(request)
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'Error al llamar Gemini API');
      }

      const data: GeminiResponse = await response.json();
      return data.candidates[0]?.content.parts[0]?.text || 'No se recibió respuesta';
    } catch (error) {
      console.error('Gemini API Error:', error);
      return `Error al conectar con Gemini: ${error instanceof Error ? error.message : 'Error desconocido'}`;
    }
  }
}
