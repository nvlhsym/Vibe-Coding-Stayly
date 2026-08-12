document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const moonIcon = document.getElementById('moon-icon');
  const sunIcon = document.getElementById('sun-icon');
  
  // Check local storage or system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  let currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  
  // Apply theme
  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    if (theme === 'dark') {
      moonIcon.style.display = 'none';
      sunIcon.style.display = 'block';
    } else {
      moonIcon.style.display = 'block';
      sunIcon.style.display = 'none';
    }
  };
  
  // Initial application
  applyTheme(currentTheme);
  
  // Toggle listener
  themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(currentTheme);
  });
  // Trip Planner Prompt Suggestions
  const promptTextarea = document.querySelector('.ai-prompt-card textarea');
  const suggestionChips = document.querySelectorAll('.prompt-suggestions .chip');

  if (promptTextarea && suggestionChips.length > 0) {
    suggestionChips.forEach(chip => {
      chip.addEventListener('click', () => {
        promptTextarea.value = chip.textContent;
      });
    });
  }

  // Trip Planner Results Logic
  const propertiesData = [
    {
      image: 'img/property_1_1785986918826.png',
      alt: 'Mallorca, Spain',
      superhost: true,
      title: 'Mallorca, Spain',
      rating: '4.94',
      desc: 'Cliffside villa with infinity pool',
      price: '$350',
      keywords: ['sea view', 'pool', 'villa', 'spain', 'ocean', 'cliff', '4', 'walkable']
    },
    {
      image: 'img/property_2_1785986930295.png',
      alt: 'Bend, Oregon',
      superhost: true,
      title: 'Bend, Oregon, United States',
      rating: '4.98',
      desc: 'Wood-burning cabin among the pines',
      price: '$180',
      keywords: ['cabin', 'fireplace', 'dog-friendly', 'forest', 'oregon', 'under $180', 'green', 'weekend']
    },
    {
      image: 'img/property_3_1785986940180.png',
      alt: 'Lisbon, Portugal',
      superhost: false,
      title: 'Lisbon, Portugal',
      rating: '4.92',
      desc: 'Airy loft with river light',
      price: '$120',
      keywords: ['loft', 'city', 'cafés', 'wifi', 'monthly', 'portugal', 'near cafes', 'good wifi']
    },
    {
      image: 'img/property_4_1785986953941.png',
      alt: 'Ubud, Bali',
      superhost: true,
      title: 'Ubud, Bali, Indonesia',
      rating: '4.81',
      desc: 'Villa above the rice terraces',
      price: '$90',
      keywords: ['villa', 'nature', 'rice terraces', 'bali', 'green']
    },
    {
      image: 'img/property_1_1785986918826.png',
      alt: 'Oia, Santorini',
      superhost: true,
      title: 'Oia, Santorini, Greece',
      rating: '4.99',
      desc: 'Whitewashed suite on the caldera',
      price: '$220',
      keywords: ['sea view', 'greece', 'santorini', 'white', 'caldera']
    },
    {
      image: 'img/property_3_1785986940180.png',
      alt: 'Tokyo, Japan',
      superhost: false,
      title: 'Tokyo, Japan',
      rating: '4.79',
      desc: 'Skyline studio in Minato',
      price: '$150',
      keywords: ['city', 'studio', 'japan', 'tokyo', 'wifi']
    },
    {
      image: 'img/property_4_1785986953941.png',
      alt: 'Marrakech, Morocco',
      superhost: true,
      title: 'Marrakech, Morocco',
      rating: '4.83',
      desc: 'Traditional riad with courtyard fountain',
      price: '$125',
      keywords: ['riad', 'morocco', 'courtyard']
    },
    {
      image: 'img/property_2_1785986930295.png',
      alt: 'Zermatt, Switzerland',
      superhost: true,
      title: 'Zermatt, Switzerland',
      rating: '4.96',
      desc: 'Alpine chalet facing the Matterhorn',
      price: '$410',
      keywords: ['ski', 'ski-in ski-out', 'hot tub', 'chalet', 'switzerland', 'alpine']
    }
  ];

  const btnPlan = document.querySelector('.btn-plan');
  const tripResults = document.getElementById('trip-results');
  const draftPromptText = document.getElementById('draft-prompt-text');
  const recommendedStaysContainer = document.getElementById('recommended-stays');

  if (btnPlan && tripResults) {
    btnPlan.addEventListener('click', () => {
      const promptValue = promptTextarea.value.trim().toLowerCase();
      if (!promptValue) return;

      draftPromptText.textContent = promptTextarea.value.trim();
      tripResults.style.display = 'block';
      
      const scoredProperties = propertiesData.map(prop => {
        let score = 0;
        prop.keywords.forEach(kw => {
          if (promptValue.includes(kw.toLowerCase())) {
            score++;
          }
        });
        return { ...prop, score };
      });
      
      scoredProperties.sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return parseFloat(b.rating) - parseFloat(a.rating);
      });
      
      const top4 = scoredProperties.slice(0, 4);
      
      recommendedStaysContainer.innerHTML = '';
      top4.forEach(prop => {
        const cardHtml = `
          <div class="property-card">
            <div class="property-image-container">
              <img src="${prop.image}" alt="${prop.alt}">
              ${prop.superhost ? '<div class="superhost-badge">Superhost</div>' : ''}
            </div>
            <div class="property-info">
              <div class="property-title-row">
                <h3>${prop.title}</h3>
                <div class="property-rating"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> ${prop.rating}</div>
              </div>
              <p class="property-desc">${prop.desc}</p>
              <p class="property-price"><strong>${prop.price}</strong> total / night - all fees included</p>
            </div>
          </div>
        `;
        recommendedStaysContainer.insertAdjacentHTML('beforeend', cardHtml);
      });
    });
  }

  const btnSeeAll = document.getElementById('btn-see-all');
  if (btnSeeAll) {
    btnSeeAll.addEventListener('click', () => {
      const q = promptTextarea ? promptTextarea.value.trim() : '';
      if (q) {
        window.location.href = `matching-stays.html?q=${encodeURIComponent(q)}`;
      } else {
        window.location.href = 'matching-stays.html';
      }
    });
  }

  // Matching Stays Page Logic
  if (window.location.pathname.includes('matching-stays.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const q = urlParams.get('q');
    
    const titleEl = document.getElementById('search-query-title');
    const subtitleEl = document.getElementById('search-query-subtitle');
    const emptyState = document.getElementById('empty-state');
    const gridContainer = document.getElementById('matching-stays-grid');
    const btnShowEverything = document.getElementById('btn-show-everything');
    
    if (btnShowEverything) {
      btnShowEverything.addEventListener('click', () => {
        window.location.href = 'stays.html';
      });
    }

    if (q && titleEl) {
      titleEl.textContent = `Stays matching "${q}"`;
      
      const promptValue = q.toLowerCase();
      const scoredProperties = propertiesData.map(prop => {
        let score = 0;
        prop.keywords.forEach(kw => {
          if (promptValue.includes(kw.toLowerCase())) {
            score++;
          }
        });
        return { ...prop, score };
      });
      
      const matchingProps = scoredProperties.filter(prop => prop.score > 0);
      
      if (matchingProps.length === 0) {
        if (subtitleEl) subtitleEl.innerHTML = `0 places &middot; all prices include cleaning, service, and taxes.`;
        if (emptyState) emptyState.style.display = 'flex';
        if (gridContainer) gridContainer.style.display = 'none';
      } else {
        if (subtitleEl) subtitleEl.innerHTML = `${matchingProps.length} places &middot; all prices include cleaning, service, and taxes.`;
        if (emptyState) emptyState.style.display = 'none';
        if (gridContainer) {
          gridContainer.style.display = 'grid';
          gridContainer.innerHTML = '';
          matchingProps.forEach(prop => {
            const cardHtml = `
              <div class="property-card">
                <div class="property-image-container">
                  <img src="${prop.image}" alt="${prop.alt}">
                  ${prop.superhost ? '<div class="superhost-badge">Superhost</div>' : ''}
                </div>
                <div class="property-info">
                  <div class="property-title-row">
                    <h3>${prop.title}</h3>
                    <div class="property-rating"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> ${prop.rating}</div>
                  </div>
                  <p class="property-desc">${prop.desc}</p>
                  <p class="property-price"><strong>${prop.price}</strong> total / night - all fees included</p>
                </div>
              </div>
            `;
            gridContainer.insertAdjacentHTML('beforeend', cardHtml);
          });
        }
      }
    } else {
       if (emptyState) emptyState.style.display = 'flex';
       if (gridContainer) gridContainer.style.display = 'none';
    }
  }

  // Global Filter Chips Logic
  const globalFilterChips = document.querySelectorAll('.filter-chips .chip');
  if (globalFilterChips.length > 0) {
    globalFilterChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const isActive = chip.classList.contains('active-filter');
        
        globalFilterChips.forEach(c => c.classList.remove('active-filter'));
        
        let activeFilter = '';
        if (!isActive) {
          chip.classList.add('active-filter');
          activeFilter = chip.textContent.trim();
        }

        const cards = document.querySelectorAll('.property-card');
        cards.forEach(card => {
          if (!activeFilter) {
            card.style.display = 'flex';
            return;
          }

          const desc = card.querySelector('.property-desc')?.textContent.toLowerCase() || '';
          const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
          const priceText = card.querySelector('.property-price strong')?.textContent || '';
          const price = parseInt(priceText.replace('$', '')) || 999;
          const isSuperhost = card.querySelector('.superhost-badge') !== null;

          let match = false;
          switch(activeFilter) {
            case 'Cabins':
              match = desc.includes('cabin') || desc.includes('chalet') || desc.includes('wood');
              break;
            case 'Under $150':
              match = price < 150;
              break;
            case 'Sea view':
              match = desc.includes('sea') || desc.includes('ocean') || desc.includes('cliff') || desc.includes('caldera');
              break;
            case 'Superhost':
              match = isSuperhost;
              break;
            case 'Wi-Fi':
              match = desc.includes('wifi') || desc.includes('loft') || desc.includes('studio');
              break;
            case 'Pool':
              match = desc.includes('pool');
              break;
            case 'Ski-in/out':
              match = desc.includes('ski') || desc.includes('alpine') || desc.includes('matterhorn');
              break;
            default:
              match = true;
          }

          card.style.display = match ? 'flex' : 'none';
        });

        const subtitle = document.querySelector('.page-header-text p') || document.querySelector('#search-query-subtitle');
        const visibleCount = Array.from(cards).filter(c => c.style.display !== 'none').length;
        
        if (subtitle) {
           subtitle.innerHTML = `${visibleCount} places &middot; all prices include cleaning, service, and taxes.`;
        }

        const emptyState = document.getElementById('empty-state');
        const gridContainer = document.getElementById('matching-stays-grid');
        
        if (emptyState && gridContainer) {
          if (visibleCount === 0) {
            emptyState.style.display = 'flex';
            gridContainer.style.display = 'none';
          } else {
            emptyState.style.display = 'none';
            gridContainer.style.display = 'grid';
          }
        }
      });
    });
  }
});
