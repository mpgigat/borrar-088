# Proyecto: Bóveda de Contraseñas CLI

## Contexto
Una empresa pequeña necesita un sistema de consola para que sus empleados guarden las contraseñas de los servicios que usan (correo, redes sociales, plataformas internas) sin dejarlas en texto plano en un archivo. Tu trabajo es construir esa herramienta.

## Regla obligatoria: NO usar IA (ChatGPT, Copilot, Claude, etc.)

Este proyecto se evalúa por tu capacidad de **diseñar un algoritmo desde cero**, no de reconocer o pegar uno. El valor del ejercicio está en:

- Pensar la lógica de encriptación/desencriptación tú mismo (aunque sea simple, como un cifrado César modificado o un XOR con una clave).
- Fallar, depurar y entender *por qué* falla — eso es lo que construye criterio de programador, no la solución final.
- Que cuando estés en una entrevista técnica o resolviendo un bug en producción sin IA a la mano, tengas la base para razonar el problema.

Usar IA en este ejercicio es hacer trampa a ti mismo: vas a entregar algo que "funciona" pero no vas a poder explicarlo ni defenderlo, y eso se nota en la sustentación.

## Requisitos técnicos (todo debe combinarse)

- **Manejo de archivos**: lectura y escritura con el módulo `fs` de Node.js.
- **Ciclos**: recorrer registros del archivo, iterar caracteres para encriptar/desencriptar.
- **Condicionales**: validar opciones de menú, validar fortaleza de contraseña, manejar errores (archivo no existe, formato inválido, etc.).
- **Funciones**: cada operación debe estar modularizada (nada de todo el código en un solo bloque).

## Formato del archivo de datos

Un archivo `contrasenas.txt` con una cuenta por línea, formato:

```
sitio,usuario,contraseña
gmail,miguel123,MiClave2024!
instagram,mangel_dev,otraClave99
```

## Menú de la aplicación (consola)

```
=== BÓVEDA DE CONTRASEÑAS ===
1. Encriptar archivo de contraseñas
2. Ver contraseñas (desencriptadas)
3. Buscar cuenta por sitio
4. Analizar fortaleza de todas las contraseñas
5. Salir
```

### 1. Encriptar archivo
Lee `contrasenas.txt` en texto plano, aplica tu algoritmo inventado a cada contraseña y guarda el resultado en `contrasenas_encriptadas.txt`, manteniendo sitio y usuario legibles.

### 2. Ver contraseñas
Lee el archivo encriptado, aplica el proceso inverso y muestra la lista completa en consola.

### 3. Buscar cuenta por sitio
Pide un nombre de sitio, recorre el archivo encriptado, si lo encuentra desencripta solo esa contraseña y la muestra. Si no existe, debe informarlo claramente (no debe "explotar" el programa).

### 4. Analizar fortaleza de contraseñas
Recorre todas las contraseñas (ya desencriptadas en memoria) y clasifica cada una como **débil**, **media** o **fuerte** según reglas que tú definas y justifiques (ej: longitud, mayúsculas, números, símbolos). Muestra un resumen tipo:

```
gmail: FUERTE
instagram: DÉBIL (menos de 8 caracteres, sin símbolos)
```

### 5. Salir
Cierra el programa con un mensaje de despedida.

## Restricciones de diseño
- No pueden usar librerías externas de criptografía (`crypto`, `bcrypt`, etc.) — el algoritmo debe ser inventado por el equipo.
- El algoritmo debe ser reversible (lo que se encripta se debe poder desencriptar exactamente igual).
- Manejo de errores obligatorio: si el archivo no existe, el programa no debe crashear.

## Entregables
1. Código fuente (`.js`) organizado en funciones, con comentarios breves explicando el *por qué* de las decisiones clave (especialmente el algoritmo de cifrado).
2. Archivo `contrasenas.txt` de ejemplo con al menos 5 cuentas.
3. Documento corto (media página) explicando en sus propias palabras cómo funciona su algoritmo de cifrado.

## Criterios de evaluación
- Funciona el ciclo completo: encriptar → guardar → leer → desencriptar → mostrar igual al original.
- Código modular (funciones con una responsabilidad clara), no un script monolítico.
- Manejo de errores en operaciones de archivo.
- Capacidad de explicar y defender el algoritmo en la sustentación oral.
