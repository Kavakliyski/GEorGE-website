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

export const GET_REVIEWS = gql`
    query postsByCategory {
        posts(where: { categoryName: "reviews" }) {
            nodes {
                title
                acfReviews {
                    fieldGroupName
                    nameBg
                    nameEn
                    textBg
                    textEn
                    image1 {
                        sourceUrl
                    }
                    image2 {
                        sourceUrl
                    }
                }
            }
        }
    }
`;
