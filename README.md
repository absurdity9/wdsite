# William Deng's Portfolio Website (wdsite)

This repository contains the source code for the personal portfolio website of William Deng, a Fintech Product Designer based in London, UK. The website showcases his projects, skills, experience, and provides ways to get in touch.

## Features

*   **Project Showcase:** Displays key projects with descriptions and links (e.g., Collectable, Paysend, Elwood EMS/PMS).
*   **Case Studies:** Descriptions of selected projects linked from the main project section.
*   **Client Testimonials:** Rotating carousel featuring quotes from previous colleagues and clients.
*   **Service Overview:** Sections describing areas of expertise (MVP solutions, Websites, Apps).
*   **About Page:** Information about William Deng's background and experience.
*   **Mentoring Page:** Details about mentoring services offered.
*   **Figma Course Page:** Information related to Figma resources or courses.
*   **Ideas Page:** A section potentially for blog posts or thought leadership content.
*   **Contact Information:** Social media profiles (LinkedIn, Dribbble).
*   **Newsletter Signup:** Integration with ConvertKit for email subscriptions.
*   **Responsive Design:** Adapts to various screen sizes using Bootstrap and custom responsive CSS.
*   **Dark Mode:** Includes functionality for toggling between light and dark themes.
*   **Animations & Effects:** Uses libraries like WOW.js for scroll animations, Owl Carousel for sliders, Particles.js for background effects, and Odometer for number counters.
*   **Preloader:** Displays a loading animation while the site assets load.

## Technologies Used

*   **Frontend:**
    *   HTML5
    *   CSS3 (including CSS Variables)
    *   JavaScript (ES6)
*   **Frameworks & Libraries:**
    *   [Bootstrap 5](https://getbootstrap.com/): Frontend framework for layout and components.
    *   [jQuery](https://jquery.com/): JavaScript library for DOM manipulation and effects.
    *   [Owl Carousel 2](https://owlcarousel2.github.io/OwlCarousel2/): Touch-enabled jQuery plugin for sliders/carousels.
    *   [Magnific Popup](https://dimsemenov.com/plugins/magnific-popup/): Responsive lightbox and dialog script.
    *   [WOW.js](https://wowjs.uk/): Reveals animations when scrolling.
    *   [Isotope](https://isotope.metafizzy.co/): Filterable and sortable layouts (potentially used on a portfolio or ideas page).
    *   [Odometer](http://github.hubspot.com/odometer/docs/welcome/): Animated number counters.
    *   [Particles.js](https://vincentgarreau.com/particles.js/): Particle animations.
    *   [ScrollUp](https://markgoodyear.com/labs/scrollup/): Scroll-to-top functionality.
    *   Font Awesome: Icon library.
    *   Bootstrap Icons: Icon library.
*   **Analytics:**
    *   Google Analytics (gtag.js)
*   **Email/Forms:**
    *   ConvertKit: Embedded newsletter signup form.

## File Structure

```
/
├── index.html                # Main landing page
├── about.html                # About page
├── case-studies.html         # Case studies page
├── figma-course.html         # Figma course page
├── ideas.html                # Ideas/blog page
├── links.html                # Links page
├── mentoring.html            # Mentoring page
├── projects.html             # Projects overview page (may redirect or be part of index)
├── CNAME                     # Custom domain mapping for GitHub Pages/hosting
├── css/                      # Main CSS files (style.css, responsive.css, plugins)
│   ├── bootstrap.min.css
│   ├── blueket.plugin.css    # Plugin styles from template
│   ├── colormode.css         # Dark/Light mode styles
│   ├── responsive.css        # Responsive design adjustments
│   └── style.css             # Main custom styles
├── js/                       # Main JavaScript files
│   ├── jquery.min.js
│   ├── bootstrap.bundle.min.js
│   ├── blueket.plugin.js     # Plugin scripts from template (likely includes Owl Carousel, etc.)
│   ├── custom.js             # Custom initializations and interactions
│   ├── theme.darkmode.js     # Dark mode toggle logic
│   └── ...                   # Other specific JS plugins (particles, preloader, etc.)
├── images/                   # Main image assets, organized by type
│   ├── background/
│   ├── clients/
│   ├── common/
│   ├── demo/
│   ├── figma/
│   ├── object/
│   ├── service/
│   ├── shape/
│   ├── favicon.png
│   ├── logo-black.svg
│   └── logo-white.svg
├── fonts/                    # Font files (e.g., Bootstrap Icons, Slick)
├── webfonts/                 # Font files (e.g., Font Awesome)
├── assets/                   # Older/potentially unused assets
│   ├── css/                  # Older CSS (e.g., bootstrap.min.css)
│   ├── js/                   # Older JS (e.g., bootstrap, jquery, validation)
│   ├── images/               # Older images
│   ├── email/                # PHP mailer script (send.php, Mailer.php)
│   └── vendor/               # Composer dependencies for PHPMailer
└── README.md                 # This file
```
