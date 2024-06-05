import axios from "axios";

export const getMoviesData = async (page = 1) => {
    const res = await axios.get(`http://localhost:3001/movies?_page=${1 * page}&_per_page=8`);
    const data = res.data.data;
    return data;
};

export const getBooksData = async () => {
    const res = await axios.get(`http://localhost:3001/books`);
    const data = res.data;
    return data;
};

export const getGamesData = async () => {
    const res = await axios.get(`http://localhost:3001/games`);
    const data = res.data;
    return data;
};

export const getGameData = async (id) => {
    const res = await axios.get(`http://localhost:3001/games/${id}`);
    const data = res.data;
    return data;
};


export const getBlogsData = async () => {
    const res = await axios.get(`http://localhost:3001/blogs`);
    const data = res.data;
    return data;
};

export const getBlogData = async (id) => {
    const res = await axios.get(`http://localhost:3001/blogs/${id}`);
    const data = res.data;
    return data;
};
