document.addEventListener('DOMContentLoaded', (event) => {
    feather.replace({ 'stroke-width': 1.5, 'color': '#4ECCA3' });

    const menuItems = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('.section');
    const searchInput = document.getElementById('search');
    const homeContent = document.getElementById('home-content');

    function showAllContent() {
        document.querySelectorAll('.card').forEach(card => {
            card.style.display = 'block';
        });

        sections.forEach(section => {
            if (section.id !== 'legal') {
                section.style.display = 'block';
            }
        });

        homeContent.innerHTML = '';
        sections.forEach(section => {
            if (section.id !== 'home' && section.id !== 'legal') {
                const sectionContent = section.cloneNode(true);
                const title = sectionContent.querySelector('h2');
                if (title) {
                    title.remove();
                }
                homeContent.appendChild(sectionContent);
            }
        });

        const homeSection = document.getElementById('home');
        if (homeSection) {
            homeSection.style.display = 'block';
            homeSection.classList.add('active');
        }
    }

    showAllContent();
    document.getElementById('home').classList.add('active');
    menuItems[0].classList.add('active');

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href').substring(1);
            
            menuItems.forEach(menuItem => {
                menuItem.classList.remove('active');
            });
            item.classList.add('active');

            sections.forEach(section => {
                section.classList.remove('active');
            });

            if (targetId === 'home') {
                showAllContent();
                document.getElementById('home').classList.add('active');
            } else {
                document.getElementById(targetId).classList.add('active');
            }
        });
    });

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        let hasResults = false;

        if (!searchTerm) {
            showAllContent();
            return;
        }

        sections.forEach(section => {
            if (section.id !== 'home' && section.id !== 'legal') {
                const cards = section.querySelectorAll('.card');
                let sectionHasResults = false;

                cards.forEach(card => {
                    const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
                    const description = card.querySelector('p')?.textContent.toLowerCase() || '';
                    
                    if (title.includes(searchTerm) || description.includes(searchTerm)) {
                        card.style.display = 'block';
                        sectionHasResults = true;
                        hasResults = true;
                        highlightText(card, searchTerm);
                    } else {
                        card.style.display = 'none';
                        removeHighlight(card);
                    }
                });

                section.style.display = sectionHasResults ? 'block' : 'none';
            }
        });

        homeContent.innerHTML = '';
        sections.forEach(section => {
            if (section.id !== 'home' && section.id !== 'legal' && section.style.display !== 'none') {
                const sectionContent = section.cloneNode(true);
                homeContent.appendChild(sectionContent);
            }
        });

        const homeSection = document.getElementById('home');
        homeSection.style.display = hasResults || !searchTerm ? 'block' : 'none';
    });

    function highlightText(element, term) {
        const title = element.querySelector('h3');
        const description = element.querySelector('p');
        
        if (title) {
            title.innerHTML = title.textContent.replace(
                new RegExp(term, 'gi'),
                match => `<span class="highlight">${match}</span>`
            );
        }
        
        if (description) {
            description.innerHTML = description.textContent.replace(
                new RegExp(term, 'gi'),
                match => `<span class="highlight">${match}</span>`
            );
        }
    }

    function removeHighlight(element) {
        const title = element.querySelector('h3');
        const description = element.querySelector('p');
        
        if (title) title.innerHTML = title.textContent;
        if (description) description.innerHTML = description.textContent;
    }

    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.createElement('button');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = '<i data-feather="menu"></i>';
    document.body.appendChild(menuToggle);

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        feather.replace({ 'stroke-width': 1.5, 'color': '#4ECCA3' });
        
        const icon = menuToggle.querySelector('i');
        if (sidebar.classList.contains('active')) {
            icon.setAttribute('data-feather', 'x');
        } else {
            icon.setAttribute('data-feather', 'menu');
        }
        feather.replace({ 'stroke-width': 1.5, 'color': '#4ECCA3' });
    });

    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && 
            !sidebar.contains(e.target) && 
            e.target !== menuToggle && 
            !menuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
            menuToggle.querySelector('i').setAttribute('data-feather', 'menu');
            feather.replace({ 'stroke-width': 1.5, 'color': '#4ECCA3' });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    feather.replace();
});

