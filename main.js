import AboutPage from './pages/AboutPage.js';
import ContactPage from './pages/ContactPage.js';
import HomePage from './pages/HomePage.js';
import NotFoundPage from './pages/NotFoundPage.js';

// 경로 - 페이지 매핑
const routes = {
  '/index.html': {component: HomePage, props: {user: {name: 'taewon'}}},
  '/about': {component: AboutPage, props: {}},
  '/contact': {component: ContactPage, props: {}}
}


// 실제 렌더링 함수
function render() {
  const app = document.getElementById('app');
  // console.log('app', app);

  const path = window.location.pathname;
  // console.log('path', path);
  const {component, props}  = routes[path] || {component: NotFoundPage, props: {}};

  app.innerHTML = component(props);
}


// pushState로 주소를 바꾸고 다시 렌더링
function navigateTo(url) {
  window.history.pushState(null, null, url);
  render();
}

document.addEventListener('click', (event) => { 
  // 링크 클릭 시 navigateTo 호출
  const target = event.target.closest('[data-link]');

  console.log('target', target);
  
  if (target) {
    event.preventDefault();
    navigateTo(target.href);
  } 
})

window.addEventListener("popstate", render);



render();