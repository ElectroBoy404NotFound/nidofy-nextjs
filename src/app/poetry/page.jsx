
import { getListOfPoems } from "@/data/Api";

import PoetryClient from "@/clientpages/PoetryClient";

export const metadata = {
    title: "Nidofy - Poems",
    description: "My poems",
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