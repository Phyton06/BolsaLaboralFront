import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { ChipComponent } from '../../../../shared/components/chip/chip.component';
import { PerfilEgresado } from '../../interfaces/perfil-egresado';
import { PerfilService } from '../../services/perfil.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-perfil-cv-preview',
  standalone: true,
  imports: [CommonModule, IconComponent, ChipComponent],
  templateUrl: './perfil-cv-preview.component.html',
  styleUrl: './perfil-cv-preview.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerfilCvPreviewComponent {
  readonly perfil = input<PerfilEgresado | null>(null);
  readonly generating = input<boolean>(false);

  readonly generatePdf = output<void>();

  private readonly perfilService = inject(PerfilService);
  readonly nombreCompleto = this.perfilService.nombreCompleto;

  onGeneratePdf(): void {
    const p = this.perfil();
    if (!p) return;
    this.generatePdf.emit();
    this.createPdf(p);
  }

  private createPdf(p: PerfilEgresado): void {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    const contentWidth = pageWidth - margin * 2;
    let y = 20;

    // Helper: check page break
    const checkPage = (needed: number) => {
      if (y + needed > 270) {
        doc.addPage();
        y = 20;
      }
    };

    // Helper: section header
    const sectionHeader = (title: string) => {
      checkPage(20);
      doc.setDrawColor(15, 107, 52); // brand-700
      doc.setLineWidth(0.5);
      doc.line(margin, y, pageWidth - margin, y);
      y += 8;
      doc.setFontSize(13);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(15, 107, 52);
      doc.text(title, margin, y);
      y += 8;
      doc.setTextColor(0, 0, 0);
    };

    // ─── Header ───────────────────────────────────────────────────
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(30, 30, 30);
    doc.text(this.nombreCompleto(), margin, y);
    y += 8;

    if (p.carrera) {
      doc.setFontSize(12);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(15, 107, 52);
      doc.text(p.carrera, margin, y);
      y += 6;
    }

    if (p.division) {
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(p.division, margin, y);
      y += 6;
    }

    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text(`Período de egreso: ${p.periodo_egreso}`, margin, y);
    y += 10;

    // ─── Contact ──────────────────────────────────────────────────
    if (p.contacto) {
      const parts: string[] = [];
      if (p.contacto.telefono) parts.push(`Tel: ${p.contacto.telefono}`);
      if (p.contacto.correo_personal) parts.push(p.contacto.correo_personal);
      if (p.contacto.linkedin) parts.push(p.contacto.linkedin);

      if (parts.length) {
        doc.setFontSize(9);
        doc.setTextColor(80, 80, 80);
        doc.text(parts.join('  |  '), margin, y);
        y += 10;
        doc.setTextColor(0, 0, 0);
      }
    }

    // ─── Biography ────────────────────────────────────────────────
    if (p.biografia_ia) {
      sectionHeader('Perfil Profesional');
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(50, 50, 50);
      const lines = doc.splitTextToSize(p.biografia_ia, contentWidth);
      doc.text(lines, margin, y);
      y += lines.length * 5 + 8;
    }

    // ─── Skills ───────────────────────────────────────────────────
    if (p.habilidades) {
      sectionHeader('Habilidades');
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');

      const renderSkills = (label: string, skills: string[]) => {
        if (!skills.length) return;
        checkPage(12);
        doc.setFont('helvetica', 'bold');
        doc.text(label, margin, y);
        y += 6;
        doc.setFont('helvetica', 'normal');
        const text = skills.join(' • ');
        const skillLines = doc.splitTextToSize(text, contentWidth);
        doc.text(skillLines, margin + 4, y);
        y += skillLines.length * 5 + 4;
      };

      renderSkills('Técnicas:', p.habilidades.tecnicas);
      renderSkills('Blandas:', p.habilidades.blandas);
      renderSkills('Idiomas:', p.habilidades.idiomas);
      y += 4;
    }

    // ─── Experience ───────────────────────────────────────────────
    if (p.trayectoria?.length) {
      sectionHeader('Experiencia Laboral');
      const tipoLabels: Record<string, string> = {
        practicas: 'Prácticas',
        trabajo: 'Trabajo',
        voluntariado: 'Voluntariado',
        otro: 'Otro',
      };

      const sorted = [...p.trayectoria].sort((a, b) => b.fecha.localeCompare(a.fecha));

      for (const entry of sorted) {
        checkPage(25);
        doc.setFontSize(11);
        doc.setFont('helvetica', 'bold');
        doc.text(entry.empresa, margin, y);
        y += 6;

        doc.setFontSize(9);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(100, 100, 100);
        doc.text(`${tipoLabels[entry.tipo] || entry.tipo}  |  ${entry.fecha}`, margin, y);
        y += 6;
        doc.setTextColor(0, 0, 0);

        if (entry.descripcion) {
          doc.setFontSize(10);
          const descLines = doc.splitTextToSize(entry.descripcion, contentWidth);
          doc.text(descLines, margin, y);
          y += descLines.length * 5 + 6;
        }
        y += 4;
      }
    }

    // ─── Download ─────────────────────────────────────────────────
    const nombre = p.nombre.toLowerCase().replace(/\s+/g, '-');
    const apellido = p.apellido_paterno.toLowerCase().replace(/\s+/g, '-');
    doc.save(`cv-${nombre}-${apellido}.pdf`);
  }
}
