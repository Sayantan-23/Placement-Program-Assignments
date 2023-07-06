# Assignment 1

**Q.1 `<!DOCTYPE html>` is it a tag of html? If not, what is it and why do we use it?**

<u>_Answer -_</u> `<!DOCTYPE html>` is a declaration not a tag of HTML.
The purpose of the declaration is to inform the web browser about the markup language and its version, so that they can correctly interpret and render the web page. By declaring `<!DOCTYPE html>` at the very beginning of our HTML document, we are indicating that the page is written in HTML5, which is the latest version of HTML.

**Q.2 Explain Semantic tags in html? And why do we need it?**

<u>_Answer -_</u> Semantics in HTML are special elements that provide meaning and structure to the content within a web page. Unlike other tags like `div`, `span` or `p` semantics tags describe the type of content they contain, making the html more descriptive and understandable. Semantic tags are designed to convey the meaning of the content rather than just its appearance. Some examples of semantic tags are - `nav`, `main`, `header`, `footer`, `article` etc.
Having semantic tags in HTML has so many benefits -
Improved Accessibility - Technologies like screen readers can use it to help users with disabilities to navigate and understand the content more effectively
Search Engine Optimization - By using semantic tags we can provide clear signals about the importance of different sections of our page and search engines will also get the important keyword which will potentially improve the page’s rankings.
Code Readability and Maintainability - Semantic tags makes the code more readable and maintainable.

**Q.3 Differentiate between HTML Tags and Elements?**

<u>_Answer -_</u> HTML tags are just opening and closing entities of HTML elements. An HTML tag consists of an opening tag, content and a closing tag. Content can be anything like text or other HTML elements or both. For example `<p>` and `</p>` are tags of HTML but `<p>This is paragraph</p>` is an HTML element and `<p>`This is `<span>Content</span></p>` this is also an HTML element which consists HTML tags like `<p>`, `<span>` etc.

**Q.4 Build Your Resume using HTML only.**

<u>_Answer -_</u> [Click here](./HTML%20Q4.%20Build%20Resume%20Using%20HTML%20only/)

**Q.5 Write Html code so that it looks like the given image Link.**

<u>_Answer -_</u> [Click here](./HTML%20Q5/)

**Q.6 What are some of the advantages of HTML5 over its previous versions?**

<u>_Answer -_</u> HTML5 has several advantages over its previous versions -
Improved Semantics - HTML5 introduced a set of semantic tags like - `<header>`, `<nav>`, `<article>`, `<section>` etc. that provide improved structure and meaning to the content. It also helps with accessibility, search engine optimization (SEO) and overall document structure.
HTML5 provides native support for multimedia elements like `<audio>` and `<video>`.
Improved Forms - HTML5 introduced new form input types (ex - email, date, number etc.) and attributes (ex - required, placeholder, pattern etc.) that simplify form validation and improves user experience. HTML5 enables developer to build fancier forms.
HTML5 introduced the new `<canvas>` element which enables dynamic rendering of graphics, animations without any plugins. HTML5 also introduced Scalable Vector Graphics or SVG as a native element.
HTML5 offers better support for mobile devices including making responsive designs easily with media queries.
HTML5 introduced Geo-location API which enables websites to request user’s location information.

**Q.7 Create a simple Music player using html only**

<u>_Answer -_</u> [Click here](./HTML%20Q7.%20Create%20A%20Music%20Player/)

**Q.8 What is the difference between `<figure>` tag and `<img>` tag?**

<u>_Answer -_</u> `<img>` element is used to embed the image in an HTML document whereas the `<figure>` element is used to semantically organise the content of image in an HTML document. The content within the `<figure>` tag is typically accompanied by a `<img>` element and a `<figcaption>` element within the `<figure>` element. In `<img>` element the src attribute is required which contains the source of the image. The `<img>` tag focuses solely on displaying the image and does not provide any additional semantic meaning or context and we use the `<figure>` tag when we need to add some information about the image like captions.

**Q.9 What’s the difference between html tag and attribute and give example of some
global attributes?**

<u>_Answer -_</u> HTML tags are just opening and closing entities of HTML elements. It defines the structure and the content of an HTML document whereas attributes are some values or properties that adjust the behaviour of the HTML element in various ways to meet the user’s requirement. Attributes are specified in the opening tag of an HTML element. Ex - `<button class=”login-button” type=”button”>Log In</button>`. Here `<button>` and `</button>` are HTML tags and class and type are attributes of this button element.

Global Attributes - Global attributes are common to all HTML elements, they can be used in any HTML element, though they may have no effect on some elements. Some examples of global attributes are - class, id, style, title etc.

**Q.10 build Table which looks like the given image Link.**

<u>_Answer -_</u> [Click here](./HTML%20Q10.%20Table/)
