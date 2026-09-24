document.addEventListener('DOMContentLoaded', function(){
    createHackathonGallery();
    createSchoolGallery();
});

function createHackathonGallery(){
    const gallery = document.getElementById('hackathon-gallery');
    
    // Aquí puedes ajustar los nombres de las imágenes de tus hackatones
    // Por ejemplo, si tienes 4 fotos (2.jpeg, 3.jpeg, etc.)
    for(let i = 2; i <= 7; i++){
        createGalleryItem(gallery, `src/img/gallery/${i}.jpeg`);
    }
}

// function createSchoolGallery(){
//     const gallery = document.getElementById('school-gallery');
    
//     // Aquí puedes agregar fotos de proyectos escolares o miniaturas de videos
//     createGalleryItem(gallery, `src/img/SchoolProjectSnake.png`);
//     // createGalleryItem(gallery, `src/img/otra_foto.png`);
// }

// Función reutilizable para crear los elementos HTML
function createGalleryItem(container, imageSrc) {
    const listItem = document.createElement('li');
    const image = document.createElement('IMG');
    
    image.src = imageSrc;
    image.alt = 'Imagen de la galería';

    // Event Handler para abrir modal
    image.onclick = function(){
        showImage(imageSrc);
    }

    listItem.appendChild(image);
    container.appendChild(listItem);
}

// Lógica del Modal (Pantalla completa)
function showImage(imageSrc){
    const image = document.createElement('IMG');
    image.src = imageSrc;
    image.alt = 'Imagen en pantalla completa';

    // Crear el Modal
    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.onclick = closeModal;
    
    modal.append(image);

    // Añadir al HTML
    const body = document.querySelector('body');
    body.classList.add('overflow-hidden');
    body.appendChild(modal);
}

function closeModal(){
    const modal = document.querySelector('.modal');
    modal.classList.add('fadeOut');

    setTimeout(() => {
        modal?.remove();
        const body = document.querySelector('body');
        body.classList.remove('overflow-hidden');
    }, 500);
}