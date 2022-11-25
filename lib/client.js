import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
    projectId: "uspi3b6k",
    dataset:'production',
    apiVersion: "2022-11-25",
    useCdn:true,
    token:
    "skExG7oEQRrW8yudfiUuhAFbl5AKobaUvs5IelcjigjlzXFCJEPjCcSzZJXezeiulzb7TuoEx9BqmR9VzBffK4NpS7za7lcjhMxeE0jJDc5GI8efDmrZUUhQes5lWw1167X4C4Rnd8hfFIPZwPDZuAy9SIcIZmuwFq9fmfFJx4sf9LwTsLpz"
})

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);