# Día 5 - Lista de Compras Organizada con JavaScript  

## 📌 Descripción del Desafío  

En este quinto día del **#7DaysOfCode**, el reto consistía en desarrollar un programa que permitiera crear una **lista de compras organizada por categorías**. En lugar de anotar los productos sin orden, el usuario podía clasificarlos en diferentes grupos para optimizar su visita al supermercado.  

El objetivo principal era **practicar el manejo de arrays y estructuras de control de flujo** para almacenar y mostrar los datos de manera estructurada.  

## 🧠 Aprendizaje y Reflexión  

- Se reforzó el uso de **arrays** para almacenar múltiples elementos de forma ordenada.  
- Se trabajó con **bucles `while`** para permitir al usuario agregar múltiples productos de manera continua.  
- Se implementó **estructuras condicionales `switch` y `if-else`** para clasificar los productos en categorías.  
- Se aplicaron **métodos de arrays** como `.push()` para agregar elementos.  
- Se reforzó la importancia de **validar la entrada del usuario** para evitar errores.  

## 💡 Proceso de Resolución  

1. **Creación de listas separadas por categorías:**  
   - Se definieron arrays vacíos (`frutas`, `lácteos`, `congelados`, `dulces`) para almacenar los productos ingresados por el usuario.  

2. **Solicitud de productos al usuario:**  
   - Se utilizó un **bucle `while(true)`** para permitir la adición continua de productos.  
   - Se preguntó al usuario si deseaba agregar un producto con un `prompt()`.  
   - Se validó la entrada (`"sí"` o `"no"`) para continuar o finalizar el programa.  

3. **Clasificación del producto:**  
   - Se solicitó al usuario que ingresara el nombre del producto.  
   - Se le pidió seleccionar una categoría mediante un `prompt()` con opciones predefinidas.  
   - Se utilizó un **`switch`** para agregar el producto a la categoría correspondiente.  

4. **Manejo de errores y validaciones:**  
   - Si el usuario ingresaba una categoría inválida, se le pedía que seleccionara nuevamente.  
   - Se evitó que el programa fallara ante respuestas inesperadas.  

5. **Muestra de la lista final organizada:**  
   - Si el usuario respondía `"no"` a la primera pregunta, el programa imprimía la lista de compras organizada por categorías.  

## ✨ Funcionalidades Adicionales Implementadas  

🔹 **Corrección de errores en la categorización:**  
   - En el código original, todos los productos se agregaban a la lista de `frutas`. Se corrigió para que cada producto se guardara en su categoría correspondiente.  

🔹 **Validación mejorada en la selección de categorías:**  
   - Si el usuario ingresaba una opción incorrecta, el programa solicitaba una nueva entrada en lugar de aceptar un valor inválido.  

🔹 **Manejo de respuestas no esperadas:**  
   - Se agregó un mensaje de alerta si el usuario ingresaba una respuesta que no fuera `"sí"` o `"no"`.  

---

Este ejercicio ayudó a reforzar el uso de **arrays, bucles y estructuras condicionales**, además de mejorar la experiencia del usuario al proporcionar una forma eficiente de organizar sus compras.  

¡Día 5 completado con éxito! 🚀🛒  