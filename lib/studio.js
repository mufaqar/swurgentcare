import { createClient } from "next-sanity";
const config = {
    projectId: "sidoi329",
    dataset: "production",
    apiVersion: "2021-10-14",
    useCdn: false
}

export const sanityClient = createClient(config);