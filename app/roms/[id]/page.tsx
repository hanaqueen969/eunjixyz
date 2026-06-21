import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { databaseRom } from '../../data';

// 1. Tambahkan "async" dan "Promise" pada parameter
export default async function DetailRomPage({ params }: { params: Promise<{ id: string }> }) {
  
  // 2. Tambahkan "await" untuk membaca ID dari URL (wajib di Next.js terbaru)
  const resolvedParams = await params;
  
  // 3. Cari data berdasarkan ID yang sudah didapatkan
  const rom = databaseRom.find((item) => item.id === resolvedParams.id);

  if (!rom) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans pb-12">
      {/* Navbar Glassmorphism dengan tombol kembali */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-2xl text-blue-600 tracking-tight">DroidHub</div>
        <Link href="/" className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors">
          ← Kembali ke Home
        </Link>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-extrabold text-gray-900">{rom.namaRom} (Android {rom.versiAndroid})</h1>
          <p className="text-gray-500 mt-2 text-md">
            untuk <span className="font-bold text-gray-700">{rom.device}</span> • by <span className="text-blue-500 font-medium">{rom.maintainer}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-600 rounded-3xl shadow-sm flex items-center justify-center">
               <h2 className="text-4xl font-extrabold text-white tracking-widest">{rom.namaRom}</h2>
            </div>
            
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm text-gray-700 space-y-4">
              <h3 className="font-bold text-lg">Update Terbaru ({rom.tanggal}):</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                {rom.changelog.map((log, index) => (
                  <li key={index}>{log}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 text-center">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Link Download</h3>
              
              {rom.linkGapps && (
                <a href={rom.linkGapps} className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition duration-200 shadow-sm mb-3">
                  Download (GApps)
                </a>
              )}

              {rom.linkVanilla && (
                <a href={rom.linkVanilla} className="block w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-4 rounded-xl transition duration-200 shadow-sm">
                  Download (Vanilla)
                </a>
              )}
            </div>

            <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">Informasi Build</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between">
                  <span className="text-gray-500">Status</span>
                  <span className={`font-bold ${rom.status === 'Official' ? 'text-green-600' : 'text-orange-500'}`}>{rom.status}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-500">Ukuran</span>
                  <span className="font-bold text-gray-800">{rom.ukuran}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
