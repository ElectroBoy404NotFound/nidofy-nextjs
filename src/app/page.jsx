import HomeClient from "@/clientpages/HomeClient";
import { getHomeData } from "@/data/Api";

export const metadata = {
    title: "Nidofy",
    description: "Nikunj Doke's portfolio and poems",
};

async function Home() {
    const data = await getHomeData();
    
    return (
        <>
            <HomeClient data={ data } />
        </>
    );
}

export default Home;