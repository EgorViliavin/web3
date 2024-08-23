import { IBooks, IRenameKeyBooks } from "../types";

/**
 *
 * @param data приходит массив данных с ключами в виде snake_case
 * @returns объект с измененными ключами
 */

const renameKey = (data: IBooks[]): IRenameKeyBooks[] => {
  return data.map((item) => {
    return {
      id: item.id,
      date: item.date_written_at,
      price: item.prices.final_price,
      rating: item.rating.rated_avg,
      title: item.title,
    };
  });
};

export default renameKey;
