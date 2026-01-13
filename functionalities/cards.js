// CARDS DATA

const cardsData = [
    {
        client_image: "clients_reviews_images/chris_hemsworth.jpg",
        client_review: "An absolute masterclass in flavor and ambiance. The 'Chilean' dish was a profound culinary narrative. A stage where every ingredient played its part to perfection.",
        client_name: "Chris Hemsworth",
        client_ocupation: "actor"
    },
    {
        client_image: "clients_reviews_images/chris_evans.jpg",
        client_review: "I've dined in countless cities, but the ancestral soul in every bite here is unparalleled. The service was impeccably discreet, allowing the food to be the true star.",
        client_name: "Chris Evans",
        client_ocupation: "actor"
    },
    {
        client_image: "clients_reviews_images/elizabeth_olsen.jpg",
        client_review: "A symphony for the senses. The 'Roseau' asparagus was a delicate prelude, and the 'Venezuelan' pabellón, a passionate, unforgettable finale.",
        client_name: "Elizabeth Olsen",
        client_ocupation: "actress"
    },
    {
        client_image: "clients_reviews_images/anthony_mackie.jpg",
        client_review: "This isn't just a meal; it's a transportive experience. The mole poblano is a complex character I want to study. My new favorite hideaway in the city.",
        client_name: "Anthony Mackie",
        client_ocupation: "actor"
    },
    {
        client_image: "clients_reviews_images/chadwik_boseman.jpg",
        client_review: "From the first sip of their European cocktail to the last crumb of the brownie, it was pure theatre. The attention to detail is what truly earns a standing ovation.",
        client_name: "Chadwik Boseman",
        client_ocupation: "actor"
    },
    {
        client_image: "clients_reviews_images/elizabeth_debicki.jpg",
        client_review: "The ambiance wraps around you like a cherished memory. It's rare to find a place that feels both so elegant and so intimately personal. A true sanctuary.",
        client_name: "Elizabeth Debicki",
        client_ocupation: "actress"
    },
    {
        client_image: "clients_reviews_images/chris_pratt.jpg",
        client_review: "A script of flavors written by the gods themselves. The 'Lure' starter was a captivating opening scene, and the Pabellón Criollo, the powerful climax.",
        client_name: "Chris Pratt",
        client_ocupation: "actor"
    },
    {
        client_image: "clients_reviews_images/don_cheadle.jpg",
        client_review: "The harmony of traditional recipes with such a refined presentation is a difficult role to pull off, but Ancestral Flavors does it with grace.",
        client_name: "Don Cheadle",
        client_ocupation: "actor"
    },
    {
        client_image: "clients_reviews_images/emily_vancamp.jpg",
        client_review: "Every dish is a story, and every story is a masterpiece. The desserts, especially the 'Pay,' are like a sweet, comforting epilogue you never want to end.",
        client_name: "Emily Vancamp",
        client_ocupation: "actress"
    },
    {
        client_image: "clients_reviews_images/karen_gillan.jpg",
        client_review: "The flavors here don't just satisfy hunger; they speak to your soul. It's a deeply emotional and empowering experience. I feel nourished in every sense of the word.",
        client_name: "Karen Gillan",
        client_ocupation: "actress"
    },
    {
        client_image: "clients_reviews_images/frank_grillo.jpg",
        client_review: "I came for the food, but I left with a feeling of warmth, of family. The history section on the menu sets the tone for a genuinely heartfelt performance.",
        client_name: "Frank Grillo",
        client_ocupation: "actor"
    },
    {
        client_image: "clients_reviews_images/laura_haddock.jpg",
        client_review: "Ancestral Flavors is a testament to the power of heritage and womanhood. You can taste the generations of love and knowledge in every single recipe. Simply divine.",
        client_name: "Laura Haddock",
        client_ocupation: "actress"
    },
    {
        client_image: "clients_reviews_images/marisa_tomei.jpg",
        client_review: "From the moment you step in, you are the protagonist of your own beautiful story. The staff are the impeccable supporting cast, ensuring your journey is flawless.",
        client_name: "Marisa Tomei",
        client_ocupation: "actress"
    },
    {
        client_image: "clients_reviews_images/jeremy_renner.jpg",
        client_review: "The culinary gallery is a brilliant concept. It prepares your soul for the art you are about to consume. The 'Dominican' sancocho was a healing, powerful embrace.",
        client_name: "Jeremy Renner",
        client_ocupation: "actor"
    },
    {
        client_image: "clients_reviews_images/paul_rudo.jpg",
        client_review: "A restaurant that understands the power of silence between courses, letting each flavor resonate. The cocktail pairing suggestion was intuitive and elevated the production.",
        client_name: "Paul Rudo",
        client_ocupation: "actor"
    },
    {
        client_image: "clients_reviews_images/robert_downey_jr.jpg",
        client_review: "The 'Three Generations of Flavors' story isn't just a marketing ploy; you taste it in the dedication, in the love. This place has a spirit, and it's magnificent.",
        client_name: "Robert Downey Jr.",
        client_ocupation: "actor"
    },
    {
        client_image: "clients_reviews_images/scarlett_johansson.jpg",
        client_review: "The presentation is artistry, but the taste is pure, unadulterated emotion. The 'Colorful' starter was a vibrant painting, and the mate drink, a ritual.",
        client_name: "Scarlett Johansson",
        client_ocupation: "actress"
    },
    {
        client_image: "clients_reviews_images/sebastian_stan.jpg",
        client_review: "In a world of fleeting trends, Ancestral Flavors is a timeless classic. The 'Colombian' bandeja paisa is a monumental achievement in comfort and taste. Sheer perfection.",
        client_name: "Sebastian Stan",
        client_ocupation: "actor"
    },
    {
        client_image: "clients_reviews_images/zoe_zaldana.jpg",
        client_review: "This restaurant is a beautiful reminder that the most powerful connections are forged through food. It's a love letter to family, tradition, and taste.",
        client_name: "Zoe Zaldana",
        client_ocupation: "actress"
    },
    {
        client_image: "clients_reviews_images/tom_holland.jpg",
        client_review: "A director's dream of a restaurant. Every element—lighting, sound, pacing, and of course, the stellar cast of dishes—works in perfect unison to create a flawless scene.",
        client_name: "Tom Holland",
        client_ocupation: "actor"
    }
];

