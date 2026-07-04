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
    { id: 9, nivel: 2, nombre: "Física II", corrCursar: [1, 5], corrAprobar: [] },
    { id: 10, nivel: 2, nombre: "Probabilidad y Estadística", corrCursar: [1, 2], corrAprobar: [] },
    { id: 11, nivel: 2, nombre: "Electrotecnia I", corrCursar: [1, 2, 5], corrAprobar: [] },
    { id: 12, nivel: 2, nombre: "Estabilidad", corrCursar: [2, 5], corrAprobar: [] },
    { id: 13, nivel: 2, nombre: "Mecánica Técnica", corrCursar: [1, 5], corrAprobar: [] },
    { id: 14, nivel: 2, nombre: "Integración Eléctrica II", corrCursar: [1, 5, 7], corrAprobar: [] },
    { id: 15, nivel: 2, nombre: "Inglés I", corrCursar: [], corrAprobar: [] },
    { id: 16, nivel: 2, nombre: "Análisis Matemático II", corrCursar: [1, 2], corrAprobar: [] },
    { id: 17, nivel: 2, nombre: "Cálculo Numérico", corrCursar: [1, 2], corrAprobar: [] },

    // --- NIVEL 3 ---
    { id: 18, nivel: 3, nombre: "Tecnologías y Ensayos de Mat. Eléctricos", corrCursar: [6, 9], corrAprobar: [1, 5] },
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
    { id: 34, nivel: 4, nombre: "Legislación", corrCursar: [14], corrAprobar: [3] },

    // --- NIVEL 5 ---
    { id: 35, nivel: 5, nombre: "Electrónica II", corrCursar: [28], corrAprobar: [11] },
    { id: 36, nivel: 5, nombre: "Generación, Transmisión y Distribución", corrCursar: [21, 29, 33], corrAprobar: [12, 13, 18, 22, 23, 24] },
    { id: 37, nivel: 5, nombre: "Sistemas de Potencia", corrCursar: [29], corrAprobar: [18, 22, 23] },
    { id: 38, nivel: 5, nombre: "Accionamientos y Controles Eléctricos", corrCursar: [28, 29, 32], corrAprobar: [11, 18, 22, 23, 25] },
    { id: 39, nivel: 5, nombre: "Organización y Administración de Empresas", corrCursar: [27, 34], corrAprobar: [14] },
    { id: 40, nivel: 5, nombre: "Proyecto Final", corrCursar: [29, 31, 32], corrAprobar: [18, 22, 23, 25, 26] } 
];

const estadoMaterias = {};
materias.forEach(m => estadoMaterias[m.id] = 'nada');

try {
    const guardado = localStorage.getItem('estadoMallaElectrica');
    if (guardado) {
        const datosParseados = JSON.parse(guardado);
        Object.keys(datosParseados).forEach(id => {
            estadoMaterias[id] = datosParseados[id];
        });
    }
} catch (e) {
    console.error("Error al cargar localStorage", e);
}

function init() {
    materias.forEach(materia => {
        const column = document.querySelector(`#nivel-${materia.nivel} .materias-list`);
        if (column) column.appendChild(createMateriaCard(materia));
    });
    actualizarMalla();
}

function createMateriaCard(materia) {
    const card = document.createElement('div');
    card.className = `materia-card`;
    card.id = `materia-${materia.id}`;
    
    // DESCRIPCIÓN CORREGIDA: Separa visualmente qué necesitás regularizar y qué aprobar para poder cursar
    let infoHTML = '';
    if (materia.corrCursar.length) {
        infoHTML += `• <strong>Regularizar para cursar:</strong> ${materia.corrCursar.join(', ')}<br>`;
    }
    if (materia.corrAprobar.length) {
        infoHTML += `• <strong>Aprobar para cursar:</strong> ${materia.corrAprobar.join(', ')}`;
    }
    if (!materia.corrCursar.length && !materia.corrAprobar.length) {
        infoHTML = 'Sin correlativas';
    }

    card.innerHTML = `
        <div>
            <div class="materia-title">(${materia.id}) ${materia.nombre}</div>
            <div class="materia-info">${infoHTML}</div>
        </div>
        <div class="btn-group">
            <button onclick="cambiarEstado(${materia.id}, 'cursada')" id="btn-reg-${materia.id}">Regular</button>
            <button onclick="cambiarEstado(${materia.id}, 'aprobada')" id="btn-apr-${materia.id}">Aprobada</button>
        </div>
    `;
    return card;
}

window.cambiarEstado = function(id, tipo) {
    estadoMaterias[id] = (estadoMaterias[id] === tipo) ? 'nada' : tipo;
    localStorage.setItem('estadoMallaElectrica', JSON.stringify(estadoMaterias));
    actualizarMalla();
}

function actualizarMalla() {
    materias.forEach(m => {
        const card = document.getElementById(`materia-${m.id}`);
        const btnReg = document.getElementById(`btn-reg-${m.id}`);
        const btnApr = document.getElementById(`btn-apr-${m.id}`);
        
        if (!card || !btnReg || !btnApr) return;
        
        btnReg.className = ''; btnApr.className = '';
        btnReg.disabled = false; btnApr.disabled = false;

        if (estadoMaterias[m.id] === 'aprobada') {
            card.className = "materia-card aprobada";
            btnApr.className = "active-aprobada";
            return;
        } 
        if (estadoMaterias[m.id] === 'cursada') {
            card.className = "materia-card cursada";
            btnReg.className = "active-regular";
        }

        // LÓGICA DE PULSADO DE BOTONES REVISADA:
        // Para poder cursarla (habilitar botón Regular): 
        // 1. Las de 'corrCursar' deben estar mínimo cursadas o aprobadas.
        // 2. Las de 'corrAprobar' deben estar obligatoriamente aprobadas con final.
        const tieneRegularesParaCursar = m.corrCursar.every(cid => estadoMaterias[cid] === 'cursada' || estadoMaterias[cid] === 'aprobada');
        const tieneAprobadasParaCursar = m.corrAprobar.every(cid => estadoMaterias[cid] === 'aprobada');

        if (tieneRegularesParaCursar && tieneAprobadasParaCursar) {
            if (estadoMaterias[m.id] !== 'cursada') card.className = "materia-card disponible";
            btnReg.disabled = false;
            
            // Para poder meter el final de ESTA materia, lógicamente tenés que haber aprobado los finales de sus corrCursar también
            const tieneTodoAprobado = m.corrCursar.every(cid => estadoMaterias[cid] === 'aprobada');
            btnApr.disabled = !tieneTodoAprobado;
        } else {
            estadoMaterias[m.id] = 'nada';
            card.className = "materia-card bloqueada";
            btnReg.disabled = true; 
            btnApr.disabled = true;
        }
    });
}

document.addEventListener("DOMContentLoaded", init);
