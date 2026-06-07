/* ═══════════════════════════════════════════════════
   TOUR DATA — parantours.com 실제 상품 기준
═══════════════════════════════════════════════════ */
const TOURS = {
  'ny-washington': {
    id: 'ny-washington',
    title: '뉴욕 + 워싱턴 D.C.',
    nights: 3, days: 4,
    tagline: '정치·경제·문화의 세계 중심을 한 번에',
    priceFrom: 'US$799',
    bookingUrl: 'https://www.parantours.com/tours-detail.php?item_number=NYWAS3N4D',
    gradient: 'linear-gradient(135deg,#1B5E9E 0%,#0B3D6B 100%)',
    routeTitle: '4일 동선 한눈에',
    routeNodes: [
      { label: '토론토', en: 'Toronto', icon: '🚌', day: '출발', isKey: false },
      { label: '워싱턴\nD.C.', en: 'Washington D.C.', icon: '🏛️', day: 'Day 2', isKey: true },
      { label: '뉴욕\n맨해튼', en: 'New York', icon: '🗽', day: 'Day 3', isKey: true },
      { label: '우드버리', en: 'Woodbury', icon: '🛍️', day: 'Day 4', isKey: false },
      { label: '토론토', en: 'Toronto', icon: '🏠', day: '귀환', isKey: false },
    ],
    liveDay: { label: 'Day 2 · 워싱턴 D.C. 핵심 일정', notice: '버스 하차 전 개인 물품을 확인해 주세요. 국회의사당 앞에서는 단체 사진 후 25분 자유시간이 있습니다.' },
    stops: [
      {
        time: '08:30', place: '링컨 기념관', en: 'Lincoln Memorial',
        summary: '링컨 대통령과 시민권 역사를 함께 떠올리게 하는 미국의 상징',
        next: '백악관', moving: '15분',
        photo: '계단 위에서 반사못과 워싱턴 기념탑을 함께 담아보세요.',
        practical: '계단이 많으니 천천히 이동하세요. 단체 재집합은 아래 광장입니다.',
        missed: '링컨의 게티즈버그 연설과 마틴 루터 킹의 "나에게는 꿈이 있습니다" 연설 장소입니다.',
      },
      {
        time: '09:30', place: '백악관', en: 'The White House',
        summary: '미국 대통령의 관저이자 세계 정치의 중심',
        next: '국회의사당', moving: '15분',
        photo: 'North Lawn 앞 잔디 광장에서 정면 촬영이 가장 멋집니다.',
        practical: '내부 관람은 불가합니다. 펜스 밖에서 촬영 후 이동합니다.',
        missed: '1800년 존 애덤스 대통령부터 현재까지 모든 미국 대통령이 거주한 공식 관저입니다.',
      },
      {
        time: '11:00', place: '국회의사당', en: 'U.S. Capitol',
        summary: '상원과 하원이 만나는 미국 입법부의 상징',
        next: '스미소니언 박물관', moving: '12분',
        photo: '잔디 광장 쪽에서 돔 전체가 들어오게 촬영하면 안정적입니다.',
        practical: '보안 구역이 많아 이동 안내선을 벗어나지 않는 것이 좋습니다. 단체 사진 후 25분 자유시간.',
        missed: '미국 민주주의의 상징으로, 워싱턴 D.C. 도시 설계의 기준점 역할을 합니다.',
      },
      {
        time: '14:00', place: '스미소니언 박물관', en: 'Smithsonian Museums',
        summary: '항공우주·자연사·미국사 등 관심사별로 선택 관람 가능',
        next: '뉴저지 이동', moving: '4시간 20분',
        photo: '박물관 외관보다 전시물 앞에서 여행 기록을 남기기 좋습니다.',
        practical: '입장 전 화장실 위치와 출구 방향을 먼저 확인하면 자유 관람이 편합니다.',
        missed: '스미소니언은 19개 박물관과 21개 연구소를 포함하는 세계 최대 박물관 복합체입니다.',
      },
      {
        time: '09:00', place: '월스트릿 · 황소상', en: 'Wall Street · Charging Bull',
        summary: '세계 금융의 심장, 황소상은 번영과 강세장의 상징',
        next: '브루클린 브릿지', moving: '10분',
        photo: '황소상 뿔을 잡고 찍는 사진이 전통입니다. 일찍 가면 줄이 짧습니다.',
        practical: '이른 아침이라 비교적 한산합니다. 사진 후 그라운드 제로 쪽으로 이동합니다.',
        missed: '1987년 월스트릿 폭락 이후 아티스트가 게릴라 설치한 동상으로 이제는 뉴욕의 상징이 됐습니다.',
      },
      {
        time: '10:30', place: '브루클린 브릿지', en: 'Brooklyn Bridge',
        summary: '1883년 완공된 뉴욕의 아이콘, 맨해튼 스카이라인이 한눈에',
        next: '하이라인 · 첼시마켓', moving: '25분',
        photo: '브릿지 위에서 맨해튼 방향으로 찍으면 고딕 탑과 빌딩 숲이 함께 담깁니다.',
        practical: '보행자·자전거 전용 도로로 올라가세요. 왕복 이동 시간을 여유 있게 잡으세요.',
        missed: '개통 당시 세계에서 가장 긴 현수교였으며 뉴욕 건축 역사의 걸작으로 꼽힙니다.',
      },
      {
        time: '13:00', place: '하이라인 · 첼시마켓', en: 'High Line · Chelsea Market',
        summary: '폐철로 위에 만든 공중 공원, 현지인들의 산책 명소',
        next: '5번가 · 락펠러센터', moving: '20분',
        photo: '하이라인 위에서 허드슨강과 도시 전경을 함께 담을 수 있습니다.',
        practical: '첼시마켓에서 자유식입니다. 다양한 음식 선택 가능, 가격 US$15~30 예상.',
        missed: '1930년대 폐기된 화물철도를 2009년 공원으로 재탄생시킨 뉴욕 도시재생의 대표 사례입니다.',
      },
      {
        time: '19:00', place: '타임스퀘어', en: 'Times Square',
        summary: '세계의 교차점, 밤이 더 빛나는 뉴욕의 심장',
        next: '뉴저지 호텔', moving: '30분',
        photo: '저녁~밤 사이 네온사인이 가장 화려합니다. 중앙 광장 계단 위에서 전체 조망.',
        practical: '자유 관광 시간입니다. 집합 시간과 장소를 반드시 확인하세요. 소매치기 주의.',
        missed: '1900년대 초 신문사가 밀집하면서 이름이 붙었고 지금은 하루 방문객 40만 명의 명소입니다.',
      },
    ],
    highlights: ['워싱턴 D.C. 정치·역사 핵심 명소', '뉴욕 맨해튼 야경과 도시 산책', '우드버리 아웃렛 자유 쇼핑'],
  },

  'quebec': {
    id: 'quebec',
    title: '퀘벡 2박 3일',
    nights: 2, days: 3,
    tagline: '캐나다에서 만나는 유럽 — 성곽 도시의 낭만',
    priceFrom: 'C$869',
    bookingUrl: 'https://www.parantours.com/tours-detail.php?item_number=QB2N3D_BE',
    gradient: 'linear-gradient(135deg,#1f7a5c 0%,#145c42 100%)',
    routeTitle: '3일 동선 한눈에',
    routeNodes: [
      { label: '토론토', en: 'Toronto', icon: '🚌', day: '출발', isKey: false },
      { label: '오타와', en: 'Ottawa', icon: '🏛️', day: 'Day 1', isKey: true },
      { label: '몬트리올', en: 'Montreal', icon: '⛪', day: 'Day 1-2', isKey: true },
      { label: '퀘벡 시티', en: 'Quebec City', icon: '🏰', day: 'Day 2', isKey: true },
      { label: '토론토', en: 'Toronto', icon: '🏠', day: '귀환', isKey: false },
    ],
    liveDay: { label: 'Day 2 · 몬트리올 → 퀘벡 올드타운', notice: '돌길이 많습니다. 편한 신발을 신고, 자유시간 후 샤토 프롱트낙 앞에서 모입니다.' },
    stops: [
      {
        time: '11:30', place: '오타와 연방의사당', en: 'Parliament Hill, Ottawa',
        summary: '캐나다 수도의 고딕 양식 의사당과 리도 운하',
        next: '성요셉 성당', moving: '20분',
        photo: '의회 건물과 잔디 광장을 함께 담으면 수도 분위기가 잘 살아납니다.',
        practical: '강바람이 강할 수 있어 겉옷을 챙기면 좋습니다.',
        missed: '오타와는 영어권과 프랑스어권 캐나다가 만나는 수도로, 리도 운하는 유네스코 세계문화유산입니다.',
      },
      {
        time: '09:00', place: '노트르담 대성당', en: 'Notre-Dame Basilica',
        summary: '푸른빛 내부 장식과 웅장한 목조 디테일로 유명한 몬트리올 대표 명소',
        next: '몽모렌시 폭포', moving: '40분',
        photo: '내부 중앙 통로에서 제단 방향 정면 촬영이 가장 웅장합니다.',
        practical: '입장료 C$10. 성당 내부에서는 조용히 이동하고 플래시 사용을 피하세요.',
        missed: '1829년 완공된 네오고딕 양식 성당으로, 화려한 파란 금빛 인테리어로 유명합니다.',
      },
      {
        time: '11:00', place: '몽모렌시 폭포', en: 'Montmorency Falls',
        summary: '나이아가라보다 높은 83m 폭포, 퀘벡의 대표 자연 명소',
        next: '올드퀘벡', moving: '30분',
        photo: '폭포 정상 다리 위에서 아래를 향해 찍으면 압도적인 스케일이 담깁니다.',
        practical: '입장료 C$12~16. 계단이 많으니 편한 신발 필수. 케이블카 선택 가능(C$20).',
        missed: '낙차 83m로 나이아가라(57m)보다 높습니다. 겨울에는 얼음 원뿔(sugar loaf)이 형성됩니다.',
      },
      {
        time: '15:00', place: '올드퀘벡 어퍼타운', en: 'Upper Town, Old Quebec',
        summary: '북미 유일의 성곽 도시, 유네스코 세계문화유산',
        next: '쁘띠샹플랭', moving: '도보 10분',
        photo: '샤토 프롱트낙을 배경으로 낮과 밤 모두 촬영 가치가 높습니다.',
        practical: '돌길이 미끄러울 수 있어 천천히 이동하고, 자유시간에는 골목 위치를 기억하세요.',
        missed: '퀘벡 구시가지는 북미에서 성벽이 남아있는 유일한 도시로 1985년 유네스코에 등재됐습니다.',
      },
      {
        time: '17:30', place: '로워타운 · 쁘띠샹플랭', en: 'Lower Town · Petit-Champlain',
        summary: '북미에서 가장 오래된 상업 거리, 아기자기한 유럽 감성',
        next: '호텔 투숙', moving: '도보 5분',
        photo: '좁은 골목의 색깔 건물들이 포인트입니다. 저녁 조명 때 특히 예쁩니다.',
        practical: '아이스와인 무료 증정 예정. 쇼핑과 카페 자유시간 후 호텔 이동.',
        missed: '17세기 프랑스 정착민이 세운 거리로, 현재는 공예품 갤러리와 부티크 카페가 밀집해 있습니다.',
      },
    ],
    highlights: ['오타와 연방의사당과 리도 운하', '몬트리올 구시가지 · 노트르담 대성당', '퀘벡 올드타운 — 북미 유일 성곽 도시'],
  },
};

