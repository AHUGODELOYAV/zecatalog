/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserProfile = /* GraphQL */ `
  query GetUserProfile($email: String!) {
    getUserProfile(email: $email) {
      email
      name
      lastName
      createdAt
      updatedAt
    }
  }
`;
export const listUserProfiles = /* GraphQL */ `
  query ListUserProfiles(
    $email: String
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUserProfiles(
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        email
        name
        lastName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($sku: String!) {
    getProduct(sku: $sku) {
      sku
      name
      price
      brand
      createdAt
      updatedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $sku: String
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listProducts(
      sku: $sku
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        sku
        name
        price
        brand
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProductLog = /* GraphQL */ `
  query GetProductLog($id: ID!) {
    getProductLog(id: $id) {
      id
      productSKU
      product {
        sku
        name
        price
        brand
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listProductLogs = /* GraphQL */ `
  query ListProductLogs(
    $filter: ModelProductLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        productSKU
        product {
          sku
          name
          price
          brand
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
