const calcularBtn = document.getElementById('calcularBtn');

calcularBtn.addEventListener('mouseenter', function() {
    this.classList.add('btn-primary-hover');
});

calcularBtn.addEventListener('mouseleave', function() {
    this.classList.remove('btn-primary-hover');
});

calcularBtn.addEventListener('click', function() {
    calcularPropina();
});

function calcularPropina() {
    let totalFactura = parseFloat(document.getElementById('totalFactura').value);
    let porcentajePropina = parseFloat(document.getElementById('porcentajePropina').value);

    if (!isNaN(totalFactura) && !isNaN(porcentajePropina)) {
        let propina = totalFactura * (porcentajePropina / 100);
        let totalConPropina = totalFactura + propina;

        document.getElementById('resultadoTotalFactura').textContent = totalFactura.toFixed(2) + ' €';
        document.getElementById('resultadoPropina').textContent = propina.toFixed(2) + ' €';
        document.getElementById('resultadoTotalConPropina').textContent = totalConPropina.toFixed(2) + ' €';

        document.querySelector('.result-section').style.display = 'block';
        $('#resultadoModal').modal('show');

        document.getElementById('modalTotalFactura').textContent = totalFactura.toFixed(2) + ' €';
        document.getElementById('modalPropina').textContent = propina.toFixed(2) + ' €';
        document.getElementById('modalTotalConPropina').textContent = totalConPropina.toFixed(2) + ' €';
    } else {
        alert('Por favor, ingrese un valor válido para el total de la factura y el porcentaje de propina.');
    }
}