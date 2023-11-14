import { BlogData } from "@/app/types";

export const blocks01: BlogData["contents"] = [
  {
    category: "paragraph",
    attributes: {
      content: `In front-end development, creating web applications that respond seamlessly to user interactions, especially scrolling, is a core challenge. This blog aims to demystify the complexities of the scroll, client, and offset properties in CSS. We'll explore their differences, point out common pitfalls, and provide practical examples to guide you through implementing these features in your web applications.`,
    },
  },
  {
    category: "heading",
    attributes: {
      content: "The Element's Size Properties",
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `Let's start with understanding the key properties that define an element's dimensions. \`ScrollWidth\` and \`scrollHeight\` offer insights into the total width and height of an element's content, including parts not visible due to overflow. This is particularly useful for grasping the full scope of an element's size.`,
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `In contrast, \`clientWidth\` and \`clientHeight\` focus on the visible area of an element, accounting for padding but excluding margin, border, or scrollbars. They offer a view into what is immediately viewable without scrolling. For instance, \`clientHeight\` will give you the height of an element that is within the visible window, offering a key metric for responsive design.`,
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `The offset properties, such as \`offsetWidth\` and \`offsetHeight\`, are more comprehensive. provide a more comprehensive picture. They include the dimensions of content, padding, scrollbar (if visible), and border, but exclude the margin. They are particularly useful for obtaining the complete outer dimensions of an element.`,
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `An accompanying image can be referenced for a clear visual understanding of these distinctions:`,
    },
  },
  {
    category: "image",
    attributes: {
      src: "/blogs/scroll_client_offset_size_properties.png",
      alt: "scroll_client_offset_size_properties",
    },
  },
  {
    category: "heading",
    attributes: {
      content: "On the Interaction Side",
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `Moving beyond static measurements, we delve into properties that interact with user actions, like scrolling. \`scrollTop\` and \`scrollLeft\` are dynamic, constantly changing with the element's scroll and indicating the extent of horizontal or vertical movement of the content. These properties are vital for crafting responsive elements that adapt to user scrolls. For example, \`scrollTop\` measures the pixels that are out of view above the scrollable area. A common scenario where this might be relevant is a scrolling text box, where \`scrollTop\` increases as you scroll down through your content.`,
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `Additionally, it's important to highlight \`window.scrollX\` and \`window.scrollY\`, which are analogous to \`scrollLeft\` and \`scrollTop\`, but exclusively pertain to the \`window\` object. Notably, \`pageYOffset\` serves as an alias for \`scrollY\`, essentially meaning:`,
    },
  },
  {
    category: "code",
    attributes: {
      content: `window.pageYOffset === window.scrollY; // always true`,
      language: "JavaScript",
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `\`ClientTop\` and \`ClientLeft\`, although less frequently used, are indispensable for accurate positioning. They provide the width of the top and left borders, aiding in precise alignment tasks.`,
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `Meanwhile, \`offsetTop\` and \`OffsetLeft\` offer a different perspective, revealing the distance of an element relative to its offset parent (i.e., the nearest ancestor that has a position other than static). This information is essential for understanding and manipulating an element's position within the broader document layout.`,
    },
  },
  {
    category: "paragraph",
    attributes: {
      content:
        "A second image here can help visualize these interactive properties.",
    },
  },
  {
    category: "image",
    attributes: {
      src: "/blogs/scroll_client_offset_interaction_properties.png",
      alt: "scroll_client_offset_interaction_properties",
    },
  },
  {
    category: "heading",
    attributes: {
      content: "Practical Scenario",
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `Now, let's look at these properties in action. Consider a sticky header that changes colour once you've scrolled down 100 pixels. By utilising \`window.pageYOffset\`, you can modify the header's class based on the scroll position:`,
    },
  },
  {
    category: "code",
    attributes: {
      content: `window.onscroll = function() {
    let header = document.getElementById('header');
    if (window.pageYOffset > 100) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
};`,
      language: "JavaScript",
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `Or perhaps you want to implement a dynamic scroll progress bar that fills up as you scroll down the page. By comparing \`scrollHeight\` to \`clientHeight\`, you could determine what percentage of the page has been scrolled, updating the progress bar's width accordingly. `,
    },
  },
  {
    category: "code",
    attributes: {
      content: `window.addEventListener('scroll', function() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById('progressBar').style.width = scrolled + "%";
});`,
      language: "JavaScript",
    },
  },
  {
    category: "heading",
    attributes: {
      content: '"Scroll to Reveal" Animation',
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `Now, it's important to be mindful of common mistakes when working with these properties. A frequent confusion arises between the size of the viewport and the size of the document itself. This can lead to elements not aligning as expected or scripts not triggering at the correct scroll position. `,
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `Consider scripts designed to trigger animations when elements come into view. If these scripts don't accurately account for \`window.innerHeight\` (the viewport's size) and \`window.scrollY\` (the current scroll position), animations may activate too early or too late.`,
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `In this case, we can use JavaScript to detect when an element enters the viewport and then apply a class to trigger the animation. This is often used for "scroll to reveal" animations.`,
    },
  },
  {
    category: "code",
    attributes: {
      content: `<div class="animate-me">Element 1</div>
<div class="animate-me" style="margin-top: 600px;">Element 2</div>
<div class="animate-me" style="margin-top: 600px;">Element 3</div>`,
      language: "HTML",
    },
  },
  {
    category: "code",
    attributes: {
      content: `.animate-me {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.animate-me.visible {
    opacity: 1;
}`,
      language: "CSS",
    },
  },
  {
    category: "code",
    attributes: {
      content: `function checkVisibility() {
    document.querySelectorAll('.animate-me').forEach(element => {
        const elementTop = getElementTop(element);

        // Define the position of the bottom of the viewport relative to the document
        const windowBottom = window.scrollY + window.innerHeight; 

        // Check if the top of the element is above the bottom of the viewport
        if (elementTop < windowBottom) {
            element.classList.add('visible');
        }
    });
}
    
// A helper function that calculates the distance from the top of the element to the top of the document 
// by summing up the offsetTop of the element and all its offset parents.
function getElementTop(element) {
    let top = 0;
    do {
        top += element.offsetTop || 0;
        element = element.offsetParent;
    } while(element);

    return top;
}
    
// Check on initial load
checkVisibility();

// Check on scroll
window.addEventListener('scroll', checkVisibility);`,
      language: "JavaScript",
    },
  },
  {
    category: "heading",
    attributes: {
      content: "What is window.scrollY and event.pageY?",
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `There it's worth noting the difference between \`window.scrollY\` and \`event.pageY\`. The former indicates how many pixels the document has been scrolled vertically, while the latter shows the Y-coordinate of an event, like a mouse click, relative to the whole document.`,
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `For example, suppose you want to show a tooltip when a user clicks on a specific element. The tooltip should appear exactly where the user clicks. A typical error is using \`event.pageY\` directly for the tooltip's vertical position without considering the page's current scroll position, which is where \`window.scrollY\` should be factored in.`,
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `For this scenario, let's have an HTML element that users can click:`,
    },
  },
  {
    category: "code",
    attributes: {
      content: `<div id="clickArea" style="height: 1500px; background-color: lightgrey;">
    Click anywhere in this area
</div>
<div id="tooltip" style="position: absolute; display: none; background-color: yellow; padding: 5px; border: 1px solid black;">
    Tooltip
</div>`,
      language: "HTML",
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `Here's how you might **incorrectly** set up the JavaScript:`,
    },
  },
  {
    category: "code",
    attributes: {
      content: `document.getElementById('clickArea').addEventListener('click', function(event) {
    let tooltip = document.getElementById('tooltip');
    // Incorrectly using event.pageY directly
    tooltip.style.top = event.pageY + 'px';
    tooltip.style.left = event.pageX + 'px';
    tooltip.style.display = 'block';
});`,
      language: "JavaScript",
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `The problem is: \`event.pageY\` and \`event.pageX\` give the position of the mouse relative to the top and left edges of the document, not the current viewport. If the user has scrolled down the page, \`event.pageY\` includes the scrolled distance, which makes the tooltip appear further down than expected. `,
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `Therefore, we need to correct it like:`,
    },
  },
  {
    category: "code",
    attributes: {
      content: `document.getElementById('clickArea').addEventListener('click', function(event) {
    let tooltip = document.getElementById('tooltip');
    // Correctly adjusting with window.scrollY
    tooltip.style.top = (event.pageY - window.scrollY) + 'px';
    tooltip.style.left = event.pageX + 'px';
    tooltip.style.display = 'block';
});`,
      language: "JavaScript",
    },
  },
  {
    category: "heading",
    attributes: {
      content: "Other useful methods and properties",
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `In the world of React, we often deal with virtual DOMs, which means direct DOM manipulation is discouraged. Here, \`getBoundingClientRect()\` is a powerful tool that provides the dimensions of an element and its position relative to the viewport, offering a more React-friendly way of handling element sizes and positions after render, without having to access potentially disruptive properties like \`scrollTop\` or \`offsetTop\`.`,
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `Additionally, it's crucial to acknowledge other related properties like \`innerWidth\` and \`innerHeight\`, which determine the dimensions of the viewport, and \`outerWidth\` and \`outerHeight\`, providing the browser window's dimensions.`,
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `Moreover, \`scrollTo(x, y)\` is useful for navigating to specific coordinates in a document, measured from the top left corner. In contrast, \`scrollBy(x, y)\` enables scrolling the document within the window by a specified amount.`,
    },
  },
  {
    category: "heading",
    attributes: {
      content: "Conclusion",
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `To sum up, the scroll, client, and offset properties each serve unique and important roles in CSS layout and scripting. By understanding their nuances and applications, we can create more interactive, responsive, and user-friendly web applications. So, go ahead and experiment with these properties in your next project, and watch your web applications come to life with smooth and intuitive scroll-based features.`,
    },
  },
];

