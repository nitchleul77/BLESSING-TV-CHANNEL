// ===== TRANSLATIONS =====
const translations = {
  en: {
    navAbout: 'About', navPrograms: 'Programs', navGallery: 'Gallery',
    navTV: 'Blessing TV', navContact: 'Contact', navGive: 'Give',
    heroBadge: "🕊️ GOD'S BLESSING MAKES YOU PROSPER",
    heroTitle: 'The Blessing of God<br><span class="highlight">International Church</span>',
    heroTagline: '"Where Miracles Happen and Lives are Transformed"',
    heroBtn1: '✨ Join Our Service', heroBtn2: '▶ Watch Online',
    aboutLabel: 'About Us', aboutTitle: 'Our Church, Our Family',
    aboutSub: "A place where God's love transforms lives and miracles happen every day.",
    aboutH3: 'Welcome to The Blessing of God International Church',
    aboutP1: 'We are a vibrant, Spirit-filled community of believers committed to worship, prayer, teaching, and experiencing the miraculous power of God.',
    aboutP2: "Under anointed leadership, we pursue spiritual growth, deep fellowship, and a closer walk with the Lord. Whether you're seeking healing, deliverance, or simply a place to call home — you belong here.",
    f1: '🙏 Anointed Worship', f2: '📖 Biblical Teaching', f3: '✨ Miracles & Healing', f4: '❤️ Community Love',
    progLabel: 'Weekly Programs', progTitle: 'Join Us in Worship',
    progSub: 'Experience the presence of God through our weekly services and programs.',
    day1: 'Sunday', time1: '3:30 AM – 7:00 AM', desc1: 'Worship & Word — Start your week in the powerful presence of God.',
    day2: 'Tuesday', time2: '11:30 PM – 2:00 AM', desc2: 'Teaching & Prayer — Deep into the Word and intercession.',
    day3: 'Wednesday', time3: '3:00 AM – 10:00 AM', desc3: 'Counseling & Prayer — Personal ministry and dedicated prayer time.',
    day4: 'Friday', time4: 'Full Day', desc4: 'Miracle & Deliverance — A powerful day of miracles and divine deliverance.',
    galLabel: 'Moments of Faith', galTitle: 'Our Ministry in Action', galSub: 'Glimpses into our worship, prayer, and community life.',
    addrLabel: 'Find Us', addrTitle: 'Our Location', addrSub: 'Visit us and experience the blessing in person.',
    addrEn: '📍 Addis Ababa, Bole Arabsa, near Water Tanker, Block 10, about 50 meters inside.',
    addrAm: '📍 አድራሻ፦ አዲስ አበባ ቦሌ አራብሳ ውሃ ታንከር አርባ ስልሳ ብሎክ 10 ፊት ለፊት 50 ሜትር ገባ ብሎ ያገኙናል',
    tvLabel: '📺 Blessing TV Channel', tvTitle: 'Watch & Be Blessed',
    tvSub: 'Sermons, teachings, miracles, and live streams — anytime, anywhere.',
    tvC1: '🎤 Live Sermons', tvP1: 'Watch powerful messages from our anointed pastor, live and on-demand.',
    tvC2: '✨ Miracle Testimonies', tvP2: 'See what God is doing — real testimonies of healing and breakthrough.',
    tvC3: '📖 Bible Teaching', tvP3: 'Deep, revelatory teaching from the Word of God for spiritual growth.',
    subBtn: '🔔 Subscribe Now',
    tesLabel: 'Testimonies', tesTitle: 'What God Has Done', tesSub: "Hear from people whose lives have been transformed by God's power.",
    tesFormTitle: 'Share Your Testimony', tesName: 'Your Name', tesNamePH: 'Enter your name',
    tesText: 'Your Testimony', tesTextPH: 'Share what God has done in your life...', tesBtn: '🙏 Submit Testimony',
    conLabel: 'Get In Touch', conTitle: 'Contact Us', conSub: "We'd love to hear from you. Reach out anytime.",
    conP1: 'Phone', conP2: 'Phone 2', conP3: 'Location', conP4: 'Email',
    conName: 'Full Name', conNamePH: 'Your full name', conEmail: 'Email Address', conEmailPH: 'your@email.com',
    conMsg: 'Message', conMsgPH: 'Write your message...', conBtn: '✉️ Send Message',
    socLabel: 'Follow Us', socTitle: 'Stay Connected', socSub: 'Follow us on social media for daily inspiration and updates.',
    donLabel: 'Support the Ministry', donTitle: 'Give & Be Blessed', donSub: '"Give, and it shall be given unto you." — Luke 6:38',
    donBank1: 'Awash Bank', donName1: 'The Blessing of God International Church',
    donBank2: 'Commercial Bank of Ethiopia', donName2: 'Sisay Teshome',
    copyBtn: '📋 Copy Number',
    footLinks: 'Quick Links', footConnect: 'Connect', footRights: '© 2024 The Blessing of God International Church. All rights reserved.',
    langBtn: '🇪🇹 አማርኛ'
  },
  am: {
    navAbout: 'ስለ እኛ', navPrograms: 'ፕሮግራሞች', navGallery: 'ጋለሪ',
    navTV: 'ቡሪኬት ቲቪ', navContact: 'ያግኙን', navGive: 'ስጦታ',
    heroBadge: '🕊️ የእግዚአብሔር በረከት ያበለጽጋችኋል',
    heroTitle: 'የእግዚአብሔር በረከት<br><span class="highlight">ኢንተርናሽናል ቤተክርስቲያን</span>',
    heroTagline: '"ተአምራት የሚፈጠርበት እና ሕይወት የሚለወጥበት ቦታ"',
    heroBtn1: '✨ አገልግሎት ይቀላቀሉ', heroBtn2: '▶ ቀጥታ ይመልከቱ',
    aboutLabel: 'ስለ እኛ', aboutTitle: 'ቤተክርስቲያናችን፣ ቤተሰባችን',
    aboutSub: 'የእግዚአብሔር ፍቅር ሕይወትን የሚለውጥበት እና ተአምራት በየቀኑ የሚፈጠሩበት ቦታ።',
    aboutH3: 'እንኳን ደህና መጡ — የእግዚአብሔር በረከት ኢንተርናሽናል ቤተክርስቲያን',
    aboutP1: 'ለአምልኮ፣ ለጸሎት፣ ለትምህርት እና ለተአምር ያደርን የሕዝቡ ማኅበር ነን። ሕይወት ይለወጣሉ፣ ቤተሰቦች ይታደሳሉ።',
    aboutP2: 'በቅቡዕ መሪነት ሥር መንፈሳዊ እድገትን እና ከጌታ ጋር ቅርብ ፈለጋ እንሻለን። ፈውስ፣ ነጻነት ወይም ቤት የሚሆናችሁ ቦታ ለሚፈልጉ — እዚህ ቦታ አላችሁ።',
    f1: '🙏 ቅቡዕ አምልኮ', f2: '📖 መጽሐፍ ቅዱሳዊ ትምህርት', f3: '✨ ተአምርና ፈውስ', f4: '❤️ የማኅበረሰብ ፍቅር',
    progLabel: 'ሳምንታዊ ፕሮግራሞች', progTitle: 'በአምልኮ ይቀላቀሉን',
    progSub: 'በሳምንታዊ አገልግሎቶቻችን ውስጥ የእግዚአብሔርን ፊት ይቅረቡ።',
    day1: 'እሁድ', time1: '3:30 ጥዋት – 7:00 ጥዋት', desc1: 'አምልኮና ቃል — ሳምናችሁን በእግዚአብሔር ፊት ይጀምሩ።',
    day2: 'ማክሰኞ', time2: '11:30 ሌሊት – 2:00 ሌሊት', desc2: 'ትምህርትና ጸሎት — ወደ ቃሉ ጥልቀት ይወርዱ።',
    day3: 'ረቡዕ', time3: '3:00 ጥዋት – 10:00 ጥዋት', desc3: 'ምክርና ጸሎት — የግል አገልግሎት እና የወሰነ ጸሎት ጊዜ።',
    day4: 'አርብ', time4: 'መላው ቀን', desc4: 'ተአምርና ነጻነት — ምልክቶች፣ ድንቆችና ነጻነት የሚፈጸምበት ቀን።',
    galLabel: 'የእምነት ቅጽበቶች', galTitle: 'አገልግሎታችን በተግባር', galSub: 'ከአምልኮ፣ ጸሎት እና ማኅበረሰብ ሕይወታችን ምስሎች።',
    addrLabel: 'ያግኙን', addrTitle: 'አድራሻችን', addrSub: 'ጎብኙን እና በረከቱን ይቀበሉ።',
    addrEn: '📍 Addis Ababa, Bole Arabsa, near Water Tanker, Block 10, about 50 meters inside.',
    addrAm: '📍 አድራሻ፦ አዲስ አበባ ቦሌ አራብሳ ውሃ ታንከር አርባ ስልሳ ብሎክ 10 ፊት ለፊት 50 ሜትር ገባ ብሎ ያገኙናል',
    tvLabel: '📺 ቡሪኬት ቲቪ ቻናል', tvTitle: 'ይመልከቱ እና ይባረኩ',
    tvSub: 'ስብከቶች፣ ትምህርቶች፣ ተአምሮች እና ቀጥታ ስርጭቶች — በማናቸውም ጊዜ።',
    tvC1: '🎤 ቀጥታ ስብከቶች', tvP1: 'ከቅቡዕ አስተማሪያችን ኃይለኛ መልዕክቶች ይመልከቱ።',
    tvC2: '✨ የተአምር ምስክርነቶች', tvP2: 'እግዚአብሔር እየሠራ ያለውን ይዩ — የፈውስ እና ነጻነት ምስክርነቶች።',
    tvC3: '📖 መጽሐፍ ቅዱስ ትምህርት', tvP3: 'ለመንፈሳዊ እድገት ከቃሉ ጥልቅ ትምህርት።',
    subBtn: '🔔 ደንበኝነት ይመዝገቡ',
    tesLabel: 'ምስክርነቶች', tesTitle: 'እግዚአብሔር ያደረገው', tesSub: 'ሕይወታቸው በእግዚአብሔር ኃይል ተለውጦ ካደጋቸው ይስሙ።',
    tesFormTitle: 'ምስክርነትዎን ያካፍሉ', tesName: 'ስምዎ', tesNamePH: 'ስምዎን ያስገቡ',
    tesText: 'ምስክርነትዎ', tesTextPH: 'እግዚአብሔር ሕይወትዎ ላይ ያደረገውን ያካፍሉ...', tesBtn: '🙏 ምስክርነት ያስገቡ',
    conLabel: 'ያግኙን', conTitle: 'ያናግሩን', conSub: 'ከእርስዎ ለመስማት እንፈልጋለን። በማናቸውም ጊዜ ያግኙን።',
    conP1: 'ስልክ', conP2: 'ስልክ 2', conP3: 'አድራሻ', conP4: 'ኢሜይል',
    conName: 'ሙሉ ስም', conNamePH: 'ሙሉ ስምዎ', conEmail: 'ኢሜይል አድራሻ', conEmailPH: 'your@email.com',
    conMsg: 'መልዕክት', conMsgPH: 'መልዕክትዎን ይጻፉ...', conBtn: '✉️ መልዕክት ይላኩ',
    socLabel: 'ይከተሉን', socTitle: 'ተያይዘን እንቆይ', socSub: 'ለዕለታዊ መነሳሳት ማኅበራዊ ሚዲያ ላይ ይከተሉን።',
    donLabel: 'አገልግሎቱን ይደግፉ', donTitle: 'ስጡ እና ይባረኩ', donSub: '"ስጡ፤ ለእናንተም ይሰጣችኋልና" — ሉቃስ 6:38',
    donBank1: 'አዋሽ ባንክ', donName1: 'የእግዚአብሔር በረከት ኢንተርናሽናል ቤተክርስቲያን',
    donBank2: 'የኢትዮጵያ ንግድ ባንክ', donName2: 'ስሳይ ተሾመ',
    copyBtn: '📋 ቁጥር ቅዱ',
    footLinks: 'ፈጣን አገናኞች', footConnect: 'ይገናኙ', footRights: '© 2024 የእግዚአብሔር በረከት ኢንተርናሽናል ቤተክርስቲያን። መብቱ የተጠበቀ ነው።',
    langBtn: '🇬🇧 English'
  }
};

