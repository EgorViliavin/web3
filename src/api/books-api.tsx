import axios from "axios";
/** API пришлось свой сделать, но данные все с Литрес */
export const getBooks = async () =>
  (await axios("https://15a85b925e26fd5b.mokky.dev/tasks")).data;
