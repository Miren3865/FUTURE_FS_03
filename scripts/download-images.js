const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    filename: 'hero-bg.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28',
    filename: 'product-1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb',
    filename: 'product-2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519',
    filename: 'product-3.jpg'
  }
];

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const filepath = path.join(__dirname, '..', 'public', filename);
    const file = fs.createWriteStream(filepath);

    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
};

const downloadAllImages = async () => {
  for (const image of images) {
    await downloadImage(image.url, image.filename);
  }
};

downloadAllImages().catch(console.error); 