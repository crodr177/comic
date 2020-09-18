import { Comic } from "./comics/state/comic.model";

export function mapComicData(comicData): Comic[] {
  return comicData.map(comic => {
    return {
      title: comic.title,
      description: comic.description,
      releaseDate: comic.release_date,
      price: comic.price,
      diamond_id: comic.diamond_id,
    }
  })
}