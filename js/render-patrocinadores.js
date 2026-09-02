// Renderiza las tarjetas de patrocinadores a partir de data/patrocinadores.js
(function () {
  function linkAttrs(href) {
    return href && href.startsWith("http")
      ? ' target="_blank" rel="noopener noreferrer"'
      : "";
  }

  function ariaLabel(sponsor) {
    return sponsor.href && sponsor.href !== "#"
      ? `Visitar sitio web de ${sponsor.name}`
      : sponsor.name;
  }

  function renderCarousel(sponsors) {
    return sponsors
      .map(
        (s) => `
        <a
          href="${s.href}"${linkAttrs(s.href)}
          class="flex-shrink-0 w-48 h-48 ${
            s.dark ? "bg-black" : "bg-white"
          } rounded-lg shadow-md p-6 flex items-center justify-center transform-gpu hover:shadow-xl transition-all duration-300"
          aria-label="${ariaLabel(s)}"
          ><img
            src="${s.image}"
            alt="${s.name}"
            class="max-w-full max-h-full object-contain"
            loading="lazy"
        /></a>`
      )
      .join("");
  }

  function renderGrid(sponsors) {
    return sponsors
      .map(
        (s) => `
      <div
        class="${
          s.dark ? "bg-black" : "bg-white"
        } rounded-lg shadow-lg overflow-hidden transform-gpu hover:scale-105 transition-transform duration-300"
        style="opacity: 1; transform: none"
      >
        <a
          href="${s.href}"${linkAttrs(s.href)}
          class="block p-8"
          aria-label="${ariaLabel(s)}"
          ><div class="aspect-[3/2] relative mb-4">
            <img
              src="${s.image}"
              alt="${s.name}"
              class="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
          <h3 class="text-xl font-semibold ${
            s.dark ? "text-white" : "text-verde"
          } text-center">
            ${s.name}
          </h3></a
        >
      </div>`
      )
      .join("");
  }

  document.addEventListener("DOMContentLoaded", function () {
    var carousel = document.getElementById("sponsors-carousel");
    if (carousel) {
      carousel.innerHTML = renderCarousel(
        PATROCINADORES.filter((s) => s.featured)
      );

      var scrollContainer = carousel.parentElement;
      if (scrollContainer && carousel.scrollWidth <= scrollContainer.clientWidth) {
        carousel.classList.remove("w-max");
        carousel.classList.add("w-full", "justify-center");
      }
    }

    var grid = document.getElementById("sponsors-grid");
    if (grid) {
      grid.innerHTML = renderGrid(PATROCINADORES);
    }
  });
})();
