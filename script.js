const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
menuToggle.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

menu.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    menu.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

document.querySelector(".form").addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  const name = form.elements.nome.value.trim();
  const course = form.elements.curso.value.trim();
  const message = `Olá, meu nome é ${name}. Tenho interesse no curso ${course} e gostaria de consultar mais informações.`;
  const whatsappUrl = `https://wa.me/5511916410608?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});
