document.addEventListener('DOMContentLoaded', () => {
  const linksToPreload = [
    'portfolio-details.html',
    'other-page.html'
  ];

  linksToPreload.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
  });
});
