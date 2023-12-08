import { Article } from "../scrapping/types";
import { textFormatter } from "./textFormat";

export const generateArticle = ({title, content}: Article) => {
    return `*${textFormatter(title)}*\n${textFormatter(content)}`
}