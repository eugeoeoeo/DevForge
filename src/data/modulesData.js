// Web Development Curriculum Data Layer
export const COURSE_INFO = {
  "courseCode": "WEBDEV 101",
  "courseTitle": "Web Development (HTML5, CSS3 & PHP Fundamentals)",
  "institution": "Polytechnic University of the Philippines",
  "college": "College of Computer and Information Sciences (CCIS)",
  "academicUnit": "Bachelor of Science in Information Technology",
  "curriculumRef": "CHED CMO 25 series of 2015"
};

export const MODULES_DATA = [
  {
    "id": "module-1",
    "moduleNumber": 1,
    "title": "HTML5: Semantic Web Structure, Media & Forms",
    "description": "HTML basics, HTML5 semantic elements, hyperlinks, lists, tables, media (picture, audio, video), forms, input types, and web accessibility principles.",
    "lessons": [
      {
        "id": "lesson-1",
        "title": "HTML & HTML5 Core Structure",
        "subtitle": "Markup fundamentals, HTML5 evolution, doctype, and document anatomy",
        "category": "HTML5 Foundations",
        "takeaways": [
          "HTML is a markup language, not a programming language.",
          "HTML5 introduced native multimedia, semantic elements, and standardized web APIs.",
          "<!DOCTYPE html> is mandatory at line 1 to trigger standard rendering mode in modern browsers.",
          "The <head> stores invisible metadata, title, and stylesheets; <body> contains visible user content."
        ],
        "examTips": [
          "Exam Pointer: If asked what <!DOCTYPE html> does, remember: it tells the browser which HTML version is used and enables standards mode.",
          "Exam Pointer: HTML tags describe content meaning to the browser, while attributes provide supplementary settings."
        ],
        "sections": [
          {
            "title": "What is HTML?",
            "content": "**HTML (HyperText Markup Language)** is the standard markup language used to create and structure content on the web. It defines the meaning and structure of web content using **tags and elements**.\n\nHTML is a **markup language, not a programming language**. Instead of using logic to make decisions, it uses elements (tags) to label content so that a browser can understand what that content represents.\n\nFor example:\n- `<h1>`: Main Heading\n- `<p>`: Paragraph text\n- `<a href=\"url\">`: Hyperlink to other resources"
          },
          {
            "title": "What is HTML5?",
            "content": "**HTML5** is the modern major version of HTML. It expanded HTML beyond basic page structure by standardizing **semantic elements, native multimedia, improved form controls, graphics support, and browser APIs** for richer web applications.\n\n**Key HTML5 Features:**\n• **Semantic Elements**: such as `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>`, which communicate the role of the content.\n• **Native Multimedia**: Native `<audio>`, `<video>`, and `<picture>` without needing external plugins like Flash.\n• **Modern Form Controls**: New input types like `email`, `date`, `number`, and attributes like `required` and `pattern`.\n• **Storage & APIs**: Client-side storage (localStorage, sessionStorage) and Canvas/SVG graphics."
          },
          {
            "title": "Document Anatomy & The HTML Boilerplate",
            "content": "Every standard modern HTML5 document requires this foundational skeleton:\n\n1. **`<!DOCTYPE html>`**: Placed at the very first line. Informs the browser to render the document in **standards mode** according to HTML5 specification.\n2. **`<html lang=\"en\">`**: The root element wrapping all content; `lang=\"en\"` specifies document language for screen readers and search engines.\n3. **`<head>`**: Houses **metadata (not visible to users)** such as character encoding (`<meta charset=\"UTF-8\">`), viewport scaling (`<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">`), and external stylesheets.\n4. **`<title>`**: Crucial tag inside `<head>` that defines the page title in the browser tab and search results.\n5. **`<body>`**: Contains all **visible page content** (headings, paragraphs, images, buttons, and sections)."
          }
        ]
      },
      {
        "id": "lesson-2",
        "title": "Semantic Elements, Lists & Tables",
        "subtitle": "Semantic web architecture, list types, table structure, and document hierarchy",
        "category": "HTML5 Foundations",
        "takeaways": [
          "Semantic tags clearly describe their purpose to browsers, developers, and assistive screen readers.",
          "Never choose heading tags (h1-h6) based on font size; use them strictly for hierarchical outline.",
          "Tables should only be used for tabular data, never for general page layout.",
          "Semantic tags directly enhance SEO and screen reader accessibility."
        ],
        "examTips": [
          "Exam Pointer: <article> represents self-contained, independently distributable content (e.g. blog post, news story).",
          "Exam Pointer: <section> groups thematic content typically accompanied by a heading.",
          "Exam Pointer: <th> is bold and centered by default; <td> is normal and left-aligned."
        ],
        "sections": [
          {
            "title": "Semantic vs. Non-Semantic HTML",
            "content": "A **semantic element** clearly describes its meaning and purpose to both the browser and developer. A **non-semantic element** tells nothing about its content.\n\n• **Non-semantic elements**: `<div>` (generic block container) and `<span>` (generic inline container).\n• **Semantic elements**: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`.\n\n**Benefits of Semantic HTML:**\n1. **Accessibility**: Screen readers can jump directly to navigation, main content, or headers.\n2. **Search Engine Optimization (SEO)**: Search engine bots understand content importance and indexing hierarchy.\n3. **Maintainability**: Cleaner code that is easier for teams to understand and refactor."
          },
          {
            "title": "Core Semantic Page Landmarks",
            "content": "Standard HTML5 semantic layout includes:\n\n• **`<header>`**: Introductory content, site branding, logo, or search bar.\n• **`<nav>`**: Container for primary navigation links.\n• **`<main>`**: The dominant, unique content of the document. **There should only be one `<main>` per page!**\n• **`<section>`**: A thematic grouping of content, typically with its own heading.\n• **`<article>`**: A self-contained, independent composition that could be syndicated or reused on its own (e.g., forum post, blog article, news story).\n• **`<aside>`**: Content tangentially related to surrounding content (sidebar, author bio, callout boxes, advertisements).\n• **`<footer>`**: Closing information, copyright, contact details, and sitemap links."
          },
          {
            "title": "Lists & Tabular Data",
            "content": "**HTML Lists:**\n• **Unordered List (`<ul>`)**: Bulleted items where sequence does not matter.\n• **Ordered List (`<ol>`)**: Numbered items where sequence is significant (e.g., step-by-step instructions).\n• **List Item (`<li>`)**: Individual items inside `<ul>` or `<ol>`.\n• **Description List (`<dl>`)**: Term-definition pairs (`<dt>` = term, `<dd>` = description).\n\n**HTML Tables:**\nTables organize structured data in rows and columns:\n• **`<table>`**: Wrapper element.\n• **`<caption>`**: Accessible title for the table.\n• **`<thead>`**: Table header section.\n• **`<tbody>`**: Table body containing data rows.\n• **`<tfoot>`**: Summary row (totals, averages).\n• **`<tr>`**: Table row.\n• **`<th>`**: Header cell (bold and centered by default, has `scope=\"col\"` or `scope=\"row\"`).\n• **`<td>`**: Standard data cell."
          }
        ]
      },
      {
        "id": "lesson-3",
        "title": "Hyperlinks, Images & Native Media",
        "subtitle": "Anchor tags, absolute vs relative paths, <picture>, audio, and video elements",
        "category": "HTML5 Media",
        "takeaways": [
          "<a> tag with href creates hyperlinks; target='_blank' opens links in a new tab.",
          "Absolute URLs include protocol and domain; relative URLs point within local folder tree.",
          "The <img> tag requires both src and alt for accessibility.",
          "<picture> provides responsive image art-direction via <source> elements."
        ],
        "examTips": [
          "Exam Pointer: Decorative images must use alt='' (empty alt) so screen readers skip them.",
          "Exam Pointer: <picture> allows browsers to choose different image crops or formats (e.g., WebP, AVIF) based on media queries."
        ],
        "sections": [
          {
            "title": "Hyperlinks & Path Traversal",
            "content": "The **`<a>` (anchor)** element creates hyperlinks. Its critical attribute is **`href`** (Hypertext Reference).\n\n• **Opening New Tabs**: `<a href=\"url\" target=\"_blank\" rel=\"noopener noreferrer\">`. Always include `rel=\"noopener noreferrer\"` for security and performance when using `_blank`.\n• **Page Anchors**: `<a href=\"#faq\">` scrolls down to the element with `id=\"faq\"`.\n• **Email & Phone Links**: `<a href=\"mailto:support@pup.edu.ph\">` and `<a href=\"tel:+63287167832\">`.\n\n**Path Traversal:**\n• **Absolute URL**: Full web address including protocol (`https://example.com/images/cat.jpg`).\n• **Relative URL**: Path relative to current file (`./images/cat.jpg` or `../styles/main.css`)."
          },
          {
            "title": "Images & The Responsive <picture> Tag",
            "content": "**`<img>` Tag:**\nAn empty (self-closing) element requiring:\n• **`src`**: File path or URL of the image.\n• **`alt`**: Alternative text describing image purpose for visually impaired users and if the file fails to load.\n• **`loading=\"lazy\"`**: Native browser-level lazy loading for performance.\n\n**The `<picture>` Element:**\nProvides **art direction** and responsive image resolution switching:\n```html\n<picture>\n  <source media=\"(min-width: 1024px)\" srcset=\"large-banner.jpg\">\n  <source media=\"(min-width: 640px)\" srcset=\"medium-banner.jpg\">\n  <img src=\"small-banner.jpg\" alt=\"Campus scenery\">\n</picture>\n```\nThe browser parses sources from top to bottom and loads the first matching resource."
          },
          {
            "title": "Native Multimedia: <audio> and <video>",
            "content": "HTML5 introduced native audio and video playback without third-party plugins:\n\n**Attributes for Media:**\n• **`controls`**: Displays native browser player controls (play, pause, volume, scrub).\n• **`autoplay`**: Starts playback automatically (frequently blocked by modern browsers unless paired with `muted`).\n• **`loop`**: Automatically restarts media when finished.\n• **`muted`**: Mutes sound output by default.\n• **`poster`**: Image URL to show while video is downloading or until the user hits play.\n\nMultiple `<source>` tags inside `<video>` allow fallback formats (`video/mp4`, `video/webm`)."
          }
        ]
      },
      {
        "id": "lesson-4",
        "title": "Web Forms & Accessibility Principles",
        "subtitle": "Form anatomy, input types, client-side validation, labels, and accessibility standards",
        "category": "HTML5 Forms & A11y",
        "takeaways": [
          "<form> attributes: action defines target endpoint, method defines HTTP verb (GET or POST).",
          "Always pair <label for='id'> with <input id='id'> for accessible tap targets.",
          "Input types like email, number, and date trigger specialized mobile keyboards and native browser validation.",
          "Web accessibility guarantees web access for persons with disabilities."
        ],
        "examTips": [
          "Exam Pointer: disabled fields are NOT submitted to the server; readonly fields ARE submitted.",
          "Exam Pointer: Basic Accessibility Principles: Keyboard Accessibility, Alt Text, Meaningful Links, Clear Content Structure, Proper Headings, Accessible Forms, and Text Contrast."
        ],
        "sections": [
          {
            "title": "Form Structure & Controls",
            "content": "The **`<form>`** element packages user inputs for server transmission:\n\n• **`action`**: The destination URL or script where data is transmitted.\n• **`method`**: HTTP transfer protocol (**`GET`** sends data appended to URL; **`POST`** packages data securely inside HTTP body).\n\n**Essential Input Controls:**\n• **`<input type=\"text\">`**: Single-line text.\n• **`<input type=\"password\">`**: Masks characters for credential entry.\n• **`<input type=\"email\">`**: Validates email format and displays mobile '@' keyboard.\n• **`<input type=\"number\">`**: Restricts input to digits.\n• **`<input type=\"radio\">`**: Selects exactly **one option** from a mutually exclusive group (must share the same `name` attribute).\n• **`<input type=\"checkbox\">`**: Selects independent true/false options.\n• **`<textarea>`**: Multi-line expandable text box.\n• **`<select>` & `<option>`**: Dropdown select menu."
          },
          {
            "title": "Accessible Forms: Labels & Validation",
            "content": "**The Power of `<label>`:**\nAlways link a label to an input using `for` matching the input's `id`:\n```html\n<label for=\"username\">Username:</label>\n<input type=\"text\" id=\"username\" name=\"username\" required>\n```\nClicking or tapping the label automatically focuses the corresponding input, significantly expanding mobile touch targets!\n\n**HTML5 Declarative Form Validation:**\n• **`required`**: Field cannot be submitted blank.\n• **`min` / `max`**: Constrains numbers and dates.\n• **`minlength` / `maxlength`**: String character limits.\n• **`pattern`**: Regular expression constraint.\n• **`disabled`**: Deactivates control; value is **omitted** from submission.\n• **`readonly`**: Value cannot be modified, but **is sent** upon form submission."
          },
          {
            "title": "Web Accessibility (A11y) Core Principles",
            "content": "**Web Accessibility** ensures websites can be used by all individuals, including persons with visual, auditory, motor, or cognitive disabilities.\n\n**Key Accessibility Principles (Instructor Reviewer Points):**\n1. **Keyboard Accessibility**: All functionality must be reachable and operable using only the Tab, Enter, Space, and Arrow keys.\n2. **Alternative Text (Alt Text)**: Informative images require descriptive text; purely decorative images require `alt=\"\"`.\n3. **Meaningful Link Text**: Avoid vague phrases like \"click here\"; use descriptive text like \"Download Syllabus PDF\".\n4. **Clear Content Structure**: Clean HTML hierarchy with semantic landmarks.\n5. **Proper Headings**: Logical heading order (`<h1>` through `<h6>`) without skipping levels.\n6. **Accessible Forms**: Explicit `<label>` associations and descriptive error messages.\n7. **Text Contrast & Readability**: Sufficient color contrast between foreground text and background."
          }
        ]
      },
      {
        "id": "lesson-5",
        "title": "CSS3 Cascading, Specificity & Selectors",
        "subtitle": "Style mechanisms, the cascade, selector specificity calculation, and inheritance",
        "category": "CSS3 Styling",
        "takeaways": [
          "CSS separates document presentation from structure and logic.",
          "Three methods to apply CSS: Inline, Internal (<style>), and External (.css link).",
          "Specificity order from highest to lowest: Inline styles > IDs > Classes/Attributes/Pseudo-classes > Elements/Pseudo-elements.",
          "!important breaks normal cascade flow and should be avoided in scalable CSS."
        ],
        "examTips": [
          "Exam Pointer: If an element matches an ID selector (#intro) and a class selector (.lead), the ID selector ALWAYS wins because it has higher specificity.",
          "Exam Pointer: When two rules have identical specificity, the one declared LAST in the stylesheet wins (source order)."
        ],
        "sections": [
          {
            "title": "CSS Syntax & Application Methods",
            "content": "**CSS (Cascading Style Sheets)** controls the visual presentation, formatting, and layout of HTML elements.\n\n**CSS Rule Anatomy:**\n```css\nselector {\n  property: value;\n}\n```\n\n**Three Ways to Apply CSS:**\n1. **External Stylesheet**: Best practice. Uses `<link rel=\"stylesheet\" href=\"styles.css\">` in the `<head>`. Separates concerns and allows caching across all pages.\n2. **Internal Stylesheet**: Written within `<style>` tags in the HTML `<head>`. Useful for single-page standalone documents.\n3. **Inline Styles**: Written directly on elements via `style=\"...\"`. Hard to maintain, highest specificity."
          },
          {
            "title": "The CSS Cascade & Specificity Hierarchy",
            "content": "The **Cascade** is the algorithm CSS uses to resolve conflicts when multiple rules target the same element:\n\n**Specificity Hierarchy (from highest to lowest):**\n1. **Inline Styles** (`style=\"color: red;\"`) — Specificity: (1, 0, 0, 0)\n2. **ID Selectors** (`#nav`, `#hero`) — Specificity: (0, 1, 0, 0)\n3. **Class, Attribute & Pseudo-class Selectors** (`.card`, `[type=\"button\"]`, `:hover`) — Specificity: (0, 0, 1, 0)\n4. **Element & Pseudo-element Selectors** (`h1`, `p`, `::before`) — Specificity: (0, 0, 0, 1)\n5. **Universal Selector** (`*`) — Specificity: (0, 0, 0, 0)\n\n*Rule Order*: If specificity scores are identical, the rule declared **latest in the stylesheet** overrides previous ones."
          }
        ]
      },
      {
        "id": "lesson-6",
        "title": "CSS Box Model & Typography",
        "subtitle": "Content, padding, border, margin, box-sizing, and typography tokens",
        "category": "CSS3 Styling",
        "takeaways": [
          "Every HTML element renders as a rectangular box.",
          "Layers from innermost to outermost: Content -> Padding -> Border -> Margin.",
          "box-sizing: border-box includes padding and border within the declared width/height.",
          "Margin collapses vertically between adjacent block elements."
        ],
        "examTips": [
          "Exam Pointer: box-sizing: border-box prevents layouts from breaking when adding padding or borders.",
          "Exam Pointer: Padding is transparent space inside the border; Margin is transparent space outside the border."
        ],
        "sections": [
          {
            "title": "The CSS Box Model",
            "content": "The **Box Model** is the core geometric concept behind all CSS layout.\n\n**The Four Box Model Layers (Inside to Outside):**\n1. **Content**: The actual text, image, or media of the element.\n2. **Padding**: Transparent clearance area **inside** the border, surrounding the content. Takes the background color of the element.\n3. **Border**: The frame line wrapping around the padding and content.\n4. **Margin**: Transparent clearance area **outside** the border, separating the element from neighboring elements."
          },
          {
            "title": "box-sizing: content-box vs border-box",
            "content": "**Default behavior (`box-sizing: content-box`):**\nDeclared `width` only applies to the content. Adding padding and border expands the final rendered element width, causing unexpected overflow:\n```\nRendered Width = width + left/right padding + left/right border\n```\n\n**Universal Best Practice (`box-sizing: border-box`):**\nPadding and border are absorbed **inside** the specified width:\n```css\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n```\nIf you specify `width: 300px; padding: 20px; border: 2px solid black;`, the total rendered width stays exactly **300px**!"
          }
        ]
      },
      {
        "id": "lesson-7",
        "title": "Flexbox & Modern Layouts",
        "subtitle": "1D layout model, flex axes, alignment properties, and flex children behavior",
        "category": "CSS3 Layouts",
        "takeaways": [
          "Flexbox is a one-dimensional layout model (lays out items in rows OR columns).",
          "Main axis follows flex-direction; cross axis runs perpendicular.",
          "justify-content aligns items along the main axis; align-items aligns across the cross axis.",
          "gap defines gutters between flex items cleanly without tricky negative margins."
        ],
        "examTips": [
          "Exam Pointer: flex-direction: column stacks items vertically.",
          "Exam Pointer: To perfectly center a child element both vertically and horizontally: display: flex; justify-content: center; align-items: center;."
        ],
        "sections": [
          {
            "title": "Flex Container & Primary Axes",
            "content": "Declaring **`display: flex`** turns an element into a flex container and its direct children into flex items.\n\n**The Two Axes:**\n• **Main Axis**: Driven by `flex-direction`.\n  - `row` (default): Items flow horizontally left-to-right.\n  - `column`: Items stack vertically top-to-bottom.\n• **Cross Axis**: Runs perpendicular (90 degrees) to the main axis."
          },
          {
            "title": "Key Flexbox Properties",
            "content": "**Container Properties:**\n• **`justify-content`**: Controls spacing along the main axis (`flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`).\n• **`align-items`**: Controls alignment across the cross axis (`stretch`, `center`, `flex-start`, `flex-end`, `baseline`).\n• **`flex-wrap`**: Enables items to wrap onto multiple lines (`nowrap` vs `wrap`).\n• **`gap`**: Defines spacing between items.\n\n**Item Properties:**\n• **`flex-grow`**: Ability for an item to grow if extra space is available.\n• **`flex-shrink`**: Ability for an item to shrink if space is negative.\n• **`flex-basis`**: Default size before space distribution."
          }
        ]
      },
      {
        "id": "lesson-8",
        "title": "Responsive Design & CSS Grid",
        "subtitle": "Mobile-first approach, viewport meta tag, media queries, CSS Grid, and frameworks",
        "category": "CSS3 Layouts",
        "takeaways": [
          "Mobile-first design writes base styles for small screens, then uses min-width media queries for larger displays.",
          "The viewport meta tag prevents mobile browsers from zooming out to desktop scale.",
          "CSS Grid is a two-dimensional layout system controlling both rows and columns simultaneously.",
          "Modern web development pairs Grid for overall page layouts and Flexbox for component internals."
        ],
        "examTips": [
          "Exam Pointer: A media query like @media (min-width: 768px) triggers on viewports 768px and wider (tablets & up).",
          "Exam Pointer: Bootstrap 5 uses utility classes and a 12-column grid; Tailwind CSS uses atomic utilities."
        ],
        "sections": [
          {
            "title": "Responsive Web Design & Viewport Meta",
            "content": "**Responsive Web Design (RWD)** ensures websites adapt gracefully to smartphones, tablets, laptops, and ultra-wide desktops.\n\n**The Mandatory Viewport Meta Tag:**\n```html\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n```\nWithout this tag, mobile phones assume the website was made for a 980px desktop screen and zoom out, rendering microscopic, unreadable text."
          },
          {
            "title": "Media Queries & Mobile-First Design",
            "content": "**Mobile-First Approach:**\nWrite CSS for mobile devices first without media queries. Then, use **`min-width`** media queries to add enhancements as screens get wider:\n```css\n/* Base styles: Mobile phone */\n.card-container {\n  display: flex;\n  flex-direction: column;\n}\n\n/* Tablet and up: 768px */\n@media (min-width: 768px) {\n  .card-container {\n    flex-direction: row;\n  }\n}\n\n/* Desktop: 1024px */\n@media (min-width: 1024px) {\n  .card-container {\n    gap: 2rem;\n  }\n}\n```"
          },
          {
            "title": "CSS Grid vs. Flexbox",
            "content": "**Comparison Summary:**\n• **Flexbox**: One-dimensional (row OR column). Ideal for navbars, toolbars, buttons, and centering.\n• **CSS Grid**: Two-dimensional (rows AND columns together). Ideal for complex page layouts, dashboards, and photo galleries.\n\n**Combining Both:**\nUse CSS Grid for the macro layout (page grid with header, sidebar, and content area), and use Flexbox inside individual grid items for micro alignment!"
          }
        ]
      },
      {
        "id": "lesson-9",
        "title": "PHP Fundamentals & Syntax",
        "subtitle": "Server-side execution, <?php tags, variables ($), data types, operators, and output",
        "category": "PHP Backend",
        "takeaways": [
          "PHP is a server-side scripting language executed on the server before HTML is sent to the client.",
          "PHP code begins with <?php and ends with ?>.",
          "All PHP variables start with the dollar sign ($) and are dynamically typed.",
          "echo is the primary statement to send text and HTML output to the browser."
        ],
        "examTips": [
          "Exam Pointer: PHP runs on the web server (Apache/Nginx); users never see the raw PHP code in 'View Page Source'.",
          "Exam Pointer: String concatenation in PHP uses the dot operator (.), not the plus sign (+)."
        ],
        "sections": [
          {
            "title": "What is PHP & Server-Side Execution",
            "content": "**PHP (PHP: Hypertext Preprocessor)** is a widely-used open-source server-side scripting language designed specifically for web development.\n\n**Client-Side vs. Server-Side:**\n• **HTML, CSS, JavaScript**: Executed in the user's web browser (client).\n• **PHP**: Executed on the web server. The server processes PHP code, executes database queries, and produces pure HTML sent to the browser."
          },
          {
            "title": "PHP Syntax, Variables & Echo",
            "content": "**Basic PHP File Structure:**\n```php\n<?php\n  echo \"Hello, PUP CCIS!\";\n?>\n```\n\n**Variable Rules:**\n1. Variables start with the **`$` sign** (e.g. `$studentName`, `$age`, `$gpa`).\n2. Must begin with a letter or underscore, never a number.\n3. PHP is **case-sensitive** for variable names (`$color` is different from `$Color`).\n4. PHP is loosely typed; variables automatically determine type from assigned values.\n\n**String Concatenation:**\nPHP uses the period (**`.`**) to join strings:\n```php\n$greeting = \"Hello \" . $studentName . \"!\";\n```"
          }
        ]
      },
      {
        "id": "lesson-10",
        "title": "PHP Control Structures, Loops & Arrays",
        "subtitle": "Conditionals, switch cases, for/while loops, indexed vs associative arrays, and code traces",
        "category": "PHP Backend",
        "takeaways": [
          "Conditional branching: if, elseif, else, and switch-case statements.",
          "Loops automate repetition: for, while, do-while, and foreach for arrays.",
          "Indexed arrays use numerical keys; associative arrays use named string keys.",
          "Foreach is the preferred loop to iterate through associative arrays in PHP."
        ],
        "examTips": [
          "Exam Pointer (Instructor Trace Item 8): When condition checks grade evaluation, score >= 85 produces 'Very Good'.",
          "Exam Pointer (Instructor Trace Item 9): While loop incrementing by 2 up to condition < 15 terminates with final value 16.",
          "Exam Pointer (Instructor Trace Item 10): Accumulator loop summing increments results in output 88."
        ],
        "sections": [
          {
            "title": "Conditionals: if, elseif, else & switch",
            "content": "**Conditional Statements:**\nControl the execution flow based on boolean expressions:\n```php\n$grade = 88;\nif ($grade >= 90) {\n    echo \"Excellent\";\n} elseif ($grade >= 85) {\n    echo \"Very Good\"; // Triggered for 88\n} else {\n    echo \"Passing\";\n}\n```\n\n**Switch Statement:**\nEvaluates one expression against multiple possible `case` values. Requires **`break`** to prevent falling through to subsequent cases."
          },
          {
            "title": "Loops & Exam Code Traces",
            "content": "**Common Loop Types:**\n• **`for` loop**: Iterates a predetermined number of times (`for ($i = 0; $i < 10; $i++)`).\n• **`while` loop**: Runs as long as the condition remains true.\n• **`foreach` loop**: Iterates cleanly through arrays.\n\n**Essential Instructor Exam Traces:**\n1. **While Loop Trace**: An iteration starting at `$num = 2` incrementing `$num += 2` while `$num < 15` prints **`16`** when loop ends.\n2. **Accumulator Summation Trace**: A loop calculating cumulative sum evaluations yields **`88`**.\n3. **Grade Branching**: Score `88` falls into `>= 85` returning **`\"Very Good\"`**."
          },
          {
            "title": "Indexed vs. Associative Arrays",
            "content": "**1. Indexed Arrays:**\nElements access by zero-based numerical index:\n```php\n$techStack = [\"HTML5\", \"CSS3\", \"PHP\", \"Laravel\"];\necho $techStack[0]; // Output: HTML5\n```\n\n**2. Associative Arrays:**\nKey-value pairs using named string keys (analogous to dictionaries or JSON objects):\n```php\n$student = [\n    \"name\" => \"Juan Dela Cruz\",\n    \"course\" => \"BSIT\",\n    \"year\" => 3\n];\necho $student[\"name\"]; // Output: Juan Dela Cruz\n```\n\n**Iterating with Foreach:**\n```php\nforeach ($student as $key => $value) {\n    echo \"$key: $value<br>\";\n}\n```"
          }
        ]
      },
      {
        "id": "lesson-11",
        "title": "PHP Superglobals, OOP & Architecture",
        "subtitle": "$_GET vs $_POST, sessions, classes, objects, namespaces, and modern web application structure",
        "category": "PHP Backend",
        "takeaways": [
          "$_GET exposes parameters in the URL query string; $_POST sends data within HTTP body.",
          "session_start() initiates or resumes a user session across multiple pages.",
          "A Class is a code blueprint; an Object is a concrete instantiated instance.",
          "Namespaces organize classes and prevent naming conflicts in large modern frameworks like Laravel."
        ],
        "examTips": [
          "Exam Pointer: Never use $_GET for passwords or sensitive user credentials.",
          "Exam Pointer: A Namespace is a virtual directory/package preventing name clashes between identically named classes.",
          "Exam Pointer: try-catch handles exceptions; the finally block ALWAYS executes regardless of errors."
        ],
        "sections": [
          {
            "title": "Superglobals: $_GET vs. $_POST",
            "content": "**PHP Superglobals** are built-in global arrays accessible from anywhere in a script.\n\n• **`$_GET`**: Collects form data sent via HTTP GET. Values are visible in the browser address bar as query parameters (`url.php?search=webdev`). Good for bookmarks and searches, bad for passwords!\n• **`$_POST`**: Collects data sent via HTTP POST. Data is sent inside the HTTP request body and is invisible in the URL. Required for sensitive credentials, logins, and file uploads."
          },
          {
            "title": "Sessions & State Management",
            "content": "HTTP is a stateless protocol (it forgets user identity between page loads). **PHP Sessions** solve this by storing user data on the server:\n\n```php\n<?php\nsession_start(); // Must be called at the very top of each script\n$_SESSION[\"user_id\"] = 42;\n$_SESSION[\"username\"] = \"john_pup\";\n?>\n```\nA unique session ID cookie is stored on the client browser while actual session variables remain secure on the server."
          },
          {
            "title": "Object-Oriented Programming (OOP) & Architecture",
            "content": "**Foundations for Laravel & Modern Web Applications:**\n• **Class**: A **blueprint of code** defining properties (variables) and methods (functions).\n• **Object**: An **instance** of a class created using the `new` keyword (`$user = new User();`).\n• **Namespace**: A virtual directory preventing naming collisions between external packages.\n• **Exception Handling**:\n  - `try`: Code block tested for exceptions.\n  - `catch`: Executes if an exception is thrown.\n  - `finally`: Code that **always executes**, whether an error occurred or not."
          }
        ]
      }
    ]
  }
];
