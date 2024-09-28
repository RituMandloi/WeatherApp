import {fetchWithErrorHandling} from '../apiFetcher';

describe('fetchWithErrorHandling', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it('should return response when fetch is successful', async () => {
    const mockResponse = {data: 'some data'};
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const result = await fetchWithErrorHandling('https://api.weather.com/data');
    expect(global.fetch).toHaveBeenCalledWith('https://api.weather.com/data');
    expect(result.ok).toEqual(true);
  });

  it('should throw an error if response is not ok', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
    });

    await expect(
      fetchWithErrorHandling('https://api.weather.com/data'),
    ).rejects.toThrow('Network response was not ok');
  });

  it('should throw an error when fetch fails', async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(
      new Error('Fetch failed'),
    );

    await expect(
      fetchWithErrorHandling('https://api.weather.com/data'),
    ).rejects.toThrow('Fetch error: Error: Fetch failed');
  });
});
