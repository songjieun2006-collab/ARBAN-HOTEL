// ========================================
// 호텔 기본 정보와 코스 분류
// ========================================

window.GUIDE_DATA = {
  hotel: {
    name: "ARBAN HOTEL",
    title: "서면 한바퀴",

    // 대표 이미지 주소
    cover: "image/busan.png",

    // 캐릭터 이미지 주소
    characters: {
      ari: "image/아리_01.png".normalize("NFD"),
      ru: "image/루_07.png".normalize("NFD")
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
      naverCollectionUrl: "",
      googleCollectionUrl: ""
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
      naverCollectionUrl: "",
      googleCollectionUrl: ""
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
      naverCollectionUrl: "",
      googleCollectionUrl: ""
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
      naverCollectionUrl: "",
      googleCollectionUrl: ""
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
  { name: "추천 맛집 01" },
  { name: "추천 맛집 02" },
  { name: "추천 맛집 03" },
  { name: "추천 맛집 04" },
  { name: "추천 맛집 05" },
  { name: "추천 맛집 06" },
  { name: "추천 맛집 07" },
  { name: "추천 맛집 08" },
  { name: "추천 맛집 09" },
  { name: "추천 맛집 10" },
  { name: "추천 맛집 11" }
];

const cafePlaces = [
  { name: "추천 카페 01" },
  { name: "추천 카페 02" },
  { name: "추천 카페 03" },
  { name: "추천 카페 04" },
  { name: "추천 카페 05" },
  { name: "추천 카페 06" },
  { name: "추천 카페 07" },
  { name: "추천 카페 08" },
  { name: "추천 카페 09" },
  { name: "추천 카페 10" },
  { name: "추천 카페 11" },
  { name: "추천 카페 12" },
  { name: "추천 카페 13" },
  { name: "추천 카페 14" }
];

const sightsPlaces = [
  { name: "추천 관광·체험 01" },
  { name: "추천 관광·체험 02" },
  { name: "추천 관광·체험 03" },
  { name: "추천 관광·체험 04" },
  { name: "추천 관광·체험 05" },
  { name: "추천 관광·체험 06" },
  { name: "추천 관광·체험 07" },
  { name: "추천 관광·체험 08" },
  { name: "추천 관광·체험 09" },
  { name: "추천 관광·체험 10" },
  { name: "추천 관광·체험 11" }
];

const shoppingPlaces = [
  { name: "추천 쇼핑 01" },
  { name: "추천 쇼핑 02" },
  { name: "추천 쇼핑 03" },
  { name: "추천 쇼핑 04" },
  { name: "추천 쇼핑 05" },
  { name: "추천 쇼핑 06" },
  { name: "추천 쇼핑 07" },
  { name: "추천 쇼핑 08" },
  { name: "추천 쇼핑 09" },
  { name: "추천 쇼핑 10" },
 
];

// ========================================
// 입력한 장소 정보를 화면에 연결합니다.
// 아래 부분은 그대로 두세요.
// ========================================

function preparePlaces(category, items) {
  return items.map((item, index) => {
    return {
      id: `${category}-${index + 1}`,
      category: category,
      name: item.name,
      subtitle: item.subtitle ?? "추천 장소를 소개합니다.",
      address: item.address ?? "",
      distance: item.distance ?? "",
      description:
        item.description ?? "이 장소의 상세 소개를 준비하고 있어요.",
      image: item.image ?? "",
      detailImage: item.detailImage ?? "",
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
        "서면그리티 셀프사진관",
        "11분 · 641m"
      ],
      [
        "피플",
        "12분 · 811m"
      ],
      [
        "반지더하기",
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
        "향택",
        "16분 · 992m"
      ],
      [
        "차마당",
        "15분 · 836m"
      ],
      [
        "피플",
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
        "짱오락실서면점",
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