export const blocks02: BlogData["contents"] = [
  {
    category: "paragraph",
    attributes: {
      content: `JavaScript's array methods, \`map()\` and \`reduce()\`, are not just tools but craftsman's essentials in data manipulation and transformation. Understanding their mechanics and applications is key to harnessing their full potential. This blog dives into these methods, demystifying common misconceptions, and illustrating their practical applications.`,
    },
  },
  {
    category: "heading",
    attributes: {
      content: "Transforming Data with map()",
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `The \`map()\` function is a staple when you need to transform elements in an array. Think of \`map()\` as that reliable friend who helps you change perspectives. It's like giving sunglasses to all your array items; they all come out looking cooler. For instance, imagine you have an array of objects representing products, each with a price tag. Applying a uniform discount across these products is a breeze with \`map()\`:`,
    },
  },
  {
    category: "code",
    attributes: {
      content: `const products = [
    { name: 'Shirt', price: 20 },
    { name: 'Pants', price: 40 },
    { name: 'Hat', price: 15 }
];
    
const discountedProducts = products.map(product => ({
    ...product,
    price: product.price * 0.9 // Applying a 10% discount
}));
    
console.log(discountedProducts);`,
      language: "javascript",
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `A common myth about \`map()\` is that  it alters the original array. In truth, it returns a new array and leaves the original untouched, which is a crucial consideration for avoiding side effects in your code. `,
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `It's also important to remember that \`map()\` always maintains the array's length, making it unsuitable for filtering tasks. For those, other methods like \`filter()\` are more apt.`,
    },
  },
  {
    category: "heading",
    attributes: {
      content: "Initialising Arrays with .fill() and map()",
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `A rookie mistake is using \`map()\` on a freshly minted array and getting unexpected results. The trick? Use \`.fill()\` to populate the array first as \`map()\` skips uninitialized values. For example:`,
    },
  },
  {
    category: "code",
    attributes: {
      content: `const array1 = new Array(3).map(i => Math.floor(Math.random()*10));
console.log(array1); //[empty * 3]

const array2 = new Array(3).fill(0).map(i => Math.floor(Math.random()*10));
console.log(array2); //[3, 4, 7]`,
      language: "javascript",
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `Let's say you'd like to create a boolean array representing checkbox states:`,
    },
  },
  {
    category: "code",
    attributes: {
      content: `const checkboxStates = new Array(5).fill(false).map((state, index) => ({
    id: index,
    checked: state
}));

console.log(checkboxStates);`,
      language: "javascript",
    },
  },
  {
    category: "heading",
    attributes: {
      content: "Aggregating Data with reduce()",
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `The \`reduce()\` method is  Swiss Army knife for data aggregation. It's incredibly versatile and is best used when you need to derive a single value from multiple elements in an array, like finding the sum of numbers, merging an array of strings, or even concocting an object from an array. Take calculating a shopping cart total as an example:`,
    },
  },
  {
    category: "code",
    attributes: {
      content: `const cart = [
    { name: 'Shirt', price: 20, quantity: 2 },
    { name: 'Pants', price: 40, quantity: 1 },
    { name: 'Hat', price: 15, quantity: 3 }
];
    
const totalValue = cart.reduce((total, product) => {
    return total + product.price * product.quantity;
}, 0);
    
console.log(\`Total value: \${totalValue}\`);`,
      language: "javascript",
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `Misunderstandings with \`reduce()\` often arise from its initial value. If no initial value is provided, \`reduce()\` will use the first element of the array as the starting point, which can lead to unexpected results if not accounted for. It's also crucial to ensure that the reducer function is pure, meaning it doesn't cause side effects or rely on external state.`,
    },
  },
  {
    category: "heading",
    attributes: {
      content: "Comparing map() and reduce()",
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `While both iterate over arrays, \`map()\` and \`reduce()\` serve distinct purposes. \`map()\` is about creating a one-to-one transformation, whereas \`reduce()\` is about boiling down the array into something new - often a single value, like a sum or average. However, with some creativity, \`reduce()\` can also be used for transformations, albeit in a less straightforward manner than \`map()\`. And it's worth noting again that they both respect the original array, never altering it - true gentlemen.`,
    },
  },
  {
    category: "heading",
    attributes: {
      content: "Alternatives to map() and reduce()",
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `For achieving similar results, methods like \`forEach()\`, \`filter()\`, and \`every()\` can be used in conjunction with or in place of \`map()\` and \`reduce()\`, depending on the specific requirement. For instance, \`forEach()\` can be used for executing side effects, and \`filter()\` can be used to create a new array that includes only elements that pass a given test.`,
    },
  },
  {
    category: "code",
    attributes: {
      content: `const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers); // [2, 4]`,
      language: "javascript",
    },
  },
  {
    category: "heading",
    attributes: {
      content: `Iteration: for Loop vs forEach() vs map()`,
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `The \`for\` loop is the most imperative way to iterate through arrays, offering the most control but requiring more boilerplate code. \`forEach()\` is more declarative and is used to apply a function to each element, but like \`map()\`, it does not mutate the original array. The key difference is that \`forEach()\` returns \`undefined\`, making it unsuitable for chaining, whereas \`map()\` returns a new array, allowing for further transformations.`,
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `Let's say you want to log each product's name from our products array. Here's how it would look using a \`for\` loop, \`forEach()\`, and \`map()\`:`,
    },
  },
  {
    category: "code",
    attributes: {
      content: `// Using a for loop
for (let i = 0; i < products.length; i++) {
console.log(products[i].name);
}

// Using forEach()
products.forEach(product => console.log(product.name));

// Using map()
products.map(product => console.log(product.name));`,
      language: "JavaScript",
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `While all three will accomplish the task, \`forEach()\` and \`map()\` are more expressive and less error-prone than a \`for\` loop. Remember, \`map()\` should be used when you intend to transform data and make use of the returned array.`,
    },
  },
  {
    category: "heading",
    attributes: {
      content: `Conclusion`,
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `Understanding when to use \`map()\` and \`reduce()\` can lead to cleaner, more readable code. \`map()\` shines when transforming data, while \`reduce()\` is your go-to for boiling down a list of items into a single value. Remembering their characteristics and differences from other iteration methods will help you write more efficient and effective JavaScript code.`,
    },
  },
];

