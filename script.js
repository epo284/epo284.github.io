document.addEventListener('DOMContentLoaded', () => {
    
    // === 1. BUSCADOR DE UNIVERSIDADES (Para el index.html) ===
    const buscadorUni = document.getElementById('search-university');
    const tarjetasUni = document.querySelectorAll('.grid-universities .card');

    if (buscadorUni) {
        buscadorUni.addEventListener('input', (e) => {
            const texto = e.target.value.toLowerCase();
            
            tarjetasUni.forEach(tarjeta => {
                // Buscamos el texto dentro del H3 (nombre de la uni) y el P (categoría)
                const nombreUni = tarjeta.querySelector('h3').textContent.toLowerCase();
                const categoriaUni = tarjeta.querySelector('p').textContent.toLowerCase();
                
                if (nombreUni.includes(texto) || categoriaUni.includes(texto)) {
                    tarjeta.style.display = "block"; // Se muestra
                } else {
                    tarjeta.style.display = "none"; // Se oculta
                }
            });
        });
    }

    // === 2. BUSCADOR DE MATERIAS (Para universidad1.html) ===
    const buscadorMateria = document.getElementById('search-subject');
    const materias = document.querySelectorAll('.curriculum-list .list-group-item');

    if (buscadorMateria) {
        buscadorMateria.addEventListener('input', (e) => {
            const texto = e.target.value.toLowerCase();
            
            materias.forEach(materia => {
                const nombreMateria = materia.textContent.toLowerCase();
                if (nombreMateria.includes(texto)) {
                    materia.style.display = "list-item";
                } else {
                    materia.style.display = "none";
                }
            });
        });
    }

    // === 3. SELECCIÓN DE MATERIAS Y PROGRESO ===
    const progresoMsg = document.getElementById('progreso-texto');

    function actualizarProgreso() {
        if (progresoMsg && materias.length > 0) {
            const seleccionadas = Array.from(materias).filter(m => m.style.fontWeight === 'bold').length;
            const total = materias.length;
            const porcentaje = Math.round((seleccionadas / total) * 100);
            progresoMsg.innerText = `Has seleccionado ${seleccionadas} de ${total} materias (${porcentaje}%)`;
        }
    }

    materias.forEach(materia => {
        materia.addEventListener('click', function() {
            if (this.style.fontWeight === 'bold') {
                this.style.backgroundColor = '#fff';
                this.style.fontWeight = 'normal';
            } else {
                this.style.backgroundColor = '#e8f4ff';
                this.style.fontWeight = 'bold';
            }
            actualizarProgreso();
        });
    });

    // === 4. EFECTOS DE TARJETAS Y MODO OSCURO (Opcional) ===
    const btnDarkMode = document.createElement('button');
    btnDarkMode.innerText = "🌙";
    btnDarkMode.className = "btn-dark-mode";
    document.body.appendChild(btnDarkMode);

    btnDarkMode.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });
});
