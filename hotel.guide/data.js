// ========================================
// 호텔 기본 정보와 코스 분류
// ========================================

window.GUIDE_DATA = {
  hotel: {
    name: "ARBAN HOTEL",
    title: "서면 한바퀴",

    // 대표 이미지 주소
    cover: "../image/busan.webp",

    // 캐릭터 이미지 주소
    characters: {
      ari: "../image/아리_01.webp".normalize("NFD"),
      ru: "../image/루_07.webp".normalize("NFD")
    }
  },

  categories: [
    {
      id: "food",
      name: "맛집",
      en: "TASTE",
      guide: "ari",
      guideName: "아리",
      text: "정말 맛있는 곳으로 골라봤어요!",
      description: "든든한 한 끼부터 특별한 한 접시까지",
      color: "#dceff8",

      // 맛집 전체 모음집 링크
      naverCollectionUrl: "https://naver.me/F2LXMLsg",
      googleCollectionUrl: "https://maps.app.goo.gl/BmC733TArB85pjph6?g_st=ac"
    },

    {
      id: "cafe",
      name: "카페",
      en: "COFFEE",
      guide: "ari",
      guideName: "아리",
      text: "오늘은 어디서 달콤한 쉼을 가질까요?",
      description: "커피 한 잔과 함께 쉬어가는 시간",
      color: "#edf7fb",

      // 카페 전체 모음집 링크
      naverCollectionUrl: "https://naver.me/5dhzJhk3",
      googleCollectionUrl: "https://maps.app.goo.gl/yx1goZWhbkN45hRn7?g_st=ac"
    },

    {
      id: "sights",
      name: "관광·체험",
      en: "EXPLORE",
      guide: "ru",
      guideName: "루",
      text: "우리 함께 새로운 모습을 발견해볼까요?",
      description: "걷고, 보고, 경험하는 서면",
      color: "#d4e7f1",

      // 관광·체험 전체 모음집 링크
      naverCollectionUrl: "https://naver.me/GdTM8Tfl",
      googleCollectionUrl: "https://maps.app.goo.gl/RD8Khtz3G7ZpQEiR7?g_st=ac"
    },

    {
      id: "shopping",
      name: "쇼핑",
      en: "SHOP",
      guide: "ru",
      guideName: "루",
      text: "여행의 추억을 하나 골라볼까요?",
      description: "취향에 맞는 작은 발견",
      color: "#e6f1f7",

      // 쇼핑 전체 모음집 링크
      naverCollectionUrl: "https://naver.me/FfsyjsUm",
      googleCollectionUrl: "https://maps.app.goo.gl/nw2QMAA1JaKz3Buu8?g_st=ac"
    }
  ],

  places: []
};

// ========================================
// 실제 장소 정보를 입력하는 부분
//
// 각 { }가 장소 한 곳입니다.
//
// name: 장소 이름
// subtitle: 목록에 보이는 짧은 소개
// address: 주소
// distance: "도보 5분"처럼 입력
// description: 상세 소개
// image: 대표 사진, 예: "assets/cafe-01.jpg"
// detailImage: 메뉴 또는 추가 사진
// naverUrl: 해당 장소의 네이버 지도 링크
// googleUrl: 해당 장소의 구글 지도 링크
//
// 필요한 항목을 추가해서 적을 수 있습니다.
// 적지 않은 항목은 아래에서 빈 값으로 준비합니다.
// ========================================

