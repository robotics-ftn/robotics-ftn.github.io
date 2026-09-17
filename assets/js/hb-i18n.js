window.addEventListener("DOMContentLoaded", () => {
  const languageChoosers = document.querySelectorAll("[data-hb-language-chooser]");

  const closeAll = () => {
    languageChoosers.forEach((languageChooser) => {
      languageChooser.dataset.state = "closed";
      languageChooser.setAttribute("aria-expanded", "false");
      languageChooser.nextElementSibling?.classList.add("hidden");
    });
  };

  languageChoosers.forEach((languageChooser) => {
    languageChooser.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      const menu = languageChooser.nextElementSibling;
      const isOpen = languageChooser.dataset.state === "open";

      closeAll();

      if (!isOpen && menu) {
        languageChooser.dataset.state = "open";
        languageChooser.setAttribute("aria-expanded", "true");
        menu.classList.remove("hidden");
      }
    });
  });

  document.addEventListener("click", (e) => {
    if (
      e.target.closest("[data-hb-language-chooser]") === null &&
      e.target.closest(".rl-lang-chooser-menu") === null
    ) {
      closeAll();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAll();
    }
  });
});
