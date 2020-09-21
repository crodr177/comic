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

export function randomBgColor() {
  const bgColors = ['#41a6de', '#fedb0e', '#f6343c', '#d01e00', '#4c69f6'];

  const random = Math.floor(Math.random() * bgColors.length);
  return bgColors[random];
}