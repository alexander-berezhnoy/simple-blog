import path from 'path';

const root = path.resolve(__dirname, '../', '../');

export default {
    outputPath: path.resolve(root, 'build'),
    entryPath: path.resolve(root, 'src/index.js'),
    templatePath: path.resolve(root, 'src/index.html'),
    imagesFolder: 'images',
    cssFolder: 'css',
    jsFolder: 'js',
    root
};
