import React from 'react';
import { notFound } from 'next/navigation';

// 1. Ini adalah simulasi Database. 
// Nanti data ini bisa dipindah ke database asli seperti Supabase/Firebase.
const databaseRom = [
  {
    id: "avenueos-x00td",
    namaRom: "AvenueOS",
    versiAndroid: "14",
    device: "ASUS ZenFone Max Pro M1 (X00TD)",
    maintainer: "benkz",
    ukuran: "1.6 GB",
    status: "Official",
    tanggal: "12 Mei 2026",
    changelog: [
      "Initial Android 14 Build",
      "Included TOM Kernel as default",
      "Fixed deep sleep issue",
      "SELinux is Enforcing"
    ],
    linkGapps: "https://contoh-link.com/gapps",
    linkVanilla: "https://contoh-link.com/vanilla"
  },
  {
    id: "pixelos-x00td",
    namaRom: "PixelOS",
    versiAndroid: "14",
    device: "ASUS ZenFone Max Pro M1 (X00TD)",
    maintainer: "benkz",
    ukuran: "1.8 GB",
    status: "Unofficial",
    tanggal: "28 April 2026",
    changelog: [
      "Updated UI to latest Pixel drop",
      "Kernel upstreamed",
      "Improved battery backup"
    ],
    linkGapps: "https://contoh-link.com/gapps",
    linkVanilla: "" // Kosongkan jika tidak ada versi vanilla
  }
];

// 2. Halaman Dinamis
export default function DetailRomPage({ params }: { params: { id: string } }) {
  // Mencari data ROM di database berdasarkan ID dari URL
  const rom = databaseRom.find((item) => item.id === params.id);

  // Jika URL tidak cocok dengan ID apapun, tampilkan halaman 404
  if (!rom) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="bg-white border-b px-6 py-4 shadow-sm flex justify-between items-center">
        <div className="font-bold text-2xl text-blue-600">DroidHub</div>
        <div className="text-sm font-medium text-gray-500 hover:text-gray-800 cursor-pointer">Kembali ke Home</div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Header Dinamis */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">{rom.namaRom} (Android {rom.versiAndroid})</h1>
          <p className="text-gray-500 mt-2 text-md">
            untuk <span className="font-bold text-gray-700">{rom.device}</span> • by <span className="text-blue-500 font-medium">{rom.maintainer}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* KOLOM KIRI: Changelog */}
          <div className="md:col-span-2 space-y-6">
            <div className="w-full h-48 bg-gradient-to-r from-gray-800 to-gray-600 rounded-xl shadow-inner flex items-center justify-center">
               <h2 className="text-4xl font-extrabold text-white tracking-widest">{rom.namaRom}</h2>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-gray-700 space-y-4">
              <h3 className="font-bold text-lg">Update Terbaru ({rom.tanggal}):</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                {/* Looping data changelog secara otomatis */}
                {rom.changelog.map((log, index) => (
                  <li key={index}>{log}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* KOLOM KANAN: Tombol Download */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Link Download</h3>
              
              {/* Render tombol GApps jika link tersedia */}
              {rom.linkGapps && (
                <a href={rom.linkGapps} className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 shadow-md mb-3">
                  Download (GApps)
                </a>
              )}

              {/* Render tombol Vanilla jika link tersedia */}
              {rom.linkVanilla && (
                <a href={rom.linkVanilla} className="block w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-4 rounded-lg transition duration-200 shadow-md">
                  Download (Vanilla)
                </a>
              )}
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
              <h4 className="font-bold text-gray-800 mb-3 border-b pb-2">Informasi Build</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between">
                  <span className="text-gray-500">Status</span>
                  <span className={`font-semibold ${rom.status === 'Official' ? 'text-green-600' : 'text-orange-500'}`}>{rom.status}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-500">Ukuran File</span>
                  <span className="font-semibold text-gray-800">{rom.ukuran}</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
