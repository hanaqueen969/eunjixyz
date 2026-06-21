import React from 'react';
import Link from 'next/link';
import { databaseRom } from './data';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans pb-12">
      {/* Navbar dengan efek Glassmorphism */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-2xl text-blue-600 tracking-tight">DroidHub</div>
        <div className="text-sm font-medium text-gray-500 hover:text-gray-800 cursor-pointer">Cari Device...</div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900">Daftar ROM & Kernel</h1>
          <p className="text-gray-500 mt-2 text-md">Pilih build terbaru untuk devicemu.</p>
        </div>

        {/* Grid Card List ala Material You */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {databaseRom.map((rom) => (
            <Link href={`/roms/${rom.id}`} key={rom.id}>
              <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 cursor-pointer group h-full flex flex-col">
                
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{rom.namaRom}</h2>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${rom.status === 'Official' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                    {rom.status}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600 flex-grow">
                  <p><span className="font-semibold text-gray-700">Device:</span> {rom.device}</p>
                  <p><span className="font-semibold text-gray-700">Android:</span> {rom.versiAndroid}</p>
                  <p><span className="font-semibold text-gray-700">Maintainer:</span> {rom.maintainer}</p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500">
                  <span>{rom.tanggal}</span>
                  <span className="text-blue-600 font-bold group-hover:translate-x-1 transition-transform">Download ➔</span>
                </div>

              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
