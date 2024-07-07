# XtraDive WEB 🎓📚

## Descripción del Proyecto

XtraDive es una plataforma diseñada para estudiantes universitarios que facilita la toma de decisiones informadas sobre cursos y profesores. Además, permite a los estudiantes compartir material adicional, conectarse con otros estudiantes y formar comunidades colaborativas. La aplicación busca mejorar la experiencia académica y social de los estudiantes mediante la recopilación y difusión de información relevante y de apoyo.

## Problema ❓

Durante la vida universitaria, los estudiantes a menudo enfrentan dificultades para encontrar profesores que se alineen con su estilo de aprendizaje, construir grupos de estudio y recibir recomendaciones útiles para cursos específicos. La falta de información accesible y confiable puede llevar a decisiones desinformadas y a una experiencia educativa subóptima.

## Propósito 💯

El propósito de XtraDive es ayudar a los estudiantes universitarios a tomar decisiones más informadas sobre sus cursos y profesores, además de fomentar una comunidad de colaboración y apoyo mutuo que incentive el desempeño académico y el desarrollo personal.

## Introducción 📘

XtraDive nace de la necesidad de simplificar el proceso de búsqueda y evaluación de cursos y profesores, así como de proporcionar un espacio para la colaboración y el intercambio de recursos entre estudiantes. La plataforma se basa en la premisa "de estudiantes para estudiantes", ofreciendo un servicio integral que recopila y presenta información valiosa de manera accesible y organizada.

## Objetivos WEB 🎯
### Objetivos para los Desarrolladores 💻
- **Manejar una base de datos:** Este código permite que los desarrolladores puedan administrar las entidades de una manera intuitiva sin complicaciones.

## Entidades Principales 🏷️

1. **User:** Representa a cada usuario registrado. Atributos: nombre, apellido, email, universidad, carrera, rol, entre otros.
2. **Profesor:** Representa a los profesores que serán calificados en la plataforma. Atributos: nombre, cursos, id, apellido.
3. **RatingP:** Calificación de un profesor por parte de un usuario. Atributos: profesor, rating, comentario, etiquetas, autor.
4. **Curso:** Representa a los cursos de la universidad. Atributos: descripción, nombre, profesores, rating, etiquetas.
5. **Carrera:** Representa la carrera en la que se encuentran los usuarios. Atributos: nombre, cursos, universidad.
6. **Universidad:** Representa la institución en la que estudian los usuarios. Atributos: nombre, carreras.
7. **RatingC:** Calificación de un curso por parte de un usuario. Atributos: autor, curso, rating, comentario.
8. **Foro:** Espacio de interacción entre los usuarios. Atributos: nombre, descripción, etiquetas, autor.

## Conclusiones 📝

XtraDive ha logrado crear una plataforma efectiva para que los estudiantes compartan información y colaboren entre sí. Hemos implementado una serie de funcionalidades clave que permiten a los usuarios calificar cursos y profesores, crear y unirse a comunidades, y compartir recursos educativos. A nivel tecnológico, hemos utilizado un stack robusto y buenas prácticas de desarrollo para asegurar la calidad y seguridad de la aplicación.

## Tecnologías Utilizadas 💾

- **Lenguaje de Programación:** Java
- **Framework:** Spring Boot, Spring Data JPA, Spring Security
- **Base de Datos:** PostgreSQL
- **Testing:** TestContainers para pruebas de integración
- **Autenticación y Seguridad:** JWT, BCrypt para hashing de contraseñas, HTTPS

## Instalación y Uso 🛠️

1. **Clonar el Repositorio:**
   ```bash
   git clone https://github.com/tu_usuario/xtradive.git
   ```

2. **Configurar la Base de Datos:**
   Configurar las credenciales de la base de datos PostgreSQL en el archivo `application.properties`.

3. **Ejecutar la Aplicación:**
   ```bash
   mvn spring-boot:run
   ```

4. **Acceder a la Aplicación:**
   La aplicación estará disponible en `http://localhost:8080`.

## Licencia 👌🏻

MIT License

Copyright (c) 2024 Grupo 3 DBP CS 3031 UTEC

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contacto 📧

Para cualquier consulta o sugerencia, por favor contacta a [flavia.honores@utec.edu.pe](mailto:dbp.cs2031@utec.edu.pe), [sofia.ku@utec.edu.pe](mailto:dbp.cs2031@utec.edu.pe), [breysi.salazar@utec.edu.pe](mailto:dbp.cs2031@utec.edu.pe), [miguel.ucanani@utec.edu.pe](mailto:dbp.cs2031@utec.edu.pe) o [angie.kelly@utec.edu.pe](mailto:dbp.cs2031@utec.edu.pe).

---

¡Gracias por contribuir a hacer de XtraDive una comunidad estudiantil colaborativa y enriquecedora! 🎉