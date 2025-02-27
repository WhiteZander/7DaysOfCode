# Día 3 - Destinos en un Juego Interactivo con JavaScript

## 📌 Descripción del Desafío

En este tercer día del **#7DaysOfCode**, el reto consistía en crear un juego interactivo donde el usuario pudiera elegir su camino dentro del mundo de la programación. A través de una serie de preguntas, el programa debía permitirle seleccionar entre **Front-End** o **Back-End**, elegir una tecnología dentro del área seleccionada y decidir si desea especializarse o convertirse en **Fullstack**.

Finalmente, el usuario podía ingresar **múltiples tecnologías** que le interesara aprender, permitiendo un bucle que mantuviera la interacción abierta hasta que el usuario decidiera finalizar.

## 🧠 Aprendizaje y Reflexión

- Se reforzó el uso de **estructuras de control de flujo** (`if`, `else`, `switch`).
- Se implementó **bucles (`while`)** para capturar múltiples respuestas del usuario.
- Se trabajó con **funciones reutilizables** para modularizar el código.
- Se implementaron validaciones para mejorar la experiencia del usuario y evitar entradas inválidas.

## 💡 Proceso de Resolución

1. **Elección del área de especialización**  
   - Se utilizó `prompt()` para preguntar si el usuario quiere estudiar **Front-End** o **Back-End**.
   - Se validó la entrada para evitar respuestas incorrectas.

2. **Selección de una tecnología dentro del área**  
   - Si el usuario eligió **Front-End**, se le preguntó si quería aprender **React** o **Vue**.
   - Si eligió **Back-End**, las opciones fueron **C#** o **Java**.
   - Se normalizó la entrada para evitar errores con mayúsculas o caracteres especiales.

3. **Decisión sobre el futuro profesional**  
   - Se preguntó si el usuario quería especializarse en su área o convertirse en **Fullstack**.
   - Se mostró un mensaje personalizado según su elección.

4. **Selección de múltiples tecnologías adicionales**  
   - Se implementó un **bucle `while`** para que el usuario pudiera agregar tantas tecnologías como quisiera.
   - Cada vez que ingresaba una nueva tecnología, se mostraba un mensaje confirmando su elección.
   - El bucle se repetía hasta que el usuario ingresara algo distinto de `"ok"`.

## ✨ Funcionalidades Adicionales Implementadas

🔹 **Normalización de entradas con la función `reemplazar()`**  
   - Se creó una función que elimina espacios, caracteres especiales y acentos para evitar errores en la comparación de respuestas.

🔹 **Validaciones de entrada para evitar errores**  
   - Si el usuario ingresaba un valor incorrecto, el programa lo redirigía a repetir la pregunta en lugar de fallar.

---

Este ejercicio ayudó a mejorar la capacidad de manejar **flujo de control en JavaScript**, hacer programas más **interactivos** y reforzar el uso de **bucles, validaciones y funciones modulares**.  

¡Día 3 completado con éxito! 🚀🎮