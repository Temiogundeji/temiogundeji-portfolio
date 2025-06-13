interface HashnodePost {
  title: string;
  brief: string;
  slug: string;
  coverImage: {
    url: string;
  } | null;
  publishedAt: string;
}

interface HashnodeResponse {
  data: {
    publication: {
      posts: {
        edges: Array<{
          node: HashnodePost;
        }>;
      };
    };
  };
}

export async function getHashnodePosts(): Promise<HashnodePost[]> {
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

  const json = await res.json() as HashnodeResponse;
  return json.data.publication.posts.edges.map((edge) => edge.node);
}