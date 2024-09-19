function calcularArea() {
    const PI = 3.14159;
    const raio = parseFloat(document.getElementById("raio").value);
    const area = PI * (raio * raio);
    document.getElementById("resultado"). textContent = "A área do circulo é: "+ area;

    

}