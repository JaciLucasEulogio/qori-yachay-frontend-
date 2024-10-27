# Documentación API MVP - Qoriyachay

## Base URL
```
http://localhost:3000/api
```

## 1. Obtener Ruta de Aprendizaje Personalizada

### Endpoint
```http
POST /students
```

### Request Body
```json
{
    "datos_basicos": {
        "nombres": "Juan",
        "apellidos": "Pérez",
        "correo": "juan@ejemplo.com"
    },
    "perfil_academico": {
        "carrera": "Ingeniería de Software",
        "ciclo": 5,
        "intereses": ["desarrollo web", "frontend", "javascript"]
    }
}
```

### Response (200 OK)
```json
{
    "success": true,
    "data": {
        "mainRecommendation": {
            "path": {
                "nombre_ruta": "Desarrollo Web Full Stack",
                "descripcion": "Ruta completa para desarrollo web",
                "modulos": [
                    {
                        "nombre": "Fundamentos de Programación",
                        "orden": 1,
                        "duracion_estimada": "2 semanas",
                        "contenido": [
                            {
                                "tipo": "video",
                                "titulo": "Introducción a la Programación",
                                "descripcion": "Conceptos básicos",
                                "tiempo_estimado": 60
                            }
                        ]
                    },
                    // ... más módulos
                ]
            },
            "confidence": 0.85  // Puntuación de coincidencia
        }
    }
}
```

## 2. Ejemplo de Uso en Frontend

```javascript
// Función para obtener la ruta de aprendizaje
async function obtenerRutaAprendizaje(datosUsuario) {
    try {
        const response = await fetch('http://localhost:3000/api/students', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datosUsuario)
        });

        const data = await response.json();

        if (data.success) {
            // Mostrar la ruta recomendada
            mostrarRuta(data.data.mainRecommendation.path);
        } else {
            throw new Error('Error al obtener la ruta');
        }
    } catch (error) {
        console.error('Error:', error);
        // Mostrar mensaje de error al usuario
    }
}

// Ejemplo de uso
const datosUsuario = {
    datos_basicos: {
        nombres: "Juan",
        apellidos: "Pérez",
        correo: "juan@ejemplo.com"
    },
    perfil_academico: {
        carrera: "Ingeniería de Software",
        ciclo: 5,
        intereses: ["desarrollo web", "frontend"]
    }
};

// Llamar a la función cuando el usuario envíe el formulario
formulario.onSubmit(() => obtenerRutaAprendizaje(datosUsuario));
```

## 3. Notas Importantes

1. **Campos Requeridos:**
   - Todos los campos en `datos_basicos` son obligatorios
   - En `perfil_academico`, carrera y ciclo son obligatorios
   - Se debe incluir al menos un interés

2. **Consideraciones:**
   - El ciclo debe ser un número entre 1 y 10
   - Los intereses ayudan a mejorar la precisión de la recomendación
   - El campo `confidence` indica qué tan bien se ajusta la ruta al perfil

3. **Manejo de Errores:**
```javascript
{
    "success": false,
    "message": "Mensaje de error específico"
}
```

## 4. Flujo de la Aplicación

1. Usuario ingresa sus datos en el formulario inicial
2. Frontend envía los datos al endpoint
3. Backend procesa la información y retorna una ruta personalizada
4. Frontend muestra la ruta con sus módulos y contenido

## 5. Ejemplo de Interfaz Recomendada

```jsx
// Formulario inicial
<form onSubmit={handleSubmit}>
    <div className="form-group">
        <input 
            type="text" 
            name="nombres" 
            placeholder="Nombres"
            required 
        />
        <input 
            type="text" 
            name="apellidos" 
            placeholder="Apellidos"
            required 
        />
        <input 
            type="email" 
            name="correo" 
            placeholder="Correo"
            required 
        />
        <select name="carrera" required>
            <option value="">Selecciona tu carrera</option>
            <option value="Ingeniería de Software">Ingeniería de Software</option>
            {/* Más opciones */}
        </select>
        <select name="ciclo" required>
            {[...Array(10)].map((_, i) => (
                <option key={i+1} value={i+1}>Ciclo {i+1}</option>
            ))}
        </select>
        {/* Selector de intereses */}
    </div>
    <button type="submit">Obtener Ruta de Aprendizaje</button>
</form>

// Visualización de la ruta
<div className="ruta-container">
    <h2>{ruta.nombre_ruta}</h2>
    <p>{ruta.descripcion}</p>
    
    <div className="modulos">
        {ruta.modulos.map(modulo => (
            <div key={modulo.orden} className="modulo-card">
                <h3>{modulo.nombre}</h3>
                <span>{modulo.duracion_estimada}</span>
                
                <div className="contenido">
                    {modulo.contenido.map(item => (
                        <div className="contenido-item">
                            <span>{item.tipo}</span>
                            <h4>{item.titulo}</h4>
                            <p>{item.descripcion}</p>
                            <span>{item.tiempo_estimado} min</span>
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </div>
</div>
```