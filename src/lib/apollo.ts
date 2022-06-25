import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4u7gnub0kfi01ue2b9i215a/master',
    cache: new InMemoryCache()
});