const cardsWrapper = document.getElementById('cardsWrapper');
const indicatorsContainer = document.getElementById('indicators');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

// Trigger the Cards

cardsData.forEach((card, index) => {
    // Create card
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.innerHTML = `
        <img class="card-image" src="${card.client_image}">
        <p class="card-description">"${card.client_review}"</p>
        <h4 class="card-title">${card.client_name}</h4>
        <h5 class="card-subtitle">${card.client_ocupation}</h5>
    `;
    cardsWrapper.appendChild(cardElement);

    // create indicator
    const indicator = document.createElement('div');
    indicator.className = 'indicator';
    indicator.dataset.index = index;
    indicator.addEventListener('click', () => {
        scrollToCard(index);
    });
    indicatorsContainer.appendChild(indicator);
});

// Update cards and indicators state

function updateCards() {
    const cards = document.querySelectorAll('.card');
    const indicators = document.querySelectorAll('.indicator');

    cards.forEach((card, index) => {
        // Remove first all the classes
        card.classList.remove('active', 'inactive');
        
        // Apply the class if the card is active or not
        if (index === currentIndex) {
            card.classList.add('active');
        } else {
            card.classList.add('inactive');
        }
    });

    indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Shift up to a specific card
function scrollToCard(index) 
{
    const cards = document.querySelectorAll('.card');
    if (cards[index]) 
    {
        currentIndex = index;
        cards[index].scrollIntoView(
        {
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
        
        updateCards();
    }
}

// Browse with the Buttons

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        scrollToCard(currentIndex - 1);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < cardsData.length - 1) {
        scrollToCard(currentIndex + 1);
    }
});

// Detect manual scroll

cardsWrapper.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.card');
    const scrollPosition = cardsWrapper.scrollLeft + cardsWrapper.clientWidth / 2;
    
    cards.forEach((card, index) => {
        const cardPosition = card.offsetLeft + card.offsetWidth / 2;
        if (Math.abs(scrollPosition - cardPosition) < card.offsetWidth / 2) {
            currentIndex = index;
            updateCards();
        }
    });
});

// Browse with the Keyboard

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && currentIndex > 0) {
        scrollToCard(currentIndex - 1);
    } else if (e.key === 'ArrowRight' && currentIndex < cardsData.length - 1) {
        scrollToCard(currentIndex + 1);
    }
});

// Initialize

updateCards();