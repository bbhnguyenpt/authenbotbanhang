import React, { Suspense } from 'react'

function layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <Suspense>{children}</Suspense>
}

export default layout
