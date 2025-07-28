(() => {
  const navigation = {
    menuBtn: document.querySelector('[data-menu-btn]'),
    closeBtn: document.querySelector('[data-menu-close-btn]'),
    menu: document.querySelector('[data-menu]'),
    navLink: document.querySelector('[data-nav-link]'),
    joinBtn: document.querySelector('[data-join-btn]'),
    modalJoinBtn: document.querySelector('[data-modal-join-btn]'),
  };

  navigation.menuBtn?.addEventListener('click', () => {
    navigation.menu.classList.remove('is-hidden');
    navigation.menuBtn.classList.remove('visible');
    navigation.closeBtn.classList.add('visible');
  });

  navigation.closeBtn?.addEventListener('click', () => {
    navigation.menu.classList.add('is-hidden');
    navigation.menuBtn.classList.add('visible');
    navigation.closeBtn.classList.remove('visible');
  });

  navigation.navLink?.addEventListener('click', () => {
    navigation.menu.classList.add('is-hidden');
    navigation.menuBtn.classList.add('visible');
    navigation.closeBtn.classList.remove('visible');
  });

  navigation.joinBtn?.addEventListener('click', () => {
    navigation.menu.classList.add('is-hidden');
    navigation.menuBtn.classList.add('visible');
    navigation.closeBtn.classList.remove('visible');
  });

  navigation.modalJoinBtn?.addEventListener('click', () => {
    navigation.menu.classList.add('is-hidden');
    navigation.menuBtn.classList.add('visible');
    navigation.closeBtn.classList.remove('visible');
  });
})();

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.header-nav__link');

let isScrolling = true;
let timeoutId = null;

window.addEventListener('scroll', () => {
  if (!isScrolling) return;

  const scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      const id = section.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
});

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const targetId = link.getAttribute('href').substring(1);
    const targetEl = document.getElementById(targetId);
    if (!targetEl) return;

    isScrolling = false;
    if (timeoutId) clearTimeout(timeoutId);

    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    targetEl.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    timeoutId = setTimeout(() => {
      isScrolling = true;
    }, 800);
  });
});
