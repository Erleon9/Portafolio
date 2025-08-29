# Despliegue en Netlify

## Configuración Actual

Este proyecto está configurado para desplegarse automáticamente en Netlify con la siguiente configuración:

### Archivos de Configuración

1. **netlify.toml** - Configuración principal de Netlify
2. **.nvmrc** - Versión de Node.js (18)
3. **public/_redirects** - Redirecciones para SPA

### Comando de Construcción

```bash
npm ci && npm run build
```

### Directorio de Publicación

```
dist/
```

## Solución de Problemas

### Si el build falla con "vite: not found"

1. Verificar que `package.json` incluya vite en devDependencies
2. Asegurar que el comando use `npm ci` en lugar de `npm install`
3. Verificar que NODE_VERSION esté configurado correctamente

### Configuración Alternativa

Si la configuración principal falla, puedes usar `netlify.toml.backup` como respaldo.

## Verificación Local

Antes de hacer commit, verifica que el build funcione localmente:

```bash
npm run build
```

Esto debería crear el directorio `dist/` con todos los archivos necesarios.

## Estructura de Archivos Importante

- `src/` - Código fuente de React
- `public/` - Archivos estáticos
- `dist/` - Archivos de construcción (generado automáticamente)
- `scripts/` - Scripts de utilidad
