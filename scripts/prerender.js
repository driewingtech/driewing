import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import puppeteer from "puppeteer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Routes to prerender
const routes = ["/", "/about", "/contact", "/projects", "/blog"];

const baseURL = "http://localhost:4173";
const distDir = path.join(__dirname, "..", "dist");

async function prerender() {
  console.log("🚀 Starting prerendering...\n");

  let browser;
  try {
    browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    for (const route of routes) {
      try {
        const page = await browser.newPage();

        // Set viewport
        await page.setViewport({ width: 1920, height: 1080 });

        // Navigate to route
        const url = `${baseURL}${route}`;
        console.log(`📄 Prerendering: ${url}`);

        await page.goto(url, {
          waitUntil: "networkidle2",
          timeout: 30000,
        });

        // Wait for animations to complete
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Get HTML
        const html = await page.content();

        // Create directory if needed
        let filePath;
        if (route === "/") {
          filePath = path.join(distDir, "index.html");
        } else {
          const routeDir = path.join(distDir, route);
          fs.mkdirSync(routeDir, { recursive: true });
          filePath = path.join(routeDir, "index.html");
        }

        // Write HTML file
        fs.writeFileSync(filePath, html, "utf-8");
        console.log(`✅ Saved: ${filePath}\n`);

        await page.close();
      } catch (err) {
        console.error(`❌ Error prerendering ${route}:`, err.message);
      }
    }

    console.log("✨ Prerendering complete!\n");
  } catch (err) {
    console.error("Fatal error during prerendering:", err);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run prerendering
prerender().catch((err) => {
  console.error("Prerendering failed:", err);
  process.exit(1);
});
