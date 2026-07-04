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

    // --- NIVEL 2 --- (Solo listamos qué materias necesitás de base)
    { id: 9, nivel: 2, nombre: "Física II", correlativas: [1, 5] },
    { id: 10, nivel: 2, nombre: "Probabilidad y Estadística", correlativas: [1, 2] },
    { id: 11, nivel: 2, nombre: "Electrotecnia I", correlativas: [1, 2, 5] },
    { id: 12, nivel: 2, nombre: "Estabilidad", correlativas: [2, 5] },
    { id: 13, nivel: 2, nombre: "Mecánica Técnica", correlativas: [1, 5] },
    { id: 14, nivel: 2, nombre: "Integración Eléctrica II", correlativas: [1, 5, 7] },
    { id: 15, nivel: 2, nombre: "Inglés I", correlativas: [] },
    { id: 16, nivel: 2, nombre: "Análisis Matemático II", correlativas: [1, 2] },
    { id: 17, nivel: 2, nombre: "Cálculo Numérico", correlativas: [1, 2] }
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
    card.innerHTML = `
        <div>
            <div class="materia-title">(${materia.id}) ${materia.nombre}</div>
            <div class="materia-info">
                ${materia.correlativas.length ? `<strong>Correlativas:</strong> ${materia.correlativas.join(', ')}` : 'Ninguna'}
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

        // LÓGICA DIRECTA:
        // Para poder cursarla (poner Regular), las correlativas tienen que estar al menos cursadas o aprobadas
        const puedeCursar = m.correlativas.every(cid => estadoMaterias[cid] === 'cursada' || estadoMaterias[cid] === 'aprobada');
        
        // Para poder aprobarla (poner Final), las correlativas tienen que estar aprobadas sí o sí
        const puedeAprobar = m.correlativas.every(cid => estadoMaterias[cid] === 'aprobada');

        if (puedeCursar) {
            if (estadoMaterias[m.id] !== 'cursada') card.className = "materia-card disponible";
            btnReg.disabled = false;
            btnApr.disabled = !puedeAprobar; // Si no tiene los finales de las correlativas, bloquea el botón de aprobado
        } else {
            estadoMaterias[m.id] = 'nada';
            card.className = "materia-card bloqueada";
            btnReg.disabled = true; 
            btnApr.disabled = true;
        }
    });
}

document.addEventListener("DOMContentLoaded", init);
