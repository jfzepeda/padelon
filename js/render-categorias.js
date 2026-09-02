// Renderiza las tarjetas de categorías a partir de data/categorias.js
(function () {
  function gridColsClass(count) {
    switch (count) {
      case 1:
        return "grid-cols-1";
      case 2:
      case 4:
        return "grid-cols-1 md:grid-cols-2";
      case 3:
      case 5:
      case 6:
        return "grid-cols-1 md:grid-cols-3";
      default:
        return "grid-cols-1 md:grid-cols-3";
    }
  }

  function renderCard(c) {
    return `
        <a href="${c.href}" target="_blank">
          <div
            class="bg-verde/30 backdrop-blur-sm p-6 rounded-xl border border-verde/40 shadow-xl relative overflow-hidden"
            style="transform: none"
          >
            <div
              class="absolute top-0 right-0 bg-verde text-marfil px-3 py-1 text-sm"
            >
              ${c.badge}
            </div>
            <div class="flex items-start gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-star text-marfil flex-shrink-0"
              >
                <polygon
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                ></polygon>
              </svg>
              <div>
                <div class="text-xl font-semibold mb-2 text-marfil">
                  ${c.name}
                </div>
                <div class="text-3xl font-bold text-marfil mb-2">
                  ${c.price}
                </div>
                <div class="text-sm text-marfil/80">
                  ${c.date}
                </div>
              </div>
            </div>
          </div>
        </a>`;
  }

  document.addEventListener("DOMContentLoaded", function () {
    var grid = document.getElementById("categorias-grid");
    if (!grid) return;

    grid.classList.remove("grid-cols-1");
    grid.classList.add(...gridColsClass(CATEGORIAS.length).split(" "));
    grid.innerHTML = CATEGORIAS.map(renderCard).join("");
  });
})();
