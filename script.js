// Cursor Learning Website - Interactive Features

(function() {
  'use strict';

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Demo AI Suggestion Feature
  const aiSuggestBtn = document.getElementById('ai-suggest-btn');
  const resetBtn = document.getElementById('reset-btn');
  const demoCode = document.getElementById('demo-code');
  const aiResponse = document.getElementById('ai-response');

  const originalCode = `// Click the button below to see Cursor's AI in action!
function greetUser(name) {
  return \`Hello, \${name}! Welcome to Cursor.\`;
}

console.log(greetUser("Developer"));`;

  const aiSuggestions = [
    {
      title: "✨ AI Suggestion: Add Input Validation",
      suggestion: `// Enhanced version with input validation
function greetUser(name) {
  if (!name || typeof name !== 'string') {
    throw new Error('Name must be a non-empty string');
  }
  return \`Hello, \${name}! Welcome to Cursor.\`;
}

console.log(greetUser("Developer"));`
    },
    {
      title: "✨ AI Suggestion: Add Default Parameter",
      suggestion: `// Using default parameters for better flexibility
function greetUser(name = 'Guest') {
  return \`Hello, \${name}! Welcome to Cursor.\`;
}

console.log(greetUser("Developer"));
console.log(greetUser()); // Uses default`
    },
    {
      title: "✨ AI Suggestion: Add JSDoc Documentation",
      suggestion: `// Well-documented function with JSDoc
/**
 * Greets a user with a personalized message
 * @param {string} name - The name of the user to greet
 * @returns {string} A greeting message
 */
function greetUser(name) {
  return \`Hello, \${name}! Welcome to Cursor.\`;
}

console.log(greetUser("Developer"));`
    },
    {
      title: "✨ AI Suggestion: Add Error Handling",
      suggestion: `// With try-catch error handling
function greetUser(name) {
  try {
    if (!name) throw new Error('Name is required');
    return \`Hello, \${name}! Welcome to Cursor.\`;
  } catch (error) {
    return \`Error: \${error.message}\`;
  }
}

console.log(greetUser("Developer"));`
    }
  ];

  let currentSuggestionIndex = 0;

  if (aiSuggestBtn) {
    aiSuggestBtn.addEventListener('click', function() {
      const suggestion = aiSuggestions[currentSuggestionIndex % aiSuggestions.length];
      
      // Update code
      demoCode.textContent = suggestion.suggestion;
      
      // Show AI response
      aiResponse.innerHTML = `
        <h4>${suggestion.title}</h4>
        <p>Cursor's AI analyzed your code and suggested this improvement. In the real Cursor editor, you can accept, modify, or reject suggestions with a single click!</p>
      `;
      aiResponse.classList.add('show');
      
      // Scroll to response
      aiResponse.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      
      currentSuggestionIndex++;
      
      // Update button text
      if (currentSuggestionIndex >= aiSuggestions.length) {
        aiSuggestBtn.textContent = '✨ Try Another Suggestion';
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', function() {
      demoCode.textContent = originalCode;
      aiResponse.classList.remove('show');
      currentSuggestionIndex = 0;
      if (aiSuggestBtn) {
        aiSuggestBtn.textContent = '✨ Get AI Suggestion';
      }
    });
  }

  // Add scroll animation for feature cards
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe feature cards
  document.querySelectorAll('.feature-card, .tip-card, .resource-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });

  // Add active state to navigation on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav a[href^="#"]');

  function updateActiveNav() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav();

  // Add typing effect to hero (optional enhancement)
  const heroTitle = document.querySelector('.hero h1');
  if (heroTitle && window.innerWidth > 768) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.style.opacity = '1';
    
    let i = 0;
    function typeWriter() {
      if (i < text.length) {
        heroTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    }
    
    // Start typing after a short delay
    setTimeout(typeWriter, 500);
  }

  console.log('🚀 Cursor Learning Website loaded successfully!');
  console.log('💡 Tip: Open this site in Cursor and explore the code to learn more!');
})();
