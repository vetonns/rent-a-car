function changeLanguage(lang) {
  document.querySelectorAll(".translate").forEach((el) => {
    const translation =
      el.dataset[`lang${lang.charAt(0).toUpperCase() + lang.slice(1)}`];
    if (translation) el.textContent = translation;
  });

  localStorage.setItem("language", lang);

  document.querySelectorAll(".language-menu").forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle("active", isActive);
  });
}

// Al as default language
document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("language") || "al";
  changeLanguage(savedLanguage);
});
