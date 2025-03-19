import { safeFetch } from '@/lib/fetch';

// Mock global fetch
global.fetch = jest.fn();

describe('safeFetch', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call fetch with the correct parameters', async () => {
    const mockResponse = { ok: true, json: jest.fn().mockResolvedValue({ data: 'test' }) };
    (global.fetch as jest.Mock).mockResolvedValue(mockResponse);

    await safeFetch('/api/test', { method: 'GET' });

    expect(global.fetch).toHaveBeenCalledWith('/api/test', {
      method: 'GET',
    });
  });

  it('should throw an error if the response is not ok', async () => {
    const mockResponse = { ok: false, status: 404 };
    (global.fetch as jest.Mock).mockResolvedValue(mockResponse);

    await expect(safeFetch('/api/test', { method: 'GET' })).resolves.toEqual({
      error: true,
      data: null,
    });
  });
});
