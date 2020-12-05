export default interface Movie {
  id?: number,
  title?: string,
  poster_path?: string,
  [propName: string]: any
}