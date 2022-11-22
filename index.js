function sendData() {
    const nombres = document.getElementById("nombres").value;
    const apellidos = document.getElementById("apellidos").value;
    
    window.location.href = `https://wa.me/931017921?text=Hola+Giordan+y+Patricia,+soy+${nombres}+ +${apellidos}.+¡CONFIRMO+MI+ASISTENCIA!`;
}