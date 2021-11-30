import { createClient } from 'microcms-js-sdk';

export const client = createClient({
    serviceDomain: 'nuxt-note',
    apiKey: process.env.API_KEY,
});