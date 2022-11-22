function sendData() {
    const nombres = document.getElementById("nombres").value;
    const apellidos = document.getElementById("apellidos").value;
    
    const text = `Hola%20Giordan%20&%20Patricia,%20soy%20${nombres}%20${apellidos}.%20¡CONFIRMO%20MI%20ASISTENCIA!`
    window.location.href = `https://wa.me/931017921?text=${text}`;
}