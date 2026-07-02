
import { getListOfPoems } from "@/data/Api";

import PoetryClient from "@/clientpages/PoetryClient";

export const metadata = {
    title: "Poems | Nidofy",
    description: "My poems",
    author: "Nikunj Doke"
};

async function Poetry() {
    const data = await getListOfPoems();

    return (
        <>
            <PoetryClient data={ data } />
        </>
    );
}

export default Poetry;