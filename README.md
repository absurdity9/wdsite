# William Deng's Portfolio Website (wdsite)

This repository contains the source code for the personal portfolio website of William Deng, a Fintech Product Designer based in London, UK. The website showcases his projects, skills, experience, and provides ways to get in touch.

## Features

*   **Project Showcase:** Displays key projects with descriptions and links (e.g., Collectable, Paysend, Elwood EMS/PMS).
*   **Case Studies:** Detailed descriptions of selected projects (linked from the main project section).
*   **Client Testimonials:** Rotating carousel featuring quotes from previous colleagues and clients.
*   **Service Overview:** Sections describing areas of expertise (MVP solutions, Websites, Apps).
*   **About Page:** Information about William Deng's background and experience.
*   **Mentoring Page:** Details about mentoring services offered.
*   **Figma Course Page:** Information related to Figma resources or courses.
*   **Ideas Page:** A section potentially for blog posts or thought leadership content.
*   **Contact Information:** `mailto:` links and social media profiles (LinkedIn, Dribbble).
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
    *   PHPMailer (potentially unused, located in `assets/email/` and `assets/vendor/`): PHP library for sending emails (likely for a contact form that might not be active).

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

## Setup & Usage

This is primarily a static website. To run it locally:

1.  Clone the repository.
2.  Open the `index.html` file directly in your web browser.
3.  Alternatively, use a simple local web server (like Python's `http.server` or VS Code's Live Server extension) to serve the files from the root directory. This is recommended to avoid potential issues with file paths or AJAX requests if any exist.

The website is deployed and accessible online via the domain specified in the `CNAME` file (likely `williamdeng.com`).

**Note:** If a contact form relying on the PHP mailer in the `assets/email/` directory is intended to be used, a PHP-enabled server environment is required for that specific functionality. However, current contact methods seem to rely on `mailto:` links and the ConvertKit form.

## Potential Optimizations & Unused Assets

This section lists areas identified during a brief codebase review that could be optimized or contain unused files. Further investigation is recommended to confirm usage before removal.

1.  **`assets/` Directory:** This entire directory seems to contain older or potentially redundant files compared to the main `css/`, `js/`, and `images/` directories.
    *   **`assets/css/` & `assets/js/`:** Contains duplicates of Bootstrap and potentially jQuery. Verify if these are needed or if the versions in the root `css/` and `js/` folders are sufficient.
    *   **`assets/email/` & `assets/vendor/`:** Contains a PHPMailer setup. If the site only uses `mailto:` links and the ConvertKit form for contact/subscriptions, this entire PHP backend might be unused and can be removed.
    *   **`assets/images/`:** Contains `favicon.png` (duplicate?) and `hero-img.svg` (check usage).
2.  **Duplicate Libraries:** Ensure only one version of Bootstrap CSS/JS and jQuery is being loaded. Preferentially use the versions in the root `css/` and `js/` folders if they are the intended ones.
3.  **Unused Images:** The `images/` directory, particularly subfolders like `demo/`, `figma/`, `object/`, `service/`, and `shape/`, likely contains many images from the original "Blueket" template that might not be used in the customized portfolio. A systematic check (searching the codebase for image filenames) is needed to identify and remove unused images to reduce repository size and potential loading weight. `images/ajax-loader.gif` might be unused if the PHP form is inactive.
4.  **Unused JavaScript:** Review the various JS files in `js/` (`coundown.js`, `portfolio.loadmore.js`, `rellax.min.js`, `progressbar.min.js`, parts of `blueket.plugin.js`). Some functionalities might belong to the original template but aren't used in the final site.
5.  **Unused CSS:** Check `blueket.plugin.css` and `style.css` for styles applied to elements or classes that no longer exist or features that were removed from the original template. Tools like browser developer tools (coverage tab) can help identify unused CSS on specific pages.
6.  **Font Files:** Verify that all fonts included in `fonts/` (Slick?) and `webfonts/` (Font Awesome) are actively used. Remove unused font files and their corresponding CSS imports.
7.  **HTML Pages:** Confirm the purpose and linkage of all HTML pages. Is `links.html` used? Is `projects.html` a standalone page or integrated into `index.html`?

By addressing these points, the codebase can be made cleaner, potentially smaller, and easier to maintain.
