import axios from "axios";

export const getMoviesData = async (page = 1) => {
    const res = await axios.get(`http://localhost:3001/movies?_page=${1 * page}&_per_page=8`);
    const data = res.data.data;
    return data;
};

export const getBlogsData = async () => {
    const res = await axios.get(`http://localhost:3001/blogs`);
    const data = res.data;
    return data;
};
