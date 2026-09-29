(async () => {
  "use strict";
  await (window.GUIDE_READY || Promise.resolve());

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

  // 짧은 의미 단위는 띄어쓰기를 유지하면서 한 줄에 표시합니다.
  function readableText(value) {
    return escapeText(value).replace(
      /한\s+(?:접시|끼|잔)[가-힣]*/g,
      (phrase) => `<span class="keep-together">${phrase}</span>`
    );
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

    const localImage = /^(?:assets\/|\.\.\/(?:image|places|cutouts)\/)[^?#]+$/u.test(value);

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

  function mapLogo(provider) {
    if (provider === "naver") return '<svg class="map-brand-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect width="24" height="24" rx="5" fill="#03c75a"/><path d="M6 5h4l4 7V5h4v14h-4l-4-7v7H6z" fill="white"/></svg>';
    return '<svg class="map-brand-icon" viewBox="0 0 24 28" aria-hidden="true" focusable="false"><path d="M12 1a10 10 0 0 0-10 10c0 7 10 16 10 16s10-9 10-16A10 10 0 0 0 12 1Z" fill="#34a853"/><path d="M12 1A10 10 0 0 0 2 11l5 5L18 3A10 10 0 0 0 12 1Z" fill="#4285f4"/><path d="M2 11c0 3 2 6 4 9l6-9-5-5Z" fill="#fbbc04"/><path d="M7 2a10 10 0 0 0-5 9l5 5 7-10Z" fill="#ea4335"/><circle cx="12" cy="11" r="4" fill="white"/></svg>';
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
                ${mapLogo(map.className)}<span>${map.label}</span>
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
              ${mapLogo(map.className)}<span>${map.label}</span>
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
          src="../image/seomyon.webp"
                    alt="서면 위치 표시"
        >
      </div>

      <div class="cover-friends">
    
  <img
    class="cover-duo"
    src="${"../image/아리루_03.webp".normalize("NFD")}"
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

        <p>${readableText(category.description)}</p>

        <span class="card-arrow" aria-hidden="true">
          ↗
        </span>
      </a>
    `;
  }

  function coursesPage() {
    return `
      ${backLink("#home", "처음으로")}

      <section class="page-heading course-selection-heading">
        <p class="eyebrow">CHOOSE YOUR COURSE</p>

        <h1 class="course-main-title">
          어떤 하루를<br>
          보내고 싶나요?
        </h1>

        <p>아리와 루가 추천하는 서면 여행</p>
      </section>

      <section class="course-group">
        <div class="guide-row">
          ${character("ari", "아리")}

          <p class="bubble">
            맛있는 <span class="keep-together">한 끼부터</span> 달콤한 휴식까지,<br>
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
          ${media(place.listingImage, place.name + " 사진", "thumbnail")}

          <div class="place-info">
            <span class="place-number">
              ${String(index + 1).padStart(2, "0")}
            </span>

            <h3>${escapeText(place.name)}</h3>

            <p>${readableText(place.subtitle)}</p>

            <small class="place-walk-time">
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
          ${readableText(category.text)}
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

  // 장소 정보에서 사용하는 작은 아이콘
  function detailIcon(kind) {
    const paths = {
      pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
      clock: '<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',
      walk: '<circle cx="14" cy="4" r="2"/><path d="m7 12 4-5 4 2 4 1M11 8l-1 7-4 6m4-6 5 2 2 4"/>'
    };
    return `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[kind] || paths.pin}</svg>`;
  }


  // 장소별 방문 피드백. 서버로 전송하지 않습니다.
  const feedbackKey = "arban-visit-feedback-v1";
  let feedbackMemory = [];
  function readFeedback() {
    try {
      const saved = JSON.parse(localStorage.getItem(feedbackKey) || "[]");
      if (Array.isArray(saved)) feedbackMemory = saved.filter(x => x && typeof x.id === "string").slice(-50);
    } catch (_) { /* 저장이 차단된 브라우저에서는 이번 화면에서만 유지 */ }
    return feedbackMemory;
  }
  function saveFeedback(entry) {
    feedbackMemory = [...readFeedback().filter(x => x.id !== entry.id), entry].slice(-50);
    try { localStorage.setItem(feedbackKey, JSON.stringify(feedbackMemory)); return true; }
    catch (_) { return false; }
  }
  function rankNextPlaces(source, answers, visited) {
    const minutes = p => { const m = (p.distance || "").match(/도보\s*(\d+)/); return m ? Number(m[1]) : Infinity; };
    // 유사성은 실제 소개에 등장하는 메뉴·활동·상품을 비교합니다.
    const themes = ["한식", "국밥", "밀면", "고기", "갈비", "파스타", "커피", "빙수", "베이커리", "디저트", "와플", "케이크", "타르트", "전통차", "쇼핑", "게임", "체험", "만들", "사진", "전시", "영화", "동물", "소품", "문구", "의류", "패션", "캐릭터", "엽서", "액세서리", "빈티지"];
    const content = p => [p.introduction, p.speech, p.highlights, p.subtitle].join(" ");
    const shared = p => themes.filter(t => content(source).includes(t) && content(p).includes(t));
    const closeFirst = answers.priority === "near" || (answers.rating === "bad" && answers.reason === "distance");
    const similarity = answers.reason === "experience" && answers.category === source.category;
    return places.filter(p => p.category === answers.category && p.id !== source.id && !visited.includes(p.id)).map(p => {
      const matches = shared(p);
      let score = 0;
      if (closeFirst) score = Number.isFinite(minutes(p)) ? 100 - minutes(p) : -100;
      else if (similarity) score = answers.rating === "good" ? matches.length * 10 : answers.rating === "bad" ? -matches.length * 10 : 0;
      return { place: p, score, matches, closeFirst, similarity };
    }).sort((a,b) => b.score-a.score || minutes(a.place)-minutes(b.place) || a.place.id.localeCompare(b.place.id));
  }
  function feedbackPanel(place) {
    const guideName = ["food", "cafe"].includes(place.category) ? "아리" : "루";
    const experienceLabel = {food:"음식·메뉴", cafe:"음료·디저트", sights:"볼거리·체험", shopping:"상품·구경거리"}[place.category];
    const choices = (name, options) => options.map(([value,label]) => `<label><input type="radio" name="${name}" value="${value}" required><span>${label}</span></label>`).join("");
    return `<section class="visit-feedback" aria-labelledby="feedback-title">
      <p class="feedback-kicker">${guideName}의 다음 장소 추천</p>
      <h2 id="feedback-title">다녀오셨나요?</h2>
      <p>${escapeText(place.name)}에서의 경험을 알려주시면 다음 장소를 골라드릴게요.</p>
      <details><summary>방문 피드백 남기기 <span aria-hidden="true">＋</span></summary>
        <form id="visit-feedback-form" data-place-id="${escapeText(place.id)}">
          <fieldset><legend>1. 이곳은 어떠셨나요?</legend><div class="feedback-options">${choices("rating", [["good","좋았어요"],["okay","보통이에요"],["bad","아쉬웠어요"]])}</div></fieldset>
          <fieldset><legend>2. 어떤 점 때문인가요?</legend><div class="feedback-options">${choices("reason", [["experience",experienceLabel],["distance","호텔에서의 거리"],["other","그 밖의 이유"]])}</div></fieldset>
          <div id="feedback-reason-field" class="feedback-reason-field" hidden>
            <label for="feedback-reason-text" id="feedback-reason-label">이유를 자유롭게 알려주세요. (선택)</label>
            <textarea id="feedback-reason-text" name="note" rows="3" maxlength="200" disabled aria-describedby="feedback-reason-help feedback-reason-count" placeholder="예: 생각보다 멀었어요. 다음에는 가까운 곳이 좋아요."></textarea>
            <p id="feedback-reason-count">0 / 200자</p>
            <p id="feedback-reason-help" class="feedback-note">이름·연락처는 적지 마세요. 작성한 글은 이 브라우저에만 저장되며, 현재 추천에는 선택한 항목만 반영돼요.</p>
          </div>
          <fieldset><legend>3. 다음에는 어디로 갈까요?</legend><div class="feedback-options">${choices("category", categories.map(c => [c.id,c.name]))}</div></fieldset>
          <fieldset><legend>4. 무엇을 우선할까요?</legend><div class="feedback-options">${choices("priority", [["near","호텔에서 가까운 곳"],["fit","피드백에 맞춰 고르기"]])}</div></fieldset>
          <p class="feedback-note">방문 피드백은 이 브라우저에만 저장돼요. 호텔에 전송되거나 공개되지 않아요. 거리는 현재 위치가 아닌 호텔 기준이에요.</p>
          <button class="primary" type="submit">다음 장소 추천받기 →</button>
        </form>
      </details>
      <div id="feedback-results" tabindex="-1" aria-live="polite"></div>
      <button type="button" class="feedback-reset" id="feedback-reset">이 브라우저의 방문 기록 지우기</button>
    </section>`;
  }
  function bindFeedback() {
    const form = main.querySelector("#visit-feedback-form");
    if (!form) return;
    const source = places.find(p => p.id === form.dataset.placeId);
    if (!source) return;
    const guideName = ["food", "cafe"].includes(source.category) ? "아리" : "루";
    const results = main.querySelector("#feedback-results");
    const noteField = form.querySelector("#feedback-reason-field");
    const noteInput = form.querySelector("#feedback-reason-text");
    const noteLabel = form.querySelector("#feedback-reason-label");
    const noteCount = form.querySelector("#feedback-reason-count");
    const updateNote = () => {
      const bad = form.querySelector('input[name="rating"]:checked')?.value === "bad";
      const other = form.querySelector('input[name="reason"]:checked')?.value === "other";
      noteField.hidden = !other;
      noteInput.disabled = noteField.hidden;
      noteLabel.textContent = bad ? "어떤 점이 아쉬웠나요? (선택)" : "이유를 자유롭게 알려주세요. (선택)";
      noteCount.textContent = `${noteInput.value.length} / 200자`;
    };
    form.addEventListener("change", updateNote);
    noteInput.addEventListener("input", updateNote);
    updateNote();
    let offset = 0, ranked = [], answers, stored = false;
    const show = () => {
      const selected = ranked.slice(offset, offset + 2);
      results.innerHTML = `<h3>${guideName}가 골라봤어요</h3>
        <p class="feedback-note">${stored ? escapeText(source.name) + " 방문 기록을 저장했어요." : "브라우저 저장이 제한되어 이번 화면에서만 반영해요."} 이미 방문했다고 남긴 곳은 제외했어요.</p>
        ${selected.length ? selected.map(({place:p,matches,closeFirst,similarity}) => {
          let reason = closeFirst ? "호텔에서 가까운 순서로 골랐어요." : similarity && answers.rating === "good" && matches.length ? `${matches.join(" · ")} 관련 특징이 소개된 곳이에요.` : similarity && answers.rating === "bad" && !matches.length ? "다른 특징의 장소를 우선으로 골랐어요. 소개를 확인해 보세요." : "선택한 활동에 맞는 장소예요. 아래 소개를 보고 골라보세요.";
          return `<article class="feedback-card"><h4>${escapeText(p.name)}</h4><p class="feedback-reason">${escapeText(reason)}</p><p>${readableText(p.subtitle)}</p><p class="feedback-distance">호텔에서 ${escapeText(p.distance || "거리 확인 중")}</p><a class="secondary" href="#place/${encodeURIComponent(p.id)}">상세 정보 보기 →</a></article>`;
        }).join("") : '<p>이 조건에서 새로 추천할 장소가 없어요. 위에서 다른 활동을 골라주세요.</p>'}
        ${ranked.length > 2 ? '<button type="button" class="secondary" id="feedback-more">다른 곳 추천받기</button>' : ""}
        <p class="feedback-note">추천 장소에 다녀온 뒤에도 피드백을 남기고 다음 장소를 찾아보세요.</p>`;
      const more = results.querySelector("#feedback-more");
      if (more) more.addEventListener("click", () => { offset = offset + 2 < ranked.length ? offset + 2 : 0; show(); });
      results.focus({preventScroll:true});
      results.scrollIntoView({behavior:"smooth",block:"start"});
    };
    form.addEventListener("submit", event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      answers = Object.fromEntries(new FormData(form));
      answers.note = noteInput.disabled ? "" : noteInput.value.trim().slice(0, 200);
      stored = saveFeedback({id:source.id,...answers,at:new Date().toISOString()});
      ranked = rankNextPlaces(source,answers,readFeedback().map(x => x.id));
      offset = 0; show();
    });
    main.querySelector("#feedback-reset").addEventListener("click", () => {
      feedbackMemory = [];
      try { localStorage.removeItem(feedbackKey); } catch (_) {}
      form.reset(); updateNote(); results.textContent = "이번 브라우저의 방문 기록을 지웠어요.";
    });
  }

  function detailPage(place) {
    const category = categories.find((item) => item.id === place.category);
    if (!category) return notFoundPage();
    const categoryAddress = "#category/" + encodeURIComponent(category.id);
    const guide = category.guide;
    const guideName = guide === "ari" ? "아리" : "루";
    const pose = (place.characterImage || "").normalize("NFC");
    const characterPath = pose.startsWith("../image/" + guideName + "_")
      ? place.characterImage : hotel.characters[guide];
    const hasMap = safeUrl(place.naverUrl) || safeUrl(place.googleUrl);
    const seenPhotos = new Set();
    const heroPhotos = [
      { src: place.heroImage || place.image, label: place.imageLabel || "장소 사진" },
      ...(Array.isArray(place.extraPhotos) ? place.extraPhotos : [])
    ].filter(photo => {
      if (!photo || !safeImage(photo.src)) return false;
      const key = photo.src.normalize("NFC");
      if (seenPhotos.has(key)) return false;
      seenPhotos.add(key);
      return true;
    });
    // 평소 운영시간을 시간대별로 한 줄씩 표시합니다.
    const hours = place.hours
      ? place.hours.split(/\n+/).map(line => `<span class="hours-line">${readableText(line)}</span>`).join("")
      : "운영시간 확인 중";

    return `
      <article class="place-detail-page">
        ${backLink(categoryAddress, category.name + " 목록")}
        <section class="page-heading detail-heading">
          <p class="eyebrow">${escapeText(category.name)} · ${escapeText(guideName)}의 추천</p>
          <h1 class="place-title">${escapeText(place.name)}</h1>
          <p>${readableText(place.subtitle)}</p>
        </section>

        <div class="detail-hero" data-photo-gallery>
          <div class="photo-slides" tabindex="0" role="region" aria-label="${escapeText(place.name)} 사진">
            ${heroPhotos.length ? heroPhotos.map((photo, index) => `<div class="photo-slide"><button type="button" class="photo-open" data-photo-open="${index}" aria-label="${escapeText(place.name)} 사진 ${index + 1} 크게 보기">${media(photo.src, place.name + " " + (photo.label || "장소 사진"), "detail-photo")}</button></div>`).join("") : `<div class="photo-slide">${media("", place.name + " 사진 준비 중", "detail-photo")}</div>`}
          </div>
          ${heroPhotos.length > 1 ? `<div class="photo-controls"><button type="button" data-photo-step="-1" aria-label="이전 사진">←</button><span data-photo-count aria-live="polite">1 / ${heroPhotos.length}</span><button type="button" data-photo-step="1" aria-label="다음 사진">→</button></div>` : ""}
          ${heroPhotos.length ? '<p class="photo-hint">사진을 누르면 크게 볼 수 있어요.</p>' : ""}
          <dialog class="photo-viewer" aria-label="장소 사진 크게 보기">
            <button type="button" class="photo-viewer-close" aria-label="확대 사진 닫기">닫기 ×</button>
            <img class="photo-viewer-image" alt="">
            <div class="photo-controls photo-viewer-controls">
              <button type="button" data-viewer-step="-1" aria-label="이전 확대 사진">←</button>
              <span data-viewer-count aria-live="polite"></span>
              <button type="button" data-viewer-step="1" aria-label="다음 확대 사진">→</button>
            </div>
          </dialog>
        </div>

        <section class="place-speech" aria-label="${escapeText(guideName)}의 한마디">
          <div class="place-speaker">
            ${media(characterPath, guideName + " 캐릭터", "character")}
          </div>
          <div class="place-speech-copy">
            <span class="place-speaker-name">${escapeText(guideName)}</span>
            <p class="place-speech-bubble">${readableText(place.recommendation || place.subtitle)}</p>
          </div>
        </section>

        <section class="place-introduction" aria-labelledby="place-introduction-title">
          <h2 id="place-introduction-title">장소 소개</h2>
          <p>${readableText(place.introduction || place.description)}</p>
          ${place.highlights ? `<div class="place-highlights"><h3>${place.category === "food" || place.category === "cafe" ? "주요 메뉴" : place.category === "shopping" ? "주요 상품" : "즐길 거리"}</h3><p>${readableText(place.highlights)}</p></div>` : ""}
        </section>

        <section class="place-description-panel" aria-labelledby="place-information-title">
          <h2 id="place-information-title">방문 정보</h2>
          <dl class="place-facts">
            <div>
              <dt>${detailIcon("pin")}<span>주소</span></dt>
              <dd>${escapeText(place.address || "주소 확인 중")}</dd>
            </div>
            <div>
              <dt>${detailIcon("clock")}<span>운영시간</span></dt>
              <dd>${hours}</dd>
            </div>
            <div>
              <dt>${detailIcon("walk")}<span>호텔에서</span></dt>
              <dd>${escapeText(place.distance || "도보 시간 확인 중")}</dd>
            </div>
          </dl>
          <p class="place-hours-note">운영시간과 휴무일은 방문 전에 확인해 주세요.</p>
        </section>

        <section class="place-map-section" aria-labelledby="place-map-title">
          <h2 id="place-map-title">${detailIcon("pin")}찾아가는 길</h2>
          ${mapButtons(place)}
          <p class="map-hint">${hasMap ? "지도를 누르면 새 창에서 위치를 확인할 수 있어요." : "지도 링크를 준비하고 있어요."}</p>
        </section>

        ${(place.category === "sights" || place.category === "shopping" || place.detailImage) ? media(place.detailImage, place.name + " " + place.detailImageLabel, "detail-photo secondary-photo") : ""}
        ${feedbackPanel(place)}
        <a class="secondary detail-back" href="${categoryAddress}">다른 ${escapeText(category.name)} 둘러보기 <span aria-hidden="true">→</span></a>
      </article>
    `;
  }

  // ======================================
  // 5. 없는 페이지 안내
  // ======================================


  // 맞춤형 코스 목록
  function customCoursesPage() {
    return `
      ${backLink("#courses", "코스 선택")}
      <section class="page-heading course-selection-heading">
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
              <p>${readableText(course.summary)}</p>
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
        <p>${readableText(course.summary)}</p>
      </section>
      <div class="guide-row custom-guide">
        <div class="custom-guide-person">
          ${character(course.guide, course.guideName)}
          <strong>${escapeText(course.guideName)}</strong>
        </div>
        <p class="bubble">${readableText(course.speech).replace(/13층 웰컴\s*데스크|4,500원/g, (phrase) => `<strong class="welcome-desk-emphasis">${phrase}</strong>`)}</p>
      </div>
      <section class="custom-course-about">
        <h2>이런 여행을 즐겨보세요</h2>
        <p>${readableText(course.description)}</p>
      </section>
      <section class="place-map-section custom-course-maps" aria-labelledby="custom-map-title">
        <h2 id="custom-map-title">${detailIcon("pin")}코스 장소를 지도에서 보기</h2>
        <p>이 코스에 포함된 장소를 한눈에 확인해 보세요.</p>
        ${mapButtons(course)}
        <p class="map-hint">지도 모음집이 새 창에서 열려요.</p>
      </section>
      <section class="custom-course-route" aria-labelledby="custom-route-title">
        <h2 id="custom-route-title">이 순서로 둘러보세요</h2>
        <p class="custom-route-hint">이동 시간과 거리는 참고값이며, 식사·관람·체험 시간은 포함하지 않아요.</p>
        <ol class="custom-timeline">
          ${course.stops.map(([name, travel, shortDescription], index) => `
            <li>
              ${travel ? `<p class="custom-travel">↓ ${escapeText(travel)}</p>` : ""}
              <div class="custom-stop">
                <span class="custom-stop-number" aria-hidden="true">${index + 1}</span>
                <div><h3>${escapeText(name)}${shortDescription ? `<span class="custom-stop-description">${escapeText(shortDescription)}</span>` : ""}</h3>
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
    const courseLink = document.querySelector(".header .home-link");
    if (courseLink) courseLink.hidden = route === "home";

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
    if (window.GUIDE_CONTENT_ERROR) {
      const notice = document.createElement("p");
      notice.setAttribute("role", "alert");
      notice.textContent = "장소 정보를 불러오지 못했어요. 잠시 후 새로고침해주세요.";
      main.prepend(notice);
    }
    bindFeedback();

    main.querySelectorAll("[data-photo-gallery]").forEach(gallery => {
      const track = gallery.querySelector(".photo-slides");
      const count = gallery.querySelector("[data-photo-count]");
      const total = track.children.length;
      const dialog = gallery.querySelector("dialog");
      const largeImage = dialog.querySelector("img");
      let opened = 0;
      const current = () => Math.max(0, Math.min(total - 1, Math.round(track.scrollLeft / (track.clientWidth || 1))));
      const update = () => { if (count) count.textContent = `${current() + 1} / ${total}`; };
      const move = step => {
        const next = (current() + step + total) % total;
        track.scrollTo({ left: next * track.clientWidth, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
      };
      const showLarge = index => {
        const image = track.children[index].querySelector("img");
        if (!image || !image.naturalWidth) return false;
        opened = index;
        largeImage.src = image.currentSrc || image.src;
        largeImage.alt = image.alt;
        dialog.querySelector("[data-viewer-count]").textContent = `${index + 1} / ${total}`;
        dialog.querySelectorAll("[data-viewer-step]").forEach(button => { button.hidden = total < 2; });
        return true;
      };
      const moveLarge = step => {
        for (let offset = 1; offset <= total; offset++) {
          const next = (opened + step * offset + total * offset) % total;
          if (showLarge(next)) break;
        }
      };
      gallery.querySelectorAll("[data-photo-open]").forEach(button => {
        button.addEventListener("click", () => {
          if (showLarge(Number(button.dataset.photoOpen))) dialog.showModal();
        });
      });
      dialog.querySelector(".photo-viewer-close").addEventListener("click", () => dialog.close());
      dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
      dialog.addEventListener("close", () => track.scrollTo({left: opened * track.clientWidth, behavior: "instant"}));
      dialog.querySelectorAll("[data-viewer-step]").forEach(button => {
        button.addEventListener("click", () => moveLarge(Number(button.dataset.viewerStep)));
      });
      dialog.addEventListener("keydown", event => {
        if (["ArrowLeft", "ArrowRight"].includes(event.key)) {
          event.preventDefault(); moveLarge(event.key === "ArrowLeft" ? -1 : 1);
        }
      });
      let touchStart = null;
      largeImage.addEventListener("touchstart", event => { touchStart = event.touches.length === 1 ? event.touches[0].clientX : null; }, {passive:true});
      largeImage.addEventListener("touchend", event => {
        if (touchStart !== null && event.changedTouches.length) {
          const delta = event.changedTouches[0].clientX - touchStart;
          if (Math.abs(delta) > 60) moveLarge(delta > 0 ? -1 : 1);
        }
        touchStart = null;
      }, {passive:true});
      gallery.querySelectorAll("[data-photo-step]").forEach(button => {
        button.addEventListener("click", () => move(Number(button.dataset.photoStep)));
      });
      track.addEventListener("scroll", update, { passive: true });
      track.addEventListener("keydown", event => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault(); move(event.key === "ArrowLeft" ? -1 : 1);
        }
      });
    });

    // 한글 파일명의 저장 방식이 다르면 한 번 더 확인합니다.
    main.querySelectorAll("img:not(.photo-viewer-image)").forEach((image) => {
      let retried = false;
      const handleError = () => {
        const source = image.getAttribute("src") || "";
        const alternate = source === source.normalize("NFC")
          ? source.normalize("NFD") : source.normalize("NFC");
        if (!retried && alternate !== source && /^(?:assets\/|\.\.\/(?:image|places|cutouts)\/)/.test(source)) {
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
