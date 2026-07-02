export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/lltm"],
        },
        sitemap: "https://nido.dino.icu/sitemap.xml",
    };
}