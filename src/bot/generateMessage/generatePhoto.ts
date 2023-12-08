import "dotenv/config";
import { Article } from "../../lib/scrapping/types";
import { generateArticle } from "../../lib/format/generateArticle";
import { ParseMode } from "telegraf/typings/core/types/typegram";

type PhotoMessage = [
  string,
  { url: string },
  {
    caption: {
      text: string;
    };
    parse_mode: ParseMode;
  }
];


export const generatePhoto = (article: AllRequired<Article>): PhotoMessage => [
  process.env.CHANNEL_ID!,
  { url: article.mainPicture },
  {
    caption: {
      text: generateArticle(article),
    },
    parse_mode: "MarkdownV2",
  },
];
