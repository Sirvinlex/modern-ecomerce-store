import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: '1hz4bj8w',
    dataset: 'production',
    apiVersion: '2022-03-10',
    useCdn: true,
    token: process.env.SANITY_PUBLIC_TOKEN

});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)