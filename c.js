function updateGreeting() {
    const name = document.getElementById('nameInput').value;
    const greeting = document.getElementById('greeting');
    greeting.textContent = name ? `Hello, ${name}!` : "Welcome!";
  }
  
  document.getElementById('toggleMode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  