/* ═══════════════════════════════════════════════════
   APP STATE
═══════════════════════════════════════════════════ */
const state = {
  tourId: 'ny-washington',
  stopIndex: 0,
  placeIndex: 0,
  lang: 'ko',
};

/* ═══════════════════════════════════════════════════
   UTILS
═══════════════════════════════════════════════════ */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const tour = () => TOURS[state.tourId];
const stop = () => tour().stops[state.stopIndex];
const nextStop = () => tour().stops[Math.min(state.stopIndex + 1, tour().stops.length - 1)];

/* ═══════════════════════════════════════════════════
   RENDER — HERO PHONE
═══════════════════════════════════════════════════ */
function renderHeroPhone() {
  const s = stop();
  const n = nextStop();
  const heroPhone = $('#heroPhone');
  $('[data-hero-current]').textContent = s.place;
  $('[data-hero-next]').textContent = s.next;
  $('[data-hero-time]').textContent = `이동 ${s.moving}`;

  const tl = $('[data-mini-timeline]');
  const all = tour().stops;
  tl.innerHTML = all.slice(0, 4).map((st, i) => `
    <li class="${i === state.stopIndex ? 'is-now' : ''}">
      <time>${st.time}</time>
      <strong>${i === state.stopIndex ? '지금 여기' : st.place}</strong>
    </li>
  `).join('');
}

