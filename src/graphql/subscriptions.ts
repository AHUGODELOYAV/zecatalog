/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
