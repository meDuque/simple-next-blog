import { ReactNode } from 'react';

interface PostFeaturedProps {
  children: ReactNode;
}

export function PostFeatured({ children }: PostFeaturedProps) {
  return (
    <>
      <h1>PostFeatured</h1>
      {children}
    </>
  );
}
