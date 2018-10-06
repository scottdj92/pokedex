module.exports = {
    schemas: {
        pokedex: {
            endpoint: "http://localhost:4000/"
        }
    },
    queries: [
        {
            schema: "pokedex",
            includes: ["./components/*.tsx"]
        }
    ]
}
