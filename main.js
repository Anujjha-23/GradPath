/* =============================================
   GradPath - Main JavaScript (Fixed)
   ============================================= */

const SHEET_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE';

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Active Nav Link ---- */
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  /* ---- Hamburger Menu ---- */
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('open');
      });
    });
    document.addEventListener('click', e => {
      if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('open');
      }
    });
  }

  /* ---- Scroll Animations ---- */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.aos').forEach(el => observer.observe(el));

  /* ---- Carousel ---- */
  const track   = document.querySelector('.carousel-track');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  if (track && prevBtn && nextBtn) {
    let currentIndex = 0;
    const cards = track.querySelectorAll('.college-card');
    const visibleCount = () => window.innerWidth < 600 ? 1 : window.innerWidth < 900 ? 2 : 3;
    const cardWidth    = () => 300 + 24;
    const updateCarousel = () => {
      const maxIndex = Math.max(0, cards.length - visibleCount());
      currentIndex = Math.min(currentIndex, maxIndex);
      track.style.transform = `translateX(-${currentIndex * cardWidth()}px)`;
    };
    nextBtn.addEventListener('click', () => {
      const max = Math.max(0, cards.length - visibleCount());
      currentIndex = currentIndex >= max ? 0 : currentIndex + 1;
      updateCarousel();
    });
    prevBtn.addEventListener('click', () => {
      const max = Math.max(0, cards.length - visibleCount());
      currentIndex = currentIndex <= 0 ? max : currentIndex - 1;
      updateCarousel();
    });
    let autoPlay = setInterval(() => {
      const max = Math.max(0, cards.length - visibleCount());
      currentIndex = currentIndex >= max ? 0 : currentIndex + 1;
      updateCarousel();
    }, 3500);
    const wrapper = track.closest('.carousel-wrapper');
    if (wrapper) {
      wrapper.addEventListener('mouseenter', () => clearInterval(autoPlay));
      wrapper.addEventListener('mouseleave', () => {
        autoPlay = setInterval(() => {
          const max = Math.max(0, cards.length - visibleCount());
          currentIndex = currentIndex >= max ? 0 : currentIndex + 1;
          updateCarousel();
        }, 3500);
      });
    }
    window.addEventListener('resize', updateCarousel);
  }

  /* ---- Counter animation ---- */
  const countObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el     = entry.target;
        const target = +el.dataset.count;
        const step   = target / (1500 / 16);
        let current  = 0;
        const timer  = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = Math.floor(current).toLocaleString('en-IN') + (el.dataset.suffix || '');
          if (current >= target) clearInterval(timer);
        }, 16);
        countObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-count]').forEach(c => countObserver.observe(c));

  /* ---- Ticker ---- */
  const tickerTrack = document.querySelector('.ticker-track');
  if (tickerTrack) tickerTrack.innerHTML += tickerTrack.innerHTML;

  /* ---- Navbar scroll shadow ---- */
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (nav) nav.style.boxShadow = window.scrollY > 20
      ? '0 4px 20px rgba(10,36,99,0.15)'
      : '0 2px 8px rgba(10,36,99,0.08)';
  });

  initLeadModal();
});

/* ================================================
   SUBMIT LEAD TO GOOGLE SHEETS
   ================================================ */
async function submitToSheet(payload) {
  if (!SHEET_URL || SHEET_URL.includes('YOUR_GOOGLE')) {
    console.warn('GradPath: Google Sheet URL not set in main.js');
    return false;
  }
  try {
    await fetch(SHEET_URL, {
      method:  'POST',
      mode:    'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(payload)
    });
    return true;
  } catch (err) {
    console.error('Sheet submit error:', err);
    return false;
  }
}

/* ================================================
   LEAD MODAL — FULLY FIXED
   ================================================ */
