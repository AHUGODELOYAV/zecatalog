/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const sendEmailToAdmin = /* GraphQL */ `
  mutation SendEmailToAdmin(
    $toemail: String
    $subject: String
    $message: String
  ) {
    sendEmailToAdmin(toemail: $toemail, subject: $subject, message: $message)
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      sku
      name
      price
      brand
      createdAt
      updatedAt
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      sku
      name
      price
      brand
      createdAt
      updatedAt
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      sku
      name
      price
      brand
      createdAt
      updatedAt
    }
  }
`;
export const createProductLog = /* GraphQL */ `
  mutation CreateProductLog(
    $input: CreateProductLogInput!
    $condition: ModelProductLogConditionInput
  ) {
    createProductLog(input: $input, condition: $condition) {
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
export const updateProductLog = /* GraphQL */ `
  mutation UpdateProductLog(
    $input: UpdateProductLogInput!
    $condition: ModelProductLogConditionInput
  ) {
    updateProductLog(input: $input, condition: $condition) {
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
export const deleteProductLog = /* GraphQL */ `
  mutation DeleteProductLog(
    $input: DeleteProductLogInput!
    $condition: ModelProductLogConditionInput
  ) {
    deleteProductLog(input: $input, condition: $condition) {
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
