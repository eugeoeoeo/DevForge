// Strictly contains ONLY the professor's exam questions
export const EXAM_POOL = {
  mcq: [
  {
    "id": "mcq-1",
    "question": "What is the main purpose of HTML5?",
    "options": [
      "To create databases",
      "To structure and organize content on webpages",
      "To edit photos",
      "To create computer hardware"
    ],
    "correctAnswer": 1,
    "explanation": "HTML5 is the standard markup language used to structure, lay out, and organize content on the World Wide Web."
  },
  {
    "id": "mcq-2",
    "question": "Which declaration identifies a document as HTML5?",
    "options": [
      "<html5>",
      "<doctype>",
      "<!DOCTYPE html>",
      "<HTML>"
    ],
    "correctAnswer": 2,
    "explanation": "<!DOCTYPE html> is the required declaration placed at line 1 of every HTML5 document to enable standards mode in modern browsers."
  },
  {
    "id": "mcq-3",
    "question": "What is semantic HTML?",
    "options": [
      "HTML that only changes the appearance of a webpage",
      "HTML elements that describe the meaning and role of content",
      "HTML used only for images",
      "HTML used to create animations"
    ],
    "correctAnswer": 1,
    "explanation": "Semantic HTML uses elements (such as <header>, <nav>, <article>, <main>) that describe the meaning, purpose, and role of their content to browsers, screen readers, and search engines."
  },
  {
    "id": "mcq-4",
    "question": "Which HTML element is used for website navigation?",
    "options": [
      "<navigate>",
      "<links>",
      "<nav>",
      "<menu>"
    ],
    "correctAnswer": 2,
    "explanation": "The <nav> semantic tag designates a section containing major navigation links across the website."
  },
  {
    "id": "mcq-5",
    "question": "Which attribute is used to provide alternative text for an image?",
    "options": [
      "src",
      "href",
      "alt",
      "text"
    ],
    "correctAnswer": 2,
    "explanation": "The 'alt' attribute provides alternative descriptive text for images when they fail to load and for assistive screen readers."
  },
  {
    "id": "mcq-6",
    "question": "What is the purpose of the required attribute in a form?",
    "options": [
      "It makes the input optional",
      "It requires the user to enter a value",
      "It deletes the input",
      "It changes the input into a button"
    ],
    "correctAnswer": 1,
    "explanation": "The 'required' boolean attribute specifies that an input field must be filled out before submitting the form."
  },
  {
    "id": "mcq-7",
    "question": "What is the main purpose of HTML tables?",
    "options": [
      "To create webpage layouts",
      "To present tabular data",
      "To create navigation menus",
      "To display videos"
    ],
    "correctAnswer": 1,
    "explanation": "HTML tables (<table>, <tr>, <th>, <td>) are designed exclusively to present two-dimensional tabular data, not for general page layouts."
  },
  {
    "id": "mcq-8",
    "question": "Which element is used to create a hyperlink?",
    "options": [
      "<link>",
      "<a>",
      "<href>",
      "<url>"
    ],
    "correctAnswer": 1,
    "explanation": "The <a> (anchor) element paired with the href attribute creates clickable hyperlinks to other pages or resources."
  },
  {
    "id": "mcq-9",
    "question": "What is the main purpose of web accessibility?",
    "options": [
      "To make websites available only on computers",
      "To make websites usable by people with different abilities",
      "To make websites more colorful",
      "To make websites load more advertisements"
    ],
    "correctAnswer": 1,
    "explanation": "Web accessibility (a11y) ensures that websites, tools, and technologies are designed and developed so that people of all abilities (including persons with disabilities) can perceive, navigate, and interact with them."
  },
  {
    "id": "mcq-10",
    "question": "What does SEO stand for?",
    "options": [
      "Search Engine Optimization",
      "Search Element Organization",
      "Site Engine Operation",
      "Search Entry Optimization"
    ],
    "correctAnswer": 0,
    "explanation": "SEO stands for Search Engine Optimization — the practice of orienting website structure and content to rank higher on search engines."
  },
  {
    "id": "mcq-11",
    "question": "What does CSS stand for?",
    "options": [
      "Computer Style Sheets",
      "Casckading Style Sheets",
      "Creative Style System",
      "Cascading Style Sheets"
    ],
    "correctAnswer": 3,
    "explanation": "CSS stands for Cascading Style Sheets, used for formatting and styling HTML elements."
  },
  {
    "id": "mcq-12",
    "question": "What is the main purpose of the CSS Cascade?",
    "options": [
      "To create HTML elements",
      "To determine which CSS rule will be applied",
      "To add images to a webpage",
      "To organize files"
    ],
    "correctAnswer": 1,
    "explanation": "The Cascade is the algorithm CSS uses to resolve conflicts and determine which rule wins when multiple CSS rules target the same element."
  },
  {
    "id": "mcq-13",
    "question": "Which selector has the highest specificity?",
    "options": [
      "Universal selector",
      "Type selector",
      "Class selector",
      "ID selector"
    ],
    "correctAnswer": 3,
    "explanation": "Among standard stylesheet selectors, ID selectors (#id) carry a specificity weight of (0, 1, 0, 0), beating class selectors (0, 0, 1, 0) and element selectors (0, 0, 0, 1)."
  },
  {
    "id": "mcq-14",
    "question": "What symbol is used for a class selector?",
    "options": [
      "#",
      "*",
      ".",
      "@"
    ],
    "correctAnswer": 2,
    "explanation": "In CSS, a class selector starts with a period (.), such as .btn-primary or .card."
  },
  {
    "id": "mcq-15",
    "question": "If two CSS rules have the same specificity, which one usually wins?",
    "options": [
      "The rule written first",
      "The rule written later",
      "The rule with fewer properties",
      "The rule with more spaces"
    ],
    "correctAnswer": 1,
    "explanation": "When two rules have identical specificity and origin, the rule declared later in the source order (cascade order) overrides previous ones."
  },
  {
    "id": "mcq-16",
    "question": "Which part of the Box Model creates space between the content and the border?",
    "options": [
      "Margin",
      "Border",
      "Padding",
      "Content"
    ],
    "correctAnswer": 2,
    "explanation": "Padding is the transparent clearance space situated immediately between the content and the border."
  },
  {
    "id": "mcq-17",
    "question": "What is the correct order of the Box Model from inside to outside?",
    "options": [
      "Content → Padding → Border → Margin",
      "Content → Border → Padding → Margin",
      "Margin → Border → Padding → Content",
      "Padding → Content → Border → Margin"
    ],
    "correctAnswer": 0,
    "explanation": "The four concentric layers of the CSS Box Model from innermost to outermost are: Content → Padding → Border → Margin."
  },
  {
    "id": "mcq-18",
    "question": "What is Flexbox mainly used for?",
    "options": [
      "Creating databases",
      "Arranging elements in one dimension",
      "Adding images",
      "Writing HTML"
    ],
    "correctAnswer": 1,
    "explanation": "CSS Flexible Box Layout (Flexbox) is a one-dimensional layout model designed to distribute space and align items along a single row or column."
  },
  {
    "id": "mcq-19",
    "question": "Which property controls the direction of flex items?",
    "options": [
      "flex-direction",
      "justify-content",
      "align-items",
      "flex-wrap"
    ],
    "correctAnswer": 0,
    "explanation": "The flex-direction property establishes the main axis, accepting values such as row, row-reverse, column, or column-reverse."
  },
  {
    "id": "mcq-20",
    "question": "Which two properties can be used together to perfectly center an item horizontally and vertically?",
    "options": [
      "flex-wrap and flex-flow",
      "order and flex-grow",
      "justify-content and align-items",
      "align-content and flex-basis"
    ],
    "correctAnswer": 2,
    "explanation": "In a flex container, setting justify-content: center (main axis) and align-items: center (cross axis) centers children both horizontally and vertically."
  },
  {
    "id": "mcq-21",
    "question": "What is CSS Grid best suited for?",
    "options": [
      "One-dimensional layouts",
      "Two-dimensional layouts using rows and columns",
      "Changing text color only",
      "Adding animations only"
    ],
    "correctAnswer": 1,
    "explanation": "CSS Grid is a powerful two-dimensional layout system that handles both columns and rows concurrently."
  },
  {
    "id": "mcq-22",
    "question": "What is the main purpose of CSS Media Queries?",
    "options": [
      "To make websites responsive to different screen sizes",
      "To create HTML elements",
      "To store website data",
      "To increase internet speed"
    ],
    "correctAnswer": 0,
    "explanation": "Media queries allow developers to apply custom CSS rules based on device characteristics like viewport width, height, and orientation."
  },
  {
    "id": "mcq-23",
    "question": "Which rule is used to create a media query in CSS?",
    "options": [
      "@screen",
      "@responsive",
      "@device",
      "@media"
    ],
    "correctAnswer": 3,
    "explanation": "The @media at-rule is used in CSS to declare media queries (e.g. @media (min-width: 768px))."
  },
  {
    "id": "mcq-24",
    "question": "Which statement best describes the main difference between Bootstrap and Tailwind CSS?",
    "options": [
      "Bootstrap is only for JavaScript, while Tailwind is only for HTML",
      "Bootstrap mainly provides ready-made components, while Tailwind provides utility classes for building custom designs",
      "Bootstrap requires no CSS, while Tailwind requires writing all CSS manually",
      "Bootstrap is only for desktop websites, while Tailwind is only for mobile websites"
    ],
    "correctAnswer": 1,
    "explanation": "Bootstrap provides pre-styled, ready-to-use component abstractions (cards, navbars, modals), whereas Tailwind is an atomic utility-first CSS framework for composing custom designs directly in HTML."
  },
  {
    "id": "mcq-25",
    "question": "Which of the following is a feature of Bootstrap?",
    "options": [
      "Ready-made CSS classes and components",
      "It replaces HTML completely",
      "It can only be used for mobile apps",
      "It does not use CSS"
    ],
    "correctAnswer": 0,
    "explanation": "Bootstrap is famous for providing a comprehensive library of ready-made CSS classes, a 12-column responsive grid, and UI components."
  },
  {
    "id": "mcq-26",
    "question": "What is PHP (Hypertext Preprocessor) commonly used for?",
    "options": [
      "To execute on the browser before the result is sent to the server",
      "To store whole numbers without decimals",
      "To enforce strict type safety",
      "To create dynamic and interactive websites"
    ],
    "correctAnswer": 3,
    "explanation": "PHP is a server-side scripting language primarily used to create dynamic web content, manage databases, and build interactive web applications."
  },
  {
    "id": "mcq-27",
    "question": "In PHP, variables always start with which symbol?",
    "options": [
      "//",
      "$",
      "#",
      "/*"
    ],
    "correctAnswer": 1,
    "explanation": "In PHP, all variable names must begin with the dollar sign ($) followed by a letter or underscore."
  },
  {
    "id": "mcq-28",
    "question": "Which of the following is a scalar type that stores only two possible values?",
    "options": [
      "string",
      "integer",
      "boolean",
      "float"
    ],
    "correctAnswer": 2,
    "explanation": "A boolean is a primitive scalar type in PHP that holds either true or false."
  },
  {
    "id": "mcq-29",
    "question": "What declaration should be placed at the very top of a file to enforce strict type safety across function calls?",
    "options": [
      "<?php ... ?>",
      "declare(strict_types=1);",
      "session_start();",
      "use School\\Student;"
    ],
    "correctAnswer": 1,
    "explanation": "declare(strict_types=1); instructs PHP to enforce exact type declarations for scalar arguments and return values across function calls."
  },
  {
    "id": "mcq-30",
    "question": "Which modern PHP operator is used for three-way comparisons, commonly in custom array sorting?",
    "options": [
      "Spaceship Operator (<=>)",
      "Null Coalescing Operator (??)",
      "Ternary Operator (?:)",
      "Modern match"
    ],
    "correctAnswer": 0,
    "explanation": "The spaceship operator (<=>) returns -1 if left < right, 0 if left == right, and 1 if left > right, making it ideal for sorting callback functions."
  },
  {
    "id": "mcq-31",
    "question": "Which looping and iteration structure is used when continuing iteration depends on dynamic runtime conditions?",
    "options": [
      "foreach",
      "for loop",
      "break",
      "while and do-while"
    ],
    "correctAnswer": 3,
    "explanation": "While and do-while loops are condition-controlled loops that evaluate dynamic expressions during script execution, repeating until the condition becomes false."
  },
  {
    "id": "mcq-32",
    "question": "What type of array stores values using key-value pairs where meaningful names are used as keys?",
    "options": [
      "Associative Arrays",
      "Standard Arrays",
      "Scalar types",
      "Objects"
    ],
    "correctAnswer": 0,
    "explanation": "Associative arrays in PHP use named alphanumeric strings as keys rather than sequential zero-based numerical indices."
  },
  {
    "id": "mcq-33",
    "question": "Which HTTP method sends data in the request body, not the URL, and is commonly used for sensitive data like logins?",
    "options": [
      "GET Method",
      "POST Method",
      "Sessions",
      "Namespaces"
    ],
    "correctAnswer": 1,
    "explanation": "The HTTP POST method encapsulates data securely inside the HTTP request payload, keeping credentials hidden from the browser address bar."
  },
  {
    "id": "mcq-34",
    "question": "What feature allows PHP to remember information about a user across multiple pages?",
    "options": [
      "Exceptions",
      "Classes",
      "Sessions",
      "Namespaces"
    ],
    "correctAnswer": 2,
    "explanation": "PHP Sessions maintain state across page transitions by assigning each user a unique session identifier and storing data on the server."
  },
  {
    "id": "mcq-35",
    "question": "Which statement is used to handle an exception if one occurs?",
    "options": [
      "throw",
      "try",
      "Input validation",
      "catch"
    ],
    "correctAnswer": 3,
    "explanation": "The catch block captures and handles an exception object thrown inside an accompanying try block."
  },
  {
    "id": "mcq-36",
    "question": "How do screen readers primarily use heading tags (h1 to h6) during user navigation?",
    "options": [
      "To change the font color of the text",
      "As a navigational outline to jump between sections",
      "To speed up page loading times",
      "To trigger background animations"
    ],
    "correctAnswer": 1,
    "explanation": "Screen readers allow visually impaired users to skim web pages by generating a hierarchical table of contents from <h1> through <h6> tags to jump between landmarks."
  },
  {
    "id": "mcq-37",
    "question": "Which of the following represents the correct order of CSS specificity from highest weight to lowest weight?",
    "options": [
      "IDs -> Classes -> Elements -> Inline Styles",
      "Inline Styles -> IDs -> Classes -> Elements",
      "Classes -> IDs -> Inline Styles -> Elements",
      "Elements -> Classes -> IDs -> Inline Styles"
    ],
    "correctAnswer": 1,
    "explanation": "The CSS specificity hierarchy ranks from highest to lowest: Inline Styles (1,0,0,0) → IDs (0,1,0,0) → Classes/Attributes/Pseudo-classes (0,0,1,0) → Elements/Pseudo-elements (0,0,0,1)."
  },
  {
    "id": "mcq-38",
    "question": "Which four parts make up the CSS Box Model?",
    "options": [
      "Header, Body, Footer, Border",
      "Content, Paddling, Border, Margarine",
      "Text, Image, Button, Link",
      "Padding, Border, Margin, Content"
    ],
    "correctAnswer": 3,
    "explanation": "Every HTML box consists of: Content (the inner text/media), Padding (inner clearance), Border (outer edge line), and Margin (exterior spacing)."
  },
  {
    "id": "mcq-39",
    "question": "Which statement describes ES6 according to the module?",
    "options": [
      "ES6 = ECMAScript 2020",
      "ES6 = ECMAScript 2009",
      "ES6 = JavaScript Object Notation",
      "ES6 = ECMAScript 2015"
    ],
    "correctAnswer": 3,
    "explanation": "ES6 refers to ECMAScript 2015 (the 6th edition of the ECMAScript standard), which introduced let/const, arrow functions, template literals, and promises."
  },
  {
    "id": "mcq-40",
    "question": "Which ES6+ feature uses backticks and allows text and variables to be combined with ${}?",
    "options": [
      "Destructuring",
      "Template literals",
      "Default parameters",
      "Spread operator"
    ],
    "correctAnswer": 1,
    "explanation": "Template literals are enclosed by backticks (`) and allow embedded expressions using ${expression} for string interpolation."
  },
  {
    "id": "mcq-41",
    "question": "In the DOM, which method selects an HTML element by its ID?",
    "options": [
      "innerHTML",
      "querySelector()",
      "textContent",
      "getElementById()"
    ],
    "correctAnswer": 3,
    "explanation": "document.getElementById('id') retrieves a unique DOM element matching the specified ID string."
  },
  {
    "id": "mcq-42",
    "question": "What does the input event occur when the user does according to the module?",
    "options": [
      "Clicks or activates an element",
      "Edits the value of an input field",
      "Submits an HTML form",
      "Presses a keyboard key"
    ],
    "correctAnswer": 1,
    "explanation": "The 'input' event fires synchronously each time the value of an <input>, <select>, or <textarea> element is modified by the user."
  },
  {
    "id": "mcq-43",
    "question": "What does the fetch() function return?",
    "options": [
      "A JSON object immediately",
      "An HTML element object",
      "A CSS selector",
      "A Promise which is fulfilled with a Response object"
    ],
    "correctAnswer": 3,
    "explanation": "The Fetch API fetch() method initiates an asynchronous network request and returns a Promise resolving to a Response object representing the response to the request."
  },
  {
    "id": "mcq-44",
    "question": "Which HTTP request method is used to update existing data on the server?",
    "options": [
      "POST",
      "PUT",
      "GET",
      "DELETE"
    ],
    "correctAnswer": 1,
    "explanation": "The PUT method is used to update or completely replace an existing resource on the web server."
  },
  {
    "id": "mcq-45",
    "question": "Which three states can a Promise be in?",
    "options": [
      "Created, Updated, Deleted",
      "Pending, Fulfilled, Rejected",
      "Started, Running, Finished",
      "Open, Closed, Failed"
    ],
    "correctAnswer": 1,
    "explanation": "A JavaScript Promise is always in one of three states: Pending (initial state), Fulfilled (operation succeeded), or Rejected (operation failed)."
  },
  {
    "id": "mcq-46",
    "question": "What does the await keyword do in an async function according to the module?",
    "options": [
      "It selects an HTML element by ID",
      "It converts a JavaScript object into JSON text",
      "It registers an event listener",
      "It pauses the execution of the async function until the Promise is resolved or rejected"
    ],
    "correctAnswer": 3,
    "explanation": "The await operator pauses the execution of an async function until the evaluated Promise settles (either resolves or rejects)."
  },
  {
    "id": "mcq-47",
    "question": "Which statement correctly describes JSON.parse() and JSON.stringify()?",
    "options": [
      "JSON.parse() sends data to a server; JSON.stringify() receives data from a server",
      "JSON.parse() creates a Promise; JSON.stringify() resolves a Promise",
      "JSON.parse() converts JSON text to a JavaScript object; JSON.stringify() converts a JavaScript object to JSON text",
      "JSON.parse() selects HTML elements; JSON.stringify() changes CSS styles"
    ],
    "correctAnswer": 2,
    "explanation": "JSON.parse() deserializes a JSON string into a JavaScript object, whereas JSON.stringify() serializes a JavaScript value or object into a JSON string."
  },
  {
    "id": "mcq-48",
    "question": "According to the module, why does async/await make asynchronous code easier to work with?",
    "options": [
      "It converts every asynchronous operation into a synchronous operation",
      "It removes the need for all Promises",
      "It makes asynchronous code read more like synchronous code",
      "It prevents all errors from occurring during asynchronous operations"
    ],
    "correctAnswer": 2,
    "explanation": "Async/await is syntactic sugar over Promises that allows asynchronous JavaScript code to be read and written in a sequential, synchronous-like style, avoiding callback nesting."
  },
  {
    "id": "mcq-49",
    "question": "In CSS specificity, which order correctly ranks from HIGHEST to LOWEST priority?",
    "options": [
      "Inline style > ID selector > Class selector > Element selector",
      "Element selector > Class selector > ID selector > Inline style",
      "ID selector > Inline style > Element selector > Class selector",
      "Class selector > ID selector > Inline style > Element selector"
    ],
    "correctAnswer": 0,
    "explanation": "Specificity priority strictly ranks: Inline styles (1000) > ID selectors (0100) > Class/attribute/pseudo-class selectors (0010) > Element/type selectors (0001)."
  },
  {
    "id": "mcq-50",
    "question": "What is the correct order of layers in the CSS Box Model, from innermost to outermost?",
    "options": [
      "Margin → Border → Padding → Content",
      "Content → Padding → Border → Margin",
      "Padding → Content → Margin → Border",
      "Border → Content → Padding → Margin"
    ],
    "correctAnswer": 1,
    "explanation": "Starting from the inside where the element's actual text/image lives: Content → Padding → Border → Margin."
  },
  {
    "id": "mcq-51",
    "question": "Flexbox is best described as:",
    "options": [
      "A two-dimensional layout system for rows and columns together",
      "A one-dimensional layout system for a single row or column",
      "A CSS framework like Bootstrap",
      "A way to write media queries"
    ],
    "correctAnswer": 1,
    "explanation": "Flexbox is fundamentally a one-dimensional layout model that calculates spacing, alignment, and distribution along one axis (row OR column) at a time."
  },
  {
    "id": "mcq-52",
    "question": "Which symbol must be placed at the beginning of every variable name in PHP?",
    "options": [
      "@",
      "#",
      "$",
      "&"
    ],
    "correctAnswer": 2,
    "explanation": "In PHP syntax, every variable identifier must begin with the dollar sign ($)."
  },
  {
    "id": "mcq-53",
    "question": "Which HTML tag is used to create a form?",
    "options": [
      "<label>",
      "<head>",
      "<button>",
      "<form>"
    ],
    "correctAnswer": 3,
    "explanation": "The <form> element wraps interactive controls to submit user data to a web server."
  },
  {
    "id": "mcq-54",
    "question": "Scenario: A login form sends a username and password to the server. Which request method should be used, and why?",
    "options": [
      "POST, because it hides the password from the URL",
      "GET, because it can only be used for requesting",
      "POST, because it can be bookmarked",
      "GET GET AW"
    ],
    "correctAnswer": 0,
    "explanation": "POST packages credentials within the HTTP request body instead of appending them to the browser URL string, keeping passwords private from browser history, logs, and bookmarks."
  },
  {
    "id": "mcq-55",
    "question": "It determines which CSS rule is applied when multiple rules target the same element.",
    "options": [
      "Cascading",
      "Bahala na si Batman",
      "Specifying",
      "CSS Layout"
    ],
    "correctAnswer": 0,
    "explanation": "Cascading is the core algorithm that resolves style collisions by evaluating origin, importance, specificity, and declaration order."
  },
  {
    "id": "mcq-56",
    "question": "Which statement best describes the DOM?",
    "options": [
      "A programming language used to build websites",
      "A tree-like representation of a web page that JavaScript can access and modify",
      "A database that stores HTML files",
      "A CSS framework for styling pages"
    ],
    "correctAnswer": 1,
    "explanation": "The Document Object Model (DOM) is a tree-like object representation of the structured HTML document that scripts can read, traverse, and dynamically modify."
  }
],
  identification: [
  {
    "id": "id-1",
    "question": "The modern major version of HTML that standardizes semantic elements, native multimedia (<audio>, <video>), graphics, and richer web APIs.",
    "acceptableAnswers": [
      "HTML5",
      "HTML 5"
    ],
    "explanation": "HTML5 is the 5th and modern major standard version of HTML."
  },
  {
    "id": "id-2",
    "question": "HTML elements and tags that clearly describe their meaning, purpose, and role to both the browser and developer (e.g., <header>, <article>, <nav>).",
    "acceptableAnswers": [
      "semantic HTML",
      "semantic elements",
      "semantic",
      "semantic markup",
      "semantics"
    ],
    "explanation": "Semantic HTML elements communicate the role and structure of web content to developers, assistive tools, and search engines."
  },
  {
    "id": "id-3",
    "question": "The HTML attribute in an <img> tag used to specify alternative descriptive text for screen readers or when an image fails to load.",
    "acceptableAnswers": [
      "alt",
      "alt attribute",
      "alt text",
      "alternative text"
    ],
    "explanation": "The alt attribute defines accessible alternative text for images."
  },
  {
    "id": "id-4",
    "question": "The foundational CSS layout concept stating that every element is a rectangular box composed of Content, Padding, Border, and Margin.",
    "acceptableAnswers": [
      "Box Model",
      "CSS Box Model",
      "the box model"
    ],
    "explanation": "The CSS Box Model describes the rectangular areas surrounding every HTML element."
  },
  {
    "id": "id-5",
    "question": "The modern CSS layout system designed for two-dimensional layouts controlling both rows and columns simultaneously.",
    "acceptableAnswers": [
      "CSS Grid",
      "Grid",
      "CSS Grid Layout"
    ],
    "explanation": "CSS Grid is a 2D layout model controlling rows and columns concurrently."
  },
  {
    "id": "id-6",
    "question": "The CSS feature/rule (@media) used to apply different styles depending on screen width, device orientation, or viewport size to make websites responsive.",
    "acceptableAnswers": [
      "CSS Media Queries",
      "Media Queries",
      "Media Query",
      "CSS Media Query",
      "@media"
    ],
    "explanation": "CSS Media Queries enable responsive web design by targeting specific viewport breakpoints."
  },
  {
    "id": "id-7",
    "question": "The PHP server-side feature initiated with session_start() that preserves user data across multiple webpage visits and requests.",
    "acceptableAnswers": [
      "Sessions",
      "Session",
      "PHP Sessions",
      "PHP Session",
      "$_SESSION"
    ],
    "explanation": "PHP Sessions maintain state across multiple requests on a stateless HTTP web server."
  },
  {
    "id": "id-8",
    "question": "The one-dimensional CSS layout model designed for arranging, spacing, and aligning items along a single row or column.",
    "acceptableAnswers": [
      "Flexbox",
      "CSS Flexbox",
      "Flexible Box",
      "Flexible Box Layout"
    ],
    "explanation": "Flexbox (Flexible Box) aligns items in a single dimension (either row or column)."
  },
  {
    "id": "id-9",
    "question": "The fundamental CSS algorithm that determines which style rule wins and gets applied when multiple rules target the same element.",
    "acceptableAnswers": [
      "Cascading",
      "Cascade",
      "CSS Cascade",
      "The Cascade"
    ],
    "explanation": "Cascading is the conflict resolution mechanism of Cascading Style Sheets."
  },
  {
    "id": "id-10",
    "question": "The tree-like object representation of an HTML document created by the browser that JavaScript can access and manipulate dynamically.",
    "acceptableAnswers": [
      "DOM",
      "Document Object Model",
      "The DOM"
    ],
    "explanation": "The Document Object Model (DOM) is an in-memory tree representation of the HTML document."
  }
]
};
