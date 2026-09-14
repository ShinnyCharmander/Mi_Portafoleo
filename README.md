# Portafolio - Rodrigo Peña León

Página de portafolio estática (HTML5 + CSS3 + JavaScript vanilla, sin dependencias) creada a partir de `CV_Rodrigo_Peña.pdf`.

## Estructura

```
portafolio/
├── index.html      Página principal
├── css/style.css   Estilos completos
├── js/script.js    Interactividad (menú móvil, typewriter, animaciones)
└── README.md       Este archivo
```

## Cómo verla

- Doble clic en `index.html` para abrirla en el navegador, o
- En VS Code: clic derecho sobre `index.html` → "Open with Live Server".

## Enlaces de proyectos

Cada tarjeta de proyecto tiene un botón (esquina superior derecha) que hoy abre
la **versión compilada local** de cada app (las carpetas `dist/` de tus proyectos).

Cuando tengas los proyectos publicados o subidos a GitHub, reemplaza en
`index.html` los enlaces `../Proyectos/<nombre>/...` por las URLs reales:

| Proyecto | Línea actual (ejemplo) | Reemplazar por |
| --- | --- | --- |
| Hospital Citas | `../Proyectos/hospital-citas/dist/index.html` | `https://tudominio.vercel.app` o GitHub Pages |
| Division Builds | `../Proyectos/division-builds/dist/index.html` | URL de la web |

Sugerencia gratuita: sube cada proyecto a [GitHub Pages](https://pages.github.com/)
o [Netlify](https://www.netlify.com/) y pega esos enlaces aquí.

## Personalización

- Colores: variables CSS en `css/style.css` dentro de `:root`.
- Roles del hero (máquina de escribir): array `roles` en `js/script.js`.
- Datos de contacto: sección `#contacto` y `.hero-meta` en `index.html`.
- Textos: edita directamente el contenido de `index.html`.

## Contacto

- Email: rodrigo.pleon28@gmail.com
- Teléfono: +56 9 5692 3234
- Ubicación: Paine, Región Metropolitana