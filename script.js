// Configuration - EDIT THESE!
const CONFIG = {
  name: "ક્રિશ", // Friend's name in Gujarati
  age: 20,
  birthYear: 2006,
};

// Roast messages in Gujarati
const gujaratiRoasts = [
  "હવે તમારી ઉંમર આટલી થઈ ગઈ કે તમે ઉભા થતાં પણ અવાજ કરો છો! 😂",
  "તમે સવારે 6 વાગ્યે ઊઠો છો અને કહો છો 'આજકાલ ના બાળકો આળસુ છે!' 👴",
  "તમારી નિદ્રા: રાત્રે 9 વાગે સૂઈ જવું અને સવારે 5 વાગે જાગવું. સીનિયર સિટિઝન મોડ એક્ટિવેટેડ! 😴",
  "તમે WhatsApp માં ફોરવર્ડ મેસેજ મોકલવાનું શરૂ કરી દીધું! અત્યારે તમે ઓફિશિયલી જૂના! 📱",
  "તમારી પસંદગી: પહેલા ખોરાક, પછી ચા, પછી નિદ્રા. સાચા ગુજરાતી! 🍽️",
  "હવે તમે દર વાતમાં કહો છો 'આપણા સમયે...' બસ, હવે તમે પૂરા જૂના થઈ ગયા! ⏰",
  "તમે રવિવારે ફાફડા વગર જીવી શકતા નથી! પ્યોર ગુજરાતી સિમ્પટમ્સ! 🫔",
  "તમારી સવારની શરૂઆત: ચા, અખબાર, અને પડોશીઓ ની ગપ્પા! ક્લાસિક! ☕",
  "તમે IPL માં ગુજરાત ટાઈટન્સ ને સપોર્ટ કરો અને જીત્યા તો ઘર માં દિવાળી કરો! 🏏",
  "હવે તમારું મોટું સ્વપ્ન: સારી બચત, સારું ઘર, અને સારા ઢોકળા! પરફેક્ટ! 💰",
];

// Garba wheel roasts
const garbaRoasts = [
  "અભિનંદન! તમે વધુ એક વર્ષ જીવ્યા અને વધુ જૂના થયા! જય શ્રી કૃષ્ણ! 🎊",
  "તમારી ઉંમર હવે એટલી છે કે નવરાત્રી માં ગરબા રમવા થોડી મુશ્કેલી પડે! 💃",
  "તમે હવે એટલા અનુભવી છો કે તમને સલાહ આપવી મુશ્કેલ છે! 🧠",
  "વય! તમે તો સાચા ઓલ્ડ સ્કૂલ થઈ ગયા! પણ તે જ સારું છે! 🎯",
  "હવે તમે દરરોજ આરોગ્ય વિશે વિચારો છો. વેલકમ ટુ ઓલ્ડ એજ! 🏥",
  "તમારી યાદશક્તિ: ૨૦ વર્ષ પહેલાં શું થયું તે યાદ છે પણ ગઈ કાલે શું ખાધું તે ભૂલી ગયા! 🤔",
  "તમે હવે સામાજિક કાર્યક્રમો માં વહેલા જાવ અને વહેલા આવો. સિમ્પલ લાઈફ! 🚶",
  "તમારી જીંદગી નું મોટો નિર્ણય: આજે શું રાંધવું? ગુજરાતી પ્રોબ્લેમ્સ! 🍳",
  "તમે હવે ફેસ્ટિવલ માં પણ ચા-નાસ્તો નું વધુ ધ્યાન રાખો છો! પ્રાયોરિટીઝ! 🎪",
  "અભિનંદન! હવે તમે ગુજરાતી અંકલ/આંટી બની ગયા! એન્જોય કરો! 👑",
];

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  generateStats();
  calculateFoodStats();
  makeConfetti(50);
});

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
      label: "IPL સીઝન જોયા",
      value: Math.max(0, age - 10),
      emoji: "🏏",
    },
    {
      label: "કિલો વજન (અંદાજે)",
      value: 60 + age * 0.5,
      emoji: "⚖️",
    },
    {
      label: "WhatsApp ગ્રુપ",
      value: Math.min(age * 2, 50),
      emoji: "📱",
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

// Calculate Food Stats
function calculateFoodStats() {
  const age = CONFIG.age;
  const days = Math.floor(age * 365.25);

  document.getElementById("dhoklaCount").textContent = days;
  document.getElementById("fafdaCount").textContent = Math.floor(age * 52);
  document.getElementById("chaiCount").textContent = (
    days * 3
  ).toLocaleString();
  document.getElementById("theplaCount").textContent = (
    days * 2
  ).toLocaleString();
  document.getElementById("dalBhatCount").textContent = days.toLocaleString();
  document.getElementById("khandviCount").textContent = Math.floor(
    age * 100,
  ).toLocaleString();
}

// Roast cards
function showRoast(index) {
  const roasts = [
    gujaratiRoasts[0],
    gujaratiRoasts[2],
    gujaratiRoasts[4],
    gujaratiRoasts[9],
    gujaratiRoasts[3],
    gujaratiRoasts[8],
  ];
  showModal("રોસ્ટ ટાઈમ! 🔥", roasts[index]);
  makeConfetti(50);
}

// Garba Wheel
let isSpinning = false;
function spinGarba() {
  if (isSpinning) return;
  isSpinning = true;

  const wheel = document.getElementById("garbaWheel");
  const result = document.getElementById("garbaResult");
  const randomRotation = 1440 + Math.random() * 360;

  wheel.style.transform = `rotate(${randomRotation}deg)`;
  wheel.innerHTML = "🎪";

  setTimeout(() => {
    const randomRoast =
      garbaRoasts[Math.floor(Math.random() * garbaRoasts.length)];
    result.textContent = randomRoast;
    result.style.background =
      "linear-gradient(135deg, var(--saffron), var(--green))";
    isSpinning = false;
    wheel.innerHTML = "ફરી<br>ફેરવો!";
    makeConfetti(100);
  }, 3000);
}

// Dhokla Click
function dhoklaClick() {
  const messages = [
    "વાહ! ઢોકળા પર ક્લિક કર્યું! 🥟\n\nતમે સાચા ગુજરાતી છો! હવે થોડા ઢોકળા ખાઈ લો!",
    "ઢોકળા! 😋\n\nગુજરાતી નું સૌથી મોટું પ્રેમ! તમારે પણ ખૂબ ગમતા હશે!",
    "ઢોકળા એટેક! 🥟💥\n\nસવારે ઢોકળા વગર દિવસ શરૂ નથી થતો ને!",
    "વાહ વા! 🎉\n\nતમે ઢોકળા ના ખાસ ચાહક લાગો છો!",
    "ઢોકળા પ્રેમ! 💚\n\nગુજરાતી હો તો ઢોકળા ના દિવાના જ હશો!",
  ];
  const random = messages[Math.floor(Math.random() * messages.length)];
  showModal("ઢોકળા! 🥟", random);
  makeConfetti(80);
}

// Confetti
function makeConfetti(count) {
  const emojis = ["🥟", "🫔", "🎂", "🎉", "🎊", "✨", "💫", "🌟"];

  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.top = "-50px";
      confetti.style.fontSize = Math.random() * 1.5 + 1 + "rem";
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

function easterEgg() {
  const img = document.querySelector(".birthday-person");
  img.classList.add("clicked");
  makeConfetti(200);
  showModal("SURPRISE!", "🎉 You found the secret! Here's some confetti! 🎊");
  setTimeout(() => img.classList.remove("clicked"), 1000);
}
