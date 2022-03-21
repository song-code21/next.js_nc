const API_KEY = "54bf51a6df094ae6efe05815093b605b";
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};
//api key 숨기기
