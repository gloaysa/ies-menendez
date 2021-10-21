export interface Folder {
  title: string;
  image: string;
  content?: string;
  type: 'video' | 'pdf' | 'classified';
}
