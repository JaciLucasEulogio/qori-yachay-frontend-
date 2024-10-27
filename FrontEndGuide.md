# Guía de Implementación Frontend - Qoriyachay

## 1. Pantalla de Registro/Ingreso de Datos

### Campos Requeridos
```typescript
interface DatosEstudiante {
    datos_basicos: {
        nombres: string;      // Requerido
        apellidos: string;    // Requerido
        correo: string;       // Requerido, formato email
    };
    perfil_academico: {
        carrera: string;      // Requerido
        ciclo: number;        // Requerido (1-10)
        intereses: string[];  // Al menos 1 requerido
    };
}
```

### Sugerencias de Diseño
1. **Formulario en Pasos:**
   ```
   Paso 1: Datos Personales
   - Nombres
   - Apellidos
   - Correo electrónico
   
   Paso 2: Perfil Académico
   - Carrera (Select con opciones predefinidas)
   - Ciclo (Select 1-10)
   
   Paso 3: Intereses
   - Lista de chips/tags seleccionables
   ```

2. **Mejoras Visuales Sugeridas:**
- Agregar una barra de progreso
- Implementar animaciones de transición entre pasos
- Añadir iconos para cada campo
- Incluir validación en tiempo real
- Agregar tooltips informativos
- Usar cards con sombras para mejor jerarquía visual

### Ejemplo de Diseño Mejorado:
```html
<div class="registro-container">
    <!-- Barra de Progreso -->
    <div class="progress-bar">
        <div class="step active">Datos</div>
        <div class="step">Perfil</div>
        <div class="step">Intereses</div>
    </div>

    <!-- Formulario -->
    <form class="registro-form">
        <div class="card">
            <h2>Datos Personales</h2>
            <div class="input-group">
                <i class="icon user"></i>
                <input 
                    type="text" 
                    placeholder="Nombres"
                    class="form-input"
                />
            </div>
            <!-- Más campos... -->
        </div>
    </form>
</div>
```

## 2. Pantalla de Ruta de Aprendizaje

### Datos a Mostrar
```typescript
interface RutaAprendizaje {
    nombre_ruta: string;
    descripcion: string;
    modulos: {
        nombre: string;
        orden: number;
        duracion_estimada: string;
        contenido: Array<{
            tipo: string;
            titulo: string;
            descripcion: string;
            tiempo_estimado: number;
        }>;
    }[];
    metricas: {
        confidence: number;
        similarity: number;
    };
}
```

### Sugerencias de Diseño
1. **Layout Mejorado:**
- Timeline vertical para mostrar la progresión
- Cards expandibles para cada módulo
- Indicadores de progreso circular
- Badges para mostrar la duración
- Iconos relevantes para cada tipo de contenido

2. **Características Adicionales:**
- Botón para descargar ruta en PDF
- Opción para compartir ruta
- Calendario integrado
- Vista de progreso general
- Recomendaciones relacionadas

### Ejemplo de Diseño Mejorado:
```jsx
<div className="ruta-container">
    <header className="ruta-header">
        <h1>{rutaData.nombre_ruta}</h1>
        <div className="confidence-meter">
            <CircularProgress 
                value={rutaData.metricas.confidence * 100} 
            />
            <span>Coincidencia con tu perfil</span>
        </div>
    </header>

    <div className="modulos-timeline">
        {rutaData.modulos.map(modulo => (
            <div className="modulo-card">
                <div className="modulo-header">
                    <i className="icon module"></i>
                    <h3>{modulo.nombre}</h3>
                    <Badge>{modulo.duracion_estimada}</Badge>
                </div>
                <div className="modulo-content">
                    {/* Contenido expandible */}
                </div>
            </div>
        ))}
    </div>

    <div className="acciones">
        <Button icon="download">Descargar PDF</Button>
        <Button icon="share">Compartir</Button>
    </div>
</div>
```

## 3. Sugerencias Adicionales

### Elementos UI/UX
1. **Paleta de Colores:**
   - Principal: #2962FF (azul actual)
   - Secundario: #FF4081
   - Éxito: #00C853
   - Info: #00B0FF
   - Fondo: #F5F7FA

2. **Tipografía:**
   - Títulos: Poppins
   - Texto: Inter
   - Monoespaciado: Roboto Mono

3. **Componentes Interactivos:**
   - Tooltips informativos
   - Skeleton loading
   - Animaciones suaves
   - Feedback visual inmediato

4. **Responsive Design:**
   - Layout fluido
   - Breakpoints estándar
   - Menú colapsable
   - Formularios adaptables

### Características Premium
1. **Dashboard Personal:**
   - Progreso general
   - Estadísticas
   - Logros desbloqueados

2. **Características Sociales:**
   - Compartir progreso
   - Grupos de estudio
   - Foro de discusión

3. **Gamificación:**
   - Sistema de puntos
   - Badges por logros
   - Rankings

4. **Herramientas Extra:**
   - Calendario de estudios
   - Recordatorios
   - Notas personales
