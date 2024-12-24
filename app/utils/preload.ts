export default function preload() {
  return `
    ;(function() {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const setting = localStorage.getItem('nuxt-color-mode') || 'auto';
      if (setting === 'dark' || (prefersDark && setting !== 'light'))
        document.documentElement.classList.toggle('van-theme-dark', true);
    })()
  `
}
