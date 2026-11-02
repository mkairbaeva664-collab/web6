# Assignment #6 — jQuery (Selectors, Effects, Animations)

**Student:** Madina Kairbayeva  
**Group:** IT-2504

## Project Description

This project is a personal portfolio website created using HTML, CSS, JavaScript, and jQuery.

The main purpose of this assignment is to practice working with jQuery selectors, DOM manipulation, event handling, visual effects, and animations.

The website includes personal information, a gallery, technical skills, social media links, a contact form, and interactive elements.

---

# Part 1. Getting Started with jQuery

## Task 0. Setup

**Objective:** Connect the jQuery library using a CDN and check that it works correctly.

**Implementation:**

- Connected jQuery 3.7.1 using a CDN link.
- Used `$(document).ready()` to execute the code after the document is ready.
- Used `console.log()` to display a test message.

**Result:**

The browser console displays:

`jQuery is ready!`

**Screenshot:**

<img width="470" height="91" alt="image" src="https://github.com/user-attachments/assets/9d9d5115-0ca1-42a2-bf25-2d05d7f49a8e" />

## Task 1. Selectors & CSS

**Objective:** Use different jQuery selectors to select HTML elements and modify their content and styles.

**Implementation:**

- Used a tag selector to select the `<h1>` element.
- Used a class selector to select the student's name.
- Used an ID selector to select the portfolio section.
- Used `.css()` to change element styles.
- Used `.text()` to dynamically change the introduction text.
- Added Light Theme and Dark Theme buttons.

**Result:**

Users can change the greeting and switch between light and dark themes.

**Screenshot:**

<img width="671" height="402" alt="image" src="https://github.com/user-attachments/assets/7c4644b8-3c73-4704-8ee0-bf3c9faa924c" />

---

# Part 2. jQuery Effects

## Task 2. Visibility Methods

**Objective:** Control the visibility of elements using jQuery methods.

**Implementation:**

Created an About Me section with a biography, current status, and fun facts.

Used the following methods:

- `.hide()` — hides the selected elements.
- `.show()` — displays the selected elements.
- `.toggle()` — switches between visible and hidden states.

Added three buttons: Hide, Show, and Toggle.

**Result:**

Users can control the visibility of the status message and fun facts.

**Screenshot:**

<img width="447" height="301" alt="image" src="https://github.com/user-attachments/assets/7d6daa7f-e20d-4fd0-bde6-750df4f3d644" />


## Task 3. Fade Methods

**Objective:** Apply fade effects to images.

**Implementation:**

Added two images to the portfolio gallery.

Used the following jQuery methods:

- `.fadeIn(1000)` — gradually displays images.
- `.fadeOut(1000)` — gradually hides images.
- `.fadeToggle(1000)` — switches image visibility using a fade effect.

**Result:**

Users can control the visibility of gallery images with smooth fade effects.

**Screenshot:**

<img width="486" height="288" alt="image" src="https://github.com/user-attachments/assets/026d497a-e952-41a1-8a2e-bcf00eea0a62" />


## Task 4. Slide Methods

**Objective:** Create expandable information panels using slide effects.

**Implementation:**

Created three clickable headings:

- My Favorite Music
- My Favorite Movie
- My Favorite Subject

Used the following methods:

- `.slideUp(500)` — hides the information panel.
- `.slideDown(500)` — displays the information panel.
- `.slideToggle(500)` — switches the panel between open and closed states.

**Result:**

Users can click each heading to open or close its information panel. Additional buttons allow users to show or hide all panels.

**Screenshot:**

<img width="531" height="298" alt="image" src="https://github.com/user-attachments/assets/d0e1de3a-b79b-4431-ac19-046c6a76051a" />


---

# Part 3. DOM Manipulation with jQuery

## Task 5. Add & Remove Elements

**Objective:** Dynamically add and remove technical skills from a list.

**Implementation:**

Created an initial list containing four technical skills:

- HTML
- CSS
- JavaScript
- C#

Added an input field and three buttons.

Used the following methods:

- `.append()` — adds a new skill at the end of the list.
- `.prepend()` — adds a new skill at the beginning of the list.
- `.remove()` — removes the last skill.
- `.val()` — gets the value entered by the user.

Added input validation to prevent empty skills from being added.

**Result:**

Users can dynamically manage the technical skills list.

**Screenshot:**
<img width="893" height="632" alt="image" src="https://github.com/user-attachments/assets/2cb1ba45-7435-45bf-8c14-448bf9738a5f" />


## Task 6. Modifying Attributes

**Objective:** Change an HTML attribute dynamically using jQuery.

**Implementation:**

Added a GitHub link to the portfolio.

Used `.attr()` to change the `href` attribute when the button is clicked.

The link destination changes from GitHub to LinkedIn. The link text is also updated.

**Result:**

Users can change the social media link by clicking the button.

**Screenshot:**

<img width="488" height="145" alt="image" src="https://github.com/user-attachments/assets/3edc50b4-d38d-4a9e-b06b-b0a043c73e8e" />


## Task 7. Form Interaction

**Objective:** Display user input dynamically while typing.

**Implementation:**

Created a contact form with two input fields:

- Name
- Email

Used the following methods:

- `.on("input")` — detects changes in the input fields.
- `.val()` — gets the current input value.
- `.text()` — displays the entered information below the form.

**Result:**

The entered name and email are displayed immediately in the Live Preview section.

**Screenshot:**

<img width="532" height="307" alt="image" src="https://github.com/user-attachments/assets/330deef3-a0fd-4254-9407-dc8893dfcadd" />


---

# Part 4. Animations

## Task 8. Basic Animation

**Objective:** Create animated skill bars using the jQuery `.animate()` method.

**Implementation:**

Created three skill bars with different percentage values:

- HTML — 95%
- CSS — 75%
- JavaScript — 60%

Initially, all skill bars have zero width.

Used:

- `.animate()` — changes the width of the skill bars.
- `.each()` — iterates through all skill bar elements.
- `.attr()` — gets the target width from the `data-width` attribute.

Added an Animate My Skills button.

**Result:**

When the button is clicked, the skill bars gradually increase to their target widths. When clicked again, they return to zero width.

**Screenshot:**

<img width="670" height="516" alt="image" src="https://github.com/user-attachments/assets/d3cf8c76-1afb-44bc-8c05-368e9b0023da" />

---

# Summary

During this assignment, I created a personal portfolio website and practiced using jQuery for different interactive tasks.

I learned how to:

- Connect and initialize the jQuery library.
- Select HTML elements using tag, class, and ID selectors.
- Change text and CSS properties dynamically.
- Show and hide elements.
- Apply fade and slide effects.
- Add and remove HTML elements.
- Modify HTML attributes.
- Work with input fields and forms.
- Create animations using the `.animate()` method.

This assignment helped me understand how jQuery simplifies JavaScript and makes websites more interactive.
