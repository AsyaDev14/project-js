import refs from './refs.js';

export function manageUpBtn() {
  if (window.scrollY < 1400 && refs.btnUpEl.style.transform !== 'scale(0)') {
    refs.btnUpEl.style.transform = 'scale(0)';
  }
  if (window.scrollY > 1400 && refs.btnUpEl.style.transform !== 'scale(1)') {
    refs.btnUpEl.style.transform = 'scale(1)';
  }
}

export function scrollUp() {
  const rect = refs.filtersBlockEl.getBoundingClientRect();
  window.scrollTo({ top: rect.top + window.scrollY, behavior: 'smooth' });
}