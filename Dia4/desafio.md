# Día 4 - Juego de Adivinar el Número con JavaScript

## 📌 Descripción del Desafío

En este cuarto día del **#7DaysOfCode**, el reto consistía en desarrollar un juego interactivo donde el usuario intenta adivinar un número secreto. Inicialmente, el programa debía tener un número predefinido entre 0 y 10, pero luego se mejoró utilizando **números aleatorios**.

El usuario tiene **tres intentos** para acertar el número. Si lo consigue, recibe un mensaje de felicitación. Si no, el programa le informa cuál era el número secreto.

## 🧠 Aprendizaje y Reflexión

- Se reforzó el uso de **bucles `for`** para controlar la cantidad de intentos del usuario.
- Se practicó la captura de datos con **`prompt()`** y la interacción mediante **`alert()`**.
- Se implementó la **generación de números aleatorios** con `Math.random()`.
- Se aplicó **control de flujo (`if`, `else`)** para manejar respuestas correctas e incorrectas.

## 💡 Proceso de Resolución

1. **Definir el número secreto**  
   - Se utilizó `prompt()` para que el usuario defina un **rango de valores (mínimo y máximo)**.
   - Se generó un número aleatorio dentro de ese rango usando:
     ```js
     Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
     ```

2. **Solicitar intentos al usuario**  
   - Se creó un **bucle `for`** para permitir **tres intentos**.
   - En cada intento, el usuario ingresa un número con `prompt()`.
   - Se compara el número ingresado con el **número secreto**:
     - Si es correcto, se muestra un mensaje de felicitación y el juego termina.
     - Si es incorrecto, se notifica al usuario y se le permite intentarlo de nuevo.

3. **Mostrar el resultado final**  
   - Si el usuario **no acierta en los tres intentos**, el programa muestra un mensaje con el **número secreto**.

## ✨ Funcionalidades Adicionales Implementadas

🔹 **Selección dinámica del rango de números**  
   - En lugar de un número fijo entre 0 y 10, el usuario puede elegir su propio **mínimo y máximo**.

🔹 **Número secreto aleatorio en cada partida**  
   - Se usó `Math.random()` para hacer que cada partida sea diferente.

🔹 **Validación de intentos**  
   - Se agregó un mensaje final informando al usuario cuando **se acaban los intentos**.

---

Este desafío ayudó a reforzar la lógica de programación aplicada a juegos, el uso de **bucles y condicionales** y la generación de **valores aleatorios** en JavaScript.

¡Día 4 completado con éxito! 🚀🎮