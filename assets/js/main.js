'use strict';

const CASE_STUDIES = {
  membership: {
    category: '01 / Laravel Application',
    title: 'Membership & Commerce Platform',
    summary: 'Contributed to the development and maintenance of a Laravel-based membership and ecommerce application, with frontend and backend responsibilities in an existing collaborative project.',
    points: ['Member-facing and administrative application features', 'Order creation, updates, history and lifecycle workflows', 'Responsive interfaces using Blade, Livewire, Tailwind CSS and Alpine.js', 'REST API integration and payment/shipping-related functionality', 'Troubleshooting and maintaining existing application features'],
    stack: ['Laravel', 'PHP', 'MySQL', 'Livewire', 'Blade', 'Tailwind CSS', 'Alpine.js']
  },
  crm: {
    category: '02 / Systems Integration',
    title: 'CRM Integration & Workflow Automation',
    summary: 'Integration work connecting CRM and support systems, with attention to data mapping, workflow reliability and maintainable automation.',
    points: ['Company and contact synchronization between business platforms', 'Field mapping and data consistency checks', 'Ticket visibility and related support workflows', 'API and webhook-based Make.com scenarios', 'Investigating missing data and synchronization failures'],
    stack: ['Zendesk', 'HubSpot', 'Make.com', 'Webhooks', 'REST APIs']
  },
  support: {
    category: '03 / Support Experience',
    title: 'Product Support & Knowledge Base',
    summary: 'Frontend customization of a product-oriented support experience through a Zendesk Help Center theme.',
    points: ['Dynamic categories and product-based navigation', 'Responsive frontend layouts and breadcrumb navigation', 'Support resources including guides, manuals and troubleshooting sections', 'Conditional content presentation and interactive elements', 'Custom theme styling and JavaScript/jQuery functionality'],
    stack: ['Zendesk Guide', 'HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  commerce: {
    category: '04 / Ecommerce',
    title: 'Custom Ecommerce Experiences',
    summary: 'Development experience across Shopify, WordPress and WooCommerce, including customizing existing storefronts and implementing ecommerce functionality.',
    points: ['Theme and storefront customization', 'Product, variant and category workflows', 'Custom frontend features and responsive UI improvements', 'WordPress and WooCommerce functionality', 'Troubleshooting and maintaining ecommerce experiences'],
    stack: ['Shopify', 'WordPress', 'WooCommerce', 'PHP', 'JavaScript', 'jQuery']
  },
  operations: {
    category: '05 / Application Workflows',
    title: 'Order, Payment & Shipping Workflows',
    summary: 'Contributions to backend workflows and third-party integrations related to commerce operations. This area overlaps with broader Laravel application work.',
    points: ['Order creation, editing and status handling', 'Payment-method and payment gateway integrations', 'Shipping quotes and order fulfillment integrations', 'API response handling, validation and application troubleshooting', 'Coordination between frontend forms and backend services'],
    stack: ['Laravel', 'REST APIs', 'Authorize.Net', 'ShipStation', 'PHP']
  }
};

document.querySelectorAll('[data-year]').forEach(el => { el.textContent = String(new Date().getFullYear()); });

const header = document.getElementById('site-header');
const menuToggle = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
function closeMenu() {
  document.body.classList.remove('menu-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open menu');
  mobileNav.inert = true;
}
menuToggle.addEventListener('click', () => {
  const open = !document.body.classList.contains('menu-open');
  document.body.classList.toggle('menu-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  mobileNav.inert = !open;
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
window.addEventListener('resize', () => { if (window.innerWidth > 900) closeMenu(); });

const navLinks = [...document.querySelectorAll('.nav-link')];
const sections = [...document.querySelectorAll('main section[id]')];
let scrollScheduled = false;
function updateScroll() {
  header.classList.toggle('scrolled', window.scrollY > 20);
  const y = window.scrollY + 165;
  let current = sections[0].id;
  for (const section of sections) if (section.offsetTop <= y) current = section.id;
  navLinks.forEach(link => {
    const active = link.getAttribute('href') === `#${current}`;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
  });
  scrollScheduled = false;
}
window.addEventListener('scroll', () => { if (!scrollScheduled) { scrollScheduled = true; requestAnimationFrame(updateScroll); } }, { passive: true });
updateScroll();

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: .09, rootMargin: '0px 0px 50px 0px' });
  document.body.classList.add('js-reveal');
  reveals.forEach(el => observer.observe(el));
}

const dialog = document.getElementById('case-dialog');
const dialogClose = document.getElementById('dialog-close');
const dialogTitle = document.getElementById('dialog-title');
const dialogSummary = document.getElementById('dialog-summary');
const dialogCategory = document.getElementById('dialog-category');
const dialogPoints = document.getElementById('dialog-points');
const dialogTechnologies = document.getElementById('dialog-technologies');
let lastTrigger = null;
for (const button of document.querySelectorAll('[data-project-open]')) {
  button.addEventListener('click', () => {
    const data = CASE_STUDIES[button.dataset.projectOpen];
    if (!data) return;
    lastTrigger = button;
    dialogTitle.textContent = data.title;
    dialogSummary.textContent = data.summary;
    dialogCategory.textContent = data.category;
    dialogPoints.replaceChildren(...data.points.map(value => { const li = document.createElement('li'); li.textContent = value; return li; }));
    dialogTechnologies.replaceChildren(...data.stack.map(value => { const span = document.createElement('span'); span.textContent = value; return span; }));
    if (typeof dialog.showModal === 'function') dialog.showModal();
  });
}
dialogClose.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => { if (lastTrigger) lastTrigger.focus(); });
document.getElementById('dialog-contact').addEventListener('click', () => dialog.close());

const email = 'abbasbnaqvi1993@gmail.com';
const copyButton = document.getElementById('copy-email');
const copyNotice = document.getElementById('copy-notice');
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(email);
    copyNotice.textContent = 'Email copied to clipboard.';
  } catch {
    copyNotice.textContent = `Please copy: ${email}`;
  }
});

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;
  const form = new FormData(contactForm);
  const name = String(form.get('name')).trim();
  const sender = String(form.get('email')).trim();
  const subject = String(form.get('subject')).trim();
  const message = String(form.get('message')).trim();
  if (!(name && sender && subject && message)) return;
  const body = `Hi Bakhtawar,\n\n${message}\n\nFrom: ${name}\nEmail: ${sender}`;
  const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
});
