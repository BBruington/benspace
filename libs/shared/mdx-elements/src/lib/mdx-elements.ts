import { MdxRemote } from 'next-mdx-remote/types';
import dynamic from 'next/dynamic';

import { CustomLink } from './custom-link/custom-link';

export const mdxElements: MdxRemote.Components = {
  a: CustomLink,
  Youtube: dynamic(() => import('./youtube/youtube')),
};