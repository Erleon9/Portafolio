#!/bin/bash

# Script de construcción para Netlify
echo "🚀 Iniciando construcción del proyecto..."

# Verificar que estamos en el directorio correcto
echo "📁 Directorio actual: $(pwd)"

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm ci --production=false

# Verificar que Vite esté disponible
echo "🔍 Verificando Vite..."
if ! command -v npx vite &> /dev/null; then
    echo "❌ Vite no encontrado, instalando localmente..."
    npm install vite @vitejs/plugin-react --save-dev
fi

# Construir el proyecto
echo "🏗️ Construyendo el proyecto..."
npm run build

# Verificar que la construcción fue exitosa
if [ -d "dist" ]; then
    echo "✅ Construcción completada exitosamente"
    echo "📊 Contenido del directorio dist:"
    ls -la dist/
else
    echo "❌ Error: El directorio dist no fue creado"
    exit 1
fi
