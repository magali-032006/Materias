function actualizarMalla() {
    materias.forEach(m => {
        const card = document.getElementById(`materia-${m.id}`);
        const btnReg = document.getElementById(`btn-reg-${m.id}`);
        const btnApr = document.getElementById(`btn-apr-${m.id}`);
        
        // Reiniciar clases de botones
        btnReg.className = '';
        btnApr.className = '';

        // Si el usuario ya la marcó como APROBADA
        if (estadoMaterias[m.id] === 'aprobada') {
            card.className = "materia-card aprobada";
            btnApr.className = "active-aprobada";
            return;
        } 
        
        // Si el usuario la marcó como REGULAR
        if (estadoMaterias[m.id] === 'cursada') {
            card.className = "materia-card cursada";
            btnReg.className = "active-regular";
        }

        // --- NUEVA LÓGICA DE CORRELATIVIDADES ---
        
        // 1. ¿Puedo cursarla? (Tener las correlativas necesarias al menos "regulares" o "aprobadas")
        const cumpleCorrCursar = m.corrCursar.every(cid => estadoMaterias[cid] === 'cursada' || estadoMaterias[cid] === 'aprobada');

        // 2. ¿Puedo aprobarla / rendir el final? (Tener las correlativas de aprobación "aprobadas" con final)
        const cumpleCorrAprobar = m.corrAprobar.every(cid => estadoMaterias[cid] === 'aprobada');

        if (cumpleCorrCursar) {
            // Si cumple para cursar y no está marcada como regular, queda en color "disponible" (amarillo)
            if (estadoMaterias[m.id] !== 'cursada') {
                card.className = "materia-card disponible";
            }
            
            // Habilitar o deshabilitar el botón de "Aprobada" según si podés rendir el final
            if (cumpleCorrAprobar) {
                btnApr.disabled = false;
                btnApr.style.opacity = "1";
            } else {
                // Si la estás cursando pero no podés rendir el final todavía, bloqueamos ese botón
                btnApr.disabled = true;
                btnApr.style.opacity = "0.4";
                if (estadoMaterias[m.id] === 'aprobada') estadoMaterias[m.id] = 'cursada'; 
            }
            
            btnReg.disabled = false;
            btnReg.style.opacity = "1";

        } else {
            // Si ni siquiera tenés las regulares, la materia se bloquea por completo
            estadoMaterias[m.id] = 'nada';
            card.className = "materia-card bloqueada";
            btnReg.disabled = true;
            btnApr.disabled = true;
            btnReg.style.opacity = "0.4";
            btnApr.style.opacity = "0.4";
        }
    });
}
