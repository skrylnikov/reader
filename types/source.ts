export interface IRSSSource {
  type: 'rss';
  url: string;
  name: string;
  id: number;
  logo: string;
}

export type ISource = IRSSSource;
