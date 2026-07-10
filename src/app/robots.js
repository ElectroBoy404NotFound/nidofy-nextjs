export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/lltm"],
        },
        sitemap: "https://www.nikunjdoke.in/sitemap.xml",
    };
}
