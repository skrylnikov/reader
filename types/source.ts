export interface IRSSSource {
  type: 'rss';
  url: string;
  name: string;
  id: string;
  logo: string;
}

export type ISourceType = IRSSSource;
