import { gql } from "@apollo/client";

export const GET_POSTS = gql`
    query postsQuery($title: String!) {
        posts(where: { title: $title }) {
            edges {
                node {
                    title
                    content
                }
            }
        }
    }
`;