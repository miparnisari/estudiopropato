# estudiopropato.com.ar

Aprender Git con este tutorial interactivo en español: https://learngitbranching.js.org/?locale=es_ES

## Setup

1. Instalar Node.js para Windows: https://nodejs.org/es/
1. Instalar git para Windows: https://git-scm.com/download/win
1. Crear cuenta en GitHub: https://github.com/join?source=header-home
1. Copiar este proyecto a la cuenta de GitHub siguiendo estas instrucciones: https://help.github.com/es/github/getting-started-with-github/fork-a-repo#fork-an-example-repository
1. Descargar la copia del proyecto a la computadora siguiendo estas instrucciones: https://help.github.com/es/github/getting-started-with-github/fork-a-repo#step-2-create-a-local-clone-of-your-fork

## Hacer cambios

En la carpeta donde se descargó el proyecto:

1. En la linea de comando, correr `git checkout -b cambios`.
1. En la linea de comando, correr: `npm install`.
1. En la linea de comando, correr: `gulp`. La web va a empezar a correr en http://localhost:3000/ y con cada cambio se deberia recargar automaticamente la pagina.

## Subir cambios

Cuando el cambio este listo para subirse la pagina:

1. En la linea de comando, correr `git commit -a -m "resumen del cambio"`
1. En la linea de comando, correr `git push origin/cambios`.
1. Crear un "pull request" (un pedido de actualización): https://help.github.com/es/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request

Una vez que el cambio este aprobado se va a enviar automaticamente a producción.