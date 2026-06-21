import React from 'react';

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="bg-white border-b px-6 py-4 shadow-sm flex justify-between items-center">
        <div className="font-bold text-2xl text-blue-600">WebDownloadKu</div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Header: Judul File */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Tema Keren untuk Windows/Linux</h1>
          <p className="text-gray-500 mt-2 text-sm">Diunggah oleh Admin</p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* KOLOM KIRI: Gambar & Deskripsi */}
          <div className="md:col-span-2 space-y-6">
            <div className="w-full aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-inner border border-gray-300 flex items-center justify-center">
               <span className="text-gray-400 font-medium">Tempat Gambar Preview</span>
            </div>
            
            <div className="border-b border-gray-200 flex space-x-8">
              <button className="py-3 border-b-2 border-blue-600 text-blue-600 font-semibold">Deskripsi</button>
            </div>

            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>Ini adalah file tema yang bisa kamu download. Sangat ringan dan mudah diinstal.</p>
            </div>
          </div>

          {/* KOLOM KANAN: Tombol Download */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Siap untuk Download?</h3>
              
              {/* TOMBOL DOWNLOAD */}
              <a 
                href="https://link-google-drive-atau-mediafire-kamu.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 shadow-md"
              >
                Download File
              </a>
              <p className="text-xs text-gray-400 mt-3 font-medium">Ukuran: 15 MB • .zip</p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
