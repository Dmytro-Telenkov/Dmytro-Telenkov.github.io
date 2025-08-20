document.addEventListener("DOMContentLoaded", function() {
    const modalLinks = document.querySelectorAll('.show_modal');

    modalLinks.forEach(link => {
        const modal = link.closest('.projects_inv').querySelector('.modal');
        const closeBtn = modal.querySelector('.close');

        // открыть модалку
        link.addEventListener('click', function(e) {
            e.preventDefault();
            modal.classList.add('show');
        });

        // закрыть по крестику
        closeBtn.addEventListener('click', function() {
            modal.classList.remove('show');
        });

        // закрыть при клике вне контента
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });
    });
});

