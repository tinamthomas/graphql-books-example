import axios from "axios";
import * as parser from "xml2json";

export const authors = async (authorId: string) => {
    const authorsEndpoint = `https://www.goodreads.com/author/list/${authorId}`;
    const response = await axios({
        method: "get",
        params: {
            format: "xml",
            key: process.env.SECRET_KEY,
        },
        url: authorsEndpoint,
    });
    const jsonResponse = JSON.parse(parser.toJson(response.data));

    return {name: jsonResponse.GoodreadsResponse.author.name};
};
