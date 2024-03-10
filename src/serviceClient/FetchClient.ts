export const fetchClient = {
  get: async <T>(url: string): Promise<T> => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        const error: any = new Error('Failed to fetch data');
        error.status = response.status;
        throw error;
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};
