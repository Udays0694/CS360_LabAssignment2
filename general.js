/*
Name: Uday Singh
Course: Database Systems Lab (CS360L)
Lab Assignment 2: Creating and Designing the Bootstrap Webpage (general.js)
Date: 02/17/2025
Submitted to: Mr Mahib Ornob
*/


// For the Navbar Active State and Horizontal Layout
function setActivePage() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll("nav ul li a");

    // Apply Flexbox styling to make the navbar horizontal
    const navbar = document.querySelector("nav ul");
    if (navbar) {
        navbar.style.display = "flex";  // This makes the navbar items align horizontally
        navbar.style.justifyContent = "center";  // Centers the navbar items
        navbar.style.padding = "0";  // Remove default padding
        navbar.style.margin = "0";  // Remove default margin
    }

    // Apply styling to each individual nav item
    navLinks.forEach(link => {
        link.style.color = "#FFB300";  // Yellowish-orange text
        link.style.textDecoration = "none";  // Remove underline from links
        link.style.fontWeight = "bold";  // Bold text for visibility
        link.style.padding = "12px 16px";  // Padding for each link
        link.style.transition = "color 0.3s ease, text-shadow 0.3s ease";  // Smooth transition for hover effect
        link.addEventListener('mouseover', () => {
            link.style.color = "#333333";  // Change color on hover
            link.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.6)";  // Text-shadow on hover
        });
        
        link.addEventListener('mouseout', () => {
            link.style.color = "#FFB300";  // Reset color to yellowish-orange after hover
            link.style.textShadow = "none";  // Remove text-shadow after hover
        });
    });

    navLinks.forEach(link => {
        if (link.href.includes(currentPath)) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

// For the Modal in the Gallery Page
const images = [
    { src: "images/photo1.png", alt: "Photo 1" },
    { src: "images/photo2.png", alt: "Photo 2" },
    { src: "images/photo3.png", alt: "Photo 3" },
    { src: "images/photo4.png", alt: "Photo 4" },
    { src: "images/photo5.png", alt: "Photo 5" },
    { src: "images/photo6.png", alt: "Photo 6" },
    { src: "images/photo7.jpg", alt: "Photo 7" },
    { src: "images/photo8.jpg", alt: "Photo 8" },
    { src: "images/photo9.jpg", alt: "Photo 9" },
    { src: "images/photo10.jpg", alt: "Photo 10" },
    { src: "images/photo11.png", alt: "Photo 11" },
    { src: "images/photo12.png", alt: "Photo 12" }
];

let modal = document.getElementById("myModal");
let modalImg = document.getElementById("modalImg");
let captionText = document.getElementById("caption");

function openModal(index) {
    const selectedImage = document.querySelectorAll(".gallery-img")[index];
    if (selectedImage) {
        modal.style.display = "block";
        modalImg.src = selectedImage.src;
        modalImg.alt = selectedImage.alt;
        captionText.innerHTML = selectedImage.alt;
    } else {
        console.warn("Image not found at index:", index);
    }
}

function closeModal() {
    modal.style.display = "none";
}

// For the University of Idaho Color Scheme (Light Black Background with Yellowish-Orange Text)
function applyIdahoTheme() {
    // Light Black Background with Yellowish-Orange Text
    document.body.style.backgroundColor = "#333333";  // Lighter black/dark gray
    document.body.style.color = "#FFB300";  // Yellowish-orange text for all body content
    
    // Header: Light Black Background with Yellowish-Orange Text
    const header = document.querySelector("header");
    if (header) {
        header.style.backgroundColor = "#1a1a1a";  // Slightly darker black for header
        const headerText = header.querySelector("h1");
        if (headerText) {
            headerText.style.color = "#FFB300"; // Yellowish-orange for title text
            headerText.style.fontSize = "3em";  // Larger font size for emphasis
            headerText.style.fontWeight = "bold";  // Bold text for better visibility
            headerText.style.textShadow = "0 0 10px #FFB300, 0 0 20px #FFB300";  // Glowing effect
            headerText.style.textAlign = "center";  // Center the title
            headerText.style.margin = "0";  // Remove default margin
            headerText.style.padding = "20px 0";  // Padding for better spacing
        }
    }
    
    // Navbar: Yellowish-Orange Links with Subtle Hover Effect
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.style.color = "#FFB300";  // Yellowish-orange for links
        link.style.fontWeight = "bold";  // Bold font for better visibility
        link.style.padding = "12px 16px"; // Clean padding for a professional look
        link.style.transition = "color 0.3s ease, text-shadow 0.3s ease"; // Smooth transition for hover effect
        
        // Hover effect
        link.addEventListener('mouseover', () => {
            link.style.color = "#333333";  // Change text to light black on hover
            link.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.6)"; // Subtle text-shadow on hover
        });
        
        link.addEventListener('mouseout', () => {
            link.style.color = "#FFB300";  // Reset to yellowish-orange after hover
            link.style.textShadow = "none"; // Remove text-shadow after hover
        });
    });

    // Active Link Styling (with underline)
    const activeLink = document.querySelector("nav ul li a.active");
    if (activeLink) {
        activeLink.style.color = "#FFF";  // White for active link
        activeLink.style.textDecoration = "underline";  // Underline for active link
    }

    // Gallery Styling: Light Borders, Hover Effects
    const galleryImages = document.querySelectorAll(".gallery-img");
    galleryImages.forEach(image => {
        image.style.border = "2px solid rgba(255, 179, 0, 0.5)";  // Light yellowish-orange border
        image.style.borderRadius = "8px";  // Rounded corners
        image.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.2)";  // Soft shadow
        image.style.transition = "all 0.3s ease"; // Smooth transition on hover
        
        image.addEventListener("mouseover", () => {
            image.style.transform = "scale(1.05)";  // Slight zoom on hover
            image.style.boxShadow = "0px 6px 10px rgba(255, 179, 0, 0.6)";  // Yellowish-orange shadow
        });
        
        image.addEventListener("mouseout", () => {
            image.style.transform = "scale(1)";  // Reset zoom
            image.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.2)";  // Reset shadow
        });
    });

    // Footer: Dark Background with Yellowish-Orange Text
    const footer = document.querySelector("footer");
    if (footer) {
        footer.style.backgroundColor = "#121212";  // Dark footer background
        footer.style.color = "#FFB300";  // Yellowish-orange text in footer
        footer.style.padding = "15px 0";  // Clean footer padding
        footer.style.textAlign = "center";  // Centered footer text
    }

    // Modal Close Button with Elegant Yellowish-Orange Hover Effect
    const closeBtn = document.querySelector(".close");
    if (closeBtn) {
        closeBtn.style.color = "#FFF";  // White close button
        closeBtn.style.fontSize = "40px";  // Larger close button
        closeBtn.style.fontWeight = "bold";  // Bold close button
        closeBtn.style.transition = "opacity 0.3s ease";
        
        // Hover effect on close button
        closeBtn.addEventListener('mouseover', function() {
            closeBtn.style.color = "#FFB300";  // Yellowish-orange on hover
        });
    }
}

// Call setActivePage() on page load to highlight the current page
document.addEventListener("DOMContentLoaded", function () {
    setActivePage();  // Set active class for navbar links
    
    // Add event listener to all gallery images (in gallery.html)
    const galleryImages = document.querySelectorAll('.gallery-img');
    if (galleryImages.length > 0) {
        galleryImages.forEach((image, index) => {
            image.addEventListener('click', () => openModal(index));
        });
    } else {
        console.warn("No gallery images found!");
    }

    // Close modal when clicked on the close button (×)
    const closeBtn = document.querySelector('.close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Apply the University of Idaho theme
    applyIdahoTheme();  // Apply the theme on page load
});