/* ═══════════════════════════════════════════════════
   RENDER — LIVE SECTION
═══════════════════════════════════════════════════ */
function renderLive() {
  const s = stop();
  const n = nextStop();
  const t = tour();

  $('[data-current-place]').textContent = s.place;
  $('[data-current-summary]').textContent = s.summary;
  $('[data-next-place]').textContent = s.next;
  $('[data-next-summary]').textContent = n.summary;
  $('[data-moving-time]').textContent = s.moving;
  $('[data-guide-notice]').textContent = t.liveDay.notice;
  $('[data-tour-day]').textContent = t.liveDay.label;

  renderTimeline();
}

function renderTimeline() {
  const stops = tour().stops;
  const tl = $('[data-main-timeline]');
  tl.innerHTML = stops.map((s, i) => `
    <li class="${i === state.stopIndex ? 'is-now' : ''}">
      <time>${s.time}</time>
      <div>
        <p class="t-name">${s.place}</p>
        <p class="t-desc">${s.summary}</p>
      </div>
    </li>
  `).join('');
}

/* ═══════════════════════════════════════════════════
   RENDER — PLACES
═══════════════════════════════════════════════════ */
function renderPlaces() {
  const stops = tour().stops;
  const list = $('[data-place-list]');
  const detail = $('[data-place-detail]');
  const s = stops[state.placeIndex] || stops[0];

  list.innerHTML = stops.map((st, i) => `
    <button class="place-btn ${i === state.placeIndex ? 'is-active' : ''}" type="button" data-place-idx="${i}">
      ${st.place}
      <span>${st.en}</span>
    </button>
  `).join('');

  const lang = state.lang;
  detail.innerHTML = `
    <div class="place-visual" style="background:${tour().gradient}"></div>
    <div class="place-content">
      <h3>${s.place}</h3>
      <p class="place-en">${s.en}</p>
      <div class="guide-blocks">
        <div class="guide-block">
          <span class="guide-block-title">핵심 설명</span>
          <p>${s.missed}</p>
        </div>
        <div class="guide-block">
          <span class="guide-block-title">사진 포인트</span>
          <p>${s.photo}</p>
        </div>
        <div class="guide-block">
          <span class="guide-block-title">화장실 · 식사 · 자유시간</span>
          <p>${s.practical}</p>
        </div>
        <div class="guide-block">
          <span class="guide-block-title">가이드 요약</span>
          <p>${lang === 'ko' ? s.summary : s.en + ' — ' + s.summary}</p>
        </div>
      </div>
    </div>
  `;

  $$('[data-place-idx]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.placeIndex = +btn.dataset.placeIdx;
      renderPlaces();
    });
  });
}

