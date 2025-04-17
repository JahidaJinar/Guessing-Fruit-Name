document.addEventListener('DOMContentLoaded', () => {
    const nameField  = document.getElementById('player-name');
    const ageField   = document.getElementById('player-age');
    const instField  = document.getElementById('player-institute');
    const startBtn   = document.getElementById('start-btn');
    const form       = document.getElementById('player-form');
  
    // Enable Start only when all three inputs are non-empty
    [nameField, ageField, instField].forEach(field => {
      field.addEventListener('input', () => {
        startBtn.disabled = !(nameField.value && ageField.value && instField.value);
      });
    });
  
    form.addEventListener('submit', e => {
      e.preventDefault();
  
      // Gather and store player info
      const playerInfo = {
        name:      nameField.value.trim(),
        age:       parseInt(ageField.value, 10),
        institute: instField.value.trim()
      };
      localStorage.setItem('playerInfo', JSON.stringify(playerInfo));
  
      // Redirect — always look in the same folder as home.html
      window.location.href = './fruits.html';
    });
  });
  