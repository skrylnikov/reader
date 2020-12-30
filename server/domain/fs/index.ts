import { Container } from 'nanodi-ts';

export * from './read-file.port';
import { IReadFilePort } from './read-file.port';
import { readFileService } from './read-file.service';

export * from './read-json.port';
import { IReadJsonPort } from './read-json.port';
import { readJsonSevice } from './read-json.service';

export const fsDi = new Container({
  readFile: readFileService as IReadFilePort,
  readJson: readJsonSevice as IReadJsonPort
});
