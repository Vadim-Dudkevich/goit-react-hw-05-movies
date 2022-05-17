import { Main } from './MainContent.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export default function MainContent() {
  return (
    <Main>
      <Suspense>
        <Outlet />
      </Suspense>
    </Main>
  );
}
