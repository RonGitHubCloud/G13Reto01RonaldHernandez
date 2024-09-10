document.addEventListener('DOMContentLoaded', (event) => {
    // Función para cargar la imagen
    function loadImage() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = function(e) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = function(event) {
                document.getElementById('photo').src = event.target.result;
            }
            reader.readAsDataURL(file);
        }
        input.click();
    }

    // Agregar evento de clic a la imagen
    document.getElementById('photo').addEventListener('click', loadImage);

    // Hacer elementos editables
    document.querySelectorAll('h1, h2, h3, p, li').forEach(el => {
        el.contentEditable = true;
        el.addEventListener('focus', function() {
            this.style.background = '#e8f0fe';
        });
        el.addEventListener('blur', function() {
            this.style.background = '';
        });
    });
});