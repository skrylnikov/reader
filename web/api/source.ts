import { Fetcher } from 'fetcher-ts';
import { option } from 'fp-ts';
import * as t from 'io-ts';

import { ISource } from '../../types/source';

type ISourceListResult = {
  code: 200;
  payload: ISource[];
};

const TSource = t.type({
  type: t.literal('rss'),
  url: t.string,
  name: t.string,
  id: t.number,
  logo: t.string,
});

const TSourceList = t.array(TSource);

const fetcher = new Fetcher<ISourceListResult, ISource[]>('/api/source-list');

fetcher.handle(200, (data) =>{
  return data;
}, TSourceList);


fetcher.discardRest(() => []);

export const getSourceList = async () => {
  const [result, errors] = await fetcher.run();
  
  if(option.isSome(errors)){
    console.error(errors.value);
  }
  return result;
}