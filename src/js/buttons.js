export function setupLanguageSwitch(buttons, switchLanguage) {
  Object.values(buttons).forEach((button) => {
    button.addEventListener("click", switchLanguage);
  });
}

export function updateActiveButton(buttons, selectedLanguage) {
  Object.values(buttons).forEach((button) => button.classList.remove("active"));
  buttons[selectedLanguage].classList.add("active");
}
