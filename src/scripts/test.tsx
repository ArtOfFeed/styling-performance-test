import * as playwright from 'playwright';
import { performance } from 'perf_hooks';

async function main() {
  const url = 'http://localhost:3000';
  const rendersPerFramework = 10;
  const attempts = 10;

  const type = playwright.chromium;
  const browser = await type.launch();
  const page = await browser.newPage();

  await page.goto(url);

  const measureFramework = async (framework: 'atlassian' | 'adobe' | 'material' | 'microsoft' | 'chakra') => {
    console.log('Testing:', framework);
    const start = performance.now();
    for (let index = 0; index < rendersPerFramework; index++) {
      await page.click(`#${framework}`);
      await page.waitForSelector('#root');
      await page.click('#none');
    }
    const end = performance.now();
    return end - start;
  }

  let totalAtlassian = 0;
  let totalAdobe = 0;
  let totalMaterial = 0;
  let totalMicrosoft = 0;
  let totalChakra = 0;

  for (let index = 0; index < attempts; index++) {
    console.log(`--- Attempt ${index + 1} ---`);
    // totalAtlassian += await measureFramework('atlassian');
    // totalAdobe += await measureFramework('adobe');
    // totalMaterial += await measureFramework('material');
    // totalMicrosoft += await measureFramework('microsoft');
    totalChakra += await measureFramework('chakra');
  }

  console.log('--- RESULTS ---');
  // console.log('Average Atlassian:', totalAtlassian / (rendersPerFramework * attempts), 'ms');
  // console.log('Average Adobe:', totalAdobe / (rendersPerFramework * attempts), 'ms');
  // console.log('Average Material:', totalMaterial / (rendersPerFramework * attempts), 'ms');
  // console.log('Average Microsoft:', totalMicrosoft / (rendersPerFramework * attempts), 'ms');
  console.log('Average Chakra:', totalChakra / (rendersPerFramework * attempts), 'ms');
  
  await browser.close();
}

main();