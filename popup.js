document.addEventListener('DOMContentLoaded', function () {
  const passwordInput = document.getElementById('passwordInput');
  const checkButton = document.getElementById('checkButton');
  const tooltip = document.getElementById('passwordTooltip');
  const resultDiv = document.getElementById('result');

  function isWeak(password, email = '') {
    const lowerPass = password.toLowerCase();

    // Patterns
    const yearPattern = /(19|20)\d{2}/;
    const numericOnly = /^\d+$/;
    const repeatedChars = /^([a-zA-Z0-9])\1+$/;
    const commonPasswords = ['123456', 'password', 'qwerty', 'admin', '111111'];

    const localPart = email.split('@')[0].toLowerCase();

    if (
      yearPattern.test(password) ||
      numericOnly.test(password) ||
      repeatedChars.test(password) ||
      commonPasswords.includes(password) ||
      (email && lowerPass.includes(localPart))
    ) {
      return true;
    }

    return false;
  }

  function evaluateStrength(password) {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;

    return strength;
  }

  checkButton.addEventListener('click', () => {
    const password = passwordInput.value;

    if (!password) {
      resultDiv.textContent = 'Please enter a password.';
      tooltip.style.display = 'block';
      return;
    }

    const strength = evaluateStrength(password);
    const weak = isWeak(password);

    if (weak || strength < 3) {
      tooltip.style.display = 'block';
      passwordInput.classList.add('weak');
      resultDiv.textContent = '⚠️ Weak password detected!';
    } else {
      tooltip.style.display = 'none';
      passwordInput.classList.remove('weak');
      resultDiv.textContent = '✅ Strong password!';
    }
  });
});
