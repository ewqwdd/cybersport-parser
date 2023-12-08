
import "dotenv/config";
import { Article } from "../../lib/scrapping/types";
import { generateArticle } from "../../lib/format/generateArticle";
import { ParseMode } from "telegraf/typings/core/types/typegram";

type TextMessage = [
  string,
  { text: string },
  {
    parse_mode: ParseMode;
  }
];


export const generateText = (article: Article): TextMessage => [
    process.env.CHANNEL_ID!,
    { text: generateArticle(article) },
    {
      parse_mode: "MarkdownV2",
    }
];


