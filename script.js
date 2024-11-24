document.addEventListener('DOMContentLoaded', (event) => {
    // Initialize Feather icons with custom stroke width
    feather.replace({ 'stroke-width': 1.5, 'color': '#4ECCA3' });

    const menuItems = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('.section');
    const searchInput = document.getElementById('search');
    const homeContent = document.getElementById('home-content');

    // Show all content in home section
    function showAllContent() {
        homeContent.innerHTML = ''; // Clear existing content
        sections.forEach(section => {
            if (section.id !== 'home' && section.id !== 'legal') {
                const sectionContent = section.cloneNode(true);
                // Remove the section's title as it will be shown in the navigation
                const title = sectionContent.querySelector('h2');
                if (title) {
                    title.remove();
                }
                homeContent.appendChild(sectionContent);
            }
        });
    }

    // Navigation with smooth transitions
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('data-section');
            
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

    // Enhanced search functionality across all sections
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const allCards = document.querySelectorAll('.card');
        let hasResults = false;

        allCards.forEach(card => {
            const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
            const description = card.querySelector('p')?.textContent.toLowerCase() || '';
            
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'block';
                hasResults = true;
                if (searchTerm) {
                    highlightText(card, searchTerm);
                } else {
                    removeHighlight(card);
                }
            } else {
                card.style.display = 'none';
            }
        });

        // Show/hide sections based on whether they have visible cards
        sections.forEach(section => {
            if (section.id !== 'home' && section.id !== 'legal') {
                const sectionCards = section.querySelectorAll('.card');
                const hasVisibleCards = Array.from(sectionCards).some(card => card.style.display !== 'none');
                
                if (searchTerm && !hasVisibleCards) {
                    section.style.display = 'none';
                } else {
                    section.style.display = 'block';
                }
            }
        });

        // Always show home section, but hide it if no results and not on home page
        const homeSection = document.getElementById('home');
        if (!hasResults && !homeSection.classList.contains('active')) {
            homeSection.style.display = 'none';
        } else {
            homeSection.style.display = 'block';
        }
    });

    // Text highlighting function
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

    // Remove highlighting
    function removeHighlight(element) {
        const title = element.querySelector('h3');
        const description = element.querySelector('p');
        
        if (title) title.innerHTML = title.textContent;
        if (description) description.innerHTML = description.textContent;
    }

    // Mobile menu toggle with animation
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

    // Close sidebar when clicking outside on mobile
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

    // Initialize home page with all content
    showAllContent();
    document.getElementById('home').classList.add('active');
    menuItems[0].classList.add('active');
});