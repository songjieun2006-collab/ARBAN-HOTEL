(async()=>{
const online=window.ARBAN_CONNECTION?.admin===true;
let revision='';
const notice=document.querySelector('.notice');
if(online){
  notice.textContent='서버의 장소 정보를 불러오는 중입니다…';
  try{const r=await fetch('/api/admin/places',{cache:'no-store'});if(!r.ok)throw Error();const d=await r.json();revision=d.revision;GUIDE_DATA.places=d.places;
  notice.textContent='호텔 관리자 · 브라우저 저장은 초안입니다. 사이트에 반영을 누르면 손님에게 공개됩니다.';
  document.querySelector('header a').href=ARBAN_CONNECTION.guideUrl;
  }catch{notice.textContent='로그인 또는 서버 연결을 확인해주세요. 안전을 위해 편집을 시작하지 않았습니다.';document.querySelector('main').hidden=true;return;}
}
const script=document.createElement('script');script.src='admin.js?v=gallery-20260929-3';
await new Promise((resolve,reject)=>{script.onload=resolve;script.onerror=reject;document.body.append(script);});
const button=document.createElement('button');button.textContent=online?'사이트에 반영':'사이트 반영 · 서버 연결 후 사용';button.className='wide primary';button.disabled=!online;document.querySelector('aside').append(button);
button.onclick=async()=>{let places;try{places=ARBAN_ADMIN.snapshot();}catch(e){alert(e.message);return;}if(!confirm('저장한 전체 장소 정보를 손님용 사이트에 반영할까요?'))return;button.disabled=true;button.textContent='반영 중…';try{
const r=await fetch('/api/admin/places',{method:'PUT',headers:{'Content-Type':'application/json','X-Arban-Admin':'1'},body:JSON.stringify({revision,places})});
if(r.status===409)throw Error('다른 담당자가 먼저 변경했습니다. 수정본을 내려받아 보관한 뒤 새로고침해서 비교해주세요.');
if(!r.ok)throw Error('반영하지 못했습니다. 로그인 상태와 사진 크기·내용을 확인해주세요.');
const d=await r.json();revision=d.revision;ARBAN_ADMIN.setPublished(d.places);document.querySelector('#status').textContent='사이트 반영 완료 · 손님 페이지를 새로고침하면 확인할 수 있습니다.';
}catch(e){alert(e.message);}finally{button.disabled=false;button.textContent='사이트에 반영';}};
})();
