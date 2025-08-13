// --------------------
// Password CHECKER
// --------------------

function isNumericOnly(password) {
  return /^\d+$/.test(password);
}

function isAlphabetOnly(password) {
  return /^[a-zA-Z]+$/.test(password);
}

function hasLetterNumberSymbol(password) {
  return /[a-zA-Z]/.test(password) && /\d/.test(password) && /[^a-zA-Z0-9]/.test(password);
}

function isRepeatedCharacters(password) {
  return /^([a-zA-Z0-9])\1+$/.test(password);
}

function containsBirthYear(password) {
  return /(19|20)\d{2}/.test(password);
}

function containsEmailPart(password, email) {
  if (!email) return false;
  const localPart = email.split("@")[0].toLowerCase();
  return password.toLowerCase().includes(localPart);
}

function containsWeakPatterns(password) {
  const common = ["123456", "password", "qwerty", "admin", "111111"];
  return common.includes(password.toLowerCase());
}

// Main function: return feedback text(weak/strong/etc)
function checkPasswordStrength(password, email = "") {
  if (!password || password.length < 8) {
    return "Too short. Use at least 8 characters.";
  }
  if (isNumericOnly(password)) {
    return "Password cannot be only numeric.";
  }
  if (isAlphabetOnly(password)) {
    return "Password should contain numbers or special characters.";
  }
  if (!hasLetterNumberSymbol(password)) {
    return "Use a mix of letters, numbers, and symbols.";
  }
  if (isRepeatedCharacters(password)) {
    return "Avoid repeated characters.";
  }
  if (containsBirthYear(password)) {
    return "Don't use your birth year.";
  }
  if (containsEmailPart(password, email)) {
    return "Password shouldn't contain your email/username.";
  }
  if (containsWeakPatterns(password)) {
    return "Avoid common passwords like '123456', 'password', etc.";
  }
  return "Strong password!";
}

// -----------------------------------------
// Visual feedback while entering passwords
// -----------------------------------------

function addTooltip(passwordInput, tooltip) {
  const email = document.querySelector("input[type='email']")?.value || "";

  // live feedback message element
  let feedbackText = document.createElement("div");
  feedbackText.style.fontSize = "12px";
  feedbackText.style.marginTop = "4px";
  feedbackText.style.fontWeight = "bold";
  passwordInput.parentNode.appendChild(feedbackText);

  passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;
    const feedback = checkPasswordStrength(password, email);

    //  tooltip 
    tooltip.textContent = feedback;
    tooltip.style.display = "block";

    
    feedbackText.textContent = feedback;

    // Styling
    if (password.length < 8 || feedback !== "Strong password!") {
      passwordInput.style.borderBottom = "2px solid red";
      passwordInput.style.border = "2px solid red";
      feedbackText.style.color = "red";
    } else {
      passwordInput.style.borderBottom = "2px solid green";
      passwordInput.style.border = "2px solid green";
      feedbackText.style.color = "green";
    }
  });
}

// ---------------------------
// Insert tooltip containers
// ---------------------------

function injectTooltipContainers() {
  const passwordFields = document.querySelectorAll("input[type='password']");

  passwordFields.forEach(passwordInput => {
    if (passwordInput.parentNode?.classList?.contains("tooltip-container")) return;

    const wrapper = document.createElement("div");
    wrapper.className = "tooltip-container";
    wrapper.style.position = "relative";
    wrapper.style.display = "flex";
    wrapper.style.flexDirection = "column";
    wrapper.style.alignItems = "start";
    passwordInput.parentNode.insertBefore(wrapper, passwordInput);
    wrapper.appendChild(passwordInput);

    const tooltip = document.createElement("div");
    tooltip.className = "tooltip-text";
    tooltip.style.fontSize = "12px";
    tooltip.style.marginTop = "4px";
    tooltip.style.color = "#666";
    tooltip.style.display = "none";

    wrapper.appendChild(tooltip);
    addTooltip(passwordInput, tooltip);
  });
}



injectTooltipContainers();

const observer = new MutationObserver(injectTooltipContainers);
observer.observe(document.body, { childList: true, subtree: true });
