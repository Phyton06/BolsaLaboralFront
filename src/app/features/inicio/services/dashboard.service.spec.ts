import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DashboardService, BackendVacante, BackendEvaluacion } from './dashboard.service';

describe('DashboardService', () => {
  let service: DashboardService;
  let httpMock: HttpTestingController;
  const apiUrl = 'http://localhost:8080';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DashboardService]
    });
    service = TestBed.inject(DashboardService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getRadar', () => {
    it('should normalize radar data from backend', () => {
      const mockRadar = {
        data: {
          labels: ['Python', 'SQL', 'Communication'],
          alumno: [8, 7, 9],
          promedio_carrera: [6, 5, 7]
        }
      };

      service.getRadar().subscribe(result => {
        expect(result).toEqual({
          ejes: ['Python', 'SQL', 'Communication'],
          perfil_actual: [8, 7, 9],
          perfil_ideal: [6, 5, 7]
        });
      });

      const req = httpMock.expectOne(`${apiUrl}/evaluaciones/radar`);
      req.flush(mockRadar);
    });

    it('should return null when labels are empty', () => {
      const mockRadar = { data: { labels: [], alumno: [], promedio_carrera: [] } };

      service.getRadar().subscribe(result => {
        expect(result).toBeNull();
      });

      const req = httpMock.expectOne(`${apiUrl}/evaluaciones/radar`);
      req.flush(mockRadar);
    });
  });

  describe('getEvaluacionesPendientes', () => {
    it('should filter out completed and blocked evaluations', () => {
      const mockEvaluaciones = {
        data: [
          { id: 1, nombre: 'Test 1', tipo: 'PSICOTECNICO', minutos: 30, cantidad_preguntas: 10, completada: false, en_progreso: false, ultimo_puntaje: null, bloqueada: false, mensaje_bloqueo: null, disponible_en: null },
          { id: 2, nombre: 'Test 2', tipo: 'TECNICO', minutos: 45, cantidad_preguntas: 20, completada: true, en_progreso: false, ultimo_puntaje: 85, bloqueada: false, mensaje_bloqueo: null, disponible_en: null },
          { id: 3, nombre: 'Test 3', tipo: 'IDIOMA', minutos: 60, cantidad_preguntas: 30, completada: false, en_progreso: false, ultimo_puntaje: null, bloqueada: true, mensaje_bloqueo: 'Requiere aprobación', disponible_en: null },
        ]
      };

      service.getEvaluacionesPendientes().subscribe(result => {
        expect(result.length).toBe(1);
        expect(result[0].titulo).toBe('Test 1');
      });

      const req = httpMock.expectOne(`${apiUrl}/evaluaciones/catalogo`);
      req.flush(mockEvaluaciones);
    });
  });

  describe('getVacantesRecomendadas', () => {
    it('should sort by match score and limit results', () => {
      const mockVacantes = {
        data: {
          vacantes: [
            { id: 1, titulo: 'Low Match', empresa: 'A', ubicacion: 'X', modalidad: 'Full-time', estatus_convenio: 'Activo', es_externa: false, match: 40, fecha_publicacion: '2026-01-01' },
            { id: 2, titulo: 'High Match', empresa: 'B', ubicacion: 'Y', modalidad: 'Part-time', estatus_convenio: 'Activo', es_externa: false, match: 90, fecha_publicacion: '2026-01-02' },
            { id: 3, titulo: 'Mid Match', empresa: 'C', ubicacion: 'Z', modalidad: 'Full-time', estatus_convenio: 'Activo', es_externa: false, match: 70, fecha_publicacion: '2026-01-03' },
          ],
          meta: { total: 3, page: 1, limit: 10, pages: 1 }
        }
      };

      service.getVacantesRecomendadas(2).subscribe(result => {
        expect(result.length).toBe(2);
        expect(result[0].titulo).toBe('High Match');
        expect(result[1].titulo).toBe('Mid Match');
      });

      const req = httpMock.expectOne(`${apiUrl}/vacantes`);
      req.flush(mockVacantes);
    });
  });
});
