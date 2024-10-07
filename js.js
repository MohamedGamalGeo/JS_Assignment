// Function to handle form submission and display the content
document.getElementById('submit_button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create a new paragraph element to display the form content
    const resultParagraph = document.createElement('p');
    resultParagraph.innerHTML = `<center><strong>Thank you </strong> ${name} for Contacting me!<br><strong> Your Email:</strong> ${email}<br><strong>Your Message:</strong> ${message}<br> <strong>I will get back to you Soon!<strong></center>`;

    // Append the paragraph to the div with id 'form-result'
    const formResultDiv = document.getElementById('form-result');
    formResultDiv.innerHTML = ''; // Clear any previous content
    formResultDiv.appendChild(resultParagraph);
});



// Define an array of images and text descriptions
const images = [
    {
        src: "assets/webs.jpg",
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque quam incidunt impedit adipisci quis accusamus, debitis nisi nostrum accusantium enim iste dignissimos est cum ea repudiandae maxime laboriosam ratione velit?'
    },
    {
        src: 'assets/data.png',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque quam incidunt impedit adipisci quis accusamus, debitis nisi nostrum accusantium enim iste dignissimos est cum ea repudiandae maxime laboriosam ratione velit?'
    },
    {
        src: 'assets/gis.png',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque quam incidunt impedit adipisci quis accusamus, debitis nisi nostrum accusantium enim iste dignissimos est cum ea repudiandae maxime laboriosam ratione velit?'
    }
];

// Track the current image index
let currentIndex = 0;

// Function to change the image and text
function changeImage() {
    // Increment the index to point to the next image
    currentIndex++;

    // Reset index if it exceeds the number of images
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    // Get the image and text elements
    const imageElement = document.getElementById('image');
    const textElement = document.getElementById('text');

    // Update the image source and text
    imageElement.src = images[currentIndex].src;
    textElement.textContent = images[currentIndex].text;
}

// Attach event listener to the button
document.getElementById('changeButton').addEventListener('click', changeImage);











































