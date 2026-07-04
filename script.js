// Base de datos de las asignaturas según el PDF de la UTN
const materias = [
    // --- NIVEL 1 ---
    { id: 1, nivel: 1, nombre: "Análisis Matemático I", corrCursar: [], corrAprobar: [] },
    { id: 2, nivel: 1, nombre: "Álgebra y Geometría Analítica", corrCursar: [], corrAprobar: [] },
    { id: 3, nivel: 1, nombre: "Ingeniería y Sociedad", corrCursar: [], corrAprobar: [] },
    { id: 4, nivel: 1, nombre: "Sistemas de Representación", corrCursar: [], corrAprobar: [] },
    { id: 5, nivel: 1, nombre: "Física I", corrCursar: [], corrAprobar: [] },
    { id: 6, nivel: 1, nombre: "Química General", corrCursar: [], corrAprobar: [] },
    { id: 7, nivel: 1, nombre: "Integración Eléctrica I", corrCursar: [], corrAprobar: [] },
    { id: 8, nivel: 1, nombre: "Fundamentos de Informática", corrCursar: [], corrAprobar: [] },

    // --- NIVEL 2 ---
    { id: 9, nivel: 2, nombre: "Física II", corrCursar: [1, 5], corrAprobar: [1, 5] },
    { id: 10, nivel: 2, nombre: "Probabilidad y Estadística", corrCursar: [1, 2], corrAprobar: [1, 2] },
    { id: 11, nivel: 2, nombre: "Electrotecnia I", corrCursar: [1, 2, 5], corrAprobar: [1, 2, 5] },
    { id: 12, nivel: 2, nombre: "Estabilidad", corrCursar: [2, 5], corrAprobar: [2, 5] },
    { id: 13, nivel: 2, nombre: "Mecánica Técnica", corrCursar: [1, 5], corrAprobar: [1, 5] },
    { id: 14, nivel: 2, nombre: "Integración Eléctrica II", corrCursar: [1, 5, 7], corrAprobar: [1, 5, 7] },
    { id: 15, nivel: 2, font: "Inglés I", nombre: "Inglés I", corrCursar: [], corrAprobar: [] },
    { id: 16, nivel: 2, nombre: "Análisis Matemático II", corrCursar: [1, 2], corrAprobar: [1, 2] },
    { id: 17, nivel: 2, nombre: "Cálculo Numérico", corrCursar: [1, 2], corrAprobar: [1, 2] },

    // --- NIVEL 3 ---
    { id: 18, nivel: 3, nombre: "Tecnologías y Ensayos de Mat. Eléctricos", corrCursar: [6, 9], corrAprobar: [1, 5] }, // cursada 6-9, aprobada 1-5 para cursar, final exige 6-9 aprobadas
    { id: 19, nivel: 3, nombre: "Instrumentos y Mediciones Eléctricas", corrCursar: [10, 11, 14], corrAprobar: [1, 2, 3, 4, 5, 7] },
    { id: 20, nivel: 3, nombre: "Teoría de los Campos", corrCursar: [9, 16], corrAprobar: [1, 2, 5] },
    { id: 21, nivel: 3, nombre: "Física III", corrCursar: [9, 16], corrAprobar: [1, 2, 5] },
    { id: 22, nivel: 3, nombre: "Máquinas Eléctricas I", corrCursar: [9, 11, 14], corrAprobar: [1, 5, 7, 8] },
    { id: 23, nivel: 3, nombre: "Electrotecnia II", corrCursar: [9, 11, 16], corrAprobar: [1, 2, 5] },
    { id: 24, nivel: 3, nombre: "Termodinámica", corrCursar: [9, 16], corrAprobar: [1, 2, 5] },
    { id: 25, nivel: 3, nombre: "Fundamentos para el Análisis de Señales", corrCursar: [16, 17], corrAprobar: [1, 2] },

    // --- NIVEL 4 ---
    { id: 26, nivel: 4, nombre: "Inglés II", corrCursar: [], corrAprobar: [15] },
    { id: 27, nivel: 4, nombre: "Economía", corrCursar: [14], corrAprobar: [3] },
    { id: 28, nivel: 4, nombre: "Electrónica I", corrCursar: [11], corrAprobar: [1, 5] },
    { id: 29, nivel: 4, nombre: "Máquinas Eléctricas II", corrCursar: [18, 20, 22, 23], corrAprobar: [6, 9, 10, 11, 14, 16] },
    { id: 30, nivel: 4, nombre: "Seguridad, Riesgo Eléctrico y M.A.", corrCursar: [11, 20], corrAprobar: [1, 2, 5, 9, 16] },
    { id: 31, nivel: 4, nombre: "Instalaciones Eléctricas y Luminotecnia", corrCursar: [18, 22, 23], corrAprobar: [6, 9, 11, 14, 15, 16] },
    { id: 32, nivel: 4, nombre: "Control Automático", corrCursar: [23, 25], corrAprobar: [11, 16] },
    { id: 33, nivel: 4, nombre: "Máq. Térmicas, Hidráulicas y de Fluido", corrCursar: [12, 13, 24], corrAprobar: [9, 16] },
    { id: 34, nivel: 4, font: "Legislación", nombre: "Legislación", corrCursar: [14], corrAprobar: [3] },

    // --- NIVEL 5 ---
    { id: 35, nivel: 5, nombre: "Electrónica II", corrCursar: [28], corrAprobar: [11] },
    { id: 36, nivel: 5, nombre: "Generación, Transmisión y Distribución", corrCursar: [21, 29, 33], corrAprobar: [12, 13, 18, 22, 23, 24] },
    { id: 37, nivel: 5, nombre: "Sistemas de Potencia", corrCursar: [29], corrAprobar: [18, 22, 23] },
    { id: 38, nivel: 5, nombre: "Accionamientos y Controles Eléctricos", corrCursar: [28, 29, 32], corrAprobar: [11, 18, 22, 23, 25] },
    { id: 39, nivel: 5, nombre: "Organización y Administración de Empresas", corrCursar: [27, 34], corrAprobar: [14] },
    { id: 40, nivel: 5, nombre: "Proyecto Final", corrCursar: [29, 31, 32], corrAprobar: [18, 22, 23, 25, 26] } 
];