let currentLang = 'en';

function applyTranslation(lang) {
  const t = translations[lang];
  const s = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };
  const st = (id, text) => { const el = document.getElementById(id); if (el) el.textContent = text; };
  const sp = (id, text) => { const el = document.getElementById(id); if (el) el.placeholder = text; };

  st('navAbout', t.navAbout); st('navPrograms', t.navPrograms); st('navGallery', t.navGallery);
  st('navTV', t.navTV); st('navContact', t.navContact); st('navGive', t.navGive);
  st('mNavAbout', t.navAbout); st('mNavPrograms', t.navPrograms); st('mNavGallery', t.navGallery);
  st('mNavTV', t.navTV); st('mNavContact', t.navContact); st('mNavGive', t.navGive);
  st('heroBadge', t.heroBadge); s('heroTitle', t.heroTitle); st('heroTagline', t.heroTagline);
  st('heroBtn1', t.heroBtn1); st('heroBtn2', t.heroBtn2);
  st('aboutLabel', t.aboutLabel); st('aboutTitle', t.aboutTitle); st('aboutSub', t.aboutSub);
  st('aboutH3', t.aboutH3); st('aboutP1', t.aboutP1); st('aboutP2', t.aboutP2);
  st('feat1', t.f1); st('feat2', t.f2); st('feat3', t.f3); st('feat4', t.f4);
  st('progLabel', t.progLabel); st('progTitle', t.progTitle); st('progSub', t.progSub);
  st('day1', t.day1); st('time1', t.time1); st('desc1', t.desc1);
  st('day2', t.day2); st('time2', t.time2); st('desc2', t.desc2);
  st('day3', t.day3); st('time3', t.time3); st('desc3', t.desc3);
  st('day4', t.day4); st('time4', t.time4); st('desc4', t.desc4);
  st('galLabel', t.galLabel); st('galTitle', t.galTitle); st('galSub', t.galSub);
  st('addrLabel', t.addrLabel); st('addrTitle', t.addrTitle); st('addrSub', t.addrSub);
  st('addrEnText', t.addrEn); st('addrAmText', t.addrAm);
  st('tvLabel', t.tvLabel); st('tvTitle', t.tvTitle); st('tvSub', t.tvSub);
  st('tvC1', t.tvC1); st('tvP1', t.tvP1); st('tvC2', t.tvC2); st('tvP2', t.tvP2);
  st('tvC3', t.tvC3); st('tvP3', t.tvP3); st('subBtn', t.subBtn);
  st('tesLabel', t.tesLabel); st('tesTitle', t.tesTitle); st('tesSub', t.tesSub);
  st('tesFormTitle', t.tesFormTitle); st('tesNameLabel', t.tesName); sp('testimonyName', t.tesNamePH);
  st('tesTextLabel', t.tesText); sp('testimonyText', t.tesTextPH); st('tesSubmitBtn', t.tesBtn);
  st('conLabel', t.conLabel); st('conTitle', t.conTitle); st('conSub', t.conSub);
  st('conP1', t.conP1); st('conP2', t.conP2); st('conP3', t.conP3); st('conP4', t.conP4);
  st('conNameLabel', t.conName); sp('contactName', t.conNamePH);
  st('conEmailLabel', t.conEmail); sp('contactEmail', t.conEmailPH);
  st('conMsgLabel', t.conMsg); sp('contactMessage', t.conMsgPH); st('conBtn', t.conBtn);
  st('socLabel', t.socLabel); st('socTitle', t.socTitle); st('socSub', t.socSub);
  st('donLabel', t.donLabel); st('donTitle', t.donTitle); st('donSub', t.donSub);
  st('donBank1', t.donBank1); st('donName1', t.donName1);
  st('donBank2', t.donBank2); st('donName2', t.donName2);
  document.querySelectorAll('.copy-btn').forEach(b => b.textContent = t.copyBtn);
  st('footLinks', t.footLinks); st('footConnect', t.footConnect); st('footRights', t.footRights);
  st('langToggle', t.langBtn);
  document.documentElement.lang = lang;
}

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'am' : 'en';
  applyTranslation(currentLang);
}

