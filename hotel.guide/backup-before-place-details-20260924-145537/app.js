(() => {
  "use strict";

  const main = document.querySelector("#main");
  const { hotel, categories, places } = window.GUIDE_DATA;
  const customCourses = window.GUIDE_DATA.customCourses || [];

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
            맛있는 한 끼부터 달콤한 휴식까지,<br>
            함께 골라볼까요?
          </p>
        </div>

        <div class="course-grid">
          ${categories.slice(0, 2).map(courseCard).join("")}
        </div>
      </section>

      <a class="custom-course-entry" href="#custom-courses">
        <span><small>어디부터 갈지 고민된다면?</small>
        <strong>맞춤형 코스 보기</strong></span>
        <span aria-hidden="true">→</span>
      </a>

      <section class="course-group">
        <div class="guide-row reverse">
          ${character("ru", "루")}

          <p class="bubble">
            구경하고 체험하고!<br>
            나만의 부산 추억을 만들어봐요.
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


  // 맞춤형 코스 목록
  function customCoursesPage() {
    return `
      ${backLink("#courses", "코스 선택")}
      <section class="page-heading">
        <p class="eyebrow">ARBAN PICK</p>
        <h1>어떤 여행을 떠날까요?</h1>
        <p>아리와 루가 고른 네 가지 코스</p>
      </section>
      <div class="custom-course-list">
        ${customCourses.map((course, index) => `
          <a class="custom-course-card custom-course-${escapeText(course.id)}"
             href="#custom-course/${encodeURIComponent(course.id)}">
            <div class="custom-course-copy">
              <span class="eyebrow">COURSE ${String(index + 1).padStart(2, "0")}</span>
              <h2>${escapeText(course.name)}</h2>
              <p>${escapeText(course.summary)}</p>
              <span class="custom-course-action">코스 보기 <span aria-hidden="true">→</span></span>
            </div>
            <span class="custom-course-symbol" aria-hidden="true">${course.id === "abandoju" ? `
              <svg viewBox="0 0 64 64" width="100%" height="100%" focusable="false" aria-hidden="true">
                <g stroke="#194b65" stroke-width="2" stroke-linejoin="round">
                  <path d="M18 15h12v9c0 5 8 10 8 17v13c0 3-3 5-6 5H16c-3 0-6-2-6-5V41c0-7 8-12 8-17Z" fill="#fff9e7"/>
                  <rect x="17" y="8" width="14" height="8" rx="2" fill="#007e8a"/>
                  <path d="M11 37h26v14H11Z" fill="#c9e8d9" stroke="none"/>
                  <path d="M39 44h21l-3 11c-1 3-4 4-7 4s-6-1-7-4Z" fill="#e9d6ac"/>
                  <ellipse cx="49.5" cy="44" rx="10.5" ry="3.5" fill="#fff9e7"/>
                </g>
              </svg>
            ` : escapeText(course.symbol)}</span>
          </a>
        `).join("")}
      </div>
    `;
  }

  // 맞춤형 코스 상세: 장소 목록의 예시 정보와 별도로 표시합니다.
  function customCoursePage(course) {
    return `
      ${backLink("#custom-courses", "맞춤형 코스 목록")}
      <section class="page-heading">
        <p class="eyebrow">ARBAN PICK</p>
        <h1>${escapeText(course.name)}</h1>
        <p>${escapeText(course.summary)}</p>
      </section>
      <div class="guide-row custom-guide">
        <div class="custom-guide-person">
          ${character(course.guide, course.guideName)}
          <strong>${escapeText(course.guideName)}</strong>
        </div>
        <p class="bubble">${escapeText(course.speech)}</p>
      </div>
      <section class="custom-course-about">
        <h2>이런 여행을 즐겨보세요</h2>
        <p>${escapeText(course.description)}</p>
      </section>
      <section class="custom-course-route" aria-labelledby="custom-route-title">
        <h2 id="custom-route-title">이 순서로 둘러보세요</h2>
        <p class="custom-route-hint">이동 시간과 거리는 참고값이며, 식사·관람·체험 시간은 포함하지 않아요.</p>
        <ol class="custom-timeline">
          ${course.stops.map(([name, travel], index) => `
            <li>
              ${travel ? `<p class="custom-travel">↓ ${escapeText(travel)}</p>` : ""}
              <div class="custom-stop">
                <span class="custom-stop-number" aria-hidden="true">${index + 1}</span>
                <div><h3>${escapeText(name)}</h3>
                  ${index === 0 ? '<p>출발</p>' : index === course.stops.length - 1 ? '<p>호텔로 돌아오기</p>' : ""}
                </div>
              </div>
            </li>
          `).join("")}
        </ol>
        ${course.note ? `<p class="custom-route-note">${escapeText(course.note)}</p>` : ""}
      </section>
      <a class="secondary" href="#custom-courses">다른 맞춤형 코스 보기 →</a>
    `;
  }

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
    } else if (route === "custom-courses") {
      page = customCoursesPage();
    } else if (route.startsWith("custom-course/")) {
      const course = customCourses.find((item) =>
        "custom-course/" + encodeURIComponent(item.id) === route
      );
      if (course) page = customCoursePage(course);
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

    // 한글 파일명의 저장 방식이 다르면 한 번 더 확인합니다.
    main.querySelectorAll("img").forEach((image) => {
      let retried = false;
      const handleError = () => {
        const source = image.getAttribute("src") || "";
        const alternate = source === source.normalize("NFC")
          ? source.normalize("NFD") : source.normalize("NFC");
        if (!retried && alternate !== source && /^(image|assets)\//.test(source)) {
          retried = true;
          image.src = alternate;
          return;
        }
        image.removeEventListener("error", handleError);
        const fallback = document.createElement("div");
        fallback.className = image.className + " placeholder";
        fallback.textContent = image.alt + " 준비 중";
        image.replaceWith(fallback);
      };
      image.addEventListener("error", handleError);
      if (image.complete && image.naturalWidth === 0) handleError();
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