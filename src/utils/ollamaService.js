/**
 * Generate a description for a vinyl record using Ollama's llama3.2 model
 * @param {string} artist - The artist name
 * @param {string} album - The album name
 * @param {number} year - The year the album was released
 * @param {string} genre - The music genre
 * @param {Function} onChunk - Callback function to handle each streamed chunk
 * @returns {Promise<string>} The complete generated description
 */
export const generateRecordDescription = async (artist, album, year, genre, onChunk) => {
  const prompt = `Write a 2-3 sentence vinyl record store review for "${album}" by ${artist} (${year}, ${genre}). Create an evocative, creative description in the style of a vintage record store review card. Use only the artist name, album title, year, and genre provided to craft an engaging, imaginative, and atmospheric description. Never say you don't know the album or lack information—always generate something compelling and flavorful.`;

  const requestBody = {
    model: 'llama3.2',
    prompt: prompt,
    stream: true,
  };

  try {
    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let fullResponse = '';

    while (true) {
      const { done, value } = await reader.read();

      if (done) break;

      const chunk = decoder.decode(value);
      const lines = chunk.split('\n').filter(line => line.trim());

      for (const line of lines) {
        try {
          const json = JSON.parse(line);
          if (json.response) {
            fullResponse += json.response;
            if (onChunk) {
              onChunk(json.response);
            }
          }
        } catch (e) {
          // Ignore parsing errors for malformed JSON lines
        }
      }
    }

    return fullResponse;
  } catch (error) {
    console.error('Error generating description:', error);
    throw error;
  }
};