/* ═══════════════════════════════════════════════════
   RENDER — PRODUCTS
═══════════════════════════════════════════════════ */
function renderProducts() {
  const grid = $('[data-product-grid]');
  grid.innerHTML = Object.values(TOURS).map(t => `
    <article class="product-card tilt-card">
      <div class="product-visual" style="background:${t.gradient}">
        ${t.id === 'ny-washington' ? '<span class="product-badge">주력 상품</span>' : ''}
      </div>
      <div class="product-content">
        <h3 class="product-title">${t.title}</h3>
        <p class="product-price">${t.priceFrom}부터 · ${t.nights}박 ${t.days}일</p>
        <p class="product-summary">${t.tagline}</p>
        <ul class="product-points">
          ${t.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
        <a class="btn-primary" href="${t.bookingUrl}" target="_blank" rel="noreferrer">공식 상품 보기 →</a>
      </div>
    </article>
  `).join('');

  initTilt();
}

/* ═══════════════════════════════════════════════════
   RENDER — ROUTE
═══════════════════════════════════════════════════ */
function renderRoute() {
  const t = tour();
  $('[data-route-title]').textContent = t.routeTitle;

  const viz = $('[data-route-viz]');
  let html = '';
  t.routeNodes.forEach((node, i) => {
    html += `
      <div class="route-node ${node.isKey ? 'is-key' : ''}">
        <div class="route-dot">${node.icon}</div>
        <p class="route-node-label">${node.label.replace('\n', '<br>')}</p>
        <p class="route-node-day">${node.day}</p>
      </div>
    `;
    if (i < t.routeNodes.length - 1) {
      html += `<div class="route-connector delay-${i}"></div>`;
    }
  });
  viz.innerHTML = html;

  // Animate lines via IO
  const section = $('.route-section');
  const lineObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        setTimeout(() => {
          $$('.route-connector').forEach(c => c.classList.add('is-drawn'));
        }, 300);
        lineObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  lineObserver.observe(section);
}

