/* =============================================
   GradPath - Main JavaScript
   ============================================= */

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
  const track = document.querySelector('.carousel-track');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  if (track && prevBtn && nextBtn) {
    let currentIndex = 0;
    const cards = track.querySelectorAll('.college-card');
    const visibleCount = () => window.innerWidth < 600 ? 1 : window.innerWidth < 900 ? 2 : 3;
    const cardWidth = () => 300 + 24;
    const updateCarousel = () => {
      const maxIndex = Math.max(0, cards.length - visibleCount());
      currentIndex = Math.min(currentIndex, maxIndex);
      track.style.transform = `translateX(-${currentIndex * cardWidth()}px)`;
    };
    nextBtn.addEventListener('click', () => {
      const maxIndex = Math.max(0, cards.length - visibleCount());
      currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
      updateCarousel();
    });
    prevBtn.addEventListener('click', () => {
      const maxIndex = Math.max(0, cards.length - visibleCount());
      currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
      updateCarousel();
    });
    let autoPlay = setInterval(() => {
      const maxIndex = Math.max(0, cards.length - visibleCount());
      currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
      updateCarousel();
    }, 3500);
    const wrapper = track.closest('.carousel-wrapper');
    if (wrapper) {
      wrapper.addEventListener('mouseenter', () => clearInterval(autoPlay));
      wrapper.addEventListener('mouseleave', () => {
        autoPlay = setInterval(() => {
          const maxIndex = Math.max(0, cards.length - visibleCount());
          currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
          updateCarousel();
        }, 3500);
      });
    }
    window.addEventListener('resize', updateCarousel);
  }

  /* ---- Counter animation ---- */
  const counters = document.querySelectorAll('[data-count]');
  const countObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = +el.dataset.count;
        const duration = 1500;
        const step = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = Math.floor(current).toLocaleString('en-IN') + (el.dataset.suffix || '');
          if (current >= target) clearInterval(timer);
        }, 16);
        countObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => countObserver.observe(c));

  /* ---- Ticker duplicate for seamless loop ---- */
  const tickerTrack = document.querySelector('.ticker-track');
  if (tickerTrack) {
    tickerTrack.innerHTML += tickerTrack.innerHTML;
  }

  /* ---- Navbar scroll shadow ---- */
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.style.boxShadow = window.scrollY > 20
        ? '0 4px 20px rgba(10,36,99,0.15)'
        : '0 2px 8px rgba(10,36,99,0.08)';
    }
  });

  /* ---- Contact Form (contact page) ---- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const btn = contactForm.querySelector('.form-submit');
      const successMsg = document.querySelector('.success-msg');
      btn.textContent = 'Sending...';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Send Message';
        btn.disabled = false;
        if (successMsg) successMsg.classList.add('show');
        contactForm.reset();
        setTimeout(() => successMsg && successMsg.classList.remove('show'), 5000);
      }, 1500);
    });
  }

  /* ============================================
     LEAD MODAL — Full Logic
  ============================================= */
  initLeadModal();

});

