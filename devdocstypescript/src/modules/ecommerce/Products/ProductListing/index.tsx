import React, { useEffect, useState } from 'react';
import AppsHeader from '@devdocs/components/AppsContainer/AppsHeader';
import AppsContent from '@devdocs/components/AppsContainer/AppsContent';
import { alpha, Box, Hidden } from '@mui/material';
import { useThemeContext } from '@devdocs/context/AppContextProvider/ThemeContextProvider';
import AppsFooter from '@devdocs/components/AppsContainer/AppsFooter';
import AppsPagination from '@devdocs/components/AppsPagination';
import { useGetDataApi } from '@devdocs/hooks/APIHooks';
import ProductHeader from '../ProductHeader';
import ProductGrid from './ProductGrid';
import ProductList from './ProductList';
import { VIEW_TYPE } from '../index';

import {
  FilterDataType,
  ProductDataType,
} from '@devdocs/types/models/ecommerce/EcommerceApp';

type EcomType = {
  data: ProductDataType[];
  count: number;
};

type Props = {
  filterData: FilterDataType;
  setFilterData: (data: FilterDataType) => void;
  viewType: string;
  setViewType: (data: string) => void;
};

const ProductListing = ({
  filterData,
  viewType,
  setViewType,
  setFilterData,
}: Props) => {
  const { theme } = useThemeContext();
  const [page, setPage] = useState(0);

  const [{ apiData: ecommerceList, loading }, { setQueryParams }] =
    useGetDataApi<EcomType>('ecommerce/products', {} as EcomType, {}, false);

  const { data: list, count: total } = ecommerceList;

  useEffect(() => {
    setQueryParams({
      page,
      ...filterData,
      brand: filterData?.brand?.toString() || '',
      ideaFor: filterData?.ideaFor?.toString() || '',
      rating: filterData?.rating?.toString() || '',
      color: filterData?.color?.toString() || '',
      discount: filterData?.discount?.toString() || '',
    });
  }, [page, filterData]);

  const onPageChange = (event: any, value: number) => {
    setPage(value);
  };

  const searchProduct = (title: string) => {
    setFilterData({ ...filterData, title });
  };
  return (
    <>
      <AppsHeader>
        <ProductHeader
          list={ecommerceList?.data}
          viewType={viewType}
          page={page}
          totalProducts={total}
          onPageChange={onPageChange}
          onSearch={searchProduct}
          setViewType={setViewType}
        />
      </AppsHeader>

      <AppsContent
        style={{
          backgroundColor: alpha(theme.palette.background.default, 0.6),
        }}
      >
        <Box
          sx={{
            width: '100%',
            flex: 1,
            display: 'flex',
            py: 2,
            px: 4,
            height: 1,
            '& > div': {
              width: '100%',
            },
          }}
        >
          {viewType === VIEW_TYPE.GRID ? (
            <ProductGrid
              ecommerceList={ecommerceList?.data}
              loading={loading}
            />
          ) : (
            <ProductList
              ecommerceList={ecommerceList?.data}
              loading={loading}
            />
          )}
        </Box>
      </AppsContent>
      <Hidden smUp>
        {list?.length > 0 ? (
          <AppsFooter>
            <AppsPagination
              count={total}
              rowsPerPage={10}
              page={page}
              onPageChange={onPageChange}
            />
          </AppsFooter>
        ) : null}
      </Hidden>
    </>
  );
};

export default ProductListing;
