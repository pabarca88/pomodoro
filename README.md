# Pomodoro Timer

## Descripción

Pomodoro Timer es una aplicación web que implementa la técnica de Pomodoro para la gestión del tiempo. Permite a los usuarios trabajar en sesiones de tiempo definidas seguidas de un breve descanso. La aplicación es completamente interactiva y fácil de usar.

- **Sesion**: Contador de sesiones de trabajo (por defecto 25 minutos).
- **Descanso**: Contador de tiempo para descansos (por defecto 5 minutos).
- **Controles**: Incrementa o decrementa los tiempos de sesión y descanso según tus preferencias.
- **Inicio/Pausa**: Inicia y detiene el temporizador.
- **Restablecer**: Reinicia los tiempos de sesión y descanso a sus valores predeterminados.

## Instalación

Para correr este proyecto localmente en tu máquina, sigue los siguientes pasos:

### 1. Clonar el repositorio

```bash
git clone https://github.com/pabarca88/pomodoro.git
```

### 2. Instalar dependencias
Accede al directorio del proyecto y ejecuta:

```bash
npm install
```

### 3. Iniciar el servidor de desarrollo

```bash
npm run dev
```

### Uso

Ajustar el tiempo de sesión y descanso: Usa los botones para incrementar o disminuir los tiempos de sesión y descanso.
Iniciar/Pausar el temporizador: Haz clic en el botón de Inicio/Pausa para empezar o pausar el temporizador.
Restablecer el temporizador: Haz clic en el botón de Restablecer para volver a los tiempos predeterminados.

### Contribuciones
Las contribuciones son bienvenidas. Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. **Realiza un Fork del repositorio**
   - Haz un *fork* del repositorio en GitHub para trabajar en tu propia copia.

2. **Crea una nueva rama**
   - En tu terminal, crea una nueva rama con el siguiente comando:
     ```bash
     git checkout -b nueva-rama
     ```
   - Reemplaza `nueva-rama` con el nombre que prefieras para tu rama.

3. **Realiza tus cambios**
   - Haz los cambios necesarios en el proyecto en tu nueva rama.

4. **Haz un commit de tus cambios**
   - Una vez que hayas realizado los cambios, realiza un commit con la descripción de lo que modificaste:
     ```bash
     git commit -am 'Descripción de tus cambios'
     ```
   - Asegúrate de reemplazar `'Descripción de tus cambios'` con un mensaje claro sobre lo que has hecho.

5. **Haz un push de tus cambios**
   - Empuja tu rama con los cambios al repositorio remoto en GitHub:
     ```bash
     git push origin nueva-rama
     ```

6. **Crea un pull request**
   - Ve al repositorio original en GitHub y crea un *Pull Request* desde tu rama `nueva-rama` hacia la rama principal del repositorio.
   - En el *Pull Request*, describe los cambios que has realizado para que otros puedan revisarlos.

### Tecnologías usadas
- React
- Bootstrap
- CSS
- JavaScript
- Vercel (para deploy)
