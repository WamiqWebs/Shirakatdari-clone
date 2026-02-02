"use client";
import { Suspense } from 'react';
import NewPasswordClient from '@/containers/extra/NewPasswordClient';
export default function Extra() {

  return (
    <>
      <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
        <NewPasswordClient />
      </Suspense>
    </>
  );
}

