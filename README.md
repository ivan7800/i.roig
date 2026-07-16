# I. Roig · Universo 404

Web oficial estática de autor preparada para publicar en GitHub Pages en:

```text
https://ivan7800.github.io/i.roig/
```

## Incluye

- Página principal de autor.
- Bibliografía con 7 obras publicadas: novelas y antología.
- Páginas individuales para cada obra.
- Enlaces de compra a Amazon.
- Sección Universo 404, símbolo visual, autor, Nocturne, Proyectos 404 y contacto.
- Música ambiental opcional con preferencia guardada en el navegador.
- SEO básico: canonical correcto para `/i.roig/`, Open Graph, Twitter Card, JSON-LD, sitemap y robots.
- Imágenes optimizadas en WebP con JPG como respaldo.
- Menú móvil accesible y responsive.

## Estructura

```text
i-roig-web-v6.2-final/
├── index.html
├── puerta-404.html
├── reflejo-404.html
├── el-criterio-omega.html
├── el-evangelio-del-nombre-devorado.html
├── los-hijos-del-mono.html
├── ecos-de-los-susurros.html
├── el-verbo-carmesi.html
├── style.css
├── script.js
├── sitemap.xml
├── robots.txt
├── assets/
└── audio/
```

## Publicación en GitHub Pages

1. Borra el contenido antiguo del repositorio `i.roig` si vas a reemplazarlo por completo.
2. Sube **el contenido de esta carpeta**, no el ZIP.
3. En GitHub, entra en **Settings → Pages**.
4. Selecciona la rama principal y la carpeta raíz.
5. Espera a que GitHub publique la web.
6. Comprueba `sitemap.xml`, portada social y navegación móvil.

## Notas de privacidad

La web no incluye analítica ni rastreo por defecto. Solo usa `localStorage` para recordar si el usuario activó la música y el volumen elegido.

## Verificación local rápida

```bash
python -m http.server 8080
```

Después entra en:

```text
http://localhost:8080
```


## v6.2.5 · Sin bloque del símbolo

Se elimina de la web el bloque visual “El símbolo del Universo 404”, incluyendo la sección de la portada y los bloques equivalentes de las fichas de obra.

Motivo: la imagen del símbolo rompía la estética de la página y no era imprescindible para la experiencia principal. La web queda más limpia, más directa y centrada en las obras, el autor, Nocturne y Proyectos 404.

Subida recomendada a GitHub Pages:
1. Descomprime el ZIP.
2. Sube el contenido interno al repositorio.
3. Reemplaza archivos existentes.
4. Espera la publicación de GitHub Pages y abre con Ctrl+F5.


## v6.2.6 — Corrección enlace Amazon

- Corregido el enlace general “Libros en Amazon” para buscar solo `I. Roig`, sin añadir `Universo 404`.
- Conservados los enlaces directos de cada obra a su ficha Amazon individual.
