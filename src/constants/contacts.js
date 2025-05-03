// import { fileURLToPath } from 'url';
// import { dirname, join } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// export const PATH_DB = join(__dirname, 'src', 'db', 'db.json');

// import path from 'node:path';
// import { fileURLToPath } from 'node:url';

// const filename = fileURLToPath(import.meta.url);
// const dirname = path.dirname(filename);

// export const PATH_DB = path.join(dirname, '../db/db.json');

import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const PATH_DB = path.resolve(__dirname, '../db/db.json');