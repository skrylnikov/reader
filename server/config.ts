import { config } from 'dotenv';

config({path: './.env'});

type IVariableType = 'string' | 'number';

type INameToType<T extends IVariableType> = T extends 'number' ? number : 
  T extends 'string' ? string : never;

const loadVariable = <T extends IVariableType = 'string'>(name: string, variableType: T): 
  INameToType<T> => {
  const rawVariable = process.env[name];
  if(!rawVariable){
    throw new Error(`${name} in .env not found`);
  }

  if(variableType === 'string'){
    return rawVariable as INameToType<T>;
  }

  if(variableType === 'number'){
    const value = Number(rawVariable);

    if(value.toString() !== rawVariable){
      throw new Error(`${name} is not a number`);
    }

    return value as INameToType<T>;
  }
  throw new Error(`${variableType} not supported`);
}


export const httpConfig = {
post:  loadVariable('HTTP_PORT', 'number'),
}