const foodPlaces = [
  {
    "name": "향택 전포점",
    "naverUrl": "https://map.naver.com/p/entry/place/2005071831",
    "googleUrl": "https://maps.app.goo.gl/PXG2a6xwXbbNUBKQ8?g_st=ac",
    "subtitle": "한국식 집밥의 정감 있는 한 끼",
    "speech": "육회비빔밥·곤드레밥·갈비 등 메뉴가 전반적으로 한국식 집밥 느낌이라 한국의 정감 있는 한식을 경험할 수 있어요.",
    "description": "한국식 집밥의 정감 있는 한 끼.",
    "hours": "매일 11:00 ~ 20:00\n브레이크타임 15:30 ~ 17:00\n라스트오더 15:00 / 19:30",
    "distance": "도보 16분",
    "tags": [
      "맛집"
    ],
    "source": "말풍선.pdf",
    "guide": "ari",
    "characterImage": "../image/아리_01.webp",
    "previousHours": "11:00~20:00 / 브레이크타임 15:30~17:00 / 라스트오더 15:00·19:30",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 서전로 42-1 1층",
    "mapVerifiedAt": "2026-09-25",
    "image": "../places/향택_01.webp",
    "heroImage": "../places/향택_02.webp",
    "detailImage": "",
    "cutoutImage": ""
  },
  {
    "name": "송정3대국밥",
    "naverUrl": "https://map.naver.com/p/entry/place/11855738",
    "googleUrl": "https://maps.app.goo.gl/L4d4nnYZffhAHWYv8?g_st=ac",
    "subtitle": "부산 로컬 돼지국밥과 수육백반",
    "speech": "부산 대표 음식인 돼지국밥과 수육백반·따로국밥을 맛볼 수 있는 부산 로컬 음식이에요.",
    "description": "부산 로컬 돼지국밥과 수육백반.",
    "hours": "24시간 영업",
    "distance": "도보 3분",
    "tags": [
      "맛집"
    ],
    "source": "말풍선.pdf",
    "guide": "ari",
    "characterImage": "../image/아리_02.webp",
    "previousHours": "24시간 영업",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 서면로68번길 33",
    "mapVerifiedAt": "2026-09-25",
    "image": "../places/송정3대국밥_01.webp",
    "heroImage": "../places/송정3대국밥_02.webp",
    "detailImage": ""
  },
  {
    "name": "기장손칼국수",
    "naverUrl": "https://map.naver.com/p/entry/place/20601429",
    "googleUrl": "https://maps.app.goo.gl/MnFKakzhSC9uQwcg8?g_st=ac",
    "subtitle": "수제 면발과 깊은 국물의 손칼국수",
    "speech": "쫄깃한 수제 면발과 깊은 국물이 매력적인 가성비 손칼국수 맛집이에요.",
    "description": "수제 면발과 깊은 국물의 손칼국수.",
    "hours": "매일 09:00 ~ 20:00\n라스트오더 19:30",
    "distance": "도보 2분",
    "tags": [
      "맛집"
    ],
    "source": "말풍선.pdf",
    "guide": "ari",
    "characterImage": "../image/아리_02.webp",
    "previousHours": "매일 09:00~21:00 / 라스트오더 19:30",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 서면로 56",
    "mapVerifiedAt": "2026-09-25",
    "image": "../places/기장칼국수_01.webp",
    "heroImage": "../places/기장칼국수_02.webp",
    "detailImage": ""
  },
  {
    "name": "장인닭갈비 서면점",
    "naverUrl": "https://map.naver.com/p/entry/place/2027927993",
    "googleUrl": "https://maps.app.goo.gl/rbE88FwDFQkCsihz6?g_st=ac",
    "subtitle": "푸짐하게 즐기는 양념 닭갈비",
    "speech": "부드러운 닭고기와 맛있는 양념의 닭갈비를 푸짐하게 즐길 수 있어요.",
    "description": "푸짐하게 즐기는 양념 닭갈비.",
    "hours": "매일 11:00 ~ 23:00\n라스트오더 22:10",
    "distance": "도보 10분",
    "tags": [
      "맛집"
    ],
    "source": "말풍선.pdf",
    "guide": "ari",
    "characterImage": "../image/아리_01.webp",
    "previousHours": "매일 11:00~23:00",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 중앙대로692번길 46 1층",
    "mapVerifiedAt": "2026-09-25",
    "image": "../places/장인닭갈비_01.webp",
    "heroImage": "../places/장인닭갈비_02.webp",
    "detailImage": ""
  },
  {
    "name": "소장각 서면본점",
    "naverUrl": "https://map.naver.com/p/entry/place/1214946241",
    "googleUrl": "https://maps.app.goo.gl/gSLgGCfgK74ndjLJ9",
    "subtitle": "특제소스와 함께 즐기는 소갈비",
    "speech": "신선한 소갈비와 특제소스, 마늘폭탄 소갈비살 등을 맛볼 수 있는 소고기 맛집이에요.",
    "description": "특제소스와 함께 즐기는 소갈비.",
    "hours": "매일 15:20 ~ 23:00",
    "distance": "도보 16분",
    "tags": [
      "맛집"
    ],
    "source": "말풍선.pdf",
    "guide": "ari",
    "characterImage": "../image/아리_01.webp",
    "previousHours": "매일 15:20~23:00",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 동천로95번길 4-1 1층",
    "mapVerifiedAt": "2026-09-25",
    "image": "../places/소장각_01.webp",
    "heroImage": "../places/소장각_02.webp",
    "detailImage": ""
  },
  {
    "name": "느린마을양조장 부산서면점",
    "naverUrl": "https://map.naver.com/p/entry/place/1091459341",
    "googleUrl": "https://maps.app.goo.gl/pfdKtyphjPwCMkFi9",
    "subtitle": "생막걸리와 다양한 한식 안주",
    "speech": "생막걸리와 치즈감자전·낙곱새볶음 등 다양한 한식 안주를 즐길 수 있는 술집이에요!",
    "description": "생막걸리와 다양한 한식 안주.",
    "hours": "월~금 15:00 ~ 24:00\n토·일 14:00 ~ 24:00\n라스트오더 23:00",
    "distance": "도보 3분",
    "tags": [
      "맛집"
    ],
    "source": "말풍선.pdf",
    "guide": "ari",
    "characterImage": "../image/아리_09.webp",
    "previousHours": "평일 15:00~24:00 / 주말 14:00~24:00 / 라스트오더 23:00",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 가야대로784번길 46-9 1층",
    "mapVerifiedAt": "2026-09-25",
    "image": "../places/느린마을양조장_01.webp",
    "heroImage": "../places/느린마을양조장_02.webp",
    "detailImage": "",
    "cutoutImage": ""
  },
  {
    "name": "서면개금밀면",
    "subtitle": "살얼음 육수로 시원하게 즐기는 밀면",
    "speech": "살얼음 육수와 쫄깃한 면발이 어우러진 부산식 밀면을 맛볼 수 있어요.",
    "description": "살얼음 육수로 시원하게 즐기는 밀면.",
    "hours": "5~8월 09:00 ~ 22:00\n9~4월 09:30 ~ 21:00",
    "distance": "도보 3분",
    "tags": [
      "맛집"
    ],
    "source": "말풍선.pdf",
    "guide": "ari",
    "characterImage": "../image/아리_02.webp",
    "previousHours": "매일 11:00~19:40",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 서면로68번길 39",
    "naverUrl": "https://map.naver.com/p/entry/place/19827904",
    "mapVerifiedAt": "2026-09-25",
    "googleUrl": "https://maps.app.goo.gl/1YYkEy3qkw4PaKWr6",
    "image": "../places/개금밀면_01.webp",
    "heroImage": "../places/개금밀면_02.webp",
    "detailImage": ""
  },
  {
    "name": "물찬제비",
    "subtitle": "한식과 양식을 조합한 퓨전 메뉴",
    "speech": "떡볶이·대창파스타·갈비초밥 등 한식과 양식을 색다르게 조합한 메뉴가 있어요.",
    "description": "한식과 양식을 조합한 퓨전 메뉴.",
    "hours": "매일 11:30 ~ 21:30\n평일 브레이크타임 15:30 ~ 17:00\n주말 브레이크타임 16:00 ~ 17:00\n평일 라스트오더 14:20 / 20:20\n주말 라스트오더 14:50 / 20:20",
    "distance": "도보 13분",
    "tags": [
      "맛집"
    ],
    "source": "말풍선.pdf",
    "guide": "ari",
    "characterImage": "../image/아리_01.webp",
    "previousHours": "매일 11:30~21:30 / 브레이크타임 평일 15:30~17:00·주말 16:00~17:00",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 전포대로209번길 20 2층",
    "naverUrl": "https://map.naver.com/p/entry/place/1662890332",
    "mapVerifiedAt": "2026-09-25",
    "googleUrl": "https://maps.app.goo.gl/zdsw8hLxA3RP6ecy7",
    "hoursBasis": "평소 운영시간: 지도 일반 시간과 기존 제공 자료를 함께 반영",
    "image": "../places/물찬제비_01.webp",
    "heroImage": "../places/물찬제비_02.webp",
    "detailImage": ""
  },
  {
    "name": "맛찬들왕소금구이 서면점",
    "subtitle": "직접 구워주는 한국식 삼겹살",
    "speech": "고기를 직접 구워주는 곳으로 맛있는 한국식 삼겹살을 편하게 즐길 수 있어요.",
    "description": "직접 구워주는 한국식 삼겹살.",
    "hours": "매일 11:30 ~ 23:00",
    "distance": "도보 4분",
    "tags": [
      "맛집"
    ],
    "source": "말풍선.pdf",
    "guide": "ari",
    "characterImage": "../image/아리_02.webp",
    "previousHours": "매일 11:30~23:00 / 라스트오더 22:00",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 중앙대로691번가길 24-3",
    "naverUrl": "https://map.naver.com/p/entry/place/32738998",
    "mapVerifiedAt": "2026-09-25",
    "googleUrl": "https://maps.app.goo.gl/FBhDz2HUU3FrnQDw8",
    "image": "../places/맛찬들소금구이_01.webp",
    "heroImage": "../places/맛찬들소금구이_02.webp",
    "detailImage": ""
  },
  {
    "name": "1984이바구밀면 서면점",
    "subtitle": "밀면과 국밥을 함께 즐기는 한 끼",
    "speech": "부산 대표 음식인 밀면과 국밥을 한곳에서 함께 맛볼 수 있어요.",
    "description": "밀면과 국밥을 함께 즐기는 한 끼.",
    "hours": "24시간 영업 · 연중무휴",
    "distance": "도보 5분",
    "tags": [
      "맛집"
    ],
    "source": "말풍선.pdf",
    "guide": "ari",
    "characterImage": "../image/아리_02.webp",
    "previousHours": "24시간 영업 / 연중무휴",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 서면로68번길 15 1층 101-B호",
    "naverUrl": "https://map.naver.com/p/entry/place/2041272531",
    "mapVerifiedAt": "2026-09-25",
    "googleUrl": "https://maps.app.goo.gl/Hy4BcWDJRvwzouRf8",
    "image": "../places/이바구밀면_01.webp",
    "heroImage": "../places/이바구밀면_02.webp",
    "detailImage": ""
  },
  {
    "name": "그집곱도리탕 서면점",
    "subtitle": "매콤하고 푸짐한 곱도리탕",
    "speech": "매콤하고 푸짐한 곱도리탕으로 제대로 된 한국식 한 끼를 즐길 수 있어요.",
    "description": "매콤하고 푸짐한 곱도리탕.",
    "hours": "월~토 11:00 ~ 21:20\n브레이크타임 15:00 ~ 17:00\n일요일 정기휴무",
    "distance": "도보 12분",
    "tags": [
      "맛집"
    ],
    "source": "말풍선.pdf",
    "guide": "ari",
    "characterImage": "../image/아리_01.webp",
    "previousHours": "11:00~21:20 / 브레이크타임 15:00~17:00",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 동천로107번길 17 1층",
    "naverUrl": "https://map.naver.com/p/entry/place/1393736982",
    "mapVerifiedAt": "2026-09-25",
    "googleUrl": "https://maps.app.goo.gl/vgQQHrBSTrqd1rWE7",
    "image": "../places/그집곱도리탕_01.webp",
    "heroImage": "../places/그집곱도리탕_02.webp",
    "detailImage": ""
  }
];

