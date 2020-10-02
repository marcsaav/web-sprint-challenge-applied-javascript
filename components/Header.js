// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {

    // Instatiating Elements

    let header = document.createElement('header');
    let date = document.createElement('span');
    let title = document.createElement('h1');
    let temp = document.createElement('span');

    // Element Classes

    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    // Appending Elements

    header.append(date);
    header.append(title);
    header.append(temp);

    // Adding Text Content

    date.textContent = "October 2, 2020";
    title.textContent = "Lambda Times";
    temp.textContent = `98°`;

    let headerContainer = document.querySelector('.header-container');

    headerContainer.append(header);
}

Header()
