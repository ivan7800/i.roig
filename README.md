# I. Roig · Universo 404 · v20 SEO Comercial

Versión preparada para GitHub Pages en: https://ivan7800.github.io/i.roig/

## Cambios v20

- Canonical absoluto en todas las páginas.
- OpenGraph y Twitter Card completos con URL absoluta.
- JSON-LD para WebSite, Person, ItemList, Book y BreadcrumbList.
- `sitemap.xml` y `robots.txt` añadidos.
- Nueva sección de conversión: “Por dónde empezar el Universo 404”.
- Manifest PWA actualizado con iconos 192/512/maskable.
- Página `offline.html` y Service Worker actualizado a caché v20.
- Fallbacks JPG optimizados para reducir peso frente a PNG grandes.
- Favicon y Apple touch icon dedicados.

## Publicación

Sube el contenido de esta carpeta a la rama de GitHub Pages del repositorio `i.roig`.
Después abre: https://ivan7800.github.io/i.roig/


---

# I. Roig · Universo 404

Web oficial estática de autor, preparada para publicar en GitHub Pages sin backend ni dependencias externas obligatorias.

## Incluye

- Página principal de autor.
- Bibliografía con 7 novelas publicadas.
- Páginas individuales para cada novela.
- Enlaces de compra a Amazon.
- Sección Universo 404, Portal Apps 404, Artefactos recuperados, símbolo visual, autor, Nocturne y contacto.
- Música ambiental opcional optimizada en OGG/MP3 con WAV como respaldo.
- SEO básico, Open Graph, favicon y color de tema.
- Imágenes optimizadas en WebP con PNG como respaldo.
- Menú móvil accesible y responsive.
- Selector premium de skins visuales integrado: Grieta 404, VHS 1987, Archivo Ω y Evangelio Carmesí.
- Buscador de novelas en el catálogo.
- PWA básica con manifest y service worker para uso offline en GitHub Pages/HTTPS.
- Integración narrativa del Grimorio del Nombre Devorado como artefacto externo del Universo 404.
- Acceso premium a Portal Apps 404 desde portada, sección propia, navegación y contacto.

## Estructura

```text
i-roig-web-final-audited/
├── index.html
├── puerta-404.html
├── el-criterio-omega.html
├── el-evangelio-del-nombre-devorado.html
├── los-hijos-del-mono.html
├── ecos-de-los-susurros.html
├── reflejo-404.html
├── el-verbo-carmesi.html
├── style.css
├── manifest.webmanifest
├── sw.js
├── script.js
├── assets/
└── audio/
```

## Publicación en GitHub Pages

1. Sube el contenido de esta carpeta al repositorio.
2. En GitHub, entra en **Settings → Pages**.
3. Selecciona la rama principal y la carpeta raíz.
4. Guarda y espera a que GitHub publique la web.

## Notas de privacidad

La web no incluye analítica ni rastreo por defecto. Solo usa `localStorage` para recordar si el usuario activó la música y el volumen elegido.

## Verificación local rápida

Abre `index.html` en el navegador o publica la carpeta con cualquier servidor estático:

```bash
python -m http.server 8080
```

Después entra en `http://localhost:8080`.


## Versión v13 auditada

- Service Worker actualizado y versionado para evitar que GitHub Pages muestre versiones antiguas.
- Catálogo editorial estabilizado con rejilla cerrada por breakpoints.
- Foco accesible reforzado.
- Verificación de enlaces internos, assets, manifest y sintaxis JavaScript.
- Informe completo: `AUDIT_REPORT_V11.md`.


## v14 — Auditoría final

- Selector de skins recuperado como sección premium de Atmósferas, sin barra flotante ni residuos visuales.
- Enlace general de Amazon limitado a búsqueda de libros por `I. Roig`.
- WAV eliminado: quedan OGG y MP3 para menor peso.
- Service worker actualizado a v14.


## v15 — Portal Apps 404

- Añadido acceso principal a `https://ivan7800.github.io/Portal-Apps-404/`.
- Nuevo botón premium en la portada.
- Nueva sección `Portal Apps 404` integrada bajo el bloque de novelas publicadas.
- Nuevo enlace en navegación y redes/contacto.
- Manifest actualizado con shortcut local a la sección de proyectos.
- Service worker actualizado a caché `i-roig-universo-404-v15-projects` para forzar refresco de GitHub Pages.


## v16 — Auditoría final comercial

- Añadida política CSP básica en todas las páginas HTML.
- Añadido `referrer=strict-origin-when-cross-origin`.
- Menú reforzado para tablet: pasa antes a navegación hamburguesa para evitar desbordes.
- Fichas individuales actualizadas con enlace a Proyectos y botón `Portal Apps 404`.
- Imágenes del catálogo principal cargan en lazy-load para mejorar rendimiento inicial.
- Service Worker actualizado a `i-roig-universo-404-v16-final-audit`, con manejo de peticiones Range y caché más defensiva.
- Manifest actualizado con descripción ampliada y categorías PWA.


## v17 - Corrección visual Portal Apps 404

- Ajustada la tarjeta de proyectos para evitar texto recortado en escritorio y tablet.
- Rediseñado el rótulo derecho como `PORTAL 404`, más limpio y proporcional.
- Añadidas reglas responsive defensivas para que el módulo no desborde.
- Actualizado Service Worker a caché v17.

## v18 — Corrección móvil real de Portal Apps 404

- Forzado de una sola columna en la sección `Portal Apps 404` en móvil y tablet.
- Eliminado el fallo por el que el texto se partía palabra por palabra en iPhone.
- Ajustados tamaños, anchos, `word-break`, `hyphens`, botones y tarjeta visual para pantallas estrechas.
- Reproductor de música compactado en móvil para no tapar el botón principal.
- Service Worker actualizado a `i-roig-universo-404-v18-mobile-portal-fix` para evitar caché antigua en GitHub Pages.



## v19 — Grimorio final y auditoría GitHub

- Rediseñado el sello del Grimorio para que no parezca un círculo vacío: ahora funciona como marca Ω/404, más narrativa y premium.
- Endurecida la CSP eliminando `unsafe-inline` en estilos y añadiendo `frame-ancestors 'none'`.
- Añadida página `404.html` personalizada para GitHub Pages.
- Menú de fichas individuales alineado con la portada: Proyectos, Artefactos y Símbolo disponibles desde cualquier ficha.
- Ajustes móviles extra para que el bloque Grimorio no desborde y los botones sean cómodos en iPhone.
- Service Worker actualizado a `i-roig-universo-404-v19-grimorio-final` para forzar refresco de caché.