const cafePlaces = [
  {
    "name": "샤빙 서면점",
    "naverUrl": "https://map.naver.com/p/entry/place/1815540015",
    "googleUrl": "https://maps.app.goo.gl/Aq74d4UX53fHM46fA?g_st=ac",
    "subtitle": "과일빙수로 즐기는 달콤한 휴식",
    "speech": "망고치즈·멜론·수박 등 한국식 과일빙수를 즐길 수 있는 아늑한 카페예요.",
    "description": "과일빙수로 즐기는 달콤한 휴식.",
    "hours": "월~목 13:00 ~ 다음 날 01:00\n금~일 13:00 ~ 다음 날 02:00\n월~목 라스트오더 00:50\n금~일 라스트오더 01:50",
    "distance": "도보 약 20분",
    "tags": [
      "카페"
    ],
    "source": "말풍선.pdf",
    "guide": "ari",
    "characterImage": "../image/아리_02.webp",
    "previousHours": "월~목 13:00~01:00·금~일 13:00~02:00",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 동성로71번길 32 201호",
    "mapVerifiedAt": "2026-09-25",
    "hoursBasis": "평소 운영시간: 지도 일반 시간과 기존 제공 자료를 함께 반영",
    "image": "../places/샤빙_01.webp",
    "heroImage": "../places/샤빙_02.webp",
    "detailImage": ""
  },
  {
    "name": "블랙업커피 서면본점",
    "naverUrl": "https://map.naver.com/p/entry/place/38264566",
    "googleUrl": "https://maps.app.goo.gl/wLToY87mtSvyfcYj6?g_st=ac",
    "subtitle": "해수염커피와 베이커리",
    "speech": "시그니처 해수염커피와 베이커리·케이크를 즐길 수 있는 대형 카페예요.",
    "description": "해수염커피와 베이커리.",
    "hours": "매일 09:00 ~ 22:00",
    "distance": "도보 7분",
    "tags": [
      "카페"
    ],
    "source": "말풍선.pdf",
    "guide": "ari",
    "characterImage": "../image/아리_09.webp",
    "previousHours": "09:00~22:00",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 서전로10번길 41",
    "mapVerifiedAt": "2026-09-25",
    "image": "../places/블랙업커피_01.webp",
    "heroImage": "../places/블랙업커피_02.webp",
    "detailImage": ""
  },
  {
    "name": "차마당",
    "naverUrl": "https://map.naver.com/p/entry/place/20341338",
    "googleUrl": "https://maps.app.goo.gl/M2SzW4EpfipgSwP48?g_st=ac",
    "subtitle": "전통차와 수제 양갱",
    "speech": "대추차·쌍화차와 수제 양갱을 맛볼 수 있는 전통차 카페예요.",
    "description": "전통차와 수제 양갱.",
    "hours": "월~토 11:00 ~ 22:30\n일요일 12:00 ~ 18:00",
    "distance": "도보 12분",
    "tags": [
      "카페"
    ],
    "source": "말풍선.pdf",
    "guide": "ari",
    "characterImage": "../image/아리_09.webp",
    "previousHours": "월~토 11:00~22:30·일 12:00~18:00",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 서면문화로 20 2층",
    "mapVerifiedAt": "2026-09-25",
    "image": "../places/차마당_01.webp",
    "heroImage": "../places/차마당_02.webp",
    "detailImage": ""
  },
  {
    "name": "연의양과",
    "naverUrl": "https://map.naver.com/p/entry/place/1264183233",
    "googleUrl": "https://maps.app.goo.gl/cC6j15DLtjSCcYWdA?g_st=ac",
    "subtitle": "망고빙수와 에그타르트",
    "speech": "망고빙수와 에그타르트가 인기인 아늑한 디저트 카페.",
    "description": "망고빙수와 에그타르트.",
    "hours": "매일 11:00 ~ 22:00\n라스트오더 21:45\n연중무휴",
    "distance": "도보 13분",
    "tags": [
      "카페"
    ],
    "source": "말풍선.pdf",
    "guide": "ari",
    "characterImage": "../image/아리_01.webp",
    "previousHours": "11:00~22:00 / 라스트오더 21:45",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 동천로 56 1층",
    "mapVerifiedAt": "2026-09-25",
    "image": "../places/연의양과_01.webp",
    "heroImage": "../places/연의양과_02.webp",
    "detailImage": "",
    "cutoutImage": ""
  },
  {
    "name": "카페벽돌",
    "naverUrl": "https://map.naver.com/p/entry/place/1924108995",
    "googleUrl": "https://maps.app.goo.gl/TaJyzfZGwk2wqRni7?g_st=ac",
    "subtitle": "시그니처 커피와 다양한 디저트",
    "speech": "에스프레소 듀엣·피스타치오 슈패너와 다양한 디저트를 즐길 수 있는 대형 카페예요.",
    "description": "시그니처 커피와 다양한 디저트.",
    "hours": "월·수·목·일 10:30 ~ 21:00\n금·토 10:30 ~ 22:00\n월·수·목·일 라스트오더 20:30\n금·토 라스트오더 21:30\n화요일 정기휴무",
    "distance": "도보 1분",
    "tags": [
      "카페"
    ],
    "source": "말풍선.pdf",
    "guide": "ari",
    "characterImage": "../image/아리_09.webp",
    "previousHours": "월·목·일 10:30~21:00·금·토 10:30~22:00 / 화요일 휴무",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 서면로 46 2층~5층",
    "mapVerifiedAt": "2026-09-25",
    "image": "../places/카페벽돌_01.webp",
    "heroImage": "../places/카페벽돌_02.webp",
    "detailImage": ""
  },
  {
    "name": "모던테이블",
    "naverUrl": "https://map.naver.com/p/entry/place/37452342",
    "googleUrl": "https://maps.app.goo.gl/W3mPpPh8oFnkBLaH8?g_st=ac",
    "subtitle": "와플과 케이크, 편안한 소파 좌석",
    "speech": "와플·케이크 등 다양한 디저트와 편안한 소파 좌석을 갖춘 카페예요.",
    "description": "와플과 케이크, 편안한 소파 좌석.",
    "hours": "매일 12:00 ~ 23:00\n라스트오더 22:00",
    "distance": "도보 11분",
    "tags": [
      "카페"
    ],
    "source": "말풍선.pdf",
    "guide": "ari",
    "characterImage": "../image/아리_01.webp",
    "previousHours": "12:00~23:00 / 라스트오더 22:00",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 중앙대로680번길 45-9 3층",
    "mapVerifiedAt": "2026-09-25",
    "image": "../places/모던테이블_01.webp",
    "heroImage": "../places/모던테이블_02.webp",
    "detailImage": ""
  },
  {
    "name": "히떼 로스터리",
    "naverUrl": "https://map.naver.com/p/entry/place/1505741858",
    "googleUrl": "https://maps.app.goo.gl/jRSu52Wi2WFi7jig8?g_st=ac",
    "subtitle": "원두를 골라 즐기는 커피",
    "speech": "취향에 맞는 원두를 고르고 커피와 디저트를 즐길 수 있어요.",
    "description": "원두를 골라 즐기는 커피.",
    "hours": "매일 10:00 ~ 20:00\n라스트오더 19:30",
    "distance": "도보 22분",
    "tags": [
      "카페"
    ],
    "source": "말풍선.pdf",
    "guide": "ari",
    "characterImage": "../image/아리_09.webp",
    "previousHours": "10:00~20:00 / 라스트오더 19:30",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 동성로 59",
    "mapVerifiedAt": "2026-09-25",
    "hoursBasis": "평소 운영시간: 지도 일반 시간과 기존 제공 자료를 함께 반영",
    "image": "../places/히떼로스터리_01.webp",
    "heroImage": "../places/히떼로스터리_02.webp",
    "detailImage": ""
  },
  {
    "name": "커피스가모 인 서면",
    "naverUrl": "https://map.naver.com/p/entry/place/1949452103",
    "googleUrl": "https://maps.app.goo.gl/JERBa4jHw8SgXY4R6?g_st=ac",
    "subtitle": "커피부터 브런치까지",
    "speech": "깔끔한 커피와 브런치·파스타·리조또까지 함께 즐길 수 있는 카페예요.",
    "description": "커피부터 브런치까지.",
    "hours": "월~토 10:30 ~ 21:30\n일요일 10:30 ~ 21:00\n월~토 라스트오더 21:00\n일요일 라스트오더 20:30",
    "distance": "도보 12분",
    "tags": [
      "카페"
    ],
    "source": "말풍선.pdf",
    "guide": "ari",
    "characterImage": "../image/아리_01.webp",
    "previousHours": "10:30~21:30 / 라스트오더 21:00",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 가야대로755번길 23",
    "mapVerifiedAt": "2026-09-25",
    "image": "../places/커피스가모_01.webp",
    "heroImage": "../places/커피스가모_02.webp",
    "detailImage": "",
    "cutoutImage": ""
  },
  {
    "name": "수비다",
    "subtitle": "다양한 맛의 에그타르트",
    "speech": "오리지널부터 솔티카라멜·옥수수까지 다양한 에그타르트가 매력적인 카페예요.",
    "description": "다양한 맛의 에그타르트.",
    "hours": "매일 11:30 ~ 21:00\n임시휴무는 인스타그램 별도 공지",
    "distance": "도보 23분",
    "tags": [
      "카페"
    ],
    "source": "말풍선.pdf",
    "guide": "ari",
    "characterImage": "../image/아리_02.webp",
    "previousHours": "매일11:30~22:00",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 전포대로186번길 36-1 1층",
    "naverUrl": "https://map.naver.com/p/entry/place/2040912509",
    "mapVerifiedAt": "2026-09-25",
    "googleUrl": "https://maps.app.goo.gl/JKZi9KfrkbQ2e4eR8",
    "image": "../places/수비다_01.webp",
    "heroImage": "../places/수비다_02.webp",
    "detailImage": ""
  },
  {
    "name": "쉽커피",
    "subtitle": "큰 창이 있는 조용한 카페",
    "speech": "큰 창과 넓고 조용한 공간에서 다양한 디저트와 음료를 즐길 수 있는 카페예요.",
    "description": "큰 창이 있는 조용한 카페.",
    "hours": "매일 09:00 ~ 22:00",
    "distance": "도보 20분",
    "tags": [
      "카페"
    ],
    "source": "말풍선.pdf",
    "guide": "ari",
    "characterImage": "../image/아리_04.webp",
    "previousHours": "매일 09:00~22:00",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 서전로47번길 51",
    "naverUrl": "https://map.naver.com/p/entry/place/1556530808",
    "mapVerifiedAt": "2026-09-25",
    "googleUrl": "https://maps.app.goo.gl/cvw3oBzH6bYjEmXr6",
    "image": "../places/쉽_01.webp",
    "heroImage": "../places/쉽_02.webp",
    "detailImage": "",
    "cutoutImage": ""
  },
  {
    "name": "어퍼이스트베이커리",
    "subtitle": "매일 만나는 빵과 디저트",
    "speech": "매일 다양한 빵과 디저트를 만나볼 수 있는 베이커리 카페예요.",
    "description": "매일 만나는 빵과 디저트.",
    "hours": "매일 09:00 ~ 21:00\n라스트오더 20:30",
    "distance": "도보 15분",
    "tags": [
      "카페"
    ],
    "source": "말풍선.pdf",
    "guide": "ari",
    "characterImage": "../image/아리_01.webp",
    "previousHours": "매일 09:00~21:00 / 라스트오더 20:30",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 서전로46번길 62-14 2층",
    "naverUrl": "https://map.naver.com/p/entry/place/1427966874",
    "mapVerifiedAt": "2026-09-25",
    "googleUrl": "https://maps.app.goo.gl/engiN1V1PXi4XdFG9",
    "image": "../places/어퍼스트베이커리_01.webp",
    "heroImage": "../places/어퍼스트베이커리_02.webp",
    "detailImage": ""
  },
  {
    "name": "전포 디베르티티",
    "subtitle": "토스트와 아이스크림 디저트",
    "speech": "토스트·아이스크림 등 달콤한 디저트와 다양한 음료를 즐길 수 있는 카페예요.",
    "description": "토스트와 아이스크림 디저트.",
    "hours": "수~일 11:30 ~ 21:00\n월·화요일 정기휴무",
    "distance": "도보 23분",
    "tags": [
      "카페"
    ],
    "source": "말풍선.pdf",
    "guide": "ari",
    "characterImage": "../image/아리_02.webp",
    "previousHours": "매일 11:30~21:00",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 전포대로176번길 28 1층",
    "naverUrl": "https://map.naver.com/p/entry/place/1568701872",
    "mapVerifiedAt": "2026-09-25",
    "googleUrl": "https://maps.app.goo.gl/QhoEYkYeANrDWHLC7",
    "image": "../places/디베르티티_01.webp",
    "heroImage": "../places/디베르티티_02.webp",
    "detailImage": ""
  },
  {
    "name": "LASOOP",
    "naverUrl": "https://map.naver.com/p/entry/place/2043978569",
    "googleUrl": "https://maps.app.goo.gl/RsQaA8wiVwfF7sfu7?g_st=ac",
    "subtitle": "통유리창과 베이커리가 있는 카페",
    "speech": "넓은 2층 공간과 통유리창, 다양한 베이커리를 갖춘 대형 카페예요.",
    "description": "통유리창과 베이커리가 있는 카페.",
    "hours": "매일 09:00 ~ 다음 날 00:30\n라스트오더 00:00",
    "distance": "도보 12분",
    "tags": [
      "카페"
    ],
    "source": "말풍선.pdf",
    "guide": "ari",
    "characterImage": "../image/아리_09.webp",
    "previousHours": "매일 09:00~00:30",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 동천로 93",
    "mapVerifiedAt": "2026-09-25",
    "image": "../places/라숲_01.webp",
    "heroImage": "../places/라숲_02.webp",
    "detailImage": "",
    "cutoutImage": ""
  },
  {
    "name": "넉아웃",
    "naverUrl": "https://map.naver.com/p/entry/place/954654381",
    "googleUrl": "https://maps.app.goo.gl/64yKT2fkaCd2WZbp9?g_st=ac",
    "subtitle": "케이크와 빙수를 즐기는 3층 카페",
    "speech": "다양한 케이크와 빙수를 즐길 수 있는 감성적인 3층 규모 카페예요.",
    "description": "케이크와 빙수를 즐기는 3층 카페.",
    "hours": "월~금 12:00 ~ 24:00\n토·일 11:00 ~ 24:00\n라스트오더 23:00",
    "distance": "도보 12분",
    "tags": [
      "카페"
    ],
    "source": "말풍선.pdf",
    "guide": "ari",
    "characterImage": "../image/아리_01.webp",
    "previousHours": "매일 12:00~00:00",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 동천로 91-4",
    "mapVerifiedAt": "2026-09-25",
    "image": "../places/넉아웃_01.webp",
    "heroImage": "../places/넉아웃_02.webp",
    "detailImage": ""
  }
];

