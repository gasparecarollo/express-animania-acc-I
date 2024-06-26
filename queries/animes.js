const db = require("../db/dbConfig");

const getAllAnimes = async () => {
    try {
        const animes = await db.any("SELECT * FROM animes");
        return animes;
    } catch (error) {
        return error;
    }
};

const getOneAnime = async (animeId) => {
    try {
        const anime = await db.one("SELECT * FROM animes WHERE id=$1", animeId);
        return anime;
    } catch (error) {
        return error;
    }
};

const createAnAnime = async ({ name, description }) => {
    try {
        const newAnime = await db.one("INSERT INTO animes (name, description) VALUES ($1,$2) RETURNING *", [name, description]
        );
        return newAnime;
    } catch (error) {
        return error;
    }
};

const updateAnime = async (animeId, anime) => {
    try {
        const updatedAnime = await db.one("UPDATE animes SET name=$1, description=$2 WHERE id=$3 RETURNING *", [anime.name, anime.description, animeId]
        );
        return updatedAnime;
    } catch (error) {
        return error;
    }
};

const deleteAnime = async (animeId) => {
    try {
        const deletedAnime = await db.one("DELETE FROM animes WHERE id=$1 RETURNING *", animeId
        );
        return deletedAnime;
    } catch (error) {
        return error;
    }
};

module.exports = {
    getAllAnimes,
    getOneAnime,
    createAnAnime,
    updateAnime,
    deleteAnime

}