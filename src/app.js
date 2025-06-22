document.addEventListener('DOMContentLoaded', function(){
    createGallery();
    fixNav();
    highlightLink();
})

function fixNav(){
    const nav = document.querySelector('.nav-bar_fixed');
    const gap = document.querySelector('.gap');

    window.addEventListener('scroll', function(){
        
        if(gap.getBoundingClientRect().bottom < 115){
            nav.classList.add('fixed');
        } else {
            nav.classList.remove('fixed');
        }
        
    })
}

function createGallery(){
    const gallery = document.querySelector('.image-gallery');

    for(let i = 2; i<=6; i++){
        const listItem = document.createElement('li');
        const image = document.createElement('IMG');
        image.src = `src/img/gallery/${i}.jpeg`;
        image.alt = 'Galery Image';

        //Event Handler
        image.onclick = function(){
            showImage(i);
        }

        listItem.appendChild(image);
        gallery.appendChild(listItem);
    }
}

function showImage(i){
        const image = document.createElement('IMG');
        image.src = `src/img/gallery/${i}.jpeg`;
        image.alt = 'Galery Image';


    //Generate Modal
    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.onclick = closeModal;
    
    modal.append(image);

    //add to html
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

function highlightLink(){
    document.addEventListener('scroll', function(){
        //for mobile >= 768px
        if(window.innerWidth < 768) return;


        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-bar a');

        let actual = '';

        sections.forEach(section => {
            
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            

            if(window.scrollY >= (sectionTop - sectionHeight / 3) ) {
                console.log(section.id);
                actual = section.id;
            }
        })

        navLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === '#' + actual){
                link.classList.add('active');
            }
        })
    })
}