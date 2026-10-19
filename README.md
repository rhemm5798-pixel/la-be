# L.A.B Berenice Cabrera: plantilla web

## Abrirla en Visual Studio Code con localhost
1. Descomprime la carpeta `lab-berenice`.
2. En VS Code: Archivo > Abrir carpeta, y elige `lab-berenice`.
3. En Extensiones (Ctrl+Shift+X) instala **Live Server**.
4. Clic derecho en `index.html` > **Open with Live Server**. Se abre en `http://127.0.0.1:5500` y se actualiza al guardar.

Sin extensión, desde la terminal de VS Code: `python3 -m http.server 8000` y abre `http://localhost:8000`.

## Qué editar
- Todo lo que está entre [corchetes] en `index.html` (precios, horario, opiniones, texto de Berenice).
- Número de WhatsApp: la constante `NUMERO` en `script.js` (confirma que 488 149 4823 sea WhatsApp).
- Fotos: guárdalas en `img/` y cambia cada `<div class="ph">…</div>` por `<img src="img/archivo.jpg" alt="descripción">`.
- Colores: variables al inicio de `styles.css`.
