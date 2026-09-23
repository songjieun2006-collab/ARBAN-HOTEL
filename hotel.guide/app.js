(() => {
  "use strict";

  const main = document.querySelector("#main");
  const { hotel, categories, places } = window.GUIDE_DATA;

  // 글에 특수문자가 있어도 안전하게 표시
  function escapeText(value) {
    return String(value ?? "").replace(/[&<>"']/g, (character) => {
      const characters = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      };

      return characters[character];
    });
  }

  // 인터넷 주소 확인
  function safeUrl(value) {
    try {
      const url = new URL(value);

      if (url.protocol === "https:" || url.protocol === "http:") {
        return url.href;
      }

      return "";
    } catch {
      return "";
    }
  }

  // 이미지 주소 확인
  function safeImage(value) {
    if (!value) return "";

    const localImage = /^(assets|image)\/[^?#]+$/u.test(value);

    return localImage || safeUrl(value) ? value : "";
  }

  // 이미지 또는 이미지 자리 표시
  function media(path, label, className = "") {
    const source = safeImage(path);

    if (source) {
      return `
        <img
          class="media ${className}"
          src="${escapeText(source)}"
          alt="${escapeText(label)}"
        >
      `;
    }

    return `
      <div
        class="media placeholder ${className}"
        role="img"
        aria-label="${escapeText(label)} 자리"
      >
        <span>${escapeText(label)}</span>
      </div>
    `;
  }

  // 캐릭터
  function character(id, name) {
    return media(
      hotel.characters[id],
      `${name} 캐릭터`,
      "character"
    );
  }

  // 뒤로가기
  function backLink(address, label) {
    return `
      <a class="back" href="${address}">
        <span aria-hidden="true">←</span>
        ${escapeText(label)}
      </a>
    `;
  }

  // 네이버·구글 지도 버튼
  function mapButtons(place) {
    const maps = [
      {
        key: "naverUrl",
        label: "네이버 지도",
        className: "naver"
      },
      {
        key: "googleUrl",
        label: "구글 지도",
        className: "google"
      }
    ];

    return `
      <div class="map-buttons">
        ${maps.map((map) => {
          const url = safeUrl(place[map.key]);

          if (url) {
            return `
              <a
                class="map-button ${map.className}"
                href="${escapeText(url)}"
                target="_blank"
                rel="noopener noreferrer"
              >
                ${map.label}
                <span aria-hidden="true">↗</span>
              </a>
            `;
          }

          return `
            <button
              class="map-button"
              type="button"
              disabled
            >
              ${map.label}
              <small>링크 준비 중</small>
            </button>
          `;
        }).join("")}
      </div>
    `;
  }

  // ======================================
  // 1. 첫 화면
  // ======================================

  function homePage() {
  return `
    <section class="cover">
      <h1 class="cover-title">
  <span class="cover-title-small">
    아리와 루가 함께하는
  </span>

  <span class="cover-title-main">
    <span class="cover-city">부산</span> 여행 가이드
  </span>
</h1>
      <div class="cover-art">
        ${media(
          hotel.cover,
          "부산 지도",
          "cover-image"
        )}

        <img
          class="seomyon-overlay"
          src="image/seomyon.png"
                    alt="서면 위치 표시"
        >
      </div>

      <div class="cover-friends">
    
  <img
    class="cover-duo"
    src="${"image/아리루_03.png".normalize("NFD")}"
    alt="캐리어를 끄는 아리와 카메라를 든 루"
  >
</div>
      <a class="primary" href="#courses">
        가이드북 펼치기
        <span aria-hidden="true">→</span>
      </a>

      <p class="cover-caption">
        맛집부터 쇼핑까지, 호텔 주변을 가볍게 둘러보세요.
      </p>
    </section>
  `;
}
  

  // ======================================
  // 2. 코스 선택 화면
  // ======================================

  function courseCard(category) {
    return `
      <a
        class="course-card"
        href="#category/${encodeURIComponent(category.id)}"
      >
        <span class="eyebrow">
          ${escapeText(category.en)}
        </span>

        <h2>${escapeText(category.name)}</h2>

        <p>${escapeText(category.description)}</p>

        <span class="card-arrow" aria-hidden="true">
          ↗
        </span>
      </a>
    `;
  }

  function coursesPage() {
    return `
      ${backLink("#home", "처음으로")}

      <section class="page-heading">
        <p class="eyebrow">CHOOSE YOUR COURSE</p>

        <h1>
          어떤 하루를<br>
          보내고 싶나요?
        </h1>

        <p>아리와 루가 추천하는 서면 여행</p>
      </section>

      <section class="course-group">
        <div class="guide-row">
          ${character("ari", "아리")}

          <p class="bubble">
            지금 같이 맛있는 거<br>
            먹으러 갈까요?
          </p>
        </div>

        <div class="course-grid">
          ${categories.slice(0, 2).map(courseCard).join("")}
        </div>
      </section>

      <p class="middle-note">
        마음에 드는 코스를 골라보세요.
      </p>

      <section class="course-group">
        <div class="guide-row reverse">
          ${character("ru", "루")}

          <p class="bubble">
            색다른 경험과 작은 발견,<br>
            저와 함께 떠나요!
          </p>
        </div>

        <div class="course-grid">
          ${categories.slice(2).map(courseCard).join("")}
        </div>
      </section>
    `;
  }

  // ======================================
  // 3. 장소 목록 화면
  // ======================================

  function listingPage(category) {
    const list = places.filter((place) => {
      return place.category === category.id;
    });

    const detailLabel =
      category.id === "food" || category.id === "cafe"
        ? "메뉴·소개 보기"
        : "상세정보 보기";

    const cards = list.map((place, index) => {
      return `
        <a
          class="place-card"
          href="#place/${encodeURIComponent(place.id)}"
        >
          ${media(place.image, "장소 사진", "thumbnail")}

          <div class="place-info">
            <span class="place-number">
              ${String(index + 1).padStart(2, "0")}
            </span>

            <h3>${escapeText(place.name)}</h3>

            <p>${escapeText(place.subtitle)}</p>

            <small>
              ${escapeText(
                place.distance || "도보 거리 확인 예정"
              )}
            </small>

            <span class="detail-link">
              ${detailLabel}
              <span aria-hidden="true">→</span>
            </span>
          </div>
        </a>
      `;
    }).join("");

    return `
      ${backLink("#courses", "코스 선택")}

      <section class="page-heading">
        <p class="eyebrow">
          ${escapeText(category.en)} AROUND SEOMYEON
        </p>

        <h1>${escapeText(category.name)}</h1>
      </section>

      <div class="guide-row category-guide">
        ${character(category.guide, category.guideName)}

        <p class="bubble">
          ${escapeText(category.text)}
        </p>
      </div>

      <section class="collection">
        <h2 class="collection-title">
          ${escapeText(category.name)} 모음집
        </h2>

        ${mapButtons({
          naverUrl: category.naverCollectionUrl || "",
          googleUrl: category.googleCollectionUrl || ""
        })}
      </section>

      <div class="list-heading">
        <h2 id="place-list-title">장소 선택</h2>
        <span>${list.length}곳</span>
      </div>

      <div
        class="place-list"
        role="region"
        aria-labelledby="place-list-title"
        tabindex="0"
      >
        ${
          cards ||
          '<p class="empty">추천 장소를 준비하고 있어요.</p>'
        }
      </div>
    `;
  }

  // ======================================
  // 4. 장소 상세 화면
  // ======================================

  function detailPage(place) {
    const category = categories.find((item) => {
      return item.id === place.category;
    });

    if (!category) {
      return notFoundPage();
    }

    const categoryAddress =
      "#category/" + encodeURIComponent(category.id);

    return `
      ${backLink(
        categoryAddress,
        category.name + " 목록"
      )}

      <section class="page-heading">
        <p class="eyebrow">
          ${escapeText(category.name)}
          ·
          ${escapeText(category.guideName)}의 추천
        </p>

        <h1 class="place-title">
          ${escapeText(place.name)}
        </h1>

        <p>${escapeText(place.subtitle)}</p>
      </section>

      ${media(
        place.image,
        place.name + " 사진",
        "detail-photo"
      )}

      <section class="recommendation">
        <div class="guide-label">
          ${character(category.guide, category.guideName)}

          <strong>
            ${escapeText(category.guideName)}의 한마디
          </strong>
        </div>

        <p class="bubble detail-bubble">${escapeText(
          place.description
        )}</p>
      </section>

      <section class="location">
        <h2>찾아가는 길</h2>

        <dl>
          <div>
            <dt>주소</dt>
            <dd>
              ${escapeText(
                place.address || "실제 주소 등록 예정"
              )}
            </dd>
          </div>

          <div>
            <dt>호텔에서</dt>
            <dd>
              ${escapeText(
                place.distance || "도보 거리 확인 예정"
              )}
            </dd>
          </div>
        </dl>

        ${mapButtons(place)}

        <p class="map-hint">
          지도 링크가 등록되면 새 창에서 열려요.
        </p>
      </section>

      ${media(
        place.detailImage,
        "메뉴·공간 사진",
        "detail-photo secondary-photo"
      )}

      <a class="secondary" href="${categoryAddress}">
        다른 ${escapeText(category.name)} 둘러보기
      </a>
    `;
  }

  // ======================================
  // 5. 없는 페이지 안내
  // ======================================

  function notFoundPage() {
    return `
      ${backLink("#courses", "코스 선택")}

      <section class="page-heading">
        <h1>페이지를 찾을 수 없어요.</h1>
        <p>코스 선택에서 다시 둘러보세요.</p>
      </section>
    `;
  }

  // ======================================
  // 6. 주소에 맞는 화면 표시
  // ======================================

  function render() {
    const route = location.hash.slice(1) || "home";

    let page;

    if (route === "home") {
      page = homePage();
    } else if (route === "courses") {
      page = coursesPage();
    } else if (route.startsWith("category/")) {
      const category = categories.find((item) => {
        return (
          "category/" + encodeURIComponent(item.id) === route
        );
      });

      if (category) {
        page = listingPage(category);
      }
    } else if (route.startsWith("place/")) {
      const place = places.find((item) => {
        return (
          "place/" + encodeURIComponent(item.id) === route
        );
      });

      if (place) {
        page = detailPage(place);
      }
    }

    main.innerHTML = page || notFoundPage();

    // 사진을 불러오지 못하면 안내 표시
    main.querySelectorAll("img").forEach((image) => {
      image.addEventListener(
        "error",
        () => {
          const fallback = document.createElement("div");

          fallback.className =
            image.className + " placeholder";

          fallback.textContent = image.alt + " 준비 중";

          image.replaceWith(fallback);
        },
        { once: true }
      );
    });

    const heading = main.querySelector("h1");

    const pageTitle = heading
      ? heading.textContent.replace(/\s+/g, " ").trim()
      : "부산 여행 가이드";

    document.title = pageTitle + " · " + hotel.name;

    window.scrollTo(0, 0);
    main.focus({ preventScroll: true });
  }

  window.addEventListener("hashchange", render);

  render();
})();
