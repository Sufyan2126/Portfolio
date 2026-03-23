const Jimp = require('jimp');
const path = require('path');

const images = ['g1.png', 'r1.png', 't1.png'];
const dir = path.join(__dirname, 'src', 'assets', 'project');

function colorDistance(c1, c2) {
  // c1, c2 are rgba objects {r,g,b,a}
  return Math.sqrt(
    Math.pow(c1.r - c2.r, 2) +
    Math.pow(c1.g - c2.g, 2) +
    Math.pow(c1.b - c2.b, 2)
  );
}

async function processImages() {
  for (const imgName of images) {
    const imgPath = path.join(dir, imgName);
    try {
      const image = await Jimp.read(imgPath);
      
      // Assume the top-left pixel is the background color
      const bgColorInt = image.getPixelColor(0, 0);
      const bgColor = Jimp.intToRGBA(bgColorInt);
      
      console.log(`Processing ${imgName}, detected top-left bg color: `, bgColor);

      let replacedCount = 0;
      
      // Iterate over every pixel
      image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
        const r = this.bitmap.data[idx + 0];
        const g = this.bitmap.data[idx + 1];
        const b = this.bitmap.data[idx + 2];
        
        const dist = colorDistance(bgColor, {r, g, b});
        // If the color is within a certain distance from the background color, make it transparent
        if (dist < 30) { 
          // Set alpha to 0
          this.bitmap.data[idx + 3] = 0;
          replacedCount++;
        }
      });
      
      console.log(`${replacedCount} pixels replaced to transparent.`);
      await image.writeAsync(imgPath);
      console.log(`Saved ${imgName}.`);
    } catch (err) {
      console.error(`Error processing ${imgName}:`, err);
    }
  }
}

processImages();