const sightsPlaces = [
  {
    "name": "옵젵상가 서면점",
    "naverUrl": "https://map.naver.com/p/entry/place/37153529",
    "googleUrl": "https://maps.app.goo.gl/mVCsYPu4buHJ48tc7?g_st=ac",
    "subtitle": "소품 구경과 나만의 키링 만들기",
    "speech": "귀여운 소품도 구경하고 직접 나만의 키링도 만들어봐요! 친구나 커플끼리 특별한 추억을 만들기 좋은 곳이에요.",
    "description": "소품 구경과 나만의 키링 만들기.",
    "hours": "매일 12:00 ~ 21:00",
    "distance": "도보 13분",
    "tags": [
      "관광·체험"
    ],
    "source": "말풍선.pdf",
    "guide": "ru",
    "characterImage": "../image/루_01.webp",
    "previousHours": "매일 12:00~21:00",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 전포대로209번길 11",
    "mapVerifiedAt": "2026-09-25",
    "image": "../places/옵젵상가_01.webp",
    "detailImage": "../places/옵젵상가_02.webp",
    "imageLabel": "간판·외관",
    "detailImageLabel": "내부 모습",
    "extraPhotos": []
  },
  {
    "name": "런닝맨 부산점",
    "naverUrl": "https://map.naver.com/p/entry/place/1620140708",
    "googleUrl": "https://maps.app.goo.gl/evqHTe2iJ2FAPNFh7?g_st=ac",
    "subtitle": "직접 즐기는 런닝맨 게임",
    "speech": "TV에서 보던 런닝맨 게임을 직접 체험해봐요! 친구나 가족과 신나게 경쟁하고 놀기 좋아요.",
    "description": "직접 즐기는 런닝맨 게임.",
    "hours": "매일 11:00 ~ 20:00\n입장마감 19:00",
    "distance": "도보 8분",
    "tags": [
      "관광·체험"
    ],
    "source": "말풍선.pdf",
    "guide": "ru",
    "characterImage": "../image/루_03.webp",
    "previousHours": "매일11:00~20:00 / 입장마감 19:00",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 중앙대로 672 삼정타워 10층",
    "mapVerifiedAt": "2026-09-25",
    "image": "../places/런닝맨_01.webp",
    "detailImage": "../places/런닝맨_02.webp",
    "imageLabel": "간판·외관",
    "detailImageLabel": "내부 모습",
    "extraPhotos": []
  },
  {
    "name": "짱오락실 부산서면점",
    "naverUrl": "https://map.naver.com/p/entry/place/1228244310",
    "googleUrl": "https://maps.app.goo.gl/g6w4wphZdJVbgBH97?g_st=ac",
    "subtitle": "레이싱부터 리듬게임까지",
    "speech": "레이싱·농구·리듬게임까지 신나는 게임이 한가득! 설명 없이도 쉽게 즐길 수 있어서 한국 오락실을 재미있게 체험해보고 싶다면 추천해요.",
    "description": "레이싱부터 리듬게임까지.",
    "hours": "월~목·일 10:00 ~ 다음 날 02:00\n금·토 10:00 ~ 다음 날 03:00",
    "distance": "도보 8분",
    "tags": [
      "관광·체험"
    ],
    "source": "말풍선.pdf",
    "guide": "ru",
    "characterImage": "../image/루_03.webp",
    "previousHours": "월~목·일 10:00~02:00 / 금·토 10:00~03:00",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 중앙대로692번길 16 1층",
    "mapVerifiedAt": "2026-09-25",
    "image": "../places/짱오락실_01.webp",
    "detailImage": "../places/짱오락실_02.webp",
    "imageLabel": "간판·외관",
    "detailImageLabel": "내부 모습",
    "extraPhotos": []
  },
  {
    "name": "레이저태그스포츠 서면점",
    "naverUrl": "https://map.naver.com/p/entry/place/2070088115",
    "googleUrl": "https://maps.app.goo.gl/aaWg7oVffcuqscCy8?g_st=ac",
    "subtitle": "함께 즐기는 실내 레이저태그",
    "speech": "친구·연인·가족과 팀을 나눠 레이저태그 한 판 해봐요! 실내에서 날씨 걱정 없이 색다른 스포츠를 즐길 수 있어요.",
    "description": "함께 즐기는 실내 레이저태그.",
    "hours": "월~목 13:00 ~ 22:00\n금요일 13:00 ~ 23:00\n토요일 11:00 ~ 23:00\n일요일 11:00 ~ 21:00",
    "distance": "도보 10분",
    "tags": [
      "관광·체험"
    ],
    "source": "말풍선.pdf",
    "guide": "ru",
    "characterImage": "../image/루_03.webp",
    "previousHours": "월~목 13:00~22:00 / 금 13:00~23:00 / 토 11:00~23:00 / 일 11:00~21:00",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 중앙대로692번길 39 2층",
    "mapVerifiedAt": "2026-09-25",
    "hoursBasis": "평소 운영시간: 지도 일반 시간과 기존 제공 자료를 함께 반영",
    "image": "../places/레이저태그스포츠_02.webp",
    "detailImage": "../places/레이저태그스포츠_01.webp",
    "imageLabel": "간판·외관",
    "detailImageLabel": "체험 안내",
    "extraPhotos": []
  },
  {
    "name": "KT&G 상상마당 부산",
    "subtitle": "영화·공연·전시를 만나는 문화공간",
    "speech": "영화·공연부터 전시·굿즈샵까지 볼거리가 가득한 복합문화공간이에요! 구경도 하고 쉬어가며 부산의 문화까지 함께 즐겨봐요.",
    "description": "영화·공연·전시를 만나는 문화공간.",
    "hours": "매일 08:00 ~ 22:00\n공간별 운영시간은 홈페이지에서 확인",
    "distance": "도보 1분",
    "tags": [
      "관광·체험"
    ],
    "source": "말풍선.pdf",
    "guide": "ru",
    "characterImage": "../image/루_08.webp",
    "previousHours": "매일 08:00~22:00",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 서면로 39",
    "naverUrl": "https://map.naver.com/p/entry/place/1028110767",
    "mapVerifiedAt": "2026-09-25",
    "googleUrl": "https://maps.app.goo.gl/Ec6VvhmRhC4qX6UE9",
    "image": "../places/상상마당_01.webp",
    "detailImage": "../places/상상마당_02.webp",
    "imageLabel": "간판·외관",
    "detailImageLabel": "내부 모습",
    "extraPhotos": []
  },
  {
    "name": "삼정타워",
    "subtitle": "쇼핑·영화·게임을 한 번에",
    "speech": "팝업스토어부터 쇼핑·영화·게임·굿즈까지 구경할 게 정말 많아요! 카페와 맛집도 있어서 하루 종일 이것저것 즐기기 좋아요.",
    "description": "쇼핑·영화·게임을 한 번에.",
    "hours": "월~목·일 11:00 ~ 22:00\n금·토 11:00 ~ 22:30",
    "distance": "도보 8분",
    "tags": [
      "관광·체험"
    ],
    "source": "말풍선.pdf",
    "guide": "ru",
    "characterImage": "../image/루_08.webp",
    "previousHours": "매일 11:00~22:00",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 중앙대로 672",
    "naverUrl": "https://map.naver.com/p/entry/place/1466615557",
    "mapVerifiedAt": "2026-09-25",
    "googleUrl": "https://maps.app.goo.gl/fdq4XwoHWNgxVJuX8",
    "hoursBasis": "평소 운영시간: 지도 일반 시간과 기존 제공 자료를 함께 반영",
    "image": "../places/삼정타워_01.webp",
    "detailImage": "../places/삼정타워_02.webp",
    "imageLabel": "간판·외관",
    "detailImageLabel": "야외 조형물",
    "extraPhotos": [],
    "cutoutImage": ""
  },
  {
    "name": "그리티스튜디오 서면점",
    "naverUrl": "https://map.naver.com/p/entry/place/2002143799",
    "googleUrl": "https://maps.app.goo.gl/tMxGqkJyXsBhK53T7",
    "subtitle": "사진으로 남기는 여행의 순간",
    "speech": "예쁜 소품을 들고 친구들과 찰칵! 단체사진도 찍고 예쁘게 보정해서 여행의 추억을 남겨봐요.",
    "description": "사진으로 남기는 여행의 순간.",
    "hours": "월·수~금 12:00 ~ 20:00\n토·일 11:00 ~ 20:00\n화요일 정기휴무",
    "distance": "도보 23분",
    "tags": [
      "관광·체험"
    ],
    "source": "말풍선.pdf",
    "guide": "ru",
    "characterImage": "../image/루_02.webp",
    "previousHours": "매일 12:00~20:00",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 서전로68번길 104 지하1층",
    "mapVerifiedAt": "2026-09-25",
    "hoursBasis": "평소 운영시간: 지도 일반 시간과 기존 제공 자료를 함께 반영",
    "image": "../places/그리티스튜디오_01.webp",
    "detailImage": "../places/그리티스튜디오_02.webp",
    "imageLabel": "간판·외관",
    "detailImageLabel": "촬영 예시",
    "extraPhotos": []
  },
  {
    "name": "마리앤쥬",
    "subtitle": "카페에서 만나는 다양한 동물",
    "speech": "강아지·고양이부터 아기돼지·카피바라·도마뱀까지 만나볼 수 있어요! 카페와 동물 체험을 한 번에 즐기는 이색 코스랍니다.",
    "description": "카페에서 만나는 다양한 동물.",
    "hours": "월~금 12:00 ~ 21:00\n토·일 11:00 ~ 21:00",
    "distance": "도보 11분",
    "tags": [
      "관광·체험"
    ],
    "source": "말풍선.pdf",
    "guide": "ru",
    "characterImage": "../image/루_02.webp",
    "previousHours": "매일 12:00~21:00",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 동천로 70 3층",
    "naverUrl": "https://map.naver.com/p/entry/place/1368239677",
    "mapVerifiedAt": "2026-09-25",
    "googleUrl": "https://maps.app.goo.gl/2sxaucjNCny4eCoh6",
    "hoursBasis": "평소 운영시간: 지도 일반 시간과 기존 제공 자료를 함께 반영",
    "image": "../places/마리앤쥬_02.webp",
    "detailImage": "../places/마리앤쥬_01.webp",
    "imageLabel": "동물 체험 공간",
    "detailImageLabel": "브랜드 안내 이미지",
    "extraPhotos": []
  },
  {
    "name": "반지더하기 서면점",
    "naverUrl": "https://map.naver.com/p/entry/place/1774163886",
    "googleUrl": "https://maps.app.goo.gl/NjKgfU5XYUzDGRoWA?g_st=ac",
    "subtitle": "내 손으로 만드는 기념 반지",
    "speech": "내 손으로 직접 반지를 만들어보는 건 어때요? 초보자도 쉽게 만들 수 있어서 친구나 연인 과 이야기하며 특별한 추억을 남기기 좋아요.",
    "description": "내 손으로 만드는 기념 반지.",
    "hours": "매일 10:00 ~ 20:00\n예약이 없는 날은 부정기 휴무 가능",
    "distance": "도보 11분",
    "tags": [
      "관광·체험"
    ],
    "source": "말풍선.pdf",
    "guide": "ru",
    "characterImage": "../image/루_01.webp",
    "previousHours": "매일 10:00~20:00",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 서전로 11-1 신전빌딩 4층 403호",
    "mapVerifiedAt": "2026-09-25",
    "image": "../places/반지더하기_01.webp",
    "detailImage": "../places/반지더하기_02.webp",
    "imageLabel": "반지 작품",
    "detailImageLabel": "내부 모습",
    "extraPhotos": [],
    "listingImage": "../places/반지더하기_02.webp"
  },
  {
    "name": "롯데백화점 부산본점",
    "naverUrl": "https://map.naver.com/p/entry/place/12133966",
    "googleUrl": "https://maps.app.goo.gl/StQ7FJ9daqGUc19W8",
    "subtitle": "백화점 쇼핑과 팝업스토어",
    "speech": "쇼핑부터 다양한 팝업스토어까지 구경거리가 가득해요! 어디부터 갈지 고민될 때 다양한 볼거리를 한 번에 만나볼 수 있어요.",
    "description": "백화점 쇼핑과 팝업스토어.",
    "hours": "월~목 10:30 ~ 20:00\n금요일 10:30 ~ 20:00\n토·일 10:30 ~ 20:30",
    "distance": "도보 4분",
    "tags": [
      "관광·체험"
    ],
    "source": "말풍선.pdf",
    "guide": "ru",
    "characterImage": "../image/루_07.webp",
    "previousHours": "매일 10:30~20:00",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 가야대로 772",
    "mapVerifiedAt": "2026-09-25",
    "hoursBasis": "평소 운영시간: 지도 일반 시간과 기존 제공 자료를 함께 반영",
    "image": "../places/롯데백화점_01.webp",
    "detailImage": "../places/롯데백화점_02.webp",
    "imageLabel": "건물 외관",
    "detailImageLabel": "내부 모습",
    "extraPhotos": []
  },
  {
    "name": "소마드로잉카페 부산서면점",
    "subtitle": "드로잉과 만들기로 남기는 추억",
    "speech": "드로잉은 물론 캔들·베이브릭·페인팅까지 직접 만들어볼 수 있어요! 사는 기념품보다 직접 만든 추억을 남기고 싶은 분께 딱이에요.",
    "description": "드로잉과 만들기로 남기는 추억.",
    "hours": "월~금 14:30 ~ 20:00\n토·일 13:30 ~ 21:00",
    "distance": "도보 7분",
    "tags": [
      "관광·체험"
    ],
    "source": "말풍선.pdf",
    "guide": "ru",
    "characterImage": "../image/루_01.webp",
    "previousHours": "매일 14:30~20:00",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 서전로10번길 61 쥬디스태화신관 5층 502호",
    "naverUrl": "https://map.naver.com/p/entry/place/1597299879",
    "mapVerifiedAt": "2026-09-25",
    "googleUrl": "https://maps.app.goo.gl/j5UCGZEuu5n6cch47",
    "hoursBasis": "평소 운영시간: 지도 일반 시간과 기존 제공 자료를 함께 반영",
    "image": "../places/소마드로잉카페_01.webp",
    "detailImage": "../places/소마드로잉카페_02.webp",
    "imageLabel": "메뉴 사진",
    "detailImageLabel": "내부 모습",
    "extraPhotos": [],
    "listingImage": "../places/소마드로잉카페_02.webp"
  }
];

