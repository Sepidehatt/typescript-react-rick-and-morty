export const fetchClient = {
  get: async <T>(url: string): Promise<T> => {
    try {
      const response = await fetch(url);
      const data: T = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};
