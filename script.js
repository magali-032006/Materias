const materias = [
    // --- NIVEL 1 ---
    { id: 1, nivel: 1, nombre: "Análisis Matemático I", correlativas: [] },
    { id: 2, nivel: 1, nombre: "Álgebra y Geometría Analítica", correlativas: [] },
    { id: 3, nivel: 1, nombre: "Ingeniería y Sociedad", correlativas: [] },
    { id: 4, nivel: 1, nombre: "Sistemas de Representación", correlativas: [] },
    { id: 5, nivel: 1, nombre: "Física I", correlativas: [] },
    { id: 6, nivel: 1, nombre: "Química General", correlativas: [] },
    { id: 7, nivel: 1, nombre: "Integración Eléctrica I", correlativas: [] },
    { id: 8, nivel: 1, nombre: "Fundamentos de Informática", correlativas: [] },

    // --- NIVEL 2 ---
    { id: 9, nivel: 2, nombre: "Física II", correlativas: [1, 5] },
    { id: 10, nivel: 2, nombre: "Probabilidad y Estadística", correlativas: [1, 2] },
    { id: 11, nivel: 2, nombre: "Electrotecnia I", correlativas: [1, 2, 5] },
    { id: 12, nivel: 2, nombre: "Estabilidad", correlativas: [2, 5] },
    { id: 13, nivel: 2, nombre: "Mecánica Técnica", correlativas: [1, 5] },
    { id: 14, nivel: 2, nombre: "Integración Eléctrica II", correlativas: [1, 5, 7] },
    { id: 15, nivel: 2, nombre: "Inglés I", correlativas: [] },
    { id: 16, nivel: 2, nombre: "Análisis Matemático II", correlativas: [1, 2] },
    { id: 17, nivel: 2, nombre: "Cálculo Numérico", correlativas: [1, 2] },

    // --- NIVEL 3 ---
    { id: 18, nivel: 3, nombre: "Tecnologías y Ensayos de Mat. Eléctricos", correlativas: [6, 9] },
    { id: 19, nivel: 3, font: "Instrumentos", nombre: "Instrumentos y Mediciones Eléctricas", correlativas: [10, 11, 14] },
    { id: 20, nivel: 3, nombre: "Teoría de los Campos", correlativas: [9, 16] },
    { id: 21, nivel: 3, nombre: "Física III", correlativas: [9, 16] },
    { id: 22, nivel: 3, nombre: "Máquinas Eléctricas I", correlativas: [9, 11, 14] },
    { id: 23, nivel: 3, nombre: "Electrotecnia II", correlativas: [9, 11, 16] },
    { id: 24, nivel: 3, nombre: "Termodinámica", correlativas: [9, 16] },
    { id: 25, nivel: 3, nombre: "Fundamentos para el Análisis de Señales", correlativas: [16, 17] },

    // --- NIVEL 4 ---
    { id: 26, nivel: 4, nombre: "Inglés II", correlativas: [15] },
    { id: 27, nivel: 4, nombre: "Economía", correlativas: [14, 3] },
    { id: 28, nivel: 4, nombre: "Electrónica I", correlativas: [11] },
    { id: 29, nivel: 4, nombre: "Máquinas Eléctricas II", correlativas: [18, 20, 22, 23] },
    { id: 30, nivel: 4, nombre: "Seguridad, Riesgo Eléctrico y M.A.", correlativas: [11, 20] },
    { id: 31, nivel: 4, nombre: "Instalaciones Eléctricas y Luminotecnia", correlativas: [18, 22, 23] },
    { id: 32, nivel: 4, nombre: "Control Automático", correlativas: [23, 25] },
    { id: 33, nivel: 4, nombre: "Máq. Térmicas, Hidráulicas y de Fluido", correlativas: [12, 13, 24] },
    { id: 34, nivel: 4, nombre: "Legislación", correlativas: [14, 3] },

    // --- NIVEL 5 ---
    { id: 35, nivel: 5, nombre: "Electrónica II", correlativas: [28] },
    { id: 36, nivel: 5, nombre: "Generación, Transmisión y Distribución", correlativas: [21, 29, 33] },
    { id: 37, nivel: 5, nombre: "Sistemas de Potencia", correlativas: [29] },
    { id: 38, nivel: 5, nombre: "Accionamientos y Controles Eléctricos", correlativas: [28, 29, 32] },
    { id: 39, nivel: 5, nombre: "Organización y Administración de Empresas", correlativas: [27, 34] },
    { id: 40, nivel: 5, nombre: "Proyecto Final", correlativas: [29, 31, 32, 26] } 
];

const estadoMaterias = {};
materias.forEach(m => estadoMaterias[m.id] = 'nada');

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
    
    // TEXTO CORREGIDO: Ahora solo muestra las correlativas directas necesarias para destrabarla
    card.innerHTML = `
        <div>
            <div class="materia-title">(${materia.id}) ${materia.nombre}</div>
            <div class="materia-info">
                ${materia.correlativas.length ? `• <strong>Requiere Regularizar:</strong> ${materia.correlativas.join(', ')}` : 'Sin correlativas'}
            </div>
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

        // Lógica de funcionamiento correcta de la UTN
        const cumpleCursar = m.correlativas.every(cid => estadoMaterias[cid] === 'cursada' || estadoMaterias[cid] === 'aprobada');
        const cumpleAprobar = m.correlativas.every(cid => estadoMaterias[cid] === 'aprobada');

        if (cumpleCursar) {
            if (estadoMaterias[m.id] !== 'cursada') card.className = "materia-card disponible";
            btnReg.disabled = false; 
            btnApr.disabled = !cumpleAprobar; // El botón de aprobado se bloquea si las de origen no tienen el final hecho
        } else {
            estadoMaterias[m.id] = 'nada';
            card.className = "materia-card bloqueada";
            btnReg.disabled = true; 
            btnApr.disabled = true;
        }
    });
}

document.addEventListener("DOMContentLoaded", init);
