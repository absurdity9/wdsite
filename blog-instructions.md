Role: You are a front-end web developer specializing in HTML, CSS, and basic JavaScript.

Task: You are tasked with creating two static HTML pages for a simple blog: a homepage (index.html) and a single blog post page (post.html). These pages must be integrated into an existing project structure, reusing existing assets where possible.

Project Context:

/assets/ is where images are stored. /css/ already contains css files. /js/ already has js files. Use these where possible. 


Requirements:

    Create blog.html (Blog Homepage):

        Must include a header (potentially with site title/logo if standard in the project).

        Must list multiple blog post summaries (e.g., 3-5 placeholders).

        Each summary should include:

            Post Title (as a heading).

            Publication Date.

            A short excerpt/summary (1-2 sentences of placeholder text).

            A "Read More" link pointing to post.html (For simplicity, all links can point to the single post.html template you create).

        Must include a basic footer (potentially with copyright info if standard).

        Must correctly link to the existing CSS file(s) (and the new blog CSS file, if created).

        Must correctly link to the existing JS file(s) if needed.

        Use semantic HTML5 elements (<header>, <nav>, <main>, <article>, <aside>, <footer>, etc.) where appropriate.

    Create post.html (Blog Content Page):

        Must include the same header as blog.html.

        Must display the content of a single blog post.

        Include:

            Post Title (large heading).

            Publication Date.

            Full post content (use multiple paragraphs of placeholder "lorem ipsum" text).

            Optionally include a placeholder image within the content (<img src="[Path to image directory]/placeholder-post.jpg" alt="Post image">).

            A link to go back to the homepage (blog.html).

        Must include the same footer as index.html.

        Must correctly link to the existing CSS file(s) (and the new blog CSS file, if created).

        Must correctly link to the existing JS file(s) if needed.

        Use semantic HTML5 elements.

    CSS Styling:

        Aim for a clean, readable layout.

        Leverage existing styles/classes from [Path to existing CSS file(s)] if specified in the "Design Guidance" or if obvious utility classes exist (e.g., .container, .button). Do not duplicate CSS rules if functionality already exists in the main CSS file.

        Ensure responsiveness in the same way as index.html.

    JavaScript:

        Use only basic, vanilla JavaScript.

        Avoid creating complex features. If existing JS in [Path to existing JS file(s)] provides site-wide features (like a mobile menu toggle), ensure the new HTML includes the necessary markup and links the script. Do not add new JS functionality unless explicitly asked.

    Constraints:

        Technology: Only HTML, CSS, and basic vanilla JavaScript. No frameworks (React, Vue, Angular, etc.), no server-side code (PHP, Node, etc.), no build tools (Webpack, Parcel).

        Scope: Only create blog.html, post.html, and the necessary CSS additions. Do not create other pages (like category pages, author pages, contact pages) or features (like comments, search, databases).

        Reusability: Prioritize using the existing CSS, JS, and image directory structure.

Deliverables:

    The complete HTML code for blog.html.

    The complete HTML code for post.html.

    The necessary CSS code (either as additions to an existing file or as a new blog.css file, based on your clarification answer).

Clarification Request:

    Before you start coding, please ask any questions you have about the existing project structure, desired styling approach (new CSS file vs. appending), specific content placeholders, or any ambiguities in these instructions. For example, confirm the preferred method for adding the new CSS rules.