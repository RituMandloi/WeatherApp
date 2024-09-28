export const fetchWithErrorHandling = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response;
  } catch (error) {
    throw new Error(`Fetch error: ${error}`);
  }
};
