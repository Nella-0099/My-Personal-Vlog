document.addEventListener('DOMContentLoaded', function() {
    // Asignar eventos a los botones para mostrar el contenido correspondiente
    let buttons = document.querySelectorAll('nav ul li button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            let sectionId = this.getAttribute('onclick').match(/'(.*?)'/)[1];
            showContent(sectionId);
        });
    });
});

function showContent(section) {
    let sections = document.querySelectorAll('.section-content');
    sections.forEach(sec => sec.style.display = 'none');
    document.getElementById(section).style.display = 'block';
}

function showFutureContent(years) {
    let futureContent = document.getElementById('future-content');
    futureContent.innerHTML = '';
    if (years == '5') {
        futureContent.innerHTML = '<h3>In a period of 5 years ... </h3><p>I see myself finishing my degree and/or graduating from La Salle University and subsequently training in a specific specialty in the engineering career. of Software, which I still do not have 100% defined.</p><img src="future-5-years.jpeg" class="Future5" alt="Futuro en 5 años">';
    } else if (years == '10') {
        futureContent.innerHTML = '<h3>In a period of 10 years...</h3><p>I see myself pursuing my career in the specialization that has continued to contribute to society. Or you could create a project, and continue to be aware of new technological updates. (Not yet fully defined)</p><img src="future-10-years.webp" class="Future10" alt="Futuro en 10 años">';
    }
}

