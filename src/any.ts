import axios from 'axios';
export {};

let url: string =
  'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

const fetchData = async () => {
  interface Article {
    id: number;
    title: string;
    description: string;
  }
  const res = await axios.get(url);
  // 変数dataはデフォルトだとany型となるので、型を定義しないとTSを使う意味がない。そのため、Articleを定義し利用する
  let data: Article[] = res.data;
  // data = [{ id: 1, title: 'title', description: 'desc' }];
  console.log(data);
};

fetchData();
