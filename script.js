document.addEventListener('DOMContentLoaded', (event) => {
    // Initialize Feather icons with custom stroke width
    feather.replace({ 'stroke-width': 1.5, 'color': '#4ECCA3' });

    const menuItems = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('.section');
    const searchInput = document.getElementById('search');

    // Show all content in home section
    function showAllContent() {
        sections.forEach(section => {
            if (section.id !== 'legal') {
                const clone = section.cloneNode(true);
                document.getElementById('home').appendChild(clone);
            }
        });
    }

    // Navigation with smooth transitions
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('data-section');
            
            // Remove active class from all sections with fade out
            sections.forEach(section => {
                section.style.opacity = '0';
                section.style.transform = 'translateY(10px)';
                setTimeout(() => {
                    section.classList.remove('active');
                    section.style.opacity = '';
                    section.style.transform = '';
                }, 300);
            });

            // Add active class to target section with fade in
            setTimeout(() => {
                if (targetId === 'home') {
                    document.getElementById('home').innerHTML = ''; // Clear home section
                    showAllContent(); // Show all content in home
                }
                document.getElementById(targetId).classList.add('active');
            }, 300);
        });
    });

    // Enhanced search functionality with highlighting
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'block';
                // Highlight matching text
                if (searchTerm) {
                    highlightText(card, searchTerm);
                } else {
                    // Remove highlighting
                    removeHighlight(card);
                }
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Text highlighting function
    function highlightText(element, term) {
        const title = element.querySelector('h3');
        const description = element.querySelector('p');
        
        title.innerHTML = title.textContent.replace(
            new RegExp(term, 'gi'),
            match => `<span class="highlight">${match}</span>`
        );
        
        description.innerHTML = description.textContent.replace(
            new RegExp(term, 'gi'),
            match => `<span class="highlight">${match}</span>`
        );
    }

    // Remove highlighting
    function removeHighlight(element) {
        const title = element.querySelector('h3');
        const description = element.querySelector('p');
        
        title.innerHTML = title.textContent;
        description.innerHTML = description.textContent;
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
        
        // Animate menu icon
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

    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href'))?.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});