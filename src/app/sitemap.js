import { getListOfPoems } from "./data/Api";

export default async function sitemap() {
    const poems = await getListOfPoems();

    return [
        {
            url: "https://nido.dino.icu",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: "https://nido.dino.icu/poetry",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },

        ...poems.map((poem) => ({
            url: `https://nido.dino.icu/poem/${poem.id}`,
            lastModified: new Date(poem.createdAt),
            changeFrequency: "monthly",
            priority: 0.8,
        })),
    ];
}