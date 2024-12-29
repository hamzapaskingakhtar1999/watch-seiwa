import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZWE0YWYzZGNkYjJjNDRlY2M4NzdlOGE3Y2FjYTI2NCIsIm5iZiI6MTY5MTY5NzY4Mi41MjcsInN1YiI6IjY0ZDU0MjEyYmYzMWYyMDFjYjY4ZTkwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iY3gu5UJrn_FbdGW8rcB6-J8RAkV40sg1thZii-j2gk",
  },
});

export default instance;
