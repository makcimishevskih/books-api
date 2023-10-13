import { API_BASE_URL } from 'config/api';

export async function getData<T>(url: string): Promise<T> {
  return await fetch(`${API_BASE_URL}${url}`)
    .then((response) => {
      return response.json() as Promise<T>;
    })
    .then((data) => {
      return data;
    })
    .catch(() => {
      throw 'Response error: cant load a data';
    });
}
