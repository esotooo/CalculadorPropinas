# Calculadora de Propinas

Una aplicación sencilla desarrollada con React y TypeScript que permite seleccionar items de un menú, agregar cantidades, elegir el porcentaje de propina y mostrar el subtotal, propina y total a pagar en tiempo real.


---

## Demo

[https://tstipcalculator.netlify.app/](https://tstipcalculator.netlify.app/)

---

## Características

- Menú con items y precios.
- Agregar productos al pedido con cantidad automática.
- Mostrar lista de consumo con cantidades y precios totales por producto.
- Eliminar items del pedido.
- Seleccionar porcentaje de propina (10%, 20%, 50%).
- Mostrar subtotal, monto de propina y total a pagar calculados automáticamente.
- Botón para "Guardar Orden" que limpia el pedido y la propina.

---

## Tecnologías

- React 18+
- TypeScript
- Hooks personalizados para manejo del pedido y propina
- TailwindCSS para estilos

---

## Instalación

Clona el repositorio y accede a la carpeta:

```bash
git clone https://github.com/esotooo/CalculadorPropinas.git
cd CalculadorPropinas
```

Instala las dependencias:

```bash
npm install
```

Ejecuta la aplicacion en modo desarrollo:

```bash
npm run dev
```

Abre en tu navegador la URL que muestra Vite, normalmente:

```bash
http://localhost:5173
```
---

## Estructura principal

- `src/components/MenuItem.tsx` – Componente para mostrar cada producto del menú.
- `src/components/OrderContent.tsx` – Lista de productos agregados con cantidades y opción de eliminar.
- `src/components/OrderTotals.tsx` – Cálculo y visualización de subtotal, propina y total a pagar.
- `src/components/TipPercentage.tsx` – Selector de porcentaje de propina.
- `src/hooks/useOrder.ts` – Hook personalizado para manejar estado del pedido y propina.
- `src/data/menuItems.ts` – Lista de items del menú con id, nombre y precio.
- `src/helpers/formatCurrency.ts` – Función para formatear números como moneda local (GTQ).
- `src/types/types.ts` – Tipos TypeScript para los items del menú y pedidos.

---

## Uso

1. Selecciona productos del menú para agregarlos a tu pedido.
2. Visualiza y controla las cantidades de cada producto en la lista de consumo.
3. Elige el porcentaje de propina deseado entre las opciones disponibles.
4. Observa cómo se actualizan el subtotal, propina y total a pagar en tiempo real.
5. Pulsa "Guardar Orden" para limpiar el pedido y comenzar de nuevo.
6. Diseño completamente responsivo, optimizado para dispositivos móviles y escritorio.


---

## Próximas mejoras

- Persistir estado del pedido en `localStorage` para mantener datos entre sesiones.
- Añadir validaciones y mensajes de error para entradas inválidas.
- Integrar sistema de pago o checkout.
- Implementar modo oscuro para mejorar la experiencia de usuario en entornos con poca luz.

---

## Demo en Video

[Ver demostración (Desktop)](videos/propinasDesktop.mp4)  
[Ver demostración (Mobile)](videos/propinasMobile.mp4)

---

## Autor

Edwin Soto – [https://github.com/esotooo](https://github.com/esotooo) – edwinsoto.developer@gmail.com

