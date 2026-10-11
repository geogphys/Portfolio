/* ==========================================
   GIS PORTFOLIO - SCRIPT.JS
   Henry Reissig, GISP

   Purpose:
   - Display GIS projects
   - Create project category filters
   - Display project thumbnails
   - Provide links to GIS PDFs
   - Allow PDF downloads
   - Update the footer year
========================================== */


/* ==========================================
   1. GET HTML ELEMENTS
========================================== */

// Container where project cards will appear
const grid = document.getElementById('projectGrid');

// Container where category filter buttons appear
const filters = document.getElementById('filters');

// Default category selection
let selected = 'All';


/* ==========================================
   2. RENDER PROJECTS
========================================== */

function render() {

    // Get unique project categories
    const categories = [
        'All',
        ...new Set(projects.map(p => p.category))
    ];


    /* ======================================
       3. CREATE CATEGORY FILTER BUTTONS
    ====================================== */

    // Remove existing filter buttons
    filters.replaceChildren();

    categories.forEach(c => {

        // Create button
        const b = document.createElement('button');

        // Set button text
        b.textContent = c;

        // Highlight selected category
        b.className = c === selected
            ? 'filter active'
            : 'filter';

        // Accessibility attribute
        b.setAttribute(
            'aria-pressed',
            String(c === selected)
        );

        // Handle category selection
        b.onclick = () => {
            selected = c;
            render();
        };

        // Add button to page
        filters.append(b);

    });


    /* ======================================
       4. CLEAR EXISTING PROJECT CARDS
    ====================================== */

    grid.replaceChildren();


    /* ======================================
       5. FILTER AND DISPLAY PROJECTS
    ====================================== */

    projects
        .filter(p =>
            selected === 'All' ||
            p.category === selected
        )
        .forEach((p, i) => {

            // Create project card
            const article = document.createElement('article');

            article.className = 'project-card';


            /* ==================================
               6. PROJECT IMAGE OR SYMBOL
            ================================== */

            const visual = document.createElement('div');

            visual.className = 'project-art';

            if (p.image) {

                // Create image element
                const img = document.createElement('img');

                img.src = p.image;

                img.alt = 'Screenshot of ' + p.title;

                img.loading = 'lazy';

                visual.append(img);

            } else {

                // Display symbol if no image exists
                const glyph = document.createElement('span');

                glyph.className = 'project-glyph';

                glyph.textContent = p.symbol || '◎';

                visual.append(glyph);

            }


            /* ==================================
               7. PROJECT CATEGORY LABEL
            ================================== */

            const label = document.createElement('span');

            label.className = 'art-label';

            label.textContent = p.category;

            visual.append(label);


            /* ==================================
               8. PROJECT INFORMATION
            ================================== */

            const body = document.createElement('div');

            body.className = 'project-body';


            // Project subtitle
            const kicker = document.createElement('p');

            kicker.className = 'project-subtitle';

            kicker.textContent = p.subtitle || '';


            // Project title
            const title = document.createElement('h3');

            title.textContent = p.title;


            // Project description
            const desc = document.createElement('p');

            desc.textContent = p.description;


            /* ==================================
               9. PROJECT TAGS
            ================================== */

            const tags = document.createElement('div');

            tags.className = 'tags';

            (p.tags || []).forEach(t => {

                const tag = document.createElement('span');

                tag.textContent = t;

                tags.append(tag);

            });


            // Add project information to card
            body.append(
                kicker,
                title,
                desc,
                tags
            );


            /* ==================================
               10. PROJECT LINKS AND PDFS
            ================================== */

            if (p.url) {

                // Create link to project or PDF
                const link = document.createElement('a');

                link.href = p.url;

                // Determine link text
                link.textContent = p.url
                    .toLowerCase()
                    .endsWith('.pdf')
                    ? 'View PDF ↗'
                    : 'View project ↗';

                link.className = 'project-link';

                link.target = '_blank';

                link.rel = 'noopener noreferrer';

                body.append(link);


                /* ==============================
                   11. PDF DOWNLOAD BUTTON
                ============================== */

                if (p.url.toLowerCase().endsWith('.pdf')) {

                    const dl = document.createElement('a');

                    dl.href = p.url;

                    dl.download = '';

                    dl.textContent = 'Download PDF ↓';

                    dl.className = 'project-link pdf-download';

                    body.append(dl);

                }

            } else {

                /* ==============================
                   12. NO PROJECT LINK AVAILABLE
                ============================== */

                const status = document.createElement('span');

                status.className = 'project-status';

                status.textContent =
                    p.status || 'Details coming soon';

                body.append(status);

            }


            /* ==================================
               13. ADD PROJECT CARD TO PAGE
            ================================== */

            article.append(
                visual,
                body
            );

            grid.append(article);

        });

}


/* ==========================================
   14. INITIALIZE PROJECT GALLERY
========================================== */

// Display projects when page loads
render();


/* ==========================================
   15. UPDATE COPYRIGHT YEAR
========================================== */

document.getElementById('year').textContent =
    new Date().getFullYear();
