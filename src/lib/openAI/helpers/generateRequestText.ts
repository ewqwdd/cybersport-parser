
export const genereteRequestText = (content: string) => (
`Я тебе сейчас скину сплошной текст, ты должен его отфарматировать  и переписать своими словами. УКОРОТИ ЕГО ТАК ЧТОБЫ ТЕКСТ БЫЛ ПРИМЕРНО 400-500 СИМВОЛОВ В ДЛИНУ И НЕ БОЛЕЕ :) СИМВОЛОВ. Попробуй разные виды текста, чтоб он выглядел читабельнее. Никнеймы игроков делай bold, а цитаты spoiler, остальное все на твое усмотрение. Твой ответ должен содержать только отформатированый текст и нечего 
больше.
Вот правила по которым ты должен отформатировать его.
*bold text*
__italic__
\`code\`
[inline URL](https://developers.sinch.com)
~~strikethrough~~
||spoiler||
Ты можешь использовать только эти правила, никаких больше.
Вот текст:
${content}
`
)


export const genereteRequestText2 = (content: string) => (
    `Я тебе сейчас скину сплошной текст, ты должен его отфарматировать  и переписать своими словами. УКОРОТИ ЕГО ТАК ЧТОБЫ ТЕКСТ БЫЛ ПРИМЕРНО 400-500 СИМВОЛОВ В ДЛИНУ И НЕ БОЛЕЕ 600 СИМВОЛОВ, считая пробелы. Попробуй разные виды текста, чтоб он выглядел читабельнее. Никнеймы игроков делай bold, а цитаты отдели кавычками "" и абзацом, остальное все на твое усмотрение. Твой ответ должен содержать только отформатированый текст и нечего 
    больше.
    УКОРОТИ СООБЩЕНИЕ ТАК ЧТОБЫ ТЕКСТ БЫЛ ПРИМЕРНО 400-500 СИМВОЛОВ В ДЛИНУ И НЕ БОЛЕЕ 600 СИМВОЛОВ
    Вот правила по которым ты должен отформатировать его:
    *bold text*
    __italic__
    [inline URL](https://developers.sinch.com)
    ||spoiler||
    Ты можешь использовать только эти правила, никаких больше.
    Вот текст:
    ${content}
    `
    )