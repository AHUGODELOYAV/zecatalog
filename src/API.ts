/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProductInput = {
  sku: string,
  name: string,
  price: number,
  brand: string,
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  brand?: ModelStringInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateProductInput = {
  sku: string,
  name?: string | null,
  price?: number | null,
  brand?: string | null,
};

export type DeleteProductInput = {
  sku: string,
};

export type CreateProductLogInput = {
  id?: string | null,
  productSKU: string,
  createdAt?: string | null,
};

export type ModelProductLogConditionInput = {
  productSKU?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelProductLogConditionInput | null > | null,
  or?: Array< ModelProductLogConditionInput | null > | null,
  not?: ModelProductLogConditionInput | null,
};

export type UpdateProductLogInput = {
  id: string,
  productSKU?: string | null,
  createdAt?: string | null,
};

export type DeleteProductLogInput = {
  id?: string | null,
};

export type ModelProductFilterInput = {
  sku?: ModelStringInput | null,
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  brand?: ModelStringInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelProductLogFilterInput = {
  id?: ModelIDInput | null,
  productSKU?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelProductLogFilterInput | null > | null,
  or?: Array< ModelProductLogFilterInput | null > | null,
  not?: ModelProductLogFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type SendEmailToAdminMutationVariables = {
  toemail?: string | null,
  subject?: string | null,
  message?: string | null,
};

export type SendEmailToAdminMutation = {
  sendEmailToAdmin: string | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct:  {
    __typename: "Product",
    sku: string,
    name: string,
    price: number,
    brand: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct:  {
    __typename: "Product",
    sku: string,
    name: string,
    price: number,
    brand: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct:  {
    __typename: "Product",
    sku: string,
    name: string,
    price: number,
    brand: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProductLogMutationVariables = {
  input: CreateProductLogInput,
  condition?: ModelProductLogConditionInput | null,
};

export type CreateProductLogMutation = {
  createProductLog:  {
    __typename: "ProductLog",
    id: string,
    productSKU: string,
    product:  {
      __typename: "Product",
      sku: string,
      name: string,
      price: number,
      brand: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductLogMutationVariables = {
  input: UpdateProductLogInput,
  condition?: ModelProductLogConditionInput | null,
};

export type UpdateProductLogMutation = {
  updateProductLog:  {
    __typename: "ProductLog",
    id: string,
    productSKU: string,
    product:  {
      __typename: "Product",
      sku: string,
      name: string,
      price: number,
      brand: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductLogMutationVariables = {
  input: DeleteProductLogInput,
  condition?: ModelProductLogConditionInput | null,
};

export type DeleteProductLogMutation = {
  deleteProductLog:  {
    __typename: "ProductLog",
    id: string,
    productSKU: string,
    product:  {
      __typename: "Product",
      sku: string,
      name: string,
      price: number,
      brand: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetProductQueryVariables = {
  sku: string,
};

export type GetProductQuery = {
  getProduct:  {
    __typename: "Product",
    sku: string,
    name: string,
    price: number,
    brand: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductsQueryVariables = {
  sku?: string | null,
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListProductsQuery = {
  listProducts:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      sku: string,
      name: string,
      price: number,
      brand: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetProductLogQueryVariables = {
  id: string,
};

export type GetProductLogQuery = {
  getProductLog:  {
    __typename: "ProductLog",
    id: string,
    productSKU: string,
    product:  {
      __typename: "Product",
      sku: string,
      name: string,
      price: number,
      brand: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductLogsQueryVariables = {
  filter?: ModelProductLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductLogsQuery = {
  listProductLogs:  {
    __typename: "ModelProductLogConnection",
    items:  Array< {
      __typename: "ProductLog",
      id: string,
      productSKU: string,
      product:  {
        __typename: "Product",
        sku: string,
        name: string,
        price: number,
        brand: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct:  {
    __typename: "Product",
    sku: string,
    name: string,
    price: number,
    brand: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct:  {
    __typename: "Product",
    sku: string,
    name: string,
    price: number,
    brand: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct:  {
    __typename: "Product",
    sku: string,
    name: string,
    price: number,
    brand: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProductLogSubscription = {
  onCreateProductLog:  {
    __typename: "ProductLog",
    id: string,
    productSKU: string,
    product:  {
      __typename: "Product",
      sku: string,
      name: string,
      price: number,
      brand: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductLogSubscription = {
  onUpdateProductLog:  {
    __typename: "ProductLog",
    id: string,
    productSKU: string,
    product:  {
      __typename: "Product",
      sku: string,
      name: string,
      price: number,
      brand: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductLogSubscription = {
  onDeleteProductLog:  {
    __typename: "ProductLog",
    id: string,
    productSKU: string,
    product:  {
      __typename: "Product",
      sku: string,
      name: string,
      price: number,
      brand: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
