import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// Smooth Scroll Function
export const smoothScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};


function setupIntersectionObserver() {
  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              console.log('Intersection detected:', entry.target, 'Is Intersecting:', entry.isIntersecting);
              if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
              } else {
                  entry.target.classList.remove('visible'); // Remove visibility when out of view
              }
          });
      },
      {
          root: null,
          rootMargin: '0px',
          threshold: 0.1, // Adjust threshold as needed
      }
  );

  const sections = document.querySelectorAll('.section');
  sections.forEach((section) => observer.observe(section));
}

// Ensure the observer is set up after DOM is loaded
document.addEventListener('DOMContentLoaded', setupIntersectionObserver);