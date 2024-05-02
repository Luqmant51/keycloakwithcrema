'use client';
import React, { useEffect } from 'react';
import AppCard from '@devdocs/components/AppCard';
import AppGridContainer from '@devdocs/components/AppGridContainer';

import AppAnimate from '@devdocs/components/AppAnimate';
import { useParams } from 'next/navigation';
import AppInfoView from '@devdocs/components/AppInfoView';
import { useGetDataApi } from '@devdocs/hooks/APIHooks';

import ProductImageSlide from './ProductImageSlide';
import Header from './Header';
import ProductView from './ProductView/index';
import SimilarProduct from './SimilarProduct';
import AppLoader from '@devdocs/components/AppLoader';
import { ProductDataType } from '@devdocs/types/models/ecommerce/EcommerceApp';

const ProductDetail = () => {
  const params = useParams();

  const [{ apiData: currentProduct, loading }, { setQueryParams }] =
    useGetDataApi<ProductDataType>(
      'ecommerce',
      {} as ProductDataType,
      { id: params?.all?.[0] ? params?.all?.[0] : 0 },
      false,
    );

  useEffect(() => {
    setQueryParams({ id: params?.all?.[0] });
  }, [params?.all?.[0]]);

  return (
    <>
      {loading ? (
        <AppLoader />
      ) : currentProduct ? (
        <AppAnimate animation='transition.slideUpIn' delay={200}>
          <AppCard>
            <Header product={currentProduct} />
            <AppGridContainer>
              <ProductImageSlide product={currentProduct} />
              <ProductView product={currentProduct} />
            </AppGridContainer>
            <SimilarProduct />
          </AppCard>
        </AppAnimate>
      ) : null}
      <AppInfoView />
    </>
  );
};

export default ProductDetail;
