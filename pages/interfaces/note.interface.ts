export interface NoteType {
  id: string,
  title?: string,
  subtitles?: string,
  body: string,
  author: string,
  createdAt: Date,
  updatedAt: Date,
}