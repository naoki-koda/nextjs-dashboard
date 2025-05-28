'use client'
import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';

// export default function NotFound() {
//   return (
//     <main className="flex h-full flex-col items-center justify-center gap-2">
//       <FaceFrownIcon className="w-10 text-gray-400" />
//       <h2 className="text-xl font-semibold">404 Not Found</h2>
//       <p>Could not find the requested invoice.</p>
//       <Link
//         href="/dashboard/invoices"
//         className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
//       >
//         Go Back
//       </Link>
//     </main>
//   );
// }
//
// app/not-found.tsx
// 'use client';

// import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100 text-gray-800">
      <div className="text-6xl animate-bounce">🎈</div>
      <button className="animate-bounce font-semibold bg-blue-500 tex">
        aaa
      </button>
      <h1 className="mt-4 text-4xl font-extrabold">404 - ページが見つかりません</h1>
      <p className="mt-2 text-lg text-gray-600">お探しのページは存在しないか、移動しました。</p>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white shadow-md hover:bg-blue-700 transition"
      >
        ホームに戻る
      </Link>
    </div>
  );
}