export const blocks03: BlogData["contents"] = [
  {
    category: "paragraph",
    attributes: {
      content: `In web design, animation is like a sprinkle of magic that breathes life into websites. The key lies in timing functions, those magical spells that dictate the acceleration of CSS animations. This allows elements to glide, bounce, and snap across the screen with lifelike realism. In this post, we'll delve into two such potent spells: \`ease\` and \`cubic-bezier\`, unravelling their mystery and mastery.`,
    },
  },
  {
    category: "heading",
    attributes: {
      content: "The Fascinating History and Math of Easing",
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `Long before the web, there was traditional animation. The great animators at Disney discovered the principle of 'slow in and slow out', which gives the illusion of weight and substance to cartoon characters. Fast forward to the computer age, and we've translated this principle into mathematical functions that web designers use to animate with CSS.`,
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `At the heart of this is the \`cubic-bezier\` function, a mathematical model for defining curves with four control points. In CSS, these points dictate the animation's progression over time, akin to plotting a roller coaster's path for web elements.`,
    },
  },
  {
    category: "heading",
    attributes: {
      content: "Understanding Ease and Cubic-Bezier",
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `In CSS, \`ease\` is a pre-defined \`cubic-bezier\` function. It's the go-to guy for a straightforward animation that starts slow, speeds up, and then slows down towards the end, which gives a natural feel to the movement, mirroring the inertia of the real world.`,
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `The \`cubic-bezier\` function, or three-time Bezier, however, offers customisability. Primarily used for creating speed curves in animations, it is defined as \`cubic-bezier(<x1>, <y1>, <x2>, <y2>)\`, with parameters representing the curve's start and end points. By tweaking these, you can create a variety of easing effects, from gentle fades to elastic bounces.`,
    },
  },
  {
    category: "image",
    attributes: {
      src: "/blogs/cubic_bezier_function.webp",
      alt: "cubic_bezier_function",
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `To understand \`cubic-bezier\`, note its four key points: fixed points P0 (0, 0) and P3 (1, 1), and adjustable points P1 (x1, y1) and P2 (x2, y2). Let's visualize the magic. Picture a graph where the horizontal line represents time and the vertical ascent is the animation unfolding. An 'ease' curve looks like a gentle hill — it starts with a gradual incline, rises to a peak of activity, and then gracefully descends back towards the finish line.`,
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `Now, imagine you're molding the curve with your hands. Pull the start point up, and your animation begins with gusto, like a sprinter off the blocks. Tug the end point down, and it'll settle like a feather. That's the \`cubic-bezier\` at play. You're not just directing the animation; you're choreographing it.`,
    },
  },
  {
    category: "heading",
    attributes: {
      content: "The Spectrum of Easing Functions",
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `Several preset cubic-bezier values correspond to distinct animation curves, like \`ease\`, \`linear\`, \`ease-in\`, \`ease-out\`, and \`ease-in-out\`, each offering unique motion aesthetics. `,
    },
  },
  {
    category: "table",
    attributes: {
      rows: [
        {
          Animation: { content: "Linear" },
          "Transition Effect": {
            content: "Starts and ends at a constant speed",
          },
          "Equivalent to": { content: "cubic-bezier(0, 0, 1, 1)" },
          Illustration: {
            content: {
              src: "/blogs/cubic_bezier_linear.png",
              alt: "cubic_bezier_linear",
            },
          },
        },
        {
          Animation: { content: "Ease" },
          "Transition Effect": {
            content: "Starts slowly, then speeds up, and ends slowly",
          },
          "Equivalent to": { content: "cubic-bezier(.25, .1, .25, 1)" },
          Illustration: {
            content: {
              src: "/blogs/cubic_bezier_ease.png",
              alt: "cubic_bezier_ease",
            },
          },
        },
        {
          Animation: { content: "Ease-in" },
          "Transition Effect": {
            content: "Starts slowly",
          },
          "Equivalent to": { content: "cubic-bezier(.42, 0, 1, 1)" },
          Illustration: {
            content: {
              src: "/blogs/cubic_bezier_ease_in.png",
              alt: "cubic_bezier_ease_in",
            },
          },
        },
        {
          Animation: { content: "Ease-out" },
          "Transition Effect": {
            content: "Ends slowly",
          },
          "Equivalent to": { content: "cubic-bezier(0, 0, .58, 1)" },
          Illustration: {
            content: {
              src: "/blogs/cubic_bezier_ease_out.png",
              alt: "cubic_bezier_ease_out",
            },
          },
        },
        {
          Animation: { content: "Ease-in-out" },
          "Transition Effect": {
            content: "Starts and ends slowly",
          },
          "Equivalent to": { content: "cubic-bezier(.42, 0, .58, 1)" },
          Illustration: {
            content: {
              src: "/blogs/cubic_bezier_ease_in_out.png",
              alt: "cubic_bezier_ease_in_out",
            },
          },
        },
      ],
    },
  },
  {
    category: "heading",
    attributes: {
      content: "Applying Ease and Cubic-Bezier in CSS",
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `Implementing these functions is straightforward: set the \`transition-timing-function\` or \`animation-timing-function\` property in your CSS. For instance:`,
    },
  },
  {
    category: "code",
    attributes: {
      content: `.button {
    transition: background-color 0.5s ease;
}
    
.button:hover {
    background-color: #3498db;
}
    
.dynamic-element {
    transition: transform 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}`,
      language: "CSS",
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `Here, \`.button\` smoothly changes color on hover using \`ease\`, while \`.dynamic-element\` employs a custom \`cubic-bezier\` for an elastic effect.`,
    },
  },
  {
    category: "heading",
    attributes: {
      content: "Conclusion",
    },
  },
  {
    category: "paragraph",
    attributes: {
      content: `\`Ease\` and \`cubic-bezier\` are more than just tools; they're the paintbrush and palette of motion in web design. Mastering them unlocks a realm of interactive storytelling on your websites. So go forth, animate with intention, and remember: the difference between mundane and magical might just be a \`cubic-bezier\` curve away.`,
    },
  },
];
