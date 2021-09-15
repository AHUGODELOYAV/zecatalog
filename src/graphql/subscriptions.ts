/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserProfile = /* GraphQL */ `
  subscription OnCreateUserProfile {
    onCreateUserProfile {
      email
      name
      lastName
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserProfile = /* GraphQL */ `
  subscription OnUpdateUserProfile {
    onUpdateUserProfile {
      email
      name
      lastName
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserProfile = /* GraphQL */ `
  subscription OnDeleteUserProfile {
    onDeleteUserProfile {
      email
      name
      lastName
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
      sku
      name
      price
      brand
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
      sku
      name
      price
      brand
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
      sku
      name
      price
      brand
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProductLog = /* GraphQL */ `
  subscription OnCreateProductLog {
    onCreateProductLog {
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
export const onUpdateProductLog = /* GraphQL */ `
  subscription OnUpdateProductLog {
    onUpdateProductLog {
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
export const onDeleteProductLog = /* GraphQL */ `
  subscription OnDeleteProductLog {
    onDeleteProductLog {
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
