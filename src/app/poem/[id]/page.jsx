import OnScrollFadeInAnim from "@/animators/OnLoadFadeInAnim";

import DividerLine from "@/components/DividerLine";

import PoemPaper from "@/components/PoemPaper";
import { getPoem } from "@/data/Api";
import { dateStringToNumerialString } from "@/data/Utils";

export async function generateMetadata({ params }) {
    const poem = await getPoem((await params).id);

    return {
        title: `"${poem.title}" by ${poem.signature} | Nidofy`,
        description: `"${poem.title}" by ${poem.signature}, ${dateStringToNumerialString(poem.date)}`,
        author: poem.signature,
        openGraph: {
            title: `${poem.title} | Nidofy`,
            description: `"${poem.title}" by ${poem.signature}`,
            url: `https://nidofy.com/poem/${(await params).id}`,
            type: "article",
        },
        alternates: {
            canonical: `https://nido.dino.icu/poem/${(await params).id}`,
        },
    };
}

async function Poem({ params }) {
    const data = await getPoem((await params).id);

    return (
        <OnScrollFadeInAnim>
            <br />
            { 
                <PoemPaper poem={ data } />
            }
            <DividerLine />
        </OnScrollFadeInAnim>
    );
}

export default Poem;