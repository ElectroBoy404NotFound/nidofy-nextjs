import { getListOfPoems } from "./data/Api";

export default async function sitemap() {
    const poems = await getListOfPoems();

    return [
        {
            url: "https://www.nikunjdoke.in/",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: "https://wwe.nikunjdoke.in/poetry",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },

        ...poems.map((poem) => ({
            url: `https://www.nikunjdoke.in/poem/${poem.id}`,
            lastModified: new Date(poem.createdAt),
            changeFrequency: "monthly",
            priority: 0.8,
        })),
    ];
}