// ===== HERO SLIDESHOW =====
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function goToSlide(n) {
  if (slides.length === 0) return;
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}
function nextSlide() { goToSlide(currentSlide + 1); }
let slideInterval = setInterval(nextSlide, 5000);
const heroSlider = document.querySelector('.hero-slider');
if (heroSlider) {
  heroSlider.addEventListener('mouseenter', () => clearInterval(slideInterval));
  heroSlider.addEventListener('mouseleave', () => { slideInterval = setInterval(nextSlide, 5000); });
}

// ===== NAVBAR =====
function handleNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 50));
}

// ===== MOBILE NAV =====
function setupMobileNav() {
  const btn = document.getElementById('hamburgerBtn');
  const nav = document.getElementById('mobileNav');
  const close = document.getElementById('closeNav');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => nav.classList.add('open'));
  if (close) close.addEventListener('click', () => nav.classList.remove('open'));
}
function closeMobileNav() {
  const nav = document.getElementById('mobileNav');
  if (nav) nav.classList.remove('open');
}

// ===== SCROLL REVEAL =====
function setupReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('active'); });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
}

// ===== LIGHTBOX =====
function openLightbox(src) {
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  if (!lb || !img) return;
  img.src = src; lb.classList.add('open'); document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (lb) lb.classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

// ===== CONTACT FORM =====
function setupContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = document.getElementById('contactStatus');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: document.getElementById('contactName').value, email: document.getElementById('contactEmail').value, message: document.getElementById('contactMessage').value })
      });
      const json = await res.json();
      if (json.success) { status.className = 'form-status success'; status.textContent = '✅ ' + (currentLang === 'am' ? 'መልዕክት ተልኳል! እግዚአብሔር ይባርክዎ።' : 'Message sent! God bless you.'); form.reset(); }
      else { status.className = 'form-status error'; status.textContent = '❌ ' + (json.error || 'Error.'); }
    } catch { status.className = 'form-status error'; status.textContent = '❌ Failed. Try again.'; }
  });
}

