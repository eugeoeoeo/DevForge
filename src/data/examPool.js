// Web Development Master Question Bank
// Total questions: 108 (55+ MCQs, 22+ Identification)
// Includes all sample quiz questions from Group 2, Group 9, and Group 5.

export const EXAM_POOL = {
  "mcq": [
    {
      "id": "web-mcq-1",
      "module": "HTML5",
      "question": "What is the primary tool used by websites to collect data and input from visitors?",
      "options": [
        "HTML Forms",
        "HTML Lists",
        "HTML Tables",
        "HTML Input"
      ],
      "correctAnswer": 0,
      "explanation": "From Group 2 Sample Quiz Item 1: 'HTML forms are the primary tool used by websites to collect data and input from visitors.'"
    },
    {
      "id": "web-mcq-2",
      "module": "HTML5",
      "question": "Which HTML element is used to define the dominant content of a webpage?",
      "options": [
        "<main>",
        "<article>",
        "<section>",
        "<aside>"
      ],
      "correctAnswer": 0,
      "explanation": "From Group 2 Sample Quiz Item 2: '<main> defines the dominant content of the document.'"
    },
    {
      "id": "web-mcq-3",
      "module": "HTML5",
      "question": "Which is the correct basic syntax for creating a hyperlink in HTML?",
      "options": [
        "<a href=\"url\">link text</a>",
        "<link href=\"url\">link text</link>",
        "<a src=\"url\">link text</a>",
        "<href=\"url\">link text</href>"
      ],
      "correctAnswer": 0,
      "explanation": "From Group 2 Sample Quiz Item 3: '<a href=\"url\">link text</a>'."
    },
    {
      "id": "web-mcq-4",
      "module": "HTML5",
      "question": "Which is the correct basic syntax for inserting an image in HTML?",
      "options": [
        "<img src=\"url\" alt=\"text\">",
        "<img href=\"url\" alt=\"text\"></img>",
        "<picture src=\"url\">text</picture>",
        "<image src=\"url\" alt=\"text\">"
      ],
      "correctAnswer": 0,
      "explanation": "From Group 2 Sample Quiz Item 4: '<img src=\"url\" alt=\"text\">'. <img> is an empty tag with no closing tag."
    },
    {
      "id": "web-mcq-5",
      "module": "HTML5",
      "question": "Which is the correct basic syntax for creating a text input field in an HTML form?",
      "options": [
        "<input type=\"text\" name=\"name\">",
        "<form type=\"text\">name</form>",
        "<input text=\"name\">",
        "<text input=\"name\">"
      ],
      "correctAnswer": 0,
      "explanation": "From Group 2 Sample Quiz Item 5: '<input type=\"text\" name=\"name\">'."
    },
    {
      "id": "web-mcq-6",
      "module": "CSS3",
      "question": "In CSS specificity, which order correctly ranks from HIGHEST to LOWEST priority?",
      "options": [
        "Inline style > ID selector > Class selector > Element selector",
        "Element selector > Class selector > ID selector > Inline style",
        "ID selector > Inline style > Element selector > Class selector",
        "Class selector > ID selector > Inline style > Element selector"
      ],
      "correctAnswer": 0,
      "explanation": "From Group 9 Sample Quiz Item 1: Specificity from high to low is Inline style > ID selector > Class / attribute > Element selector."
    },
    {
      "id": "web-mcq-7",
      "module": "CSS3",
      "question": "Given: p { color: blue; } .highlight { color: green; } #note { color: orange; } and HTML: <p id=\"note\" class=\"highlight\">Hello!</p> — what color does the text show?",
      "options": [
        "Orange, because an ID selector is more specific than a class or element selector",
        "Blue, because p is the element selector",
        "Green, because .highlight is written after p",
        "It alternates between all three colors"
      ],
      "correctAnswer": 0,
      "explanation": "From Group 9 Sample Quiz Item 2: The text shows in ORANGE because ID selectors possess higher specificity than classes or elements."
    },
    {
      "id": "web-mcq-8",
      "module": "CSS3",
      "question": "What is the correct order of layers in the CSS Box Model, from innermost to outermost?",
      "options": [
        "Content → Padding → Border → Margin",
        "Margin → Border → Padding → Content",
        "Padding → Content → Margin → Border",
        "Border → Content → Padding → Margin"
      ],
      "correctAnswer": 0,
      "explanation": "From Group 9 Sample Quiz Item 3: Box model layers are Content (inner) → Padding → Border → Margin (outer)."
    },
    {
      "id": "web-mcq-9",
      "module": "CSS3",
      "question": "Why do most developers set box-sizing: border-box globally?",
      "options": [
        "It makes padding and border count inside the declared width, keeping layouts predictable",
        "It removes the need for margins entirely",
        "It automatically makes a layout responsive",
        "It disables the cascade for that element"
      ],
      "correctAnswer": 0,
      "explanation": "From Group 9 Sample Quiz Item 4: border-box forces padding and border to be calculated inside the declared width."
    },
    {
      "id": "web-mcq-10",
      "module": "CSS3",
      "question": "Flexbox is best described as:",
      "options": [
        "A one-dimensional layout system for a single row or column",
        "A two-dimensional layout system for rows and columns together",
        "A CSS framework like Bootstrap",
        "A way to write media queries"
      ],
      "correctAnswer": 0,
      "explanation": "From Group 9 Sample Quiz Item 5: Flexbox is a one-dimensional layout system."
    },
    {
      "id": "web-mcq-11",
      "module": "CSS3",
      "question": "Which flex-direction value stacks flex items vertically?",
      "options": [
        "column",
        "row",
        "wrap",
        "stretch"
      ],
      "correctAnswer": 0,
      "explanation": "From Group 9 Sample Quiz Item 6: 'flex-direction: column stacks flex items vertically.'"
    },
    {
      "id": "web-mcq-12",
      "module": "CSS3",
      "question": "Compared to Flexbox, CSS Grid is best suited for:",
      "options": [
        "Whole page layouts and two-dimensional designs like photo galleries or dashboards",
        "Centering a single button",
        "Writing media queries",
        "Setting box-sizing rules"
      ],
      "correctAnswer": 0,
      "explanation": "From Group 9 Sample Quiz Item 7: CSS Grid handles two dimensions (rows AND columns together)."
    },
    {
      "id": "web-mcq-13",
      "module": "CSS3",
      "question": "What does 'mobile-first' design mean in the context of media queries?",
      "options": [
        "Writing base styles for small screens first, then adding rules for bigger screens using min-width",
        "Writing styles for desktop first, then overriding them for smaller screens",
        "Only designing for phones and ignoring tablets/desktops",
        "Using max-width queries exclusively"
      ],
      "correctAnswer": 0,
      "explanation": "From Group 9 Sample Quiz Item 8: Mobile-first writes base styles for mobile and enhances using min-width."
    },
    {
      "id": "web-mcq-14",
      "module": "CSS3",
      "question": "How does Tailwind CSS differ from Bootstrap 5 according to the comparison slide?",
      "options": [
        "Tailwind is utility-first (classes like flex, p-4, bg-blue-500) you combine yourself, while Bootstrap gives ready-made components",
        "Tailwind provides ready-made components like navbars and modals, while Bootstrap uses utility classes",
        "They are functionally identical frameworks",
        "Bootstrap is only for React/Vue/Laravel projects"
      ],
      "correctAnswer": 0,
      "explanation": "From Group 9 Sample Quiz Item 9: Tailwind is utility-first while Bootstrap provides ready-made components."
    },
    {
      "id": "web-mcq-15",
      "module": "CSS3",
      "question": "According to the slides, can Flexbox and CSS Grid be used together?",
      "options": [
        "Yes — use Grid for the overall page layout, and Flexbox inside individual grid cells",
        "No, a page must use only one or the other",
        "Yes, but only inside media queries",
        "No, Flexbox is deprecated in favor of Grid"
      ],
      "correctAnswer": 0,
      "explanation": "From Group 9 Sample Quiz Item 10: You can use Grid for the page architecture and Flexbox inside grid cells."
    },
    {
      "id": "web-mcq-16",
      "module": "PHP",
      "question": "Which symbol must be placed at the beginning of every variable name in PHP?",
      "options": [
        "$",
        "@",
        "#",
        "&"
      ],
      "correctAnswer": 0,
      "explanation": "From Group 5 Sample Quiz Item 1: Every PHP variable starts with '$'."
    },
    {
      "id": "web-mcq-17",
      "module": "PHP",
      "question": "Which PHP variable is used to retrieve data sent using the GET method?",
      "options": [
        "$_GET",
        "$_FORM",
        "$_SESSION",
        "$_POST"
      ],
      "correctAnswer": 0,
      "explanation": "From Group 5 Sample Quiz Item 2: '$_GET' accesses URL query data."
    },
    {
      "id": "web-mcq-18",
      "module": "PHP",
      "question": "A form uses method=\"GET\" and has an input with name=\"search\". If the user enters laptop, which URL most likely represents the submitted data?",
      "options": [
        "website.com/search.php?search=laptop",
        "website.com/search.php#search=laptop",
        "website.com/search.php/laptop?method=GET",
        "website.com/search.php/laptop"
      ],
      "correctAnswer": 0,
      "explanation": "From Group 5 Sample Quiz Item 3: GET appends query parameters with '?' so it produces website.com/search.php?search=laptop."
    },
    {
      "id": "web-mcq-19",
      "module": "PHP",
      "question": "It is an unexpected problem that occurs while a PHP script is running.",
      "options": [
        "Exception",
        "Input handling",
        "Classes",
        "Syntax Error"
      ],
      "correctAnswer": 0,
      "explanation": "From Group 5 Sample Quiz Item 4: An exception is an unexpected runtime problem."
    },
    {
      "id": "web-mcq-20",
      "module": "PHP",
      "question": "It is used to access a data submitted through a form.",
      "options": [
        "$_POST",
        "$_GET",
        "$_SESSION",
        "$_FORM"
      ],
      "correctAnswer": 0,
      "explanation": "From Group 5 Sample Quiz Item 5: '$_POST' is commonly used to access submitted form data."
    },
    {
      "id": "web-mcq-21",
      "module": "PHP",
      "question": "This is a blueprint of code designed to define properties and methods:",
      "options": [
        "PHP Class",
        "PHP Room",
        "PHP Objects",
        "PHP Functions"
      ],
      "correctAnswer": 0,
      "explanation": "From Group 5 Sample Quiz Item 6: A class is a blueprint defining properties and methods."
    },
    {
      "id": "web-mcq-22",
      "module": "PHP",
      "question": "This help make code structured, organized, and easier to autoload:",
      "options": [
        "Namespaces",
        "Library",
        "Connection",
        "Storage"
      ],
      "correctAnswer": 0,
      "explanation": "From Group 5 Sample Quiz Item 7: Namespaces organize classes and prevent naming conflicts."
    },
    {
      "id": "web-mcq-23",
      "module": "HTML5",
      "question": "What is HTML classified as according to the learning material?",
      "options": [
        "A markup language that labels content using tags so browsers understand it",
        "A procedural language like Java or C that executes algorithmic logic",
        "A styling engine that computes layout dimensions and typography",
        "A relational database query language for managing enterprise tables"
      ],
      "correctAnswer": 0,
      "explanation": "HTML is a markup language, not a programming language."
    },
    {
      "id": "web-mcq-24",
      "module": "HTML5",
      "question": "Which semantic element is used to enclose introductory content or a set of navigation links at the top of a page?",
      "options": [
        "<header>",
        "<footer>",
        "<aside>",
        "<main>"
      ],
      "correctAnswer": 0,
      "explanation": "<header> contains introductory content or navigation links."
    },
    {
      "id": "web-mcq-25",
      "module": "HTML5",
      "question": "Which semantic element represents content that is indirectly related to the main content, such as sidebars or related links?",
      "options": [
        "<aside>",
        "<section>",
        "<nav>",
        "<article>"
      ],
      "correctAnswer": 0,
      "explanation": "<aside> represents content indirectly related to main content."
    },
    {
      "id": "web-mcq-26",
      "module": "HTML5",
      "question": "What does the declaration '<!DOCTYPE html>' accomplish in a web document?",
      "options": [
        "Declares the document as HTML5 and enables browser standards mode",
        "Enables server-side PHP parsing on static HTML files",
        "Loads the browser's assistive screen reader API",
        "Forces all text elements to render in serif typography"
      ],
      "correctAnswer": 0,
      "explanation": "<!DOCTYPE html> declares HTML5 and triggers standards mode."
    },
    {
      "id": "web-mcq-27",
      "module": "HTML5",
      "question": "In HTML lists, which tag pairs a term with its description or definition?",
      "options": [
        "<dl>",
        "<ul>",
        "<ol>",
        "<table>"
      ],
      "correctAnswer": 0,
      "explanation": "<dl> is the description list, using <dt> for terms and <dd> for descriptions."
    },
    {
      "id": "web-mcq-28",
      "module": "HTML5",
      "question": "In HTML tables, what is the default visual presentation of a table header cell (<th>)?",
      "options": [
        "Bold and centered",
        "Italicized and left-aligned",
        "Underlined with a yellow background",
        "Identical to standard <td> cells without bolding"
      ],
      "correctAnswer": 0,
      "explanation": "Header cells (<th>) are bold and centered by default."
    },
    {
      "id": "web-mcq-29",
      "module": "HTML5",
      "question": "Why is the <img> element described as an 'empty element'?",
      "options": [
        "It has no closing tag and cannot contain child elements",
        "It contains no visual pixels until rendered by JavaScript",
        "It requires no src attribute to display a placeholder",
        "It cannot be wrapped inside an anchor (<a>) tag"
      ],
      "correctAnswer": 0,
      "explanation": "<img> is an empty element with no closing tag."
    },
    {
      "id": "web-mcq-30",
      "module": "HTML5",
      "question": "Which attribute must be added to <audio> or <video> to enable play, pause, and volume controls for visitors?",
      "options": [
        "controls",
        "autoplay",
        "muted",
        "loop"
      ],
      "correctAnswer": 0,
      "explanation": "The 'controls' attribute provides native playback controls."
    },
    {
      "id": "web-mcq-31",
      "module": "HTML5",
      "question": "What is the standard MIME audio media type for MP3 files?",
      "options": [
        "audio/mpeg",
        "audio/mp3",
        "audio/ogg",
        "audio/wav"
      ],
      "correctAnswer": 0,
      "explanation": "MP3 uses the media type 'audio/mpeg'."
    },
    {
      "id": "web-mcq-32",
      "module": "HTML5",
      "question": "How does the <label> element enhance form usability on touchscreens?",
      "options": [
        "Tapping the label text focuses or toggles the associated input field",
        "It automatically translates placeholder text into the visitor's language",
        "It increases the screen brightness when an input is selected",
        "It sends an SMS verification code to the user's mobile number"
      ],
      "correctAnswer": 0,
      "explanation": "Clicking/tapping a label focuses the associated input linked via the for attribute."
    },
    {
      "id": "web-mcq-33",
      "module": "HTML5",
      "question": "Which input type should be used when a user must pick exactly one option from a predefined group?",
      "options": [
        "<input type=\"radio\">",
        "<input type=\"checkbox\">",
        "<input type=\"select\">",
        "<input type=\"file\">"
      ],
      "correctAnswer": 0,
      "explanation": "Radio inputs allow choosing exactly one option from a group."
    },
    {
      "id": "web-mcq-34",
      "module": "HTML5",
      "question": "What form element creates a large, multi-line text box for long messages?",
      "options": [
        "<textarea>",
        "<input type=\"text\">",
        "<select>",
        "<label>"
      ],
      "correctAnswer": 0,
      "explanation": "<textarea> creates a large, multi-line text box."
    },
    {
      "id": "web-mcq-35",
      "module": "HTML5",
      "question": "What is the difference between 'disabled' and 'readonly' form attributes?",
      "options": [
        "Disabled fields cannot be interacted with and are not submitted; readonly fields can be selected and are submitted",
        "Readonly fields are hidden from view while disabled fields are highlighted",
        "Disabled fields allow text typing while readonly fields do not",
        "There is no difference between them"
      ],
      "correctAnswer": 0,
      "explanation": "Disabled fields are excluded from submission; readonly values are submitted."
    },
    {
      "id": "web-mcq-36",
      "module": "HTML5",
      "question": "How should alt text be handled for purely decorative images?",
      "options": [
        "Set alt=\"\" so assistive technologies can safely ignore the image",
        "Omit the alt attribute completely",
        "Set alt=\"decorative\"",
        "Set alt=\"do not read\""
      ],
      "correctAnswer": 0,
      "explanation": "Decorative images use alt='' so screen readers ignore them."
    },
    {
      "id": "web-mcq-37",
      "module": "HTML5",
      "question": "Why should generic phrases like 'Click here' be avoided in hyperlink text?",
      "options": [
        "Screen-reader users often list links out of context, so link text must clearly describe the destination",
        "Web browsers charge additional data fees for generic text links",
        "The HTTP protocol fails when GET requests originate from short words",
        "Search engines automatically block pages containing 'Click here'"
      ],
      "correctAnswer": 0,
      "explanation": "Meaningful link text describes destination context independently."
    },
    {
      "id": "web-mcq-38",
      "module": "CSS3",
      "question": "Given a div with width: 90px, padding: 50px, border: 10px solid orange, and margin: 30px (content-box), what is the visible box width on screen?",
      "options": [
        "210px",
        "90px",
        "150px",
        "270px"
      ],
      "correctAnswer": 0,
      "explanation": "Visible width = 90 (content) + 100 (padding 50x2) + 20 (border 10x2) = 210px."
    },
    {
      "id": "web-mcq-39",
      "module": "CSS3",
      "question": "Which CSS property specifies how flex items are aligned along the cross axis?",
      "options": [
        "align-items",
        "justify-content",
        "flex-direction",
        "flex-wrap"
      ],
      "correctAnswer": 0,
      "explanation": "align-items aligns flex items across the cross axis."
    },
    {
      "id": "web-mcq-40",
      "module": "CSS3",
      "question": "Which CSS property distributes space between items along the main axis in Flexbox?",
      "options": [
        "justify-content",
        "align-items",
        "align-content",
        "flex-basis"
      ],
      "correctAnswer": 0,
      "explanation": "justify-content handles spacing along the main axis."
    },
    {
      "id": "web-mcq-41",
      "module": "CSS3",
      "question": "In the CSS cascade, what happens when two selectors have the exact same specificity and importance?",
      "options": [
        "The rule written last in the source code wins",
        "The browser randomly selects one of the rules",
        "Both rules are ignored and browser default is applied",
        "The rule with fewer characters wins"
      ],
      "correctAnswer": 0,
      "explanation": "When specificity is tied, the rule written last in the source order wins."
    },
    {
      "id": "web-mcq-42",
      "module": "PHP",
      "question": "What output is produced by: $i = 1; while ($i < 4) { $i++; } echo $i;",
      "options": [
        "4",
        "3",
        "5",
        "1"
      ],
      "correctAnswer": 0,
      "explanation": "Loop runs for 1 (becomes 2), 2 (becomes 3), 3 (becomes 4). 4 < 4 is false. Output: 4."
    },
    {
      "id": "web-mcq-43",
      "module": "PHP",
      "question": "In PHP, what function removes unnecessary whitespace from both ends of a string?",
      "options": [
        "trim()",
        "strip()",
        "clean()",
        "format()"
      ],
      "correctAnswer": 0,
      "explanation": "trim() removes whitespace from the beginning and end of a string."
    },
    {
      "id": "web-mcq-44",
      "module": "PHP",
      "question": "What function safely converts special HTML characters into entities to prevent Cross-Site Scripting (XSS)?",
      "options": [
        "htmlspecialchars()",
        "strip_tags()",
        "urlencode()",
        "md5()"
      ],
      "correctAnswer": 0,
      "explanation": "htmlspecialchars() converts special characters into HTML entities."
    },
    {
      "id": "web-mcq-45",
      "module": "PHP",
      "question": "Which PHP exception keyword defines a block of code that ALWAYS executes regardless of whether an exception occurred?",
      "options": [
        "finally",
        "catch",
        "try",
        "throw"
      ],
      "correctAnswer": 0,
      "explanation": "The finally block always runs whether or not an exception was thrown."
    },
    {
      "id": "web-mcq-46",
      "module": "PHP",
      "question": "What function terminates and destroys an active PHP session?",
      "options": [
        "session_destroy()",
        "session_end()",
        "session_stop()",
        "destroy_session()"
      ],
      "correctAnswer": 0,
      "explanation": "session_destroy() terminates the active session."
    },
    {
      "id": "web-mcq-47",
      "module": "PHP",
      "question": "Which statement is true regarding PHP abstract classes?",
      "options": [
        "They cannot be used to directly instantiate objects",
        "They cannot be inherited by child classes",
        "All their properties are permanently readonly",
        "They can only contain static mathematical constants"
      ],
      "correctAnswer": 0,
      "explanation": "Abstract classes cannot be used to create objects directly."
    },
    {
      "id": "web-mcq-48",
      "module": "PHP",
      "question": "Which type of PHP array uses named keys such as $student = ['name' => 'John', 'age' => 20]?",
      "options": [
        "Associative Array",
        "Indexed Array",
        "Multidimensional Array",
        "Vector Array"
      ],
      "correctAnswer": 0,
      "explanation": "Associative arrays store key-value pairs with named keys."
    },
    {
      "id": "web-mcq-49",
      "module": "PHP",
      "question": "Why are PHP sessions necessary in web applications?",
      "options": [
        "Because HTTP is stateless and cannot otherwise remember users across page views",
        "Because PHP cannot connect to MySQL databases without an active session",
        "Because web browsers delete all cookies whenever an image loads",
        "Because CSS animations require session cookies to render smoothly"
      ],
      "correctAnswer": 0,
      "explanation": "HTTP is stateless, so sessions preserve user identity across page navigations."
    },
    {
      "id": "web-mcq-50",
      "module": "HTML5",
      "question": "Which HTML5 attribute restricts user input to a specified regular expression pattern?",
      "options": [
        "pattern",
        "regex",
        "validate",
        "match"
      ],
      "correctAnswer": 0,
      "explanation": "The pattern attribute takes a regular expression to validate text."
    },
    {
      "id": "web-mcq-51",
      "module": "HTML5",
      "question": "Which semantic element is specifically used to wrap footer information like copyright or contact details?",
      "options": [
        "<footer>",
        "<bottom>",
        "<end>",
        "<aside>"
      ],
      "correctAnswer": 0,
      "explanation": "<footer> identifies closing or supporting info such as copyright or contact details."
    },
    {
      "id": "web-mcq-52",
      "module": "CSS3",
      "question": "In the CSS Box Model, what layer represents the space INSIDE the border around the content?",
      "options": [
        "Padding",
        "Margin",
        "Outline",
        "Content"
      ],
      "correctAnswer": 0,
      "explanation": "Padding is the space inside the border."
    },
    {
      "id": "web-mcq-53",
      "module": "CSS3",
      "question": "In the CSS Box Model, what layer represents the space OUTSIDE the border?",
      "options": [
        "Margin",
        "Padding",
        "Border",
        "Content"
      ],
      "correctAnswer": 0,
      "explanation": "Margin is the space outside the border."
    },
    {
      "id": "web-mcq-54",
      "module": "PHP",
      "question": "What operator is used in PHP to test if two values are NOT equal?",
      "options": [
        "!=",
        "==",
        "<>",
        "!=="
      ],
      "correctAnswer": 0,
      "explanation": "!= is the not equal operator."
    },
    {
      "id": "web-mcq-55",
      "module": "PHP",
      "question": "What keyword is used to trigger or send an exception in PHP when a runtime error condition is detected?",
      "options": [
        "throw",
        "try",
        "catch",
        "raise"
      ],
      "correctAnswer": 0,
      "explanation": "throw is used to create and send an exception."
    },
    {
      "id": "web-mcq-56",
      "module": "HTML5",
      "question": "Which technology in the web trio is specifically responsible for presentation, visual design, and responsive layout?",
      "options": [
        "CSS",
        "HTML",
        "JavaScript",
        "SQL"
      ],
      "correctAnswer": 0,
      "explanation": "From The Web Trio: CSS controls presentation and layout."
    },
    {
      "id": "web-mcq-57",
      "module": "HTML5",
      "question": "Which MIME media type is used for WebM video streaming in HTML5?",
      "options": [
        "video/webm",
        "video/mp4",
        "video/ogg",
        "application/webm"
      ],
      "correctAnswer": 0,
      "explanation": "WebM video uses the media type 'video/webm'."
    },
    {
      "id": "web-mcq-58",
      "module": "HTML5",
      "question": "In HTML description lists, which tag is used to specify the term or name being defined?",
      "options": [
        "<dt>",
        "<dd>",
        "<dl>",
        "<li>"
      ],
      "correctAnswer": 0,
      "explanation": "<dt> defines the term or name in a description list."
    },
    {
      "id": "web-mcq-59",
      "module": "HTML5",
      "question": "In HTML description lists, which tag provides the indented description or definition of the term?",
      "options": [
        "<dd>",
        "<dt>",
        "<dl>",
        "<desc>"
      ],
      "correctAnswer": 0,
      "explanation": "<dd> provides the description of the term."
    },
    {
      "id": "web-mcq-60",
      "module": "HTML5",
      "question": "Which form attribute specifies the destination URL or file path where form data should be submitted?",
      "options": [
        "action",
        "method",
        "target",
        "href"
      ],
      "correctAnswer": 0,
      "explanation": "action specifies the destination URL where form data is sent."
    },
    {
      "id": "web-mcq-61",
      "module": "PHP",
      "question": "Which statement or keyword in PHP is used to display output directly on the screen?",
      "options": [
        "echo",
        "print_r",
        "display",
        "console.log"
      ],
      "correctAnswer": 0,
      "explanation": "echo is the standard statement used to display output in PHP."
    },
    {
      "id": "web-mcq-62",
      "module": "PHP",
      "question": "Which expression in a PHP for loop sets the initial starting value of the loop counter?",
      "options": [
        "Initialization",
        "Condition",
        "Increment",
        "Termination"
      ],
      "correctAnswer": 0,
      "explanation": "Initialization sets the initial value of the loop variable."
    },
    {
      "id": "web-mcq-63",
      "module": "PHP",
      "question": "Which expression in a PHP for loop checks whether the loop should continue running?",
      "options": [
        "Condition",
        "Initialization",
        "Increment",
        "Iteration"
      ],
      "correctAnswer": 0,
      "explanation": "Condition checks if the loop should continue."
    },
    {
      "id": "web-mcq-64",
      "module": "PHP",
      "question": "Which expression in a PHP for loop updates the loop counter variable after each iteration?",
      "options": [
        "Increment/Decrement",
        "Condition",
        "Initialization",
        "Break"
      ],
      "correctAnswer": 0,
      "explanation": "Increment/Decrement updates the loop counter variable."
    },
    {
      "id": "web-mcq-65",
      "module": "PHP",
      "question": "In PHP object-oriented programming, which class type CANNOT be extended or inherited by another class?",
      "options": [
        "Final Classes",
        "Abstract Classes",
        "Readonly Classes",
        "Anonymous Classes"
      ],
      "correctAnswer": 0,
      "explanation": "Final Classes cannot be extended or inherited by other classes."
    },
    {
      "id": "web-mcq-66",
      "module": "PHP",
      "question": "In PHP object-oriented programming, which class type locks all properties so they cannot be changed after initialization?",
      "options": [
        "Readonly Classes",
        "Final Classes",
        "Abstract Classes",
        "Static Classes"
      ],
      "correctAnswer": 0,
      "explanation": "Readonly Classes lock all properties so they cannot be changed."
    },
    {
      "id": "web-mcq-67",
      "module": "PHP",
      "question": "Which type of PHP array contains one or more arrays nested inside another array?",
      "options": [
        "Multidimensional Arrays",
        "Associative Arrays",
        "Indexed Arrays",
        "Static Arrays"
      ],
      "correctAnswer": 0,
      "explanation": "Multidimensional arrays contain arrays inside another array."
    },
    {
      "id": "web-mcq-68",
      "module": "HTML5",
      "question": "What is the primary function of Screen Readers in web accessibility?",
      "options": [
        "Software that converts on-screen text and information into speech or Braille",
        "Hardware displays that magnify pixels by 400% on retina monitors",
        "Plugins that automatically correct grammatical errors in user comments",
        "Network proxies that decrypt secure HTTPS traffic for students"
      ],
      "correctAnswer": 0,
      "explanation": "Screen readers convert on-screen text into synthesized speech or Braille."
    },
    {
      "id": "web-mcq-69",
      "module": "CSS3",
      "question": "In mobile-first media queries, what standard screen width is used to target desktop computers and laptops?",
      "options": [
        "≥ 992px",
        "< 576px",
        "≥ 768px",
        "≥ 1440px"
      ],
      "correctAnswer": 0,
      "explanation": "Desktop screens are targeted with @media (min-width: 992px)."
    },
    {
      "id": "web-mcq-70",
      "module": "CSS3",
      "question": "In CSS specificity rankings, which selector has the LOWEST priority?",
      "options": [
        "Element selector (p, div, h1)",
        "Class selector (.btn)",
        "ID selector (#header)",
        "Inline style"
      ],
      "correctAnswer": 0,
      "explanation": "Element selectors have the lowest specificity priority."
    },
    {
      "id": "web-mcq-71",
      "module": "CSS3",
      "question": "Which CSS property specifies the space between adjacent items in a Flexbox or Grid layout?",
      "options": [
        "gap",
        "padding",
        "margin",
        "spacing"
      ],
      "correctAnswer": 0,
      "explanation": "gap specifies the space between adjacent flex or grid items."
    },
    {
      "id": "web-mcq-72",
      "module": "HTML5",
      "question": "Which HTML5 input type opens a standardized native calendar picker widget tailored to the device?",
      "options": [
        "<input type=\"date\">",
        "<input type=\"calendar\">",
        "<input type=\"time\">",
        "<input type=\"schedule\">"
      ],
      "correctAnswer": 0,
      "explanation": "<input type=\"date\"> opens a native calendar picker widget."
    },
    {
      "id": "web-mcq-73",
      "module": "HTML5",
      "question": "Which HTML5 input type provides increment and decrement arrow controls and rejects non-numeric input?",
      "options": [
        "<input type=\"number\">",
        "<input type=\"text\">",
        "<input type=\"range\">",
        "<input type=\"digit\">"
      ],
      "correctAnswer": 0,
      "explanation": "<input type=\"number\"> restricts input to numerical values."
    },
    {
      "id": "web-mcq-74",
      "module": "CSS3",
      "question": "In the CSS Box Model, what does the 'Content' layer represent?",
      "options": [
        "The actual text, image, or media displayed inside the element",
        "The space separating the element from its adjacent siblings",
        "The border drawn around the element box",
        "The padding area between content and border"
      ],
      "correctAnswer": 0,
      "explanation": "Content is the actual text or image inside the element."
    },
    {
      "id": "web-mcq-75",
      "module": "CSS3",
      "question": "In CSS Flexbox, what property controls how much a flex item expands to fill available remaining space?",
      "options": [
        "flex-grow",
        "flex-shrink",
        "flex-basis",
        "flex-wrap"
      ],
      "correctAnswer": 0,
      "explanation": "flex-grow controls how much an item expands to fill space."
    },
    {
      "id": "web-mcq-76",
      "module": "PHP",
      "question": "In a PHP switch statement, what keyword runs when none of the specified case values match?",
      "options": [
        "default",
        "else",
        "finally",
        "fallback"
      ],
      "correctAnswer": 0,
      "explanation": "default runs when no case matches in a switch statement."
    },
    {
      "id": "web-mcq-77",
      "module": "PHP",
      "question": "What function or language construct in PHP is used to iterate through elements of an array and display collected errors?",
      "options": [
        "foreach",
        "switch",
        "while",
        "do-while"
      ],
      "correctAnswer": 0,
      "explanation": "foreach can display collected errors from an array."
    },
    {
      "id": "web-mcq-78",
      "module": "PHP",
      "question": "Which comparison operator tests whether two values are equal in PHP?",
      "options": [
        "==",
        "=",
        "===",
        "eq"
      ],
      "correctAnswer": 0,
      "explanation": "== is the equal comparison operator in PHP."
    },
    {
      "id": "web-mcq-79",
      "module": "HTML5",
      "question": "Which HTML5 element represents navigation links on a website?",
      "options": [
        "<nav>",
        "<menu>",
        "<header>",
        "<links>"
      ],
      "correctAnswer": 0,
      "explanation": "<nav> represents navigation links."
    },
    {
      "id": "web-mcq-80",
      "module": "HTML5",
      "question": "Which attribute can be added to an <audio> or <video> tag so it starts playing automatically upon load?",
      "options": [
        "autoplay",
        "controls",
        "loop",
        "muted"
      ],
      "correctAnswer": 0,
      "explanation": "autoplay starts media files automatically."
    }
  ],
  "identification": [
    {
      "id": "web-id-1",
      "category": "PHP Code Output",
      "question": "Determine the output: $grade = 92; if ($grade >= 90) echo 'Very Good'; elseif ($grade >= 75) echo 'Passed'; else echo 'Failed';",
      "correctAnswer": "Very Good",
      "acceptedAnswers": [
        "Very Good",
        "very good",
        "'Very Good'"
      ],
      "explanation": "From Group 5 Sample Quiz Item 8: Determine the output. Answer: Very Good."
    },
    {
      "id": "web-id-2",
      "category": "PHP Code Output",
      "question": "Output ulit: $x = 1; do { $x *= 2; } while ($x < 15); echo $x;",
      "correctAnswer": "16",
      "acceptedAnswers": [
        "16"
      ],
      "explanation": "From Group 5 Sample Quiz Item 9: Output ulit. Answer: 16 (doubling 1 -> 2 -> 4 -> 8 -> 16)."
    },
    {
      "id": "web-id-3",
      "category": "PHP Code Output",
      "question": "Last na output: Determine the loop accumulator output from the PHP slides.",
      "correctAnswer": "88",
      "acceptedAnswers": [
        "88"
      ],
      "explanation": "From Group 5 Sample Quiz Item 10: Last na output. Answer: 88."
    },
    {
      "id": "web-id-4",
      "category": "Web Accessibility",
      "question": "Give one example of Basic Accessibility Principle (e.g. Keyboard Accessibility, Clear Content Structure, Meaningful Links, Alt Text, Proper Headings, Accessible Forms, Text Contrast).",
      "correctAnswer": "Keyboard Accessibility",
      "correctAnswerDisplay": "Keyboard Accessibility (or Clear Content Structure, Meaningful Links, Alt Text, Proper Headings)",
      "acceptedAnswers": [
        "Keyboard Accessibility",
        "Clear Content Structure",
        "Meaningful Links",
        "Alternative Text",
        "Alt Text",
        "Proper Headings",
        "Accessible Forms",
        "Text Readability and Contrast",
        "Contrast"
      ],
      "explanation": "From Group 2 Sample Quiz Items 6-10: Basic Accessibility Principles include Keyboard Accessibility, Clear Content Structure, Meaningful Links, Alternative Text, Proper Headings, Accessible Forms, and Text Contrast."
    },
    {
      "id": "web-id-5",
      "category": "HTML5",
      "question": "What is the primary tool used by websites to collect data and input from visitors?",
      "correctAnswer": "HTML Forms",
      "acceptedAnswers": [
        "HTML Forms",
        "Forms",
        "form",
        "HTML Form"
      ],
      "explanation": "HTML forms are the primary tool used to collect data and input from visitors."
    },
    {
      "id": "web-id-6",
      "category": "HTML5",
      "question": "Which HTML5 semantic element is used to define the dominant content of a webpage?",
      "correctAnswer": "<main>",
      "acceptedAnswers": [
        "<main>",
        "main"
      ],
      "explanation": "<main> defines the dominant content of the document."
    },
    {
      "id": "web-id-7",
      "category": "HTML5",
      "question": "What value must be set on the alt attribute for purely decorative images so assistive technologies ignore them?",
      "correctAnswer": "\"\"",
      "acceptedAnswers": [
        "\"\"",
        "''",
        "empty",
        "alt=\"\"",
        "empty string"
      ],
      "explanation": "Decorative images use alt='' so assistive technologies ignore them."
    },
    {
      "id": "web-id-8",
      "category": "HTML5",
      "question": "What HTML tag creates a large, multi-line box for users to type long messages or paragraphs?",
      "correctAnswer": "<textarea>",
      "acceptedAnswers": [
        "<textarea>",
        "textarea"
      ],
      "explanation": "<textarea> creates a large multi-line input box."
    },
    {
      "id": "web-id-9",
      "category": "HTML5",
      "question": "What attribute links a <label> directly to an input element's id for accessibility?",
      "correctAnswer": "for",
      "acceptedAnswers": [
        "for",
        "for attribute"
      ],
      "explanation": "The for attribute on <label> links it to the input's id."
    },
    {
      "id": "web-id-10",
      "category": "CSS3",
      "question": "What CSS property and value is set globally so that padding and border are included inside declared element widths?",
      "correctAnswer": "box-sizing: border-box",
      "acceptedAnswers": [
        "box-sizing: border-box",
        "border-box",
        "box-sizing:border-box"
      ],
      "explanation": "box-sizing: border-box forces padding and border to be calculated inside width."
    },
    {
      "id": "web-id-11",
      "category": "CSS3",
      "question": "Which flex-direction property value stacks flex items vertically into a column?",
      "correctAnswer": "column",
      "acceptedAnswers": [
        "column",
        "flex-direction: column"
      ],
      "explanation": "flex-direction: column stacks flex items vertically."
    },
    {
      "id": "web-id-12",
      "category": "CSS3",
      "question": "What is the innermost layer of the CSS Box Model?",
      "correctAnswer": "Content",
      "acceptedAnswers": [
        "Content"
      ],
      "explanation": "Content is the innermost layer of the CSS box model."
    },
    {
      "id": "web-id-13",
      "category": "CSS3",
      "question": "What is the outermost layer of the CSS Box Model, separating the element from its neighbors?",
      "correctAnswer": "Margin",
      "acceptedAnswers": [
        "Margin"
      ],
      "explanation": "Margin is the outermost layer of the CSS box model."
    },
    {
      "id": "web-id-14",
      "category": "PHP",
      "question": "Which symbol must be placed at the beginning of every variable name in PHP?",
      "correctAnswer": "$",
      "acceptedAnswers": [
        "$",
        "dollar sign",
        "dollar"
      ],
      "explanation": "Every variable in PHP starts with '$'."
    },
    {
      "id": "web-id-15",
      "category": "PHP",
      "question": "Which PHP superglobal is used to access form data submitted via HTTP POST?",
      "correctAnswer": "$_POST",
      "acceptedAnswers": [
        "$_POST",
        "$_POST[]"
      ],
      "explanation": "$_POST is used to retrieve data sent through the request body."
    },
    {
      "id": "web-id-16",
      "category": "PHP",
      "question": "Which PHP superglobal is used to retrieve query data sent through the URL?",
      "correctAnswer": "$_GET",
      "acceptedAnswers": [
        "$_GET",
        "$_GET[]"
      ],
      "explanation": "$_GET is used to retrieve data sent through the URL."
    },
    {
      "id": "web-id-17",
      "category": "PHP",
      "question": "What is an unexpected problem that occurs while a PHP script is running?",
      "correctAnswer": "Exception",
      "acceptedAnswers": [
        "Exception",
        "exception",
        "An exception"
      ],
      "explanation": "An exception is an unexpected runtime problem."
    },
    {
      "id": "web-id-18",
      "category": "PHP",
      "question": "This is a blueprint of code designed to define properties and methods in PHP:",
      "correctAnswer": "PHP Class",
      "acceptedAnswers": [
        "PHP Class",
        "Class",
        "class"
      ],
      "explanation": "A class is a blueprint defining properties and methods."
    },
    {
      "id": "web-id-19",
      "category": "PHP",
      "question": "This virtual folder organizes classes, prevents naming conflicts, and aids autoloading in PHP:",
      "correctAnswer": "Namespaces",
      "acceptedAnswers": [
        "Namespaces",
        "Namespace",
        "namespace"
      ],
      "explanation": "Namespaces act as virtual folders to organize classes and prevent naming collisions."
    },
    {
      "id": "web-id-20",
      "category": "PHP",
      "question": "What PHP function must be invoked to start a new session or resume an existing session?",
      "correctAnswer": "session_start()",
      "acceptedAnswers": [
        "session_start()",
        "session_start",
        "session_start();"
      ],
      "explanation": "session_start() starts or resumes an active PHP session."
    },
    {
      "id": "web-id-21",
      "category": "PHP",
      "question": "What PHP function converts special characters into HTML entities to prevent Cross-Site Scripting (XSS)?",
      "correctAnswer": "htmlspecialchars()",
      "acceptedAnswers": [
        "htmlspecialchars()",
        "htmlspecialchars"
      ],
      "explanation": "htmlspecialchars() prevents XSS by encoding HTML special characters."
    },
    {
      "id": "web-id-22",
      "category": "PHP",
      "question": "What PHP loop is classified as an exit control loop that always executes its body at least once?",
      "correctAnswer": "do-while",
      "acceptedAnswers": [
        "do-while",
        "do while",
        "do-while loop"
      ],
      "explanation": "do-while is an exit control loop that always executes once."
    },
    {
      "id": "web-id-23",
      "category": "HTML5",
      "question": "What declaration at the very top of an HTML document enables standards mode in web browsers?",
      "correctAnswer": "<!DOCTYPE html>",
      "acceptedAnswers": [
        "<!DOCTYPE html>",
        "<!doctype html>",
        "DOCTYPE html"
      ],
      "explanation": "<!DOCTYPE html> declares the document as HTML5 and triggers standards mode."
    },
    {
      "id": "web-id-24",
      "category": "HTML5",
      "question": "Which HTML5 semantic element is used to contain introductory content or site navigation links?",
      "correctAnswer": "<header>",
      "acceptedAnswers": [
        "<header>",
        "header"
      ],
      "explanation": "<header> contains introductory content or navigation links."
    },
    {
      "id": "web-id-25",
      "category": "HTML5",
      "question": "Which HTML5 semantic element identifies closing or supporting info such as copyright or contact details?",
      "correctAnswer": "<footer>",
      "acceptedAnswers": [
        "<footer>",
        "footer"
      ],
      "explanation": "<footer> identifies closing or supporting info such as copyright or contact details."
    },
    {
      "id": "web-id-26",
      "category": "PHP",
      "question": "What PHP function removes unnecessary leading and trailing whitespace from a string?",
      "correctAnswer": "trim()",
      "acceptedAnswers": [
        "trim()",
        "trim"
      ],
      "explanation": "trim() removes whitespace from the start and end of a string."
    },
    {
      "id": "web-id-27",
      "category": "PHP",
      "question": "What keyword is used inside a PHP switch statement to terminate execution and break out of the block?",
      "correctAnswer": "break",
      "acceptedAnswers": [
        "break",
        "break;"
      ],
      "explanation": "break stops the switch block."
    },
    {
      "id": "web-id-28",
      "category": "CSS3",
      "question": "In the CSS Box Model, what layer represents the space inside the border around the content?",
      "correctAnswer": "Padding",
      "acceptedAnswers": [
        "Padding",
        "padding"
      ],
      "explanation": "Padding is the layer inside the border around content."
    }
  ]
};
