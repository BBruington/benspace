import { GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';

/* eslint-disable-next-line */
export interface SlugProps {}

interface ArticleProps extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths<ArticleProps> = async () => {
  return {
    paths: ['1', '2', '3'].map((idx) => {
      return (
        params: {
          slug: `page${idx}`,
        },
      )
    }),
    fallback: false,
  };
};

export function Slug(props: SlugProps) {
  return (
    <div>
      <h1>Welcome to Slug!</h1>
    </div>
  );
}

export default Slug;
