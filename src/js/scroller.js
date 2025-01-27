export function scrollToCategory(category) {
  const sectionId = category.toLowerCase().replace(/\s+/g, "-");
  const section = document.getElementById(sectionId);

  if (section) {
    window.scrollTo({
      top:
        section.offsetTop - document.querySelector("header").offsetHeight - 20,
      behavior: "smooth",
    });
  }
}
