import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const indexPath = path.resolve(__dirname, '../index.html');
const templatePath = path.resolve(__dirname, '../template.htm');

fs.renameSync(indexPath, templatePath);