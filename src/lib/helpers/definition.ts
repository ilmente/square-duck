interface Definition {
  title: string;
  text: string;
}

const DEFINITION_API_ENDPOINT = 'https://en.wikipedia.org/api/rest_v1/page/random/summary';
const DEFINITION_FALLBACK_TITLE = 'Duck';
const DEFINITION_FALLBACK_TEXT = '<p><b>Duck</b> is the common name for numerous species of waterfowl in the family Anatidae. Ducks are generally smaller and shorter-necked than swans and geese, which are members of the same family. Divided among several subfamilies, they are a form taxon; they do not represent a monophyletic group, since swans and geese are not considered ducks. Ducks are mostly aquatic birds, and may be found in both fresh water and sea water.</p>';

export async function getRandomDefinition(): Promise<Definition> {
  try {
    const response = await fetch(DEFINITION_API_ENDPOINT);
    const { title, extract_html } = await response.json();

    return {
      title,
      text: extract_html,
    };
  } catch {
    return {
      title: DEFINITION_FALLBACK_TITLE,
      text: DEFINITION_FALLBACK_TEXT,
    };
  }
}
