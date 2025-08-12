function renderMockData() {
  fetch('mockData.json')
    .then(res => res.json())
    .then(data => {
      // Jackpot, online, last_updated
      if (document.getElementById('jackpot'))
        document.getElementById('jackpot').textContent = data.jackpot.toLocaleString();
      if (document.getElementById('online-users'))
        document.getElementById('online-users').textContent = data.online.toLocaleString();
      if (document.getElementById('last-updated'))
        document.getElementById('last-updated').textContent = new Date(data.last_updated).toLocaleTimeString('th-TH', { hour12: false });

      // Players
      const container = document.getElementById('players');
      if (container && Array.isArray(data.players)) {
        container.innerHTML = '';
        data.players.forEach(p => {
          container.innerHTML += `
            <div class="player">
              <span class="user">🧍‍♂️ ${p.id}</span>
              <span class="game">🎰 ${p.game}</span>
              <span class="amount">💸 ฝาก ${p.deposit.toLocaleString()} | ถอน ${p.withdraw.toLocaleString()} บาท</span>
            </div>
          `;
        });
      }
    });
}

renderMockData();
setInterval(renderMockData, 10000);
const users = [
  "user_001", "pilot_023", "agent_999", "user_007", "user_888", "pilot_101", "agent_555"
];

const games = [
  "Knockout Riches", "Dragon's Quest", "Treasure Rush",
  "Cruise Royale", "Mr. Treasure's Fortune"
];

function renderPlayers() {
  const container = document.getElementById("players");
  container.innerHTML = "";

  const count = Math.floor(Math.random() * 2) + 3; // 3–4 รายการ
  for (let i = 0; i < count; i++) {
    const user = users[Math.floor(Math.random() * users.length)];
    const game = games[Math.floor(Math.random() * games.length)];
    const deposit = Math.floor(Math.random() * 401) + 100; // ฝาก 100-500
    const withdraw = Math.floor(Math.random() * 7001) + 3000; // ถอน 3,000-10,000
    const html = `
      <div class="player">
        <span class="user">🧍‍♂️ ${user}</span>
        <span class="game">🎰 ${game}</span>
        <span class="amount">� ฝาก ${deposit.toLocaleString()} | ถอน ${withdraw.toLocaleString()} บาท</span>
      </div>
    `;
    container.innerHTML += html;
  }
}

renderPlayers();
setInterval(renderPlayers, 15000);
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateStats() {
  const jackpot = randomInt(100000, 1000000);
  const users = randomInt(5000, 25000);
  const now = new Date();
  const time = now.toLocaleTimeString('th-TH', { hour12: false });

  document.getElementById('jackpot').textContent = jackpot.toLocaleString();
  document.getElementById('online-users').textContent = users.toLocaleString();
  document.getElementById('last-updated').textContent = time;
}

setInterval(updateStats, 10000);
updateStats();
// ฟังก์ชันส่ง event ไป next.mssg.me (REST API)
function sendEvent(eventType) {
  fetch('https://next.mssg.me/api/event', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ event: eventType, timestamp: Date.now(), userAgent: navigator.userAgent })
  });
}
// GIF carousel logic
const track = document.querySelector('.carousel-track');
const images = track ? Array.from(track.children) : [];
let currentIndex = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.style.opacity = i === index ? '1' : '0';
    img.style.position = i === index ? 'static' : 'absolute';
    img.style.zIndex = i === index ? '1' : '0';
  });
}

if (track && images.length) {
  showImage(currentIndex);
  document.getElementById('prevBtn').onclick = function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  };
  document.getElementById('nextBtn').onclick = function() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  };
}
function randomName() {
  const names = ['คุณ A', 'คุณ B', 'คุณ C', 'คุณ D', 'คุณ E'];
  return names[Math.floor(Math.random() * names.length)];
}

function randomAmount() {
  return Math.floor(Math.random() * 1000) + 100;
}

function getTime() {
  return new Date().toLocaleTimeString('th-TH', { hour12: false });
}

function renderMock() {
  document.getElementById('games').innerHTML = `
    🎰 เกมสล็อต: ${Math.floor(Math.random() * 100)}% ชนะ<br>
    🎮 เกมยิงปลา: ${Math.floor(Math.random() * 100)}% ชนะ<br>
    🕒 เวลา: ${getTime()}
  `;

  document.getElementById('players').innerHTML = `
    👤 ${randomName()} เข้าระบบแล้ว (${getTime()})<br>
    👤 ${randomName()} กำลังเล่นอยู่ (${getTime()})
  `;

  document.getElementById('transactions').innerHTML = `
    💰 ${randomName()} ฝาก ${randomAmount()} บาท (${getTime()})<br>
    💸 ${randomName()} ถอน ${randomAmount()} บาท (${getTime()})
  `;
}

setInterval(renderMock, 5000);
renderMock();