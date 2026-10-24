const canvas = document.querySelector('.data-field');

if (canvas) {
  const context = canvas.getContext('2d');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const nodeCount = Math.min(58, Math.max(24, Math.floor(window.innerWidth / 24)));
  const nodes = Array.from({ length: nodeCount }, () => ({
    x: Math.random(),
    y: Math.random(),
    vx: (Math.random() - 0.5) * 0.0005,
    vy: (Math.random() - 0.5) * 0.0005,
    radius: Math.random() * 1.4 + 1.8
  }));
  let width = 0;
  let height = 0;
  let frame = 0;
  let paused = reducedMotion.matches;

  function resizeCanvas() {
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * pixelRatio;
    canvas.height = height * pixelRatio;
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    render();
  }

  function render() {
    context.clearRect(0, 0, width, height);
    nodes.forEach((node, index) => {
      if (!paused) {
        node.x = (node.x + node.vx + 1) % 1;
        node.y = (node.y + node.vy + 1) % 1;
      }
      const x = node.x * width;
      const y = node.y * height;
      for (let otherIndex = index + 1; otherIndex < nodes.length; otherIndex += 1) {
        const other = nodes[otherIndex];
        const otherX = other.x * width;
        const otherY = other.y * height;
        const distance = Math.hypot(x - otherX, y - otherY);
        if (distance < 170) {
          context.strokeStyle = `rgba(135, 207, 145, ${0.38 * (1 - distance / 170)})`;
          context.lineWidth = 1.2;
          context.beginPath();
          context.moveTo(x, y);
          context.lineTo(otherX, otherY);
          context.stroke();
        }
      }
      context.fillStyle = index % 5 === 0 ? 'rgba(255, 148, 121, .95)' : 'rgba(190, 239, 142, .9)';
      context.shadowColor = context.fillStyle;
      context.shadowBlur = 12;
      context.beginPath();
      context.arc(x, y, node.radius, 0, Math.PI * 2);
      context.fill();
      context.shadowBlur = 0;
    });
    if (!paused) frame = window.requestAnimationFrame(render);
  }

  reducedMotion.addEventListener('change', (event) => {
    if (event.matches) {
      paused = true;
      window.cancelAnimationFrame(frame);
      render();
    } else if (paused) {
      paused = false;
      render();
    }
  });

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
}

const heroVisual = document.querySelector('.hero-visual');
const chartPanel = heroVisual?.querySelector('.chart-panel');

if (heroVisual && chartPanel) {
  // İmleç konumunu sınırlı bir kayma ve eğime dönüştürerek grafiği takip ettir.
  heroVisual.addEventListener('pointermove', (event) => {
    const bounds = heroVisual.getBoundingClientRect();
    const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
    const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;
    chartPanel.style.setProperty('--chart-shift-x', `${horizontal * 24}px`);
    chartPanel.style.setProperty('--chart-shift-y', `${vertical * 18}px`);
    chartPanel.style.setProperty('--chart-tilt', `${-3 + horizontal * 8}deg`);
  });

  heroVisual.addEventListener('pointerleave', () => {
    chartPanel.style.setProperty('--chart-shift-x', '0px');
    chartPanel.style.setProperty('--chart-shift-y', '0px');
    chartPanel.style.setProperty('--chart-tilt', '-3deg');
  });
}

const eventSearch = document.querySelector('#search');
const clearSearch = document.querySelector('#clear-search');
const eventCount = document.querySelector('#event-count');
const emptySearchMessage = document.querySelector('#search-empty');
const eventCards = Array.from(document.querySelectorAll('.event-card'));

if (eventSearch && clearSearch && eventCount && emptySearchMessage && eventCards.length) {
  // Her girdi değişiminde yalnızca etkinlik başlıkları aranır; sayaç ve boş durum birlikte güncellenir.
  function filterEvents() {
    const query = eventSearch.value.trim().toLowerCase();
    let visibleCount = 0;

    eventCards.forEach((card) => {
      const title = card.querySelector('h2').textContent.toLowerCase();
      const matches = title.includes(query);
      card.hidden = !matches;
      if (matches) visibleCount += 1;
    });

    eventCount.textContent = `Gösterilen Etkinlik Sayısı: ${visibleCount}`;
    emptySearchMessage.hidden = visibleCount !== 0;
  }

  eventSearch.addEventListener('input', filterEvents);
  clearSearch.addEventListener('click', () => {
    eventSearch.value = '';
    filterEvents();
    eventSearch.focus();
  });
}