function initLeadModal() {
  const modal = document.getElementById('leadModal');
  if (!modal) return;

  function showModal() {
    modal.classList.add('show', 'open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    buildCalendar();
  }
  function hideModal() {
    modal.classList.remove('show', 'open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  window.openLeadModal  = showModal;
  window.closeLeadModal = hideModal;

  if (!sessionStorage.getItem('gpLeadDone')) {
    setTimeout(showModal, 15000);
  }

  const closeBtn = document.getElementById('leadClose');
  const backdrop = document.getElementById('leadBackdrop');
  if (closeBtn) closeBtn.addEventListener('click', hideModal);
  if (backdrop) backdrop.addEventListener('click', hideModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') hideModal(); });

  document.querySelectorAll('.open-lead-modal, #openModal, #openLeadModal, #navCta, [data-open-modal]').forEach(el => {
    el.addEventListener('click', e => { e.preventDefault(); showModal(); });
  });

  document.querySelectorAll('.btn-accent.nav-cta, .nav-cta').forEach(el => {
    const href = el.getAttribute('href') || '';
    if (href === '#' || href === '') {
      el.addEventListener('click', e => { e.preventDefault(); showModal(); });
    }
  });

  const phoneInput = document.getElementById('leadPhone');
  if (phoneInput) {
    phoneInput.addEventListener('input', () => {
      phoneInput.value = phoneInput.value.replace(/\D/g, '').slice(0, 10);
    });
  }

  let selectedDate = null;
  let selectedTime = '10:00 AM';
  let calendarBuilt = false;

  function buildCalendar() {
    const wrap = document.getElementById('schDates');
    if (!wrap || calendarBuilt) return;
    calendarBuilt = true;

    const days   = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const today  = new Date();

    for (let i = 0; i < 7; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'sch-date' + (i === 0 ? ' active' : '');
      btn.dataset.date = d.toDateString();
      btn.innerHTML =
        `<span class="sd-day">${days[d.getDay()]}</span>` +
        `<span class="sd-num">${d.getDate()}</span>` +
        (i === 0
          ? `<span class="sd-mon" style="color:#F4A833;font-weight:800">TODAY</span>`
          : `<span class="sd-mon">${months[d.getMonth()]}</span>`);

      btn.addEventListener('click', () => {
        wrap.querySelectorAll('.sch-date').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedDate = btn.dataset.date;
        updateLabel();
      });
      wrap.appendChild(btn);
      if (i === 0) selectedDate = d.toDateString();
    }

    document.querySelectorAll('.sch-time').forEach(b => {
      b.addEventListener('click', () => {
        document.querySelectorAll('.sch-time').forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        selectedTime = b.dataset.time;
        updateLabel();
      });
    });
    updateLabel();
  }

  function updateLabel() {
    const lbl = document.getElementById('schSelectedLabel');
    if (!lbl || !selectedDate) return;
    const d = new Date(selectedDate);
    const days   = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    lbl.textContent = `\uD83D\uDCDE Slot: ${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]} at ${selectedTime}`;
  }

  const toggleBtn   = document.getElementById('toggleSchedule');
  const scheduleBox = document.getElementById('scheduleBox');
  if (toggleBtn && scheduleBox) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = scheduleBox.style.display !== 'none';
      scheduleBox.style.display = isOpen ? 'none' : 'block';
      toggleBtn.textContent = isOpen ? 'Choose a slot' : 'Hide calendar';
      if (!isOpen) buildCalendar();
    });
  }

  function validateField(id, errId, check) {
    const el  = document.getElementById(id);
    const err = document.getElementById(errId);
    if (!el || !err) return true;
    const ok = check(el.value.trim());
    el.style.borderColor = ok ? '' : '#e74c3c';
    err.style.display    = ok ? 'none' : 'block';
    return ok;
  }

  ['leadName','leadPhone','leadEmail','leadProgram'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', () => { el.style.borderColor = ''; });
  });

  const form        = document.getElementById('leadForm');
  const formView    = document.getElementById('leadFormView');
  const successView = document.getElementById('leadSuccessView');
  const submitBtn   = document.querySelector('.lead-submit-btn');
  const btnText     = document.getElementById('leadBtnText');

  if (form) {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      const v1 = validateField('leadName',    'errName',    v => v.length >= 2);
      const v2 = validateField('leadPhone',   'errPhone',   v => /^\d{10}$/.test(v));
      const v3 = validateField('leadEmail',   'errEmail',   v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v));
      const v4 = validateField('leadProgram', 'errProgram', v => v !== '');
      if (!v1 || !v2 || !v3 || !v4) return;

      if (submitBtn) submitBtn.disabled = true;
      if (btnText)   btnText.textContent = 'Submitting\u2026';

      const name    = document.getElementById('leadName').value.trim();
      const phone   = document.getElementById('leadPhone').value.trim();
      const email   = document.getElementById('leadEmail').value.trim();
      const program = document.getElementById('leadProgram').value;
      const isOpen  = scheduleBox && scheduleBox.style.display !== 'none';
      const slot    = isOpen && selectedDate ? `${new Date(selectedDate).toDateString()} at ${selectedTime}` : '';
      const srcPage = location.pathname.split('/').pop() || 'index.html';

      submitToSheet({ name, phone, email, program, slot, page: srcPage });

      setTimeout(() => {
        sessionStorage.setItem('gpLeadDone', '1');
        if (formView)    formView.style.display    = 'none';
        if (successView) successView.style.display = 'block';
        const slotText = slot ? `Your call is booked for ${slot}.` : 'Our counsellor will call you within 2 hours.';
        const msg  = document.getElementById('successMsg');
        const meta = document.getElementById('successMeta');
        if (msg)  msg.textContent = `Hi ${name}! ${slotText} We'll guide you on ${program} admissions and fees.`;
        if (meta) meta.innerHTML  = `
          <div class="sm-item"><strong>${program}</strong><span>Program</span></div>
          <div class="sm-item"><strong>Free</strong><span>Counselling</span></div>
          <div class="sm-item"><strong>2 hrs</strong><span>Response Time</span></div>`;
      }, 800);
    });
  }
}
