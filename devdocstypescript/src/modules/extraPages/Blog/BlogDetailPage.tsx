'use client';
import { useEffect } from 'react';
import { useGetDataApi } from '@devdocs/hooks/APIHooks';
import AppLoader from '@devdocs/components/AppLoader';
import BlogDetail from './BlogDetail';
import { isEmptyObject } from '@devdocs/helpers/ApiHelper';
import {
  BlogDetailType,
  BlogSidebarType,
} from '@devdocs/types/models/extrapages/Blog';
import { useParams } from 'next/navigation';

const BlogDetailPage = () => {
  const params = useParams();
  const { all } = params;
  const [{ apiData, loading }, { setQueryParams }] = useGetDataApi<
    | {
        blogDetail: BlogDetailType;
        blogSidebar: BlogSidebarType;
      }
    | undefined
  >('/blogs/detail', undefined, { id: all?.[0] }, false);

  useEffect(() => {
    if (all?.[0]) setQueryParams({ id: all[0] });
    else setQueryParams({});
  }, [all]);

  return loading ? (
    <AppLoader />
  ) : (
    !isEmptyObject(apiData?.blogDetail) && (
      <BlogDetail
        blogSidebar={apiData?.blogSidebar}
        blogDetail={apiData?.blogDetail}
      />
    )
  );
};
export default BlogDetailPage;
