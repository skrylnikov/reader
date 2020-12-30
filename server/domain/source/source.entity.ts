export interface IRSSSource {
  id: number;
  type: 'rss';
  url: string;
  name: string;
  logo: string;
}

export type ISource = IRSSSource;
