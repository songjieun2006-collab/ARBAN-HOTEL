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
      ari: "",
      ru: ""
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