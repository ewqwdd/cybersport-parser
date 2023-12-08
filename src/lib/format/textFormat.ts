// const dot = /\./
// export const textFormatter = (text: string) => {
//     return text
//     .replaceAll('.', '\\.')
//     .replaceAll('-', '\\-')
//     .replaceAll('**', '*')
//     .replaceAll('(', '\\(')
//     .replaceAll(')', '\\)')
//     .replaceAll('+', '\\+)')
//     .replaceAll('_', '\\_)')
//     .replaceAll('$', '\\$)')
//     .replaceAll('@', '\\@)')
//     .replaceAll('!', '\\!)')
//     .replaceAll('?', '\\?)')
//     .replaceAll('=', '\\=)')
// }

export const textFormatter = (text: string) => {
    const specialChars = ['.', '-', '**', '(', ')', '+', '_', '$', '@', '!', '?', '=', '#'];
  
    // Функция для экранирования спецсимволов
    const escapeRegExp = (str: string) => {
        return str.replace(/[.*+?^${}()|[\]\\#]/g, '\\$&');
    };
  
    // Создание регулярного выражения для замены всех спецсимволов
    const regex = new RegExp(specialChars.map(escapeRegExp).join('|'), 'g');
  
    // Замена всех спецсимволов на их экранированные версии
    return text.replace(regex, (match) => `\\${match}`)
}