const shoppingPlaces = [
  {
    "name": "오월상점 부산전포점",
    "naverUrl": "https://map.naver.com/p/entry/place/1105826579",
    "googleUrl": "https://maps.app.goo.gl/kHXn8jq8QcYQUSv66",
    "subtitle": "빈티지 감성의 소품과 선물",
    "speech": "귀여운 소품이랑 선물템이 한가득! 부산에서만 만날 수 있는 빈티지 감성도 구경해봐요.",
    "description": "빈티지 감성의 소품과 선물.",
    "hours": "매일 12:00 ~ 21:00\n평일 휴게시간 15:30 ~ 16:30",
    "distance": "도보 14분",
    "tags": [
      "쇼핑"
    ],
    "source": "말풍선.pdf",
    "guide": "ru",
    "characterImage": "../image/루_01.webp",
    "previousHours": "매일12:00~21:00 / 평일 브레이크타임 15:30~16:30",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 전포대로209번길 9 1층",
    "mapVerifiedAt": "2026-09-25",
    "image": "../places/오월상점_01.webp",
    "detailImage": "../places/오월상점_02.webp",
    "imageLabel": "간판·외관",
    "detailImageLabel": "내부 모습",
    "extraPhotos": []
  },
  {
    "name": "포셋 전포",
    "naverUrl": "https://map.naver.com/p/entry/place/1781101243",
    "googleUrl": "https://maps.app.goo.gl/w3gwEJXhQsmkWcBG6",
    "subtitle": "엽서와 카드로 남기는 여행의 기억",
    "speech": "예쁜 엽서와 카드를 골라서 직접 마음도 꾹꾹 담아볼 수 있어요! 여행 기념으로 하나 챙겨가면 딱이에요.",
    "description": "엽서와 카드로 남기는 여행의 기억.",
    "hours": "화~일 12:00 ~ 20:00\n월요일 정기휴무",
    "distance": "도보 15분",
    "tags": [
      "쇼핑"
    ],
    "source": "말풍선.pdf",
    "guide": "ru",
    "characterImage": "../image/루_02.webp",
    "previousHours": "매일 12:00~20:00 / 월요일 휴무",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 전포대로223번길 20 C동 202호",
    "mapVerifiedAt": "2026-09-25",
    "image": "../places/포셋전포_01.webp",
    "detailImage": "../places/포셋전포_02.webp",
    "imageLabel": "간판·외관",
    "detailImageLabel": "내부 모습",
    "extraPhotos": []
  },
  {
    "name": "BALANSA",
    "naverUrl": "https://map.naver.com/p/entry/place/1318502749",
    "googleUrl": "https://maps.app.goo.gl/qXrLJzLTpnrEDQXt5?g_st=ac",
    "subtitle": "패션과 음악 굿즈",
    "speech": "빈티지부터 스트릿 패션, 음악 굿즈까지 취향 저격 아이템이 가득해요! 유니크한 부산 감성을 찾는다면 살짝 들러보세요.",
    "description": "패션과 음악 굿즈.",
    "hours": "매일 12:00 ~ 19:00",
    "distance": "도보 16분",
    "tags": [
      "쇼핑"
    ],
    "source": "말풍선.pdf",
    "sourceHours": "매일 2:00~19:00",
    "guide": "ru",
    "characterImage": "../image/루_07.webp",
    "previousHours": "운영시간 확인 중",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 전포대로255번길 37 1층 (서면전포상가 C동)",
    "mapVerifiedAt": "2026-09-25",
    "image": "../places/발란사_01.webp",
    "detailImage": "../places/발란사_02.webp",
    "imageLabel": "간판·외관",
    "detailImageLabel": "상품 사진",
    "extraPhotos": [],
    "cutoutImage": ""
  },
  {
    "name": "띵스오브노트 전포점",
    "naverUrl": "https://map.naver.com/p/entry/place/1619970374",
    "googleUrl": "https://maps.app.goo.gl/cLGbEr5yXoJ87oDX9",
    "subtitle": "노트와 다이어리, 감각적인 문구",
    "speech": "예쁜 노트부터 다이어리까지 문구 구경하는 재미가 쏠쏠해요! 차분하고 감각적인 소품을 좋아한다면 추천해요.",
    "description": "노트와 다이어리, 감각적인 문구.",
    "hours": "매일 12:00 ~ 20:00",
    "distance": "도보 21분",
    "tags": [
      "쇼핑"
    ],
    "source": "말풍선.pdf",
    "guide": "ru",
    "characterImage": "../image/루_01.webp",
    "previousHours": "매일 12:00~20:00",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 서전로58번길 6 1층",
    "mapVerifiedAt": "2026-09-25",
    "image": "../places/띵스오브노트_01.webp",
    "detailImage": "../places/띵스오브노트_02.webp",
    "imageLabel": "간판·외관",
    "detailImageLabel": "내부 모습",
    "extraPhotos": []
  },
  {
    "name": "트윈에뚜왈",
    "naverUrl": "https://map.naver.com/p/entry/place/36700132",
    "googleUrl": "https://maps.app.goo.gl/22NH36hdTVfEHSeV6",
    "subtitle": "캐릭터·패션·인테리어 소품",
    "speech": "귀여운 캐릭터부터 옷·액세서리·인테리어 소품까지 골라보는 재미가 있어요! 톡톡 튀는 아이템을 찾는다면 들러보세요.",
    "description": "캐릭터·패션·인테리어 소품.",
    "hours": "월~금 12:00 ~ 20:00\n토·일 11:00 ~ 20:00\n부정기 휴무 가능",
    "distance": "도보 16분",
    "tags": [
      "쇼핑"
    ],
    "source": "말풍선.pdf",
    "guide": "ru",
    "characterImage": "../image/루_07.webp",
    "previousHours": "매일 12:00~20:00",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 전포동 676-30",
    "mapVerifiedAt": "2026-09-25",
    "hoursBasis": "평소 운영시간: 지도 일반 시간과 기존 제공 자료를 함께 반영",
    "image": "../places/트윈에뚜왈_01.webp",
    "detailImage": "../places/트윈에뚜왈_02.webp",
    "imageLabel": "간판·외관",
    "detailImageLabel": "내부 모습",
    "extraPhotos": []
  },
  {
    "name": "별한스푼",
    "naverUrl": "https://map.naver.com/p/entry/place/36936501",
    "googleUrl": "https://maps.app.goo.gl/hHiCt4thjEadDojk7",
    "subtitle": "피규어와 추억의 만화 아이템",
    "speech": "귀여운 캐릭터와 피규어, 추억의 만화 아이템까지 모여 있어요! 레트로 감성 좋아하는 친구라면 눈이 반짝할지도 몰라요.",
    "description": "피규어와 추억의 만화 아이템.",
    "hours": "월~금 12:00 ~ 20:00\n토·일 12:00 ~ 21:00",
    "distance": "도보 15분",
    "tags": [
      "쇼핑"
    ],
    "source": "말풍선.pdf",
    "guide": "ru",
    "characterImage": "../image/루_01.webp",
    "previousHours": "평일 12:00~20:00 주말 12:00~21:00",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 서전로46번길 62-4 1층",
    "mapVerifiedAt": "2026-09-25",
    "hoursBasis": "평소 운영시간: 지도 일반 시간과 기존 제공 자료를 함께 반영",
    "image": "../places/별한스푼_01.webp",
    "detailImage": "../places/별한스푼_02.webp",
    "imageLabel": "간판·외관",
    "detailImageLabel": "내부 모습",
    "extraPhotos": [
      {
        "src": "../places/별한스푼_03.webp",
        "label": "브랜드 일러스트"
      }
    ]
  },
  {
    "name": "아비베르컴퍼니",
    "subtitle": "가방부터 식기까지 다양한 소품",
    "speech": "가방·케이스·식기·모자까지 다양한 소품을 한 번에 구경할 수 있어요! 이것저것 구경하는 재미가 있는 큰 숍이에요.",
    "description": "가방부터 식기까지 다양한 소품.",
    "hours": "매일 11:00 ~ 23:00",
    "distance": "도보 12분",
    "tags": [
      "쇼핑"
    ],
    "source": "말풍선.pdf",
    "guide": "ru",
    "characterImage": "../image/루_07.webp",
    "previousHours": "매일 11:00~23:00",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 동천로 66 1층",
    "naverUrl": "https://map.naver.com/p/entry/place/1476065787",
    "mapVerifiedAt": "2026-09-25",
    "googleUrl": "https://maps.app.goo.gl/jkykWbK2yQBgWwsg8",
    "image": "../places/아비베르컴퍼니_01.webp",
    "detailImage": "../places/아비베르컴퍼니_02.webp",
    "imageLabel": "간판·외관",
    "detailImageLabel": "내부 모습",
    "extraPhotos": []
  },
  {
    "name": "메이드바이 서면",
    "subtitle": "문구와 생활 소품으로 고르는 기념품",
    "speech": "스티커·노트·다이어리부터 컵·캔들까지 귀여운 아이템이 가득해요! 소소한 기념품 찾고 있다면 여기서 하나 골라보세요.",
    "description": "문구와 생활 소품으로 고르는 기념품.",
    "hours": "매일 11:00 ~ 22:00",
    "distance": "도보 13분",
    "tags": [
      "쇼핑"
    ],
    "source": "말풍선.pdf",
    "guide": "ru",
    "characterImage": "../image/루_07.webp",
    "previousHours": "매일 11:00~22:00",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 전포대로199번길 34",
    "naverUrl": "https://map.naver.com/p/entry/place/1145467834",
    "mapVerifiedAt": "2026-09-25",
    "googleUrl": "https://maps.app.goo.gl/VHWt3EL98pmLWghY8",
    "image": "../places/메이드바이_01.webp",
    "detailImage": "../places/메이드바이_02.webp",
    "imageLabel": "간판·외관",
    "detailImageLabel": "내부 모습",
    "extraPhotos": []
  },
  {
    "name": "오브젝트 서면점",
    "subtitle": "알록달록한 문구와 개성 있는 소품",
    "speech": "알록달록한 문구와 개성 넘치는 소품을 구경하는 재미가 있어요! 부담 없이 둘러보다 마음에 쏙 드는 아이템을 찾아보세요.",
    "description": "알록달록한 문구와 개성 있는 소품.",
    "hours": "매일 12:00 ~ 21:00",
    "distance": "도보 16분",
    "tags": [
      "쇼핑"
    ],
    "source": "말풍선.pdf",
    "guide": "ru",
    "characterImage": "../image/루_01.webp",
    "previousHours": "매일 12:00~21:00",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 전포대로 203 1층",
    "naverUrl": "https://map.naver.com/p/entry/place/2088017373",
    "mapVerifiedAt": "2026-09-25",
    "googleUrl": "https://maps.app.goo.gl/itU6WSh9VmNKio5C6",
    "image": "../places/오브젝트_01.webp",
    "detailImage": "../places/오브젝트_02.webp",
    "imageLabel": "간판·외관",
    "detailImageLabel": "내부 모습",
    "extraPhotos": []
  },
  {
    "name": "피플 부산점",
    "subtitle": "한국의 캐주얼·스트릿 패션",
    "speech": "캐주얼부터 스트릿까지 요즘 한국 패션을 한눈에 구경할 수 있어요! 옷부터 액세서리까지 쇼핑하고 싶다면 들러보세요.",
    "description": "한국의 캐주얼·스트릿 패션.",
    "hours": "월~금 11:00 ~ 23:00\n토·일 11:00 ~ 다음 날 01:00",
    "distance": "도보 7분",
    "tags": [
      "쇼핑"
    ],
    "source": "말풍선.pdf",
    "guide": "ru",
    "characterImage": "../image/루_07.webp",
    "previousHours": "평일 11:00~23:00 주말 11:00~01:00",
    "mapSource": "네이버 지도",
    "address": "부산 부산진구 서전로10번길 61",
    "naverUrl": "https://map.naver.com/p/entry/place/1398083033",
    "mapVerifiedAt": "2026-09-25",
    "googleUrl": "https://maps.app.goo.gl/WpCYJXWy3EKGHyD26",
    "image": "../places/피플_01.webp",
    "detailImage": "../places/피플_02.webp",
    "imageLabel": "간판·외관",
    "detailImageLabel": "내부 모습",
    "extraPhotos": []
  }
];

