import React from 'react';

export default function RomDownloadPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="bg-white border-b px-6 py-4 shadow-sm flex justify-between items-center">
        <div className="font-bold text-2xl text-blue-600">DroidHub</div>
        <div className="text-sm font-medium text-gray-500 hover:text-gray-800 cursor-pointer">Pencarian...</div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Header: Judul ROM & Device */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">LineageOS 21 (Android 14)</h1>
          <p className="text-gray-500 mt-2 text-md">
            untuk <span className="font-bold text-gray-700">Poco F1 (beryllium)</span> • by <span className="text-blue-500 font-medium cursor-pointer">RezaOpreker</span>
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* KOLOM KIRI: Deskripsi, Changelog, Instruksi */}
          <div className="md:col-span-2 space-y-6">
            
            {/* Banner/Gambar (Opsional, bisa pakai logo ROM) */}
            <div className="w-full h-48 bg-gradient-to-r from-teal-400 to-blue-500 rounded-xl shadow-inner flex items-center justify-center">
               <h2 className="text-4xl font-extrabold text-white tracking-widest">LineageOS</h2>
            </div>
            
            {/* Tab Menu */}
            <div className="border-b border-gray-200 flex space-x-6">
              <button className="py-3 border-b-2 border-blue-600 text-blue-600 font-semibold">Changelog</button>
              <button className="py-3 text-gray-500 hover:text-gray-800 font-medium">Flashing Guide</button>
            </div>

            {/* Isi Teks */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-gray-700 space-y-4">
              <h3 className="font-bold text-lg">Update Terbaru (Build 2026-06-21):</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Merged latest security patch (June 2026)</li>
                <li>Fixed fingerprint delay issue</li>
                <li>Improved battery backup on idle</li>
                <li>Upgraded Kernel to 4.9.337-Stormbreaker</li>
                <li>SELinux is Enforcing</li>
              </ul>
              
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm">
                <span className="font-bold text-yellow-700">⚠️ Peringatan:</span> Pastikan kamu menggunakan firmware terbaru sebelum melakukan flashing ROM ini untuk menghindari bootloop.
              </div>
            </div>
          </div>

          {/* KOLOM KANAN: Tombol Download & Info File */}
          <div className="space-y-6">
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Link Download</h3>
              
              {/* TOMBOL GAPPS (Ada Google Apps) */}
              <a 
                href="#" 
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 shadow-md mb-3"
              >
                Download (GApps Build)
              </a>

              {/* TOMBOL VANILLA (Tanpa Google Apps) */}
              <a 
                href="#" 
                className="block w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-4 rounded-lg transition duration-200 shadow-md"
              >
                Download (Vanilla Build)
              </a>

              <p className="text-xs text-gray-400 mt-4 font-medium">Format: .zip (Recovery Flashable)</p>
            </div>

            {/* Spesifikasi File */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
              <h4 className="font-bold text-gray-800 mb-3 border-b pb-2">Informasi Build</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between">
                  <span className="text-gray-500">Status</span>
                  <span className="font-semibold text-green-600">Official</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-500">Android Version</span>
                  <span className="font-semibold text-gray-800">14 (Upside Down Cake)</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-500">Ukuran File</span>
                  <span className="font-semibold text-gray-800">± 1.8 GB</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
