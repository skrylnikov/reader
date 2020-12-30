import { config } from 'dotenv';

config({path: './.env'});

type IVarType = 'string' | 'number';

type INameToType<T extends IVarType> = T extends 'number' ? number : 
  T extends 'string' ? string : never;

const loadVar = <T extends IVarType = 'string'>(name: string, varType: T): 
  INameToType<T> => {
  const rawVar = process.env[name];
  if(!rawVar){
    throw new Error(`${name} in .env not found`);
  }

  if(varType === 'string'){
    return rawVar as any;
  }

  if(varType === 'number'){
    const value = Number(rawVar);

    if(value.toString() !== rawVar){
      throw new Error(`${name} is not a number`);
    }

    return value as any;
  }
  throw new Error(`${varType} not supported`);
}


export const httpConfig = {
  post:  loadVar('HTTP_PORT', 'number'),
};
