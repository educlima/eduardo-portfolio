    // Menu Hamburguer
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');
    if (menuToggle && nav) {
      menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
      });
    }
  
    document.addEventListener('DOMContentLoaded', function () {
      const themeToggle = document.getElementById('theme-toggle');
      const icon = themeToggle.querySelector('i');
    
      // Recupera tema salvo (se houver)
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        document.body.classList.add(savedTheme);
        icon.classList.toggle('fa-sun', savedTheme === 'dark');
        icon.classList.toggle('fa-moon', savedTheme !== 'dark');
      }
    
      themeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark');
    
        // Atualiza ícone
        const isDark = document.body.classList.contains('dark');
        icon.classList.toggle('fa-moon', !isDark);
        icon.classList.toggle('fa-sun', isDark);
    
        // Salva a preferência
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
      });
    });
    