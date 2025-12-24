'use client'

import Link from 'next/link'

// Disable static optimization for this page
export const dynamic = 'force-dynamic'
export const revalidate = 0
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Not Found</h2>
        <p className="mb-4">Could not find requested resource</p>
        <Link 
          href="/"
          className="text-primary hover:underline"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}