const API_URL = import.meta.env.VITE_API_URL;

export const ENDPOINTS = {
  login: `${API_URL}/api/v1/auth/login`,
  register: `${API_URL}/api/v1/auth/register`,
  popularMovies: `${API_URL}/api/v1/movie/popular`,
  detailMovie: (id) => {
    return `${API_URL}/api/v1/movie/${id}`;
  },
};