/* ---- Lead Modal ---- */
function initLeadModal() {
  const modal = document.getElementById('leadModal');
  if (!modal) return;

  // --- Show / Hide ---
  function showModal() {
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    buildCalendar();
  }
  function hideModal() {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Auto-trigger after 12 seconds (only if not submitted before)
  if (!sessionStorage.getItem('gpLeadSubmitted')) {
    setTimeout(showModal, 12000);
  }

  // Close triggers
  const closeBtn = document.getElementById('leadClose');
  const backdrop = document.getElementById('leadBackdrop');
  if (closeBtn) closeBtn.addEventListener('click', hideModal);
  if (backdrop) backdrop.addEventListener('click', hideModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') hideModal(); });

  // Make modal openable via any .open-lead-modal link
  document.querySelectorAll('.open-lead-modal').forEach(el => {
    el.addEventListener('click', e => { e.preventDefault(); showModal(); });
  });

  // --- Phone: digits only, max 10 ---
  const phoneInput = document.getElementById('leadPhone');
  if (phoneInput) {
    phoneInput.addEventListener('input', () => {
      phoneInput.value = phoneInput.value.replace(/\D/g, '').slice(0, 10);
    });
  }

  // --- Calendar Builder ---
  let selectedDate = null;
  let selectedTime = null;

  function buildCalendar() {
    const datesWrap = document.getElementById('schDates');
    if (!datesWrap || datesWrap.dataset.built) return;
    datesWrap.dataset.built = '1';

    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const today = new Date();

    for (let i = 1; i <= 3; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'sch-date' + (i === 1 ? ' active' : '');
      btn.dataset.date = d.toDateString();
      btn.innerHTML = `<span class="sd-day">${dayNames[d.getDay()]}</span><span class="sd-num">${d.getDate()}</span><span class="sd-mon">${monthNames[d.getMonth()]}</span>`;
      btn.addEventListener('click', () => {
        document.querySelectorAll('.sch-date').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedDate = btn.dataset.date;
        updateSelectedLabel();
      });
      datesWrap.appendChild(btn);
      if (i === 1) selectedDate = d.toDateString();
    }

    // default time
    selectedTime = '10:00 AM';

    // Time buttons
    document.querySelectorAll('.sch-time').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.sch-time').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedTime = btn.dataset.time;
        updateSelectedLabel();
      });
    });

    updateSelectedLabel();
  }

  function updateSelectedLabel() {
    const lbl = document.getElementById('schSelectedLabel');
    if (lbl && selectedDate && selectedTime) {
      const d = new Date(selectedDate);
      const dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
      const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      lbl.textContent = `📞 Your slot: ${dayNames[d.getDay()]}, ${d.getDate()} ${monthNames[d.getMonth()]} at ${selectedTime}`;
    }
  }

  // Toggle schedule box
  const toggleBtn = document.getElementById('toggleSchedule');
  const scheduleBox = document.getElementById('scheduleBox');
  if (toggleBtn && scheduleBox) {
    toggleBtn.addEventListener('click', () => {
      const open = scheduleBox.style.display !== 'none';
      scheduleBox.style.display = open ? 'none' : 'block';
      toggleBtn.textContent = open ? 'Choose a slot' : 'Hide calendar';
      buildCalendar();
    });
  }

  // --- Validation Helpers ---
  function validateField(inputId, errId, condition) {
    const input = document.getElementById(inputId);
    const err = document.getElementById(errId);
    if (!input || !err) return true;
    const val = input.value.trim();
    const ok = condition(val);
    input.style.borderColor = ok ? '' : '#e74c3c';
    err.style.display = ok ? 'none' : 'block';
    return ok;
  }

  // Live validation
  ['leadName', 'leadPhone', 'leadEmail', 'leadProgram'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', () => el.style.borderColor = '');
      el.addEventListener('change', () => el.style.borderColor = '');
    }
  });

  // --- Form Submit ---
  const form = document.getElementById('leadForm');
  const formView = document.getElementById('leadFormView');
  const successView = document.getElementById('leadSuccessView');
  const submitBtn = document.getElementById('leadSubmitBtn');
  const btnText = document.getElementById('leadBtnText');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const v1 = validateField('leadName', 'errName', v => v.length >= 2);
      const v2 = validateField('leadPhone', 'errPhone', v => /^\d{10}$/.test(v));
      const v3 = validateField('leadEmail', 'errEmail', v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v));
      const v4 = validateField('leadProgram', 'errProgram', v => v !== '');

      if (!v1 || !v2 || !v3 || !v4) return;

      // Submitting state
      submitBtn.disabled = true;
      btnText.textContent = 'Submitting…';

      const name = document.getElementById('leadName').value.trim();
      const prog = document.getElementById('leadProgram').value;
      const schedulePart = (selectedDate && scheduleBox && scheduleBox.style.display !== 'none')
        ? ` Your call is scheduled for ${new Date(selectedDate).toDateString()} at ${selectedTime}.`
        : ' We will call you within 2 hours.';

      setTimeout(() => {
        sessionStorage.setItem('gpLeadSubmitted', '1');
        formView.style.display = 'none';
        successView.style.display = 'block';

        const msg = document.getElementById('successMsg');
        const meta = document.getElementById('successMeta');
        if (msg) msg.textContent = `Hi ${name}!${schedulePart} Our expert counsellor will guide you on ${prog} programs, fees, and admissions.`;
        if (meta) meta.innerHTML = `
          <div class="sm-item"><strong>${prog}</strong><span>Program</span></div>
          <div class="sm-item"><strong>Free</strong><span>Counselling</span></div>
          <div class="sm-item"><strong>2 hrs</strong><span>Response Time</span></div>`;
      }, 900);
    });
  }
}
