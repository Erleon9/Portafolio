# Portafolio Profesional - Eros Alejandro León Félix

## Ingeniero de Infraestructura y Sistemas - Especialista en Sector Agrícola

Este proyecto contiene tanto el CV en HTML como la página web profesional en React para postularse a la vacante de Ingeniero de Infraestructura.

### 📋 Contenido del Proyecto

1. **CV en HTML** (`cv.html`) - Listo para convertir a PDF
2. **Página Web en React** - Para desplegar en Netlify
3. **Sistema de imágenes configurable** - Fácil actualización de logos y fotos

### 🚀 Configuración e Instalación

#### Paso 1: Instalar Dependencias
```bash
npm install
```

#### Paso 2: Configurar Imágenes

**Para el CV (cv.html):**
Edita las variables JavaScript al final del archivo:
```javascript
const imageUrls = {
    profilePhoto: 'https://tu-url-de-foto-aqui.jpg',
    logoGiadela: 'https://logo-giadela.jpg',
    logoDiamante: 'https://logo-diamante.jpg',
    // ... más logos
};
```

**Para la página web React (src/App.jsx):**
Edita el objeto `imageConfig` al inicio del archivo:
```javascript
const imageConfig = {
    profilePhoto: 'https://tu-url-de-foto-aqui.jpg',
    companies: {
        giadela: 'https://logo-giadela.jpg',
        diamante: 'https://logo-diamante.jpg',
        // ... más logos
    }
};
```

### 🌐 Despliegue

#### Desarrollo Local
```bash
npm run dev
```
Abre http://localhost:3000

#### Construcción para Producción
```bash
npm run build
```

#### Despliegue en Netlify

1. **Opción A: Arrastra y Suelta**
   - Ejecuta `npm run build`
   - Arrastra la carpeta `dist` a Netlify

2. **Opción B: Conecta con Git**
   - Sube el proyecto a GitHub
   - Conecta el repositorio en Netlify
   - La configuración en `netlify.toml` se aplicará automáticamente

### 📄 CV en PDF

1. Abre `cv.html` en tu navegador
2. Usa Ctrl+P (o Cmd+P en Mac)
3. Selecciona "Guardar como PDF"
4. Ajusta márgenes a "Mínimos" para mejor resultado

### 🏢 Empresas Colaboradoras

El sistema está configurado para mostrar logos de las siguientes empresas:
- Giadela
- Grupo Agropecuario El Diamante
- El Grabaso
- La Granja Agroinsumos
- Campo San Julián
- El Piave

### 📧 Información de Contacto Incluida

- **Nombre:** Eros Alejandro León Félix
- **Teléfono:** 6624-693959
- **Email:** erosleon9@gmail.com
- **Especialidad:** Ingeniero de Infraestructura - Sector Agrícola

### ✨ Características Destacadas

- ✅ Diseño responsivo (se adapta a móviles y tablets)
- ✅ Optimizado para la vacante específica de Grupo Alta
- ✅ Experiencia específica en sector agrícola destacada
- ✅ Sistema de imágenes fácil de actualizar
- ✅ CV profesional listo para PDF
- ✅ Página web moderna con React
- ✅ Configurado para despliegue inmediato en Netlify

### 🔧 Tecnologías Utilizadas

- **Frontend:** React 18 + Vite
- **Estilos:** CSS3 con variables personalizadas
- **Iconos:** React Icons
- **Despliegue:** Netlify
- **CV:** HTML5 + CSS3

### 📱 Compatibilidad

- Todos los navegadores modernos
- Dispositivos móviles y tablets
- Optimizado para impresión (CV)
- Carga rápida y SEO amigable

---

**¡Listo para impresionar en la entrevista con Grupo Alta!**
