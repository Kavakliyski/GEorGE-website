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

export const GET_PAGE_BY_URI = gql`
    query PageByDatabaseId {
        page(id: "/aurum/", idType: URI) {
            id
            title
            content
        }
    }
`;

export const GET_SERIES_MENU = gql`
    query GetSeriesSubmenus {
        menuItems(where: { location: PRIMARY, parentDatabaseId: 162 }) {
            nodes {
                label
                childItems {
                    nodes {
                        label
                    }
                }
            }
        }
    }
`;

// # BG or EN
export const GET_PAGE_WITH_TRANSLATION = gql`
    query MyQuery7($language: LanguageCodeEnum = BG, $uri: String) {
        pageBy(uri: $uri) {
            translations {
                translation(language: $language) {
                    title
                    content
                }
            }
        }
    }
`;
