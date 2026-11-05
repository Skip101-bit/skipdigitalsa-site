(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
      }
    });
  }

  var select = document.getElementById('f-need');
  document.querySelectorAll('[data-package]').forEach(function (link) {
    link.addEventListener('click', function () {
      if (!select) return;
      var wanted = link.getAttribute('data-package');
      for (var i = 0; i < select.options.length; i++) {
        if (select.options[i].text === wanted) { select.selectedIndex = i; break; }
      }
    });
  });

  var next = document.querySelector('input[name="_next"]');
  if (next && location.protocol.indexOf('http') === 0) {
    next.value = new URL('thanks.html', location.href).href;
  }

  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
