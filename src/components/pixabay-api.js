import axios from "axios";

const API_KEY = "40806483-6440f6558fbf5c5ea7c0e9b5c"

export async function fetchSearch(page, perPage, filter = '') {
    const filterImg = filter ? `&q=${filter}` : '';
    const url = `https://pixabay.com/api/?q=cat&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}${filterImg}`
    try {
        const responce = await axios.get(url)
        return responce
    }
    catch (error) {
        throw error
    }
}