function agregarHilaza() {
    const hilazasContainer = document.getElementById('hilazas-container');
    const nuevaHilaza = document.createElement('div');
    nuevaHilaza.classList.add('hilaza-item');
    nuevaHilaza.innerHTML = `
        <label for="tipo-hilaza">Tipo de hilaza:</label>
        <select name="tipo-hilaza" class="tipo-hilaza">
            <option value="23">Hilaza Abuelita 50gr ($23)</option>
            <option value="69">Hilaza Kartopu 50gr ($69)</option>
            <option value="123">Hilaza Kartopu 100gr ($123)</option>
            <option value="69">Hilaza Armonía 100gr ($69)</option>
            <option value="30">Hilaza El Gato 50gr ($30)</option>
            <option value="28">Hilaza Candy 50gr ($28)</option>
        </select>
        <label for="cantidad-hilaza">Cantidad:</label>
        <input type="number" class="cantidad-hilaza" step="0.1" min="0.1" required>
        <button type="button" onclick="eliminarHilaza(this)">Eliminar</button>
    `;
    hilazasContainer.appendChild(nuevaHilaza);
}

function eliminarHilaza(boton) {
    const hilazaItem = boton.parentElement;
    hilazaItem.remove();
}

function calcularCotizacion() {
    const hilazas = document.querySelectorAll('.hilaza-item');
    let costoHilazas = 0;

    hilazas.forEach(hilaza => {
        const tipo = parseFloat(hilaza.querySelector('.tipo-hilaza').value);
        const cantidad = parseFloat(hilaza.querySelector('.cantidad-hilaza').value);
        costoHilazas += tipo * cantidad;
    });

    const relleno = parseFloat(document.getElementById('relleno').value);
    const tamano = parseFloat(document.getElementById('tamano').value);
    const costoTamaño = tamano * 15;
    const subtotal = costoHilazas + relleno + costoTamaño;
    const manoObra = subtotal * 0.125;
    const total = subtotal + manoObra;

    document.getElementById('resultado').innerHTML = `
        <h2>Resumen de Cotización</h2>
        <p>Costo de hilazas: $${costoHilazas.toFixed(2)}</p>
        <p>Costo de relleno: $${relleno.toFixed(2)}</p>
        <p>Costo por tamaño: $${costoTamaño.toFixed(2)}</p>
        <p>Mano de obra (12%): $${manoObra.toFixed(2)}</p>
        <h3>Total: $${total.toFixed(2)}</h3>
    `;
}
