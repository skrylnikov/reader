import { readFile } from 'fs';
import { promisify } from 'util';

import { IReadFilePort } from './read-file.port';

export const readFileService: IReadFilePort = (path: string) => promisify(readFile)(path, { encoding: 'utf8'});