// ========================================
// 입력한 장소 정보를 화면에 연결합니다.
// 아래 부분은 그대로 두세요.
// ========================================

// 상세 페이지: 짧은 추천과 기존 자료에서 정리한 주요 정보
const detailHighlights = {
  "food": [
    [
      "여행 중 한식이 생각날 때 들러보세요!",
      "육회비빔밥 · 곤드레밥 · 갈비"
    ],
    [
      "부산에서 국밥 한 그릇, 어떠세요?",
      "돼지국밥 · 수육백반 · 따로국밥"
    ],
    [
      "따뜻한 국물로 한 끼를 채워보세요!",
      "손칼국수"
    ],
    [
      "닭갈비를 함께 나눠 먹어봐요!",
      "양념 닭갈비"
    ],
    [
      "소갈비가 생각나는 날 들러보세요!",
      "소갈비 · 마늘폭탄 소갈비살"
    ],
    [
      "한식 안주와 막걸리를 함께 즐겨봐요!",
      "생막걸리 · 치즈감자전 · 낙곱새볶음"
    ],
    [
      "시원한 밀면으로 잠깐 쉬어가요!",
      "부산식 밀면"
    ],
    [
      "색다른 메뉴를 먹고 싶다면 들러보세요!",
      "떡볶이 · 대창파스타 · 갈비초밥"
    ],
    [
      "구워주는 삼겹살로 편하게 식사해요!",
      "삼겹살"
    ],
    [
      "밀면과 국밥 중 무엇이 당기나요?",
      "밀면 · 국밥"
    ],
    [
      "매콤한 한 끼가 생각날 때 추천해요!",
      "곱도리탕"
    ]
  ],
  "cafe": [
    [
      "과일빙수로 달콤하게 쉬어가요!",
      "망고치즈빙수 · 멜론빙수 · 수박빙수"
    ],
    [
      "이곳의 해수염커피를 만나보세요!",
      "해수염커피 · 베이커리 · 케이크"
    ],
    [
      "오늘은 커피 대신 전통차 어때요?",
      "대추차 · 쌍화차 · 수제 양갱"
    ],
    [
      "달콤한 디저트 시간을 가져봐요!",
      "망고빙수 · 에그타르트"
    ],
    [
      "커피와 디저트를 함께 골라봐요!",
      "에스프레소 듀엣 · 피스타치오 슈패너"
    ],
    [
      "디저트와 함께 잠깐 쉬어가요!",
      "와플 · 케이크"
    ],
    [
      "내 취향에 맞는 원두를 찾아봐요!",
      "커피 · 디저트"
    ],
    [
      "커피와 식사를 함께 즐겨봐요!",
      "커피 · 브런치 · 파스타 · 리조또"
    ],
    [
      "어떤 에그타르트가 마음에 드나요?",
      "오리지널 · 솔티카라멜 · 옥수수 에그타르트"
    ],
    [
      "창가 풍경과 함께 쉬어가요!",
      "디저트 · 음료"
    ],
    [
      "마음에 드는 빵을 골라봐요!",
      "빵 · 디저트"
    ],
    [
      "달콤한 휴식이 필요할 때 들러보세요!",
      "토스트 · 아이스크림 · 음료"
    ],
    [
      "베이커리와 함께 여유를 즐겨봐요!",
      "베이커리"
    ],
    [
      "케이크와 빙수 중 무엇을 고를까요?",
      "케이크 · 빙수"
    ]
  ],
  "sights": [
    [
      "나만의 키링으로 추억을 남겨봐요!",
      "소품 구경 · 키링 만들기"
    ],
    [
      "이번엔 우리가 게임의 주인공이에요!",
      "런닝맨 게임 체험"
    ],
    [
      "함께 게임 한 판 해볼까요?",
      "레이싱 · 농구 · 리듬게임"
    ],
    [
      "팀을 나눠 신나게 움직여봐요!",
      "실내 레이저태그"
    ],
    [
      "여행 중 문화 산책을 즐겨봐요!",
      "영화 · 공연 · 전시 · 굿즈샵"
    ],
    [
      "한곳에서 여러 즐길 거리를 만나봐요!",
      "쇼핑 · 영화 · 게임 · 카페"
    ],
    [
      "부산 여행의 한 장면을 남겨봐요!",
      "소품 촬영 · 단체사진 · 사진 보정"
    ],
    [
      "동물 친구들을 만나러 가볼까요?",
      "동물 체험 · 카페"
    ],
    [
      "직접 만든 반지로 여행을 기억해요!",
      "반지 만들기"
    ],
    [
      "마음에 드는 코너부터 둘러봐요!",
      "쇼핑 · 팝업스토어"
    ],
    [
      "직접 만드는 기념품은 어때요?",
      "드로잉 · 캔들 · 베어브릭 · 페인팅"
    ]
  ],
  "shopping": [
    [
      "여행을 기억할 작은 선물을 골라봐요!",
      "소품 · 선물"
    ],
    [
      "엽서에 여행의 마음을 담아봐요!",
      "엽서 · 카드"
    ],
    [
      "나만의 취향을 발견해봐요!",
      "빈티지 · 스트릿 패션 · 음악 굿즈"
    ],
    [
      "문구를 좋아한다면 들러보세요!",
      "노트 · 다이어리 · 문구"
    ],
    [
      "톡톡 튀는 아이템을 찾아봐요!",
      "캐릭터 상품 · 옷 · 액세서리 · 인테리어 소품"
    ],
    [
      "좋아하는 캐릭터를 찾아볼까요?",
      "캐릭터 상품 · 피규어 · 만화 아이템"
    ],
    [
      "여러 소품을 천천히 구경해봐요!",
      "가방 · 케이스 · 식기 · 모자"
    ],
    [
      "작은 기념품 하나 골라봐요!",
      "스티커 · 노트 · 다이어리 · 컵 · 캔들"
    ],
    [
      "마음에 드는 색과 모양을 찾아봐요!",
      "문구 · 소품"
    ],
    [
      "여행 중 새로운 스타일을 골라봐요!",
      "캐주얼 의류 · 스트릿 의류 · 액세서리"
    ]
  ]
};

function preparePlaces(category, items) {
  return items.map((item, index) => {
    return {
      id: `${category}-${index + 1}`,
      category: category,
      recommendation: detailHighlights[category][index][0],
      highlights: detailHighlights[category][index][1],
      introduction: item.speech ?? item.description ?? "",
      name: item.name,
      guide: item.guide ?? "",
      characterImage: item.characterImage ? item.characterImage.normalize("NFD") : "",
      subtitle: item.subtitle ?? "추천 장소를 소개합니다.",
      address: item.address ?? "",
      hours: item.hours ?? "",
      mapVerifiedAt: item.mapVerifiedAt ?? "",
      speech: item.speech ?? item.description ?? "이 장소의 상세 소개를 준비하고 있어요.",
      tags: item.tags ?? [],
      source: item.source ?? "",
      sourceHours: item.sourceHours ?? "",
      distance: item.distance ?? "",
      description:
        item.description ?? "이 장소의 상세 소개를 준비하고 있어요.",
      image: item.image ?? "",
      listingImage: item.listingImage ?? item.image ?? "",
      detailImage: item.detailImage ?? "",
      heroImage: item.heroImage ?? item.image ?? "",
      imageLabel: item.imageLabel ?? "사진",
      detailImageLabel: item.detailImageLabel ?? "추가 사진",
      extraPhotos: item.extraPhotos ?? [],
      cutoutImage: item.cutoutImage ?? "",
      naverUrl: item.naverUrl ?? "",
      googleUrl: item.googleUrl ?? ""
    };
  });
}

