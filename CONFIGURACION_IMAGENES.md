# 📸 Guía de Configuración de Imágenes

## Paso a Paso para Actualizar Imágenes

### 1. Tu Foto Personal
Necesitas una foto profesional tuya en el campo agrícola. Súbela a un servicio como:
- Google Drive (hacer público y obtener link directo)
- Imgur
- Cloudinary
- O cualquier hosting de imágenes

### 2. Logos de las Empresas
Busca y prepara los logos de estas empresas:

1. **Giadela**
2. **Grupo Agropecuario El Diamante**
3. **El Grabaso**
4. **La Granja Agroinsumos**
5. **Campo San Julián**
6. **El Piave**

### 3. Actualizar el CV (cv.html)

Abre `cv.html` y busca la sección de JavaScript al final:

```javascript
// Variables para las URLs de imágenes - fácil actualización
const imageUrls = {
    profilePhoto: 'https://TU_FOTO_AQUI.jpg',
    logoGiadela: 'https://LOGO_GIADELA_AQUI.jpg',
    logoDiamante: 'https://LOGO_DIAMANTE_AQUI.jpg',
    logoGrabaso: 'https://LOGO_GRABASO_AQUI.jpg',
    logoGranja: 'https://LOGO_GRANJA_AQUI.jpg',
    logoSanJulian: 'https://LOGO_SAN_JULIAN_AQUI.jpg',
    logoPiave: 'https://LOGO_PIAVE_AQUI.jpg'
};
```

### 4. Actualizar la Página Web (src/App.jsx)

Abre `src/App.jsx` y busca esta sección al inicio:

```javascript
// Configuración de imágenes - fácil de actualizar
const imageConfig = {
  profilePhoto: 'https://TU_FOTO_AQUI.jpg',
  companies: {
    giadela: 'https://LOGO_GIADELA_AQUI.jpg',
    diamante: 'https://LOGO_DIAMANTE_AQUI.jpg',
    grabaso: 'https://LOGO_GRABASO_AQUI.jpg',
    granja: 'https://LOGO_GRANJA_AQUI.jpg',
    sanJulian: 'https://LOGO_SAN_JULIAN_AQUI.jpg',
    piave: 'https://LOGO_PIAVE_AQUI.jpg'
  }
};
```

### 5. Formato de URLs Recomendado

Para **Google Drive**:
1. Sube la imagen
2. Haz clic derecho → "Obtener enlace"
3. Cambia permisos a "Cualquier persona con el enlace"
4. Copia el ID del enlace (la parte entre `/d/` y `/view`)
5. Usa este formato: `https://drive.google.com/uc?export=view&id=TU_ID_AQUI`

Para **Imgur**:
1. Sube la imagen
2. Haz clic derecho sobre la imagen → "Copiar enlace de imagen"
3. Usa directamente ese enlace

### 6. Tamaños Recomendados

- **Foto personal:** 300x300px mínimo, formato cuadrado
- **Logos empresas:** 200x100px máximo, fondo transparente preferible

### 7. Verificar que Funcionan

Después de actualizar:

1. **Para el CV:** Abre `cv.html` in el navegador
2. **Para la página web:** Ejecuta `npm run dev`

Las imágenes deberían aparecer automáticamente reemplazando los placeholders.

---

## 🚨 Importante

- Asegúrate de que las URLs sean **públicas** y **directas**
- Evita enlaces que redirijan o requieran autenticación
- Los formatos JPG, PNG y WebP funcionan perfectamente
- Si una imagen no carga, verifica la URL en una nueva pestaña

## ✅ Una vez configurado

1. El CV se puede convertir a PDF con las imágenes incluidas
2. La página web mostrará todo profesionalmente
3. Ambos estarán sincronizados con la misma información

**¡Todo listo para impresionar a Grupo Alta!**
