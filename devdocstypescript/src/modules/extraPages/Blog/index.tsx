'use client';
import { useGetDataApi } from '@devdocs/hooks/APIHooks';
import AppLoader from '@devdocs/components/AppLoader';
import BlogContent from './BlogContent';
import { BlogType } from '@devdocs/types/models/extrapages/Blog';

const Blogs = () => {
  const [{ apiData, loading }] = useGetDataApi<BlogType>('/blogs');

  return (
    <>
      {loading ? (
        <AppLoader />
      ) : (
        <BlogContent
          blogSidebar={apiData.blogSidebar}
          blogContent={apiData.blogContent}
        />
      )}
    </>
  );
};
export default Blogs;
