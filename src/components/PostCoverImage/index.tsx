import { ReactNode } from 'react';

interface PostCoverImageProps {
  children: ReactNode;
}

export function PostCoverImage({ children }: PostCoverImageProps) {
  return (
    <>
      <h1>PostCoverImage</h1>
      {children}
    </>
  );
}