window.GUIDE_DATA.places = [
  ...preparePlaces("food", foodPlaces),
  ...preparePlaces("cafe", cafePlaces),
  ...preparePlaces("sights", sightsPlaces),
  ...preparePlaces("shopping", shoppingPlaces)
];

// 맞춤형 코스: 이름, 대사, 방문 순서와 이동 안내를 여기에서 수정하세요.
window.GUIDE_DATA.customCourses = [
  {
    "id": "together",
    "name": "같이 여행하는 코스",
    "guide": "ari",
    "guideName": "아리",
    "symbol": "♡",
    "summary": "맛있는 식사부터 셀프사진과 반지 만들기까지",
    "speech": "물찬제비에서 퓨전 한식을, 연의양과에서 달콤한 디저트를 즐겨봐요! 셀프사진과 커플 반지까지 함께 만들며 특별한 추억을 남겨보세요.",
    "description": "퓨전 한식과 디저트를 즐긴 뒤, 셀프사진으로 함께한 순간을 기록해요. 마지막에는 반지를 직접 만들며 여행의 추억을 남겨보세요.",
    "stops": [
      [
        "아르반호텔",
        ""
      ],
      [
        "물찬제비",
        "13분 · 762m"
      ],
      [
        "연의양과",
        "5분 · 324m"
      ],
      [
        "그리티스튜디오 서면점",
        "11분 · 641m"
      ],
      [
        "피플 부산점",
        "12분 · 811m"
      ],
      [
        "반지더하기 서면점",
        "6분 · 372m"
      ],
      [
        "아르반호텔",
        "11분 · 678m"
      ]
    ],
    "note": ""
  },
  {
    "id": "solo",
    "name": "혼자 여행하는 코스",
    "guide": "ari",
    "guideName": "아리",
    "symbol": "☕",
    "summary": "한식과 차 한 잔, 나만의 쇼핑 시간",
    "speech": "향택에서 한식을 먹고 차마당에서 여유를 즐겨봐요! 피플과 삼정타워에서는 한국의 패션과 쇼핑 문화를 경험할 수 있어요.",
    "description": "한식으로 식사를 시작하고, 한국의 옛 분위기를 느끼며 차를 마셔요. 거리를 걸으며 패션과 쇼핑을 즐기는, 한국 문화에 관심 있는 여행자를 위한 코스예요.",
    "stops": [
      [
        "아르반호텔",
        ""
      ],
      [
        "향택 전포점",
        "16분 · 992m"
      ],
      [
        "차마당",
        "15분 · 836m"
      ],
      [
        "피플 부산점",
        "12분 · 673m"
      ],
      [
        "삼정타워",
        "4분 · 286m"
      ],
      [
        "아르반호텔",
        "8분 · 376m"
      ]
    ],
    "note": ""
  },
  {
    "id": "rain",
    "name": "비 올 때 코스",
    "guide": "ru",
    "guideName": "루",
    "symbol": "☂",
    "summary": "칼국수·동물 체험·오락실·백화점",
    "speech": "따뜻한 칼국수로 배를 채우고, 동물 체험과 오락실도 즐겨봐요! 백화점 쇼핑까지 실내에서 알차게 보내는 코스예요.",
    "description": "따뜻한 칼국수로 식사하고, 동물 체험과 오락실에서 즐거운 시간을 보내요. 롯데백화점 쇼핑까지 대부분 실내에서 즐길 수 있어요.",
    "stops": [
      [
        "아르반호텔",
        ""
      ],
      [
        "기장손칼국수",
        "2분 · 162m"
      ],
      [
        "마리앤쥬",
        "8분 · 472m"
      ],
      [
        "짱오락실 부산서면점",
        "4분 · 245m"
      ],
      [
        "롯데백화점 부산본점",
        "11분 · 628m"
      ],
      [
        "아르반호텔",
        "3분 · 238m"
      ]
    ],
    "note": "장소 사이를 이동할 때는 야외를 지나갈 수 있어요."
  },
  {
    "id": "abandoju",
    "name": "아반도주와 함께하는 코스",
    "guide": "ru",
    "guideName": "루",
    "symbol": "▱",
    "summary": "서면시장 먹거리를 포장해 호텔에서 즐겨요",
    "speech": "서면시장에서 김밥과 만두, 한국식 통닭 등 시장 먹거리를 골라봐요! 포장한 음식은 호텔만의 막걸리, 아반도주와 함께 호텔에서 편안하게 즐겨보세요.",
    "description": "호텔 가까운 서면시장을 둘러보며 먹거리를 골라보세요. 김밥과 만두, 통닭을 포장하고 아반도주와 함께 호텔에서 편안하게 즐기는 코스예요.",
    "stops": [
      [
        "아르반호텔",
        ""
      ],
      [
        "서면시장 둘러보기",
        "2분 · 165m"
      ],
      [
        "큰손김밥",
        "시장 안 이동 · 약 1분 내외"
      ],
      [
        "시장 통만만정",
        "시장 안 이동 · 약 1분 내외"
      ],
      [
        "부산통닭",
        "시장 안 이동 · 약 1분 내외"
      ],
      [
        "아르반호텔",
        "3분 · 175m"
      ]
    ],
    "note": "다른 일정을 마친 뒤 서면시장에서 시작해도 좋아요. 시장 안 이동은 문서에 안내된 약 1분 내외를 기준으로 표시했어요."
  }
];
