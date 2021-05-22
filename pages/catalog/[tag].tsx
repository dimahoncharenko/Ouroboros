import Head from "next/head";

import { useRouter } from "next/router";

import Catalog from "../../components/Catalog";

import { Catalog as CatalogData } from "../../utils/Catalog";

function CatalogPage() {
    const router = useRouter();
    const { tag } = router.query;
    const filteredData = CatalogData.filter(el => el.tag === tag);
    return (
        <>
            <Head>
                <title>
                    {tag}
                </title>
            </Head>
            <Catalog articles={filteredData}/>
        </>
    );
}

export default CatalogPage;