import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Product {
        id: ID
        name: String
        description: String
        price: Float
        soldout: Boolean,
        stores: [Store]!
    }

    type Store {
        name: String
    }

    type Query {
        product: Product
    }

    input StoreInput {
        name: String
    }

    input ProductInput {
        id: ID
        name: String
        description: String
        price: Float
        soldout: Boolean,
        stores: [StoreInput]!
    }

    type Mutation {
        createProduct(input: ProductInput): Product
    }
`);

export default schema;