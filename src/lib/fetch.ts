type FetchResponse<T> =
  | {
      data: T;
      error: false;
    }
  | {
      data: null;
      error: true;
    };

/**
 * Safe Fetch
 * @param url - The URL to fetch
 * @param options - The options to pass to the fetch
 * @returns The data from the fetch
 */
export const safeFetch = async <T>(
  url: string,
  options: RequestInit = {}
): Promise<FetchResponse<T>> => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return { data: (await response.json()) as T, error: false };
  } catch (error) {
    console.error(error);
    return { data: null, error: true };
  }
};
