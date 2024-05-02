'use client';
import { useGetDataApi } from '@devdocs/hooks/APIHooks';
import AppLoader from '@devdocs/components/AppLoader';
import AppAnimate from '@devdocs/components/AppAnimate';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { isEmptyObject } from '@devdocs/helpers/ApiHelper';
import CreateBlog from '../CreateBlog';
import {
  BlogContentType,
  BlogSidebarType,
} from '@devdocs/types/models/extrapages/Blog';

const BlogEditPage = () => {
  const params = useParams();
  const { all } = params;
  const [{ apiData, loading }, { setQueryParams }] = useGetDataApi<
    | {
        blogDetail: BlogContentType | undefined;
        blogSidebar: BlogSidebarType;
      }
    | undefined
  >('/blogs/detail', undefined, { id: all[0] }, false);

  useEffect(() => {
    if (all[0]) setQueryParams({ id: all[0] });
  }, [all[0]]);

  return loading ? (
    <AppLoader />
  ) : !isEmptyObject(apiData?.blogDetail) ? (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <CreateBlog selectedBlog={apiData?.blogDetail} />
    </AppAnimate>
  ) : null;
};
export default BlogEditPage;
