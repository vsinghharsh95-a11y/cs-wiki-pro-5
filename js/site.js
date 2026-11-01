(() => {
  const page = document.body.className.replace('page-', '');
  document.querySelectorAll('.nav-links a[data-page]').forEach((link) => {
    if (link.dataset.page === page) link.setAttribute('aria-current', 'page');
  });
  document.querySelectorAll('a[href$=".html"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (link.origin !== location.origin || link.pathname === location.pathname) return;
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      event.preventDefault();
      document.body.classList.add('page-leave');
      setTimeout(() => { location.href = link.href; }, 170);
    });
  });
})();
