// Configuration - EDIT THESE!
const CONFIG = {
  name: "ક્રિશ", // Friend's name in Gujarati
  age: 20,
  birthYear: 2006,
};


// Photo slider data
const photos = [
  {
    image: "./images/krish7.jpeg", 
    caption: "Ujada Chaman Krish 💇",
  },
  {
    image: "./images/krish7.jpeg", 
    caption: "Sweet Krish (Mitho) 👌🏻",
  },
  {
    image: "./images/krish5.jpeg", 
    caption: "Maari Nehu ❤️",
  },
  {
    image: "./images/krish9.jpeg", 
    caption: "Pookie Krish! 🎀",
  },
  {
    image: "./images/krish6.jpeg", 
    caption:
      "Baby Krish 👶🏻",
  },
  {
    image: "./images/krish18.jpeg", 
    caption: "Krish from Africa 🌍",
  },
  {
    image: "./images/krish16.jpeg", 
    caption: "Overthinking Krish 🤔",
  },
  {
    image: "./images/krish17.jpeg", 
    caption: "Ek Smile De Jara Muskura.. 📸",
  },
  {
    image: "./images/krish1.jpeg", 
    caption: "Serious Krish 💁🏻‍♂️",
  },
  {
    image: "./images/krish2.jpeg", 
    caption: "Dashing Krish 💨",
  },
];


// Initialize
document.addEventListener("DOMContentLoaded", function () {
  initializeGallery();
  generateStats();
  makeConfetti(50);
});

function initializeGallery() {
  const gallery = document.getElementById("photoGallery");

  photos.forEach((photo, index) => {
    const photoDiv = document.createElement("div");
    photoDiv.className = "gallery-photo";
    photoDiv.innerHTML = `
                    <img src="${photo.image}" alt="Photo ${index + 1}">
                    <div class="gallery-caption">${photo.caption}</div>
                `;
    gallery.appendChild(photoDiv);
  });
}

// Generate Stats
function generateStats() {
  const age = CONFIG.age;
  const stats = [
    {
      label: "જન્મદિવસ ઉજવ્યા",
      value: age,
      emoji: "🎂",
    },
    {
      label: "દિવસ જીવ્યા",
      value: Math.floor(age * 365.25),
      emoji: "📅",
    },
    {
      label: "કલાક જીવ્યા",
      value: Math.floor(age * 365.25 * 24).toLocaleString(),
      emoji: "⏰",
    },
    {
      label: "મિનિટ જીવ્યા",
      value: Math.floor(age * 365.25 * 24 * 60).toLocaleString(),
      emoji: "⏱️",
    },
    {
      label: "સેકન્ડ જીવ્યા",
      value: Math.floor(age * 365.25 * 24 * 60 * 60).toLocaleString(),
      emoji: "🕰️",
    },
    {
      label: "નવરાત્રી ઉજવી",
      value: age,
      emoji: "🪔",
    },
    {
      label: "દિવાળી ઉજવી",
      value: age,
      emoji: "🎇",
    },
    {
      label: "મકર સંક્રાતિ ઉજવી",
      value: age,
      emoji: "🪁",
    },
    {
      label: "હોળી ઉજવી",
      value: age,
      emoji: "🔫",
    },
    {
      label: "નાતાલ ઉજવી",
      value: age,
      emoji: "🎄",
    },
    {
      label: "IPL સીઝન જોયા",
      value: Math.max(0, age - 10),
      emoji: "🏏",
    },
    {
      label: "ચાઇનીઝ ખાધી (અંદાજે)",
      value:  Math.floor(age * 21) ,
      emoji: "🏏",
    },
    
  ];

  const grid = document.getElementById("statsGrid");
  stats.forEach((stat) => {
    const card = document.createElement("div");
    card.className = "stat-card";
    card.innerHTML = `
                    <div style="font-size: 3rem;">${stat.emoji}</div>
                    <div class="stat-number">${stat.value}</div>
                    <div class="stat-label">${stat.label}</div>
                `;
    grid.appendChild(card);
  });
}

// Confetti
function makeConfetti(count) {
  const colors = ["#FF006E", "#FFD60A", "#06FFA5", "#8338EC"];
  const shapes = ["●", "■", "▲", "★"];

  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.textContent = shapes[Math.floor(Math.random() * shapes.length)];
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.top = "-10px";
      confetti.style.color = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.fontSize = Math.random() * 20 + 10 + "px";
      document.body.appendChild(confetti);

      setTimeout(() => confetti.remove(), 4000);
    }, i * 30);
  }
}

// Modal
function showModal(title, text) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalText").textContent = text;
  document.getElementById("modal").classList.add("active");
}

function closeModal() {
  document.getElementById("modal").classList.remove("active");
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Auto confetti
setInterval(() => makeConfetti(20), 20000);


 const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");

  const song1 = document.getElementById("song1");
  const song2 = document.getElementById("song2");

  const icon1 = document.getElementById("icon1");
  const icon2 = document.getElementById("icon2");

  // Show buttons on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 150) {
      btn1.classList.add("show");
      btn2.classList.add("show");
    } else {
      btn1.classList.remove("show");
      btn2.classList.remove("show");
    }
  });

 let currentSong = null;

function toggleSong(songNumber) {

  // SONG 1 BUTTON
  if (songNumber === 1) {
    if (currentSong === song1) {
      // pause same song
      song1.pause();
      icon1.classList.replace("fa-pause", "fa-play");
      currentSong = null;
    } else {
      // stop other song
      song2.pause();
      icon2.classList.replace("fa-pause", "fa-play");

      // play this song
      song1.play();
      icon1.classList.replace("fa-play", "fa-pause");
      currentSong = song1;
    }
  }

  // SONG 2 BUTTON
  if (songNumber === 2) {
    if (currentSong === song2) {
      // pause same song
      song2.pause();
      icon2.classList.replace("fa-pause", "fa-play");
      currentSong = null;
    } else {
      // stop other song
      song1.pause();
      icon1.classList.replace("fa-pause", "fa-play");

      // play this song
      song2.play();
      icon2.classList.replace("fa-play", "fa-pause");
      currentSong = song2;
    }
  }
}

// Reset icon when song ends
song1.addEventListener("ended", () => {
  icon1.classList.replace("fa-pause", "fa-play");
  currentSong = null;
});

song2.addEventListener("ended", () => {
  icon2.classList.replace("fa-pause", "fa-play");
  currentSong = null;
});
