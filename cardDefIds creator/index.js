const fs = require('fs');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const { executablePath } = require('puppeteer');
const generateJsContent = require('./generateJsContent');
require('dotenv').config();

const outputPath = '../src/data/cardDefIds.ts';

const DATA_DOMAIN = process.env.DATA_URL;

const scrapeData = async () => {
  puppeteer.use(StealthPlugin());
  // launch the puppeteer
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: executablePath(),
  });
  const page = await browser.newPage();
  // Request html from DATA_URL in .env file
  await page.goto(`${DATA_DOMAIN}cards/`);
  // Wait for the cards to load (modify the selector as needed)
  await page.waitForSelector('a.simple-card');
  // Get the HTML content after the cards are loaded
  const html = await page.content();
  // Close the browser
  await browser.close();
  // Parse HTML using Cheerio
  const $ = cheerio.load(html);

  // Filter cardDefId elements with class 'simple-card'
  const cards = [];
  $('a.simple-card').each((_, card) => {
    const name = $(card).attr('data-name');
    const carddefid = $(card).attr('data-carddefid').trim();
    cards.push({ name, carddefid });
  });

  // Generate the content for the .js file
  const jsContent = generateJsContent(cards);

  // Write the content to a .js file
  fs.writeFile(outputPath, jsContent, (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('cardDefIds.ts has been written successfully to "src/data".');
    }
  });
};

scrapeData();