/* ═══════════════════════════════════════════════════
   RENDER ALL
═══════════════════════════════════════════════════ */
function render() {
  renderHeroPhone();
  renderLive();
  renderPlaces();
  renderProducts();
  renderRoute();
  syncTabs();
}

function syncTabs() {
  $$('[data-tour]').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.tour === state.tourId);
  });
}

/* ═══════════════════════════════════════════════════
   SCROLL REVEAL
═══════════════════════════════════════════════════ */
function initScrollReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  $$('.reveal, .reveal-stagger').forEach(el => io.observe(el));
}

/* ═══════════════════════════════════════════════════
   COUNTER ANIMATION
═══════════════════════════════════════════════════ */
function animateCounter(el, target, decimal) {
  const dur = 1600;
  const start = performance.now();
  function tick(now) {
    const t = Math.min((now - start) / dur, 1);
    const ease = 1 - Math.pow(1 - t, 3);
    const val = ease * target;
    if (decimal) {
      el.textContent = (val / 10).toFixed(1);
    } else {
      el.textContent = Math.floor(val).toLocaleString();
    }
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function initCounters() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const target = +e.target.dataset.count;
        const decimal = !!e.target.dataset.decimal;
        animateCounter(e.target, target, decimal);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  $$('[data-count]').forEach(el => io.observe(el));
}

/* ═══════════════════════════════════════════════════
   CARD TILT (desktop)
═══════════════════════════════════════════════════ */
function initTilt() {
  if (window.matchMedia('(hover: none)').matches) return;
  $$('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) scale(1.02)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ═══════════════════════════════════════════════════
   MOBILE SWIPE — place guide
═══════════════════════════════════════════════════ */
function initSwipe() {
  const layout = $('#placesLayout');
  if (!layout) return;
  let startX = 0;
  layout.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  layout.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) < 40) return;
    const max = tour().stops.length - 1;
    if (dx < 0 && state.placeIndex < max) { state.placeIndex++; renderPlaces(); }
    if (dx > 0 && state.placeIndex > 0) { state.placeIndex--; renderPlaces(); }
  }, { passive: true });
}

/* ═══════════════════════════════════════════════════
   PHONE FLIP
═══════════════════════════════════════════════════ */
function flipAndUpdate(fn) {
  const screen = $('#heroPhone');
  screen.classList.add('is-flipping');
  setTimeout(() => { fn(); }, 250);
  setTimeout(() => { screen.classList.remove('is-flipping'); }, 500);
}

/* ═══════════════════════════════════════════════════
   TOPBAR SCROLL SHADOW
═══════════════════════════════════════════════════ */
function initScrollShadow() {
  const topbar = $('#topbar');
  window.addEventListener('scroll', () => {
    topbar.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}

/* ═══════════════════════════════════════════════════
   EVENT BINDING
═══════════════════════════════════════════════════ */
function bindEvents() {
  // Tour tabs
  $$('[data-tour]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.tourId = btn.dataset.tour;
      state.stopIndex = 0;
      state.placeIndex = 0;
      render();
      document.querySelector('.route-section').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });

  // Next stop simulation
  $('#simulateNext').addEventListener('click', () => {
    const max = tour().stops.length - 1;
    state.stopIndex = (state.stopIndex + 1) % (max + 1);
    state.placeIndex = state.stopIndex;
    flipAndUpdate(() => {
      renderHeroPhone();
      renderLive();
      renderPlaces();
    });
  });

  // Language toggle
  $('#langToggle').addEventListener('click', () => {
    state.lang = state.lang === 'ko' ? 'en' : 'ko';
    $('#langToggle').textContent = state.lang === 'ko' ? '한국어 / EN' : 'EN / 한국어';
    renderPlaces();
  });

  // Hamburger menu
  const menuBtn = $('#menuBtn');
  const mobileNav = $('#mobileNav');
  menuBtn.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('is-open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });

  // Close mobile nav on link click
  $$('.mobile-link').forEach(a => {
    a.addEventListener('click', () => {
      mobileNav.classList.remove('is-open');
    });
  });
}

/* ═══════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  render();
  initScrollReveal();
  initCounters();
  initTilt();
  initSwipe();
  initScrollShadow();
  bindEvents();
});
