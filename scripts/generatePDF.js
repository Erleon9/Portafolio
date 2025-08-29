import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generatePDF() {
  console.log('🚀 Iniciando generación de PDF del CV...');
  
  const browser = await puppeteer.launch({
    headless: 'new'
  });
  
  try {
    const page = await browser.newPage();
    
    // Configurar viewport para pantalla estándar
    await page.setViewport({
      width: 1200,
      height: 800,
      deviceScaleFactor: 2
    });
    
    // Ruta al archivo HTML del CV
    const cvPath = join(__dirname, '../cv.html');
    
    if (!fs.existsSync(cvPath)) {
      throw new Error('No se encontró el archivo cv.html');
    }
    
    const fileUrl = `file://${cvPath}`;
    console.log(`📄 Cargando CV desde: ${fileUrl}`);
    
    await page.goto(fileUrl, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });
    
    // Esperar a que las imágenes carguen
    await page.waitForTimeout(2000);
    
    // Configurar opciones del PDF
    const pdfOptions = {
      path: join(__dirname, '../Eros_Leon_CV_Ingeniero_Infraestructura.pdf'),
      format: 'A4',
      printBackground: true,
      margin: {
        top: '10mm',
        right: '10mm',
        bottom: '10mm',
        left: '10mm'
      },
      displayHeaderFooter: false
    };
    
    console.log('📑 Generando PDF...');
    await page.pdf(pdfOptions);
    
    console.log('✅ PDF generado exitosamente: Eros_Leon_CV_Ingeniero_Infraestructura.pdf');
    console.log('📍 Ubicación:', pdfOptions.path);
    
  } catch (error) {
    console.error('❌ Error generando PDF:', error.message);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

// Ejecutar si es llamado directamente
if (import.meta.url === `file://${process.argv[1]}`) {
  generatePDF().catch(console.error);
}

export default generatePDF;
