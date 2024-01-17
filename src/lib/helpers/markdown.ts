const REGEX_BOLD = /\*\*(.*)\*\*/gim;
const REGEX_ITALICS = /\*(.*)\*/gim;
const REGEX_PARAGRAPH = /(\n){2,}/gim;

export function parse(text: string): string {
  if (!text) {
    return '';
  }

  return `<p>${text}</p>`
    .replace(REGEX_BOLD, '<b>$1</b>')
    .replace(REGEX_ITALICS, '<i>$1</i>')
    .replace(REGEX_PARAGRAPH, '</p><p>')
    .trim();
}