// ===== TESTIMONY FORM =====
function setupTestimonyForm() {
  const form = document.getElementById('testimonyForm');
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = document.getElementById('testimonyStatus');
    try {
      const res = await fetch('/api/feedback', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: document.getElementById('testimonyName').value, testimony: document.getElementById('testimonyText').value })
      });
      const json = await res.json();
      if (json.success) { status.className = 'form-status success'; status.textContent = '✅ ' + (currentLang === 'am' ? 'ምስክርነት ቀርቧል! አመሰግናለሁ።' : 'Testimony submitted! Thank you.'); form.reset(); loadTestimonies(); }
      else { status.className = 'form-status error'; status.textContent = '❌ ' + (json.error || 'Error.'); }
    } catch { status.className = 'form-status error'; status.textContent = '❌ Failed. Try again.'; }
  });
}

async function loadTestimonies() {
  try {
    const res = await fetch('/api/feedback');
    const list = await res.json();
    if (!Array.isArray(list) || list.length === 0) return;
    const grid = document.getElementById('testimoniesGrid');
    if (!grid) return;
    grid.innerHTML = '';
    list.forEach((t, i) => {
      const card = document.createElement('div');
      card.className = 'testimony-card reveal active';
      card.style.animationDelay = (i * 0.1) + 's';
      card.innerHTML = `<div class="quote">"</div><p>${escapeHtml(t.testimony)}</p><div class="author">— ${escapeHtml(t.name)}</div>`;
      grid.appendChild(card);
    });
  } catch { }
}

function escapeHtml(str) {
  const d = document.createElement('div'); d.textContent = str; return d.innerHTML;
}

function copyAccount(id) {
  const el = document.getElementById(id);
  if (!el) return;
  navigator.clipboard.writeText(el.textContent).then(() => {
    const btn = el.nextElementSibling;
    const orig = btn.textContent;
    btn.textContent = '✅ ' + (currentLang === 'am' ? 'ተቀድቷል!' : 'Copied!');
    btn.style.background = 'rgba(34,197,94,.2)'; btn.style.color = '#4ade80';
    setTimeout(() => { btn.textContent = orig; btn.style.background = ''; btn.style.color = ''; }, 2000);
  });
}

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  handleNavbar();
  setupMobileNav();
  setupReveal();
  setupContactForm();
  setupTestimonyForm();
  loadTestimonies();
});
