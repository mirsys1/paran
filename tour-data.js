/* ═══════════════════════════════════════════════════
   TOUR DATA — parantours.com 실제 상품 기준
═══════════════════════════════════════════════════ */

const DAY_LABELS = {
  'ny-washington': {
    1: 'Day 1 · 토론토 → 워싱턴',
    2: 'Day 2 · 워싱턴 D.C.',
    3: 'Day 3 · 뉴욕 맨해튼',
    4: 'Day 4 · 우드버리 → 귀환',
  },
  'quebec': {
    1: 'Day 1 · 오타와 → 몬트리올',
    2: 'Day 2 · 퀘벡 시티',
    3: 'Day 3 · 귀환',
  },
};

const TOURS = {
  'ny-washington': {
    id: 'ny-washington',
    title: '뉴욕 + 워싱턴 D.C.',
    nights: 3, days: 4,
    tagline: '정치·경제·문화의 세계 중심을 한 번에',
    priceFrom: 'US$799',
    bookingUrl: 'https://www.parantours.com/tours-detail.php?item_number=NYWAS3N4D',
    gradient: 'linear-gradient(135deg,#1B5E9E 0%,#0B3D6B 100%)',
    routeTitle: '4일 동선',
    routeNodes: [
      { label: '토론토', en: 'Toronto', icon: '🚌', day: 'Day 1', isKey: false },
      { label: '워싱턴\nD.C.', en: 'Washington D.C.', icon: '🏛️', day: 'Day 2', isKey: true },
      { label: '뉴욕\n맨해튼', en: 'New York', icon: '🗽', day: 'Day 3', isKey: true },
      { label: '우드버리', en: 'Woodbury', icon: '🛍️', day: 'Day 4', isKey: false },
      { label: '토론토', en: 'Toronto', icon: '🏠', day: '귀환', isKey: false },
    ],
    dayNotices: {
      1: '토론토에서 워싱턴 D.C.까지 약 10~12시간 버스로 이동합니다. 편안한 복장을 권장하며 중간에 휴게소 정차가 있습니다.',
      2: '버스 하차 전 개인 물품을 확인하세요. 국회의사당 앞에서 단체 사진 후 25분 자유시간이 있습니다.',
      3: '타임스퀘어 자유 관광 시 집합 장소와 시간을 기억하세요. 소지품 관리에 주의하십시오.',
      4: '우드버리 아웃렛 쇼핑 약 3시간. 집합 시간을 꼭 지켜주세요.',
    },
    stops: [
      // ─── DAY 1 ───
      {
        day: 1, time: '06:00', place: '토론토 출발', en: 'Depart Toronto',
        icon: '🚌', isTransit: true,
        summary: '이른 아침 토론토를 출발, 버팔로 → 펜실베이니아 → 워싱턴 D.C. 경로로 이동합니다.',
        next: '워싱턴 D.C. 숙소', moving: '10~12시간',
        photo: null,
        practical: '편안한 복장 권장. 중간 휴게소 정차. 가이드의 미국 여행 안내 진행.',
        missed: null,
        facts: [],
      },
      {
        day: 1, time: '~18:00', place: '워싱턴 D.C. 도착', en: 'Arrive Washington D.C.',
        icon: '🏨', isTransit: true,
        summary: '워싱턴 D.C. 인근 숙소 체크인. 내일 일정을 준비합니다.',
        next: '링컨 기념관 (내일)', moving: '다음날',
        photo: null,
        practical: '체크인 후 자유 저녁 식사. 내일 08:00 로비 집합.',
        missed: null,
        facts: [],
      },

      // ─── DAY 2 · 워싱턴 D.C. ───
      {
        day: 2, time: '08:30', place: '링컨 기념관', en: 'Lincoln Memorial',
        icon: '🏛️',
        summary: '반사못 너머 워싱턴 기념탑이 보이는 미국 민주주의의 상징',
        next: '백악관', moving: '15분',
        photo: '계단 중간에서 반사못(Reflecting Pool)과 워싱턴 기념탑이 일직선으로 담기는 구도가 포인트입니다.',
        practical: '36계단 오르면 링컨 좌상. 단체 재집합은 계단 아래 광장. 음식물 반입 금지.',
        missed: '마틴 루터 킹 Jr.가 1963년 "나에게는 꿈이 있습니다" 연설을 한 계단입니다. 반사못(길이 618m)은 워싱턴 기념탑을 완벽하게 반사하도록 설계되었습니다.',
        facts: [
          { label: '건립', value: '1922년' },
          { label: '링컨상 높이', value: '5.8m' },
          { label: '계단 수', value: '36개' },
          { label: '입장료', value: '무료 (24시간)' },
        ],
      },
      {
        day: 2, time: '09:30', place: '백악관', en: 'The White House',
        icon: '🏛️',
        summary: '1800년부터 미국 역대 모든 대통령이 거주해온 공식 관저',
        next: '국회의사당', moving: '15분',
        photo: 'North Lawn 정문 앞에서 정면 촬영. 아침 햇살이 맞을 때 가장 선명합니다.',
        practical: '내부 관람 불가. 외부 펜스 밖 촬영만 가능. 보안 요원의 안내를 따릅니다.',
        missed: '존 애덤스 대통령(1800년)부터 역대 모든 대통령이 거주했습니다. "이그제큐티브 맨션"이라 불리던 이름을 루즈벨트 대통령이 1901년 "백악관(White House)"으로 공식 확정했습니다.',
        facts: [
          { label: '완공', value: '1800년' },
          { label: '방 수', value: '132개' },
          { label: '부지 면적', value: '약 7.3만㎡' },
          { label: '외벽 재질', value: '버지니아산 백색 사암' },
        ],
      },
      {
        day: 2, time: '11:00', place: '국회의사당', en: 'U.S. Capitol',
        icon: '🏛️',
        summary: '상원·하원이 입법 활동을 하는 미국 민주주의의 핵심 건물',
        next: '스미소니언 박물관', moving: '12분',
        photo: '서쪽 잔디 광장 끝에서 돔 전체와 계단이 한 프레임에 들어옵니다.',
        practical: '보안 구역 다수. 이동 안내선을 벗어나지 마세요. 단체 사진 후 25분 자유시간.',
        missed: '1793년 조지 워싱턴이 초석을 놓았습니다. 1814년 영국군에 의해 소실 후 재건되었으며, 워싱턴 D.C. 전체 도로 번호 체계의 기준점(Capitol Hill)입니다.',
        facts: [
          { label: '돔 높이', value: '87.8m' },
          { label: '초석', value: '1793년' },
          { label: '상원', value: '100석' },
          { label: '하원', value: '435석' },
        ],
      },
      {
        day: 2, time: '14:00', place: '스미소니언 박물관', en: 'Smithsonian Museums',
        icon: '🏛️',
        summary: '항공우주·자연사·미국사 등 관심사별 자유 관람',
        next: '뉴저지 숙소 이동', moving: '4시간 20분',
        photo: '나사 우주선, 공룡 화석 앞 사진이 인기입니다. 박물관은 자유 선택.',
        practical: '입장 전 화장실 확인. 자유 관람 약 90분. 자연사·항공우주·미국사 박물관 인기.',
        missed: '1846년 영국 과학자 제임스 스미슨의 유산으로 설립되었습니다. 19개 박물관·21개 연구소에 1억 5천만 점 이상의 소장품을 보유한 세계 최대 박물관 복합체입니다.',
        facts: [
          { label: '설립', value: '1846년' },
          { label: '박물관 수', value: '19개' },
          { label: '소장품', value: '1억 5천만 점+' },
          { label: '입장료', value: '무료' },
        ],
      },

      // ─── DAY 3 · 뉴욕 ───
      {
        day: 3, time: '09:00', place: '월스트릿 · 황소상', en: 'Wall Street · Charging Bull',
        icon: '🐂',
        summary: '세계 금융의 심장부와 강세장을 상징하는 청동 황소',
        next: '브루클린 브릿지', moving: '10분',
        photo: '황소 뿔을 잡고 찍는 포즈가 전통입니다. 이른 아침이라 대기 줄이 짧습니다.',
        practical: '이른 아침이라 비교적 한산합니다. 사진 후 그라운드 제로 방향으로 이동.',
        missed: '1987년 주가 폭락 이후 아티스트 아르투로 디 모디카가 허가 없이 설치한 게릴라 예술 작품으로, 지금은 뉴욕의 아이콘이 되었습니다.',
        facts: [
          { label: '설치', value: '1989년' },
          { label: '무게', value: '3,200kg' },
          { label: '재질', value: '청동' },
          { label: '작가', value: 'Arturo Di Modica' },
        ],
      },
      {
        day: 3, time: '10:30', place: '브루클린 브릿지', en: 'Brooklyn Bridge',
        icon: '🌉',
        summary: '1883년 완공된 세계 최초 강철선 현수교, 맨해튼 스카이라인 조망',
        next: '하이라인 · 첼시마켓', moving: '25분',
        photo: '다리 위 보행자 통로에서 맨해튼 방향으로 찍으면 고딕 탑과 빌딩 숲이 담깁니다.',
        practical: '보행자·자전거 겸용 도로. 자전거 조심. 왕복 보행 약 40분 소요.',
        missed: '설계자 존 로블링은 공사 중 부상으로 사망했고, 그의 아들과 며느리 에밀리가 완성했습니다. 완공 당시 세계에서 가장 긴 현수교였습니다.',
        facts: [
          { label: '완공', value: '1883년' },
          { label: '주경간 길이', value: '486m' },
          { label: '탑 높이', value: '84m' },
          { label: '건축 양식', value: '고딕 네오클래식' },
        ],
      },
      {
        day: 3, time: '13:00', place: '하이라인 · 첼시마켓', en: 'High Line · Chelsea Market',
        icon: '🌿',
        summary: '폐화물철도를 공중 정원으로 탈바꿈한 뉴욕 도시재생의 명소',
        next: '타임스퀘어', moving: '20분',
        photo: '하이라인 위에서 허드슨강과 남쪽 맨해튼 스카이라인이 함께 담깁니다.',
        practical: '첼시마켓에서 자유식. 다양한 푸드홀, 가격 US$15~30 예상.',
        missed: '1934년 완공된 화물 철도가 1980년 폐선 후 방치되다 시민 운동으로 2009년 공원화에 성공했습니다. 이제는 연간 800만 명 이상이 방문하는 뉴욕 최고의 산책로입니다.',
        facts: [
          { label: '개장', value: '2009년' },
          { label: '전체 길이', value: '약 2.3km' },
          { label: '지상 높이', value: '약 9m' },
          { label: '연간 방문객', value: '800만 명+' },
        ],
      },
      {
        day: 3, time: '19:00', place: '타임스퀘어', en: 'Times Square',
        icon: '🗽',
        summary: '하루 40만 명이 오가는 세계의 교차점, 밤이 더욱 빛나는 뉴욕의 심장',
        next: '뉴저지 호텔', moving: '30분',
        photo: '저녁 8시 이후 네온사인이 가장 화려합니다. TKTS 붉은 계단 위에서 전체 조망 가능.',
        practical: '자유 관광. 집합 장소·시간을 기억하세요. 소매치기 주의, 귀중품은 앞주머니에.',
        missed: '1904년 뉴욕타임스 빌딩 이전으로 이름을 얻었습니다. 브로드웨이 당일 할인 티켓(TKTS)은 중앙 붉은 계단 아래 부스에서 구매 가능합니다.',
        facts: [
          { label: '일일 방문객', value: '약 40만 명' },
          { label: 'LED 광고판', value: '70개 이상' },
          { label: '브로드웨이 극장', value: '41개' },
          { label: '연간 방문', value: '약 1.3억 명' },
        ],
      },

      // ─── DAY 4 ───
      {
        day: 4, time: '09:00', place: '우드버리 아웃렛', en: 'Woodbury Common Premium Outlets',
        icon: '🛍️',
        summary: '220개+ 프리미엄 브랜드, 미국 최대 규모의 아웃렛 쇼핑',
        next: '토론토 귀환', moving: '8~9시간',
        photo: '아웃렛 입구 표지판 앞 인증샷이 정석. 쇼핑 전 안내소에서 쿠폰북을 받으세요.',
        practical: '자유 쇼핑 약 3시간. 코치, 랄프로렌, 마이클 코어스 등. 집합 시간 엄수.',
        missed: '뉴욕 맨해튼 북쪽 약 80km. 한국 면세점 대비 30~60% 저렴한 경우 많습니다. 택스리펀드 가능 매장에서는 여권 지참 권장.',
        facts: [
          { label: '입점 브랜드', value: '220개+' },
          { label: '위치', value: '뉴욕주 센트럴밸리' },
          { label: '영업시간', value: '10:00~21:00' },
          { label: '규모', value: '약 11만㎡' },
        ],
      },
      {
        day: 4, time: '~20:00', place: '토론토 도착', en: 'Return to Toronto',
        icon: '🏠', isTransit: true,
        summary: '우드버리에서 토론토까지 약 8~9시간 버스로 귀환합니다.',
        next: null, moving: null,
        photo: null,
        practical: '출발 전 화장실 이용. 귀환 중 여행 후기 설문지 배포.',
        missed: null,
        facts: [],
      },
    ],
    highlights: ['워싱턴 D.C. 정치·역사 명소 4곳', '뉴욕 맨해튼 산책 + 야경', '우드버리 아웃렛 자유 쇼핑 3시간'],
  },

  'quebec': {
    id: 'quebec',
    title: '퀘벡 2박 3일',
    nights: 2, days: 3,
    tagline: '캐나다에서 만나는 유럽 — 성곽 도시의 낭만',
    priceFrom: 'C$869',
    bookingUrl: 'https://www.parantours.com/tours-detail.php?item_number=QB2N3D_BE',
    gradient: 'linear-gradient(135deg,#1f7a5c 0%,#145c42 100%)',
    routeTitle: '3일 동선',
    routeNodes: [
      { label: '토론토', en: 'Toronto', icon: '🚌', day: 'Day 1', isKey: false },
      { label: '오타와', en: 'Ottawa', icon: '🏛️', day: 'Day 1', isKey: true },
      { label: '몬트리올', en: 'Montreal', icon: '⛪', day: 'Day 1', isKey: true },
      { label: '퀘벡 시티', en: 'Quebec City', icon: '🏰', day: 'Day 2', isKey: true },
      { label: '토론토', en: 'Toronto', icon: '🏠', day: '귀환', isKey: false },
    ],
    dayNotices: {
      1: '오타와 의사당 이후 몬트리올로 이동합니다. 노트르담 성당은 저녁 전 관람합니다.',
      2: '돌길이 많습니다. 편한 신발을 신고, 자유시간 후 샤토 프롱트낙 앞에서 모입니다.',
      3: '퀘벡 시티에서 토론토까지 약 8~9시간. 출발 전 화장실을 이용해 주세요.',
    },
    stops: [
      // ─── DAY 1 ───
      {
        day: 1, time: '06:00', place: '토론토 출발', en: 'Depart Toronto',
        icon: '🚌', isTransit: true,
        summary: '토론토에서 오타와까지 약 4~5시간 버스 이동.',
        next: '오타와 연방의사당', moving: '4~5시간',
        photo: null,
        practical: '편안한 복장 권장. 중간 휴게소 정차 예정.',
        missed: null,
        facts: [],
      },
      {
        day: 1, time: '11:30', place: '오타와 연방의사당', en: 'Parliament Hill, Ottawa',
        icon: '🏛️',
        summary: '캐나다 수도 오타와의 고딕 양식 의사당과 리도 운하',
        next: '노트르담 대성당 (몬트리올)', moving: '2시간',
        photo: '의회 건물과 광장 잔디를 함께 담으면 수도 분위기가 잘 살아납니다.',
        practical: '강바람이 강할 수 있어 겉옷 준비. 집합 후 몬트리올로 이동.',
        missed: '캐나다의 수도 오타와는 영어권과 프랑스어권의 경계 도시입니다. 바로 앞 리도 운하는 유네스코 세계문화유산으로, 겨울에는 세계 최대 자연 스케이트 링크로 변신합니다.',
        facts: [
          { label: '완공', value: '1866년 (재건)' },
          { label: '피스 타워 높이', value: '56m' },
          { label: '건축 양식', value: '고딕 리바이벌' },
          { label: '입장료', value: '무료' },
        ],
      },
      {
        day: 1, time: '19:00', place: '노트르담 대성당', en: 'Notre-Dame Basilica, Montreal',
        icon: '⛪',
        summary: '몬트리올 구시가지의 보석, 파란빛 금장 내부가 압도적인 네오고딕 성당',
        next: '몬트리올 숙소', moving: '도보 15분',
        photo: '내부 중앙 통로에서 제단 방향 정면 촬영이 가장 웅장합니다.',
        practical: '입장료 C$10. 내부 조용히 이동, 플래시 사용 금지.',
        missed: '1829년 완공된 네오고딕 양식 성당으로, 셀린 디온이 이곳에서 결혼식을 올렸습니다. 내부는 파란 배경에 금빛 별들로 수놓아 "성당 안의 밤하늘"이라 불립니다.',
        facts: [
          { label: '완공', value: '1829년' },
          { label: '수용 인원', value: '3,000명' },
          { label: '파이프 오르간', value: '7,000개 파이프' },
          { label: '건축 양식', value: '네오고딕' },
        ],
      },

      // ─── DAY 2 · 퀘벡 시티 ───
      {
        day: 2, time: '11:00', place: '몽모렌시 폭포', en: 'Montmorency Falls',
        icon: '💧',
        summary: '나이아가라보다 30m 높은 83m 폭포, 퀘벡의 대표 자연 명소',
        next: '올드퀘벡 어퍼타운', moving: '30분',
        photo: '폭포 정상 현수교 위에서 아래를 향해 찍으면 압도적인 스케일이 담깁니다.',
        practical: '입장료 C$12~16. 계단 많으니 편한 신발 필수. 케이블카 선택 가능(C$20).',
        missed: '낙차 83m로 나이아가라 폭포(57m)보다 높습니다. 겨울에는 물보라가 얼어 거대한 얼음 원뿔(pain de sucre)이 형성되며 이 위를 오르는 축제가 열립니다.',
        facts: [
          { label: '높이', value: '83m (나이아가라 57m)' },
          { label: '폭', value: '약 30m' },
          { label: '케이블카', value: 'C$20 (선택)' },
          { label: '개방', value: '연중 (겨울 얼음 축제)' },
        ],
      },
      {
        day: 2, time: '15:00', place: '올드퀘벡 어퍼타운', en: 'Upper Town, Old Quebec',
        icon: '🏰',
        summary: '북미 유일의 성곽 도시, 유네스코 세계문화유산',
        next: '쁘띠샹플랭', moving: '도보 10분',
        photo: '샤토 프롱트낙 성을 배경으로 낮과 밤 모두 촬영 가치가 높습니다.',
        practical: '돌길 미끄러울 수 있어 주의. 자유시간 후 샤토 프롱트낙 앞 집합.',
        missed: '퀘벡 구시가지는 북미에서 성벽이 온전히 남아있는 유일한 도시로 1985년 유네스코 세계문화유산에 등재되었습니다. 성곽 전체 길이는 4.6km입니다.',
        facts: [
          { label: '성곽 길이', value: '4.6km' },
          { label: '유네스코 등재', value: '1985년' },
          { label: '도시 설립', value: '1608년' },
          { label: '공식 언어', value: '프랑스어' },
        ],
      },
      {
        day: 2, time: '17:30', place: '로워타운 · 쁘띠샹플랭', en: 'Lower Town · Petit-Champlain',
        icon: '🏘️',
        summary: '북미에서 가장 오래된 상업 거리, 유럽 감성의 아기자기한 골목',
        next: '퀘벡 시티 숙소', moving: '도보 5분',
        photo: '좁은 골목의 색깔 건물들이 포인트. 저녁 조명이 켜질 때 특히 아름답습니다.',
        practical: '아이스와인 무료 증정 예정. 자유 쇼핑·카페 시간 후 숙소 이동.',
        missed: '17세기 프랑스 정착민이 세운 북미에서 가장 오래된 상업 구역입니다. 현재는 공예품 갤러리와 부티크 카페가 밀집해 있으며 아이스와인 생산지로도 유명합니다.',
        facts: [
          { label: '설립', value: '17세기 초' },
          { label: '길이', value: '약 300m' },
          { label: '분위기', value: '중세 프랑스 골목' },
          { label: '특산품', value: '아이스와인, 공예품' },
        ],
      },

      // ─── DAY 3 ───
      {
        day: 3, time: '09:00', place: '퀘벡 시티 출발', en: 'Depart Quebec City',
        icon: '🚌', isTransit: true,
        summary: '퀘벡 시티에서 토론토까지 약 8~9시간 버스로 귀환합니다.',
        next: '토론토 도착', moving: '8~9시간',
        photo: null,
        practical: '출발 전 화장실 이용. 귀환 중 여행 후기 설문지 배포.',
        missed: null,
        facts: [],
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
  stopIndex: 2,     // 링컨 기념관 (Day 2 첫 번째)
  placeIndex: 0,    // non-transit stops 기준 인덱스
  currentDay: 2,
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
const allDays = () => [...new Set(tour().stops.map(s => s.day))].sort((a, b) => a - b);
const stopsForDay = (day) => tour().stops.filter(s => s.day === day);
const placeStops = () => tour().stops.filter(s => !s.isTransit);

/* ═══════════════════════════════════════════════════
   RENDER — HERO PHONE
═══════════════════════════════════════════════════ */
function renderHeroPhone() {
  const s = stop();
  $('[data-hero-current]').textContent = s.place;
  $('[data-hero-next]').textContent = s.next || '—';
  $('[data-hero-time]').textContent = s.moving ? `이동 ${s.moving}` : '';

  const tl = $('[data-mini-timeline]');
  const dayStops = stopsForDay(state.currentDay).slice(0, 4);
  tl.innerHTML = dayStops.map(st => {
    const idx = tour().stops.indexOf(st);
    const isNow = idx === state.stopIndex;
    return `<li class="${isNow ? 'is-now' : ''}">
      <time>${st.time}</time>
      <strong>${isNow ? '지금 여기' : st.place}</strong>
    </li>`;
  }).join('');
}

/* ═══════════════════════════════════════════════════
   RENDER — DAY TABS
═══════════════════════════════════════════════════ */
function renderDayTabs() {
  const container = $('[data-day-tabs]');
  if (!container) return;
  const labels = DAY_LABELS[state.tourId] || {};
  container.innerHTML = allDays().map(d => `
    <button class="day-tab ${d === state.currentDay ? 'is-active' : ''}" type="button" data-day="${d}">
      <strong>Day ${d}</strong>
      <span>${(labels[d] || '').replace(/^Day \d+ · /, '')}</span>
    </button>
  `).join('');

  $$('[data-day]', container).forEach(btn => {
    btn.addEventListener('click', () => {
      state.currentDay = +btn.dataset.day;
      const first = tour().stops.findIndex(s => s.day === state.currentDay);
      if (first >= 0) state.stopIndex = first;
      renderDayTabs();
      renderLive();
      renderHeroPhone();
    });
  });
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
  $('[data-next-place]').textContent = s.next || '투어 완료';
  $('[data-next-summary]').textContent = (n !== s) ? n.summary : '투어가 완료되었습니다.';
  $('[data-moving-time]').textContent = s.moving || '—';
  $('[data-guide-notice]').textContent = t.dayNotices[state.currentDay] || '';
  $('[data-tour-day]').textContent = (DAY_LABELS[state.tourId] || {})[state.currentDay] || '';

  renderTimeline();
}

function renderTimeline() {
  const dayStops = stopsForDay(state.currentDay);
  const tl = $('[data-main-timeline]');
  tl.innerHTML = dayStops.map(s => {
    const idx = tour().stops.indexOf(s);
    const isNow = idx === state.stopIndex;
    return `<li class="${isNow ? 'is-now' : ''}">
      <time>${s.time}</time>
      <div>
        <p class="t-name">${s.icon ? s.icon + ' ' : ''}${s.place}</p>
        <p class="t-desc">${s.summary}</p>
      </div>
    </li>`;
  }).join('');
}

/* ═══════════════════════════════════════════════════
   RENDER — PLACES
═══════════════════════════════════════════════════ */
function renderPlaces() {
  const stops = placeStops();
  const current = stops[state.placeIndex] || stops[0];
  const list = $('[data-place-list]');
  const detail = $('[data-place-detail]');

  // Group by day
  const byDay = {};
  stops.forEach((s, i) => {
    if (!byDay[s.day]) byDay[s.day] = [];
    byDay[s.day].push({ s, i });
  });

  const labels = DAY_LABELS[state.tourId] || {};
  list.innerHTML = Object.entries(byDay).map(([day, items]) => `
    <div class="place-day-group">
      <div class="place-day-header">${labels[day] || 'Day ' + day}</div>
      ${items.map(({ s: st, i }) => `
        <button class="place-btn ${i === state.placeIndex ? 'is-active' : ''}" type="button" data-place-idx="${i}">
          ${st.icon || ''} ${st.place}
          <span>${st.en}</span>
        </button>
      `).join('')}
    </div>
  `).join('');

  detail.innerHTML = current ? `
    <div class="place-visual" style="background:${tour().gradient}">
      <div class="place-visual-overlay">
        <span class="place-day-badge">Day ${current.day}</span>
        <span class="place-visual-time">${current.time}</span>
      </div>
    </div>
    <div class="place-content">
      <h3>${current.place}</h3>
      <p class="place-en">${current.en}</p>
      ${current.facts && current.facts.length ? `
        <div class="place-facts">
          ${current.facts.map(f => `
            <div class="fact-item">
              <span class="fact-label">${f.label}</span>
              <span class="fact-value">${f.value}</span>
            </div>
          `).join('')}
        </div>
      ` : ''}
      <div class="guide-blocks">
        <div class="guide-block guide-block-full">
          <span class="guide-block-title">핵심 설명</span>
          <p>${current.missed || current.summary}</p>
        </div>
        <div class="guide-block">
          <span class="guide-block-title">사진 포인트</span>
          <p>${current.photo || '—'}</p>
        </div>
        <div class="guide-block">
          <span class="guide-block-title">이동 · 실용 정보</span>
          <p>${current.practical}</p>
        </div>
      </div>
    </div>
  ` : '';

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
  const labels = DAY_LABELS;
  grid.innerHTML = Object.values(TOURS).map(t => {
    const days = [...new Set(t.stops.map(s => s.day))].sort();
    return `
      <article class="product-card tilt-card">
        <div class="product-visual" style="background:${t.gradient}">
          ${t.id === 'ny-washington' ? '<span class="product-badge">주력 상품</span>' : ''}
          <div class="product-days">${t.nights}박 ${t.days}일</div>
        </div>
        <div class="product-content">
          <h3 class="product-title">${t.title}</h3>
          <p class="product-tagline">${t.tagline}</p>
          <div class="product-itinerary">
            ${days.map(d => {
              const dayStops = t.stops.filter(s => s.day === d && !s.isTransit);
              if (!dayStops.length) return '';
              const lbl = (labels[t.id] || {})[d] || 'Day ' + d;
              return `<div class="product-day">
                <span class="product-day-label">${lbl}</span>
                <span class="product-day-stops">${dayStops.map(s => s.place).join(' · ')}</span>
              </div>`;
            }).join('')}
          </div>
          <a class="btn-primary" href="${t.bookingUrl}" target="_blank" rel="noreferrer">상품 상세 보기 →</a>
        </div>
      </article>
    `;
  }).join('');
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
    html += `<div class="route-node ${node.isKey ? 'is-key' : ''}">
      <div class="route-dot">${node.icon}</div>
      <p class="route-node-label">${node.label.replace('\n', '<br>')}</p>
      <p class="route-node-day">${node.day}</p>
    </div>`;
    if (i < t.routeNodes.length - 1) {
      html += `<div class="route-connector delay-${i}"></div>`;
    }
  });
  viz.innerHTML = html;

  const section = $('.route-section');
  const lineObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        setTimeout(() => $$('.route-connector').forEach(c => c.classList.add('is-drawn')), 300);
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
  renderDayTabs();
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
      if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  $$('.reveal, .reveal-stagger').forEach(el => io.observe(el));
}

/* ═══════════════════════════════════════════════════
   CARD TILT
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
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });
}

/* ═══════════════════════════════════════════════════
   MOBILE SWIPE
═══════════════════════════════════════════════════ */
function initSwipe() {
  const layout = $('#placesLayout');
  if (!layout) return;
  let startX = 0;
  layout.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  layout.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) < 40) return;
    const max = placeStops().length - 1;
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
  setTimeout(() => fn(), 250);
  setTimeout(() => screen.classList.remove('is-flipping'), 500);
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
  $$('[data-tour]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.tourId = btn.dataset.tour;
      state.currentDay = allDays()[0];
      if (state.tourId === 'ny-washington') state.currentDay = 2;
      const first = tour().stops.findIndex(s => s.day === state.currentDay);
      state.stopIndex = first >= 0 ? first : 0;
      state.placeIndex = 0;
      render();
      document.querySelector('.route-section').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });

  $('#simulateNext').addEventListener('click', () => {
    const max = tour().stops.length - 1;
    state.stopIndex = (state.stopIndex + 1) % (max + 1);
    const s = tour().stops[state.stopIndex];
    state.currentDay = s.day;
    // Sync placeIndex if not transit
    if (!s.isTransit) {
      const pi = placeStops().indexOf(s);
      if (pi >= 0) state.placeIndex = pi;
    }
    flipAndUpdate(() => {
      renderDayTabs();
      renderHeroPhone();
      renderLive();
      renderPlaces();
    });
  });

  $('#langToggle').addEventListener('click', () => {
    state.lang = state.lang === 'ko' ? 'en' : 'ko';
    $('#langToggle').textContent = state.lang === 'ko' ? '한국어 / EN' : 'EN / 한국어';
    renderPlaces();
  });

  const menuBtn = $('#menuBtn');
  const mobileNav = $('#mobileNav');
  menuBtn.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('is-open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  $$('.mobile-link').forEach(a => {
    a.addEventListener('click', () => mobileNav.classList.remove('is-open'));
  });
}

/* ═══════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  state.stopIndex = TOURS['ny-washington'].stops.findIndex(s => s.day === 2);
  render();
  initScrollReveal();
  initTilt();
  initSwipe();
  initScrollShadow();
  bindEvents();
});
