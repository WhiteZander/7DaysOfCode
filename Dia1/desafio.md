# Día 1 - Comparación de Variables en JavaScript

## 📌 Descripción del Desafío

En este primer día del **#7DaysOfCode**, el reto consistía en identificar y corregir problemas comunes en la comparación de valores en JavaScript. Al trabajar con diferentes tipos de datos (números y strings), el lenguaje puede generar resultados inesperados debido a la conversión implícita de tipos.

## 🧠 Aprendizaje y Reflexión

- Se reforzó la diferencia entre **`==` (comparación no estricta)** y **`===` (comparación estricta)**.
- Se comprendió cómo JavaScript convierte automáticamente los valores en algunas comparaciones, lo que puede causar errores.
- Se aprendió a evitar estos errores utilizando comparaciones estrictas y verificando los tipos de datos.

## 💡 Proceso de Resolución

Inicialmente, las comparaciones fallaban porque `==` permitía la conversión implícita de tipos, lo que llevaba a resultados inesperados. Para solucionarlo:

1. Se identificaron las variables que estaban siendo comparadas sin tener en cuenta su tipo.
2. Se utilizó `===` en los casos donde era necesario verificar tanto el valor como el tipo.
3. Se añadió una condición combinada (`==` y `!==`) en las comparaciones para detectar valores iguales pero de tipos distintos.
4. Se verificaron los resultados en la consola para confirmar que el comportamiento del código era el esperado.

Este ejercicio fue una excelente manera de reforzar el concepto de **comparación de valores en JavaScript** y entender la importancia de las conversiones de tipo al trabajar con datos dinámicos.