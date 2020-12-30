import { di } from '../di';
import { IReadJsonPort } from './read-json.port';

export const readJsonSevice: IReadJsonPort = async <T>(path: string): Promise<T> => {
  const readFile = di.get('fs').get('readFile');
  const file = await readFile(path);
  return JSON.parse(file);
}
