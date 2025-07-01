const button = document.getElementById('toggleButton');
    const content = document.getElementById('content');

    button.addEventListener('click', () => {
      if (content.style.display === 'none') {
        content.style.display = 'block';
        button.textContent = ' elrejtés';
      } else {
        content.style.display = 'none';
        button.textContent = 'Mutasd';
      }
    });