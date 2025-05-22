"use client";
import React, { createContext, useContext, useState } from 'react';

interface ProductInfo {
  title: string;
  pageUrl: string;
}

type ProductContextType = {
  productInfo: ProductInfo | null;
  setProductInfo: (info: ProductInfo | null) => void;
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [productInfo, setProductInfo] = useState<ProductInfo | null>(null);

  return (
    <ProductContext.Provider value={{ productInfo, setProductInfo }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProduct must be used within a ProductProvider');
  }
  return context;
};