window.GUIDE_READY = (async () => {
  const endpoint = window.ARBAN_CONNECTION?.publicApi;
  if (!endpoint) return;
  try {
    const url = new URL(endpoint);
    if (url.protocol !== 'https:') throw Error('HTTPS required');
    const response = await fetch(url, {cache:'no-store', signal:AbortSignal.timeout(6000)});
    if (!response.ok) throw Error('Content unavailable');
    const payload = await response.json();
    const categories = new Set(GUIDE_DATA.categories.map(c=>c.id));
    if (!Array.isArray(payload.places) || !payload.places.every(p=>p && typeof p.id==='string' && typeof p.name==='string' && categories.has(p.category))) throw Error('Invalid content');
    GUIDE_DATA.places = payload.places.filter(p=>!p.hidden);
    try {sessionStorage.setItem('arban-public-content',JSON.stringify({endpoint,places:GUIDE_DATA.places}));} catch {}
  } catch {
    GUIDE_DATA.places = [];
    window.GUIDE_CONTENT_ERROR = true;
    console.warn('최신 장소 정보를 불러오지 못했습니다. 새로고침 후 다시 시도해주세요.');
  }
})();
