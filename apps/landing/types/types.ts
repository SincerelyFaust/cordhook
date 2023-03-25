export type Releases = Array<Release>;

export interface Release {
  name: string;
  body: string;
  assets: Assets[];
  html_url: string;
  published_at: Date;
  id: number;
}

export interface Assets {
  download_count: number;
  name: string;
  browser_download_url: string;
  size: number;
}
