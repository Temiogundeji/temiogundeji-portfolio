export async function getHashnodePosts() {
  const query = `
    query {
      publication(host: "temiogundeji.hashnode.dev") {
        posts(first: 5) {
          edges {
            node {
              title
              brief
              slug
              coverImage {
                url
              }
              publishedAt
            }
          }
        }
      }
    }
  `;

  const res = await fetch("https://gql.hashnode.com", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  const json = await res.json();
  return json.data.publication.posts.edges.map((edge) => edge.node);
}
