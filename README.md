# Pokemon Ultimate List

Este proyecto es una aplicación web que muestra una lista de Pokémon y permite ver los detalles de cada uno de ellos.

![Video de demostración del proyecto angular-pokemon](src/assets/img/demo-angular-pokemon.gif)

## Características

- Lista de Pokémon: Muestra una lista de Pokémon con su imagen y nombre.
- Detalles de Pokémon: Permite ver los detalles de un Pokémon seleccionado, incluyendo su imagen, nombre, ID, habilidades, tipos y movimientos.
- Ordenamiento de movimientos: Los movimientos del Pokémon se muestran ordenados por nivel de aprendizaje.

## Tecnologías utilizadas

- Angular: un framework de desarrollo de aplicaciones web en TypeScript.
- HTML y CSS: para la estructura y estilo de la aplicación.
- PokéAPI: una API que proporciona datos de los Pokémon, utilizada para obtener la información necesaria.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Abre una terminal en el directorio raíz del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias:

```bash
npm install
```

4. Inicia la aplicación con el siguiente comando:

```bash
ng serve
```

5. Abre tu navegador web y visita `http://localhost:4200` para ver la aplicación en funcionamiento.

## Estructura del proyecto

El proyecto está estructurado de la siguiente manera:

- **components/header**: Contiene el componente de encabezado de la aplicación, que muestra el título, unbackground de fondo con parallax, partículas interactivas haciendo click, y un botón para hacer scroll y pasar a la siguiente sección.
- **components/pokemons-list**: Contiene el componente de la lista de Pokémons, que muestra la lista de Pokémons con su imagen y nombre.
- **components/pokemon-detail**: Contiene el componente de los detalles de Pokémon, que muestra la imagen, nombre, ID, habilidades, tipos y movimientos del Pokémon seleccionado.

## Contribución

Si deseas contribuir a este proyecto, puedes seguir los siguientes pasos:

1. Haz un fork de este repositorio.
2. Crea una rama para tu nueva función (`git checkout -b nueva-funcion`).
3. Realiza tus cambios y haz commits (`git commit -m 'Agrega nueva función'`).
4. Sube los cambios a tu repositorio remoto (`git push origin nueva-funcion`).
5. Abre un pull request en este repositorio.

## Licencia

Este proyecto está bajo la licencia MIT. Puedes consultar el archivo [LICENSE](LICENSE) para obtener más información.

## Contacto

Si tienes alguna pregunta o sugerencia acerca de este proyecto, no dudes en contactarme a través de mi correo electrónico o visitando mi perfil de GitHub.

