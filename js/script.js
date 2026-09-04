

  // ─── NAV SCROLL ───
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });

  // ─── SCROLL REVEAL ───
  const revealEls = document.querySelectorAll('.reveal');
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => revealObs.observe(el));

  // ─── COUNT UP ───
  function countUp(el, target, dur = 1800) {
    let start = 0;
    const step = target / (dur / 16);
    const t = setInterval(() => {
      start = Math.min(start + step, target);
      el.textContent = Math.floor(start);
      if (start >= target) clearInterval(t);
    }, 16);
  }
  const statsObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        document.querySelectorAll('.stat-number[data-count]').forEach(el => {
          countUp(el, parseInt(el.dataset.count));
        });
        statsObs.disconnect();
      }
    });
  }, { threshold: 0.3 });
  const statsSection = document.querySelector('.stats-grid');
  if (statsSection) statsObs.observe(statsSection);

  // ─── FORM FLOAT LABEL ───
  document.querySelectorAll('.form-field input, .form-field textarea').forEach(input => {
    input.addEventListener('focus', () => {});
    input.addEventListener('blur', () => {});
  });