// Estado del usuario: guarda si una materia está 'cursada' (regular), 'aprobada' (final) o 'nada'
const estadoMaterias = {};
materias.forEach(m => estadoMaterias[m.id] = 'nada');

// Inicializar la interfaz
function init() {
    materias.forEach(materia => {
        const column = document.querySelector(`#nivel-${materia.nivel} .materias-list`);
        if (column) {
            column.appendChild(createMateriaCard(materia));
        }
    });
    actualizarMalla();
}

// Crear el elemento HTML de la materia
function createMateriaCard(materia) {
    const card = document.createElement('div');
    card.className = `materia-card`;
    card.id = `materia-${materia.id}`;
    
    card.innerHTML = `
        <div class="materia-title">(${materia.id}) ${materia.nombre}</div>
        <div class="materia-info">
            ${materia.corrCursar.length ? `<strong>Req. Regular:</strong> ${materia.corrCursar.join(', ')}<br>` : ''}
            ${materia.corrAprobar.length ? `<strong>Req. Final:</strong> ${materia.corrAprobar.join(', ')}` : ''}
        </div>
        <div class="btn-group">
            <button onclick="cambiarEstado(${materia.id}, 'cursada')" id="btn-reg-${materia.id}">Regular</button>
            <button onclick="cambiarEstado(${materia.id}, 'aprobada')" id="btn-fin-${materia.id}">Final</button>
        </div>
    `;
    return card;
}

// Cambiar el estado al hacer click
window.cambiarEstado = function(id, tipo) {
    if (estadoMaterias[id] === tipo) {
        estadoMaterias[id] = 'nada'; // Desmarcar si ya estaba seleccionado
    } else {
        estadoMaterias[id] = tipo;
    }
    actualizarMalla();
}

// Recalcular qué materias se bloquean o desbloquean
function actualizarMalla() {
    materias.forEach(m => {
        const card = document.getElementById(`materia-${m.id}`);
        const btnReg = document.getElementById(`btn-reg-${m.id}`);
        const btnFin = document.getElementById(`btn-fin-${m.id}`);
        
        // Reiniciar clases de botones
        btnReg.className = '';
        btnFin.className = '';

        // Si ya está aprobada o regularizada por el usuario
        if (estadoMaterias[m.id] === 'aprobada') {
            card.className = "materia-card aprobada";
            btnFin.className = "active-final";
            return;
        } else if (estadoMaterias[m.id] === 'cursada') {
            card.className = "materia-card cursada";
            btnReg.className = "active-regular";
        }

        // --- LÓGICA DE CORRELATIVIDADES ---
        // Para poder cursar una materia, sus "corrCursar" deben estar al menos Cursadas/Aprobadas, 
        // Y sus "corrAprobar" (las correlativas de aprobación para cursar) tienen que estar APROBADAS con final.
        const cumpleCorrCursar = m.corrCursar.every(cid => estadoMaterias[cid] === 'cursada' || estadoMaterias[cid] === 'aprobada');
        const cumpleCorrAprobar = m.corrAprobar.every(cid => estadoMaterias[cid] === 'aprobada');

        // Caso especial de Proyecto Final que pide "TODAS" aprobadas para rendir, pero para cursar pide estas específicas.
        
        if (cumpleCorrCursar && cumpleCorrAprobar) {
            if (estadoMaterias[m.id] !== 'cursada') {
                card.className = "materia-card disponible";
            }
        } else {
            // Si no cumple, se bloquea y se resetea su estado por si se le bloqueó la cadena por detrás
            estadoMaterias[m.id] = 'nada';
            card.className = "materia-card bloqueada";
        }
    });
}

document.addEventListener("DOMContentLoaded", init);
