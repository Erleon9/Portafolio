# 📸 Guía de Configuración de Imágenes

## ✅ Logos Ya Configurados

Los logos de las empresas ya están instalados y funcionando:

1. **Giadela** ✅
2. **Grupo Agropecuario El Diamante** ✅  
3. **El Grabaso** ✅
4. **La Granja Agroinsumos** ✅
5. **Campo San Julián** ✅
6. **El Piave** ✅
7. **Agro Farm** ✅

### 📁 Ubicación de las Imágenes
Todos los logos están en: `public/images/companies/`

### 1. Tu Foto Personal
Necesitas una foto profesional tuya en el campo agrícola. Súbela a un servicio como:
- Google Drive (hacer público y obtener link directo)
- Imgur
- Cloudinary
- O cualquier hosting de imágenes

### 2. Actualizar Solo Tu Foto Personal

Los logos de empresas ya están configurados y funcionando. Solo necesitas agregar tu foto personal.

**Para el CV (cv.html):**
```javascript
const imageUrls = {
    profilePhoto: 'https://TU_FOTO_AQUI.jpg',
    // Los logos ya están configurados ✅
};
```

**Para la página web (src/App.jsx):**
```javascript
const imageConfig = {
  profilePhoto: 'https://TU_FOTO_AQUI.jpg',
  // Los logos ya están configurados ✅
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
