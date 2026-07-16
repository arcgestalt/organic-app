import React, { useState } from 'react';

interface Logo {
  id: string;
  name: string;
  src: string;
}

interface Wallpaper {
  name: string;
  laptopSrc: string;
  mobileSrc: string;
}

export default function BrandShowcase() {
  const logos: Logo[] = [
    { id: '1', name: 'Primary Emerald Logo', src: '/logo/1.png' },
    { id: '2', name: 'Monochrome Dark Logo', src: '/logo/2.png' },
    { id: '3', name: 'Monochrome Light Logo', src: '/logo/3.png' },
    { id: '4', name: 'Gradient Glow Variant', src: '/logo/4.png' },
    { id: '5', name: 'Full Brand Badge Logo', src: '/logo/5.png' },
  ];

  const wallpapers: Wallpaper[] = [
    { name: 'Dark Black', laptopSrc: '/wallpaper/laptop/Dark Black.png', mobileSrc: '/wallpaper/mobile/Dark Black.png' },
    { name: 'Dark', laptopSrc: '/wallpaper/laptop/Dark.png', mobileSrc: '/wallpaper/mobile/Dark.png' },
    { name: 'Light', laptopSrc: '/wallpaper/laptop/Light.png', mobileSrc: '/wallpaper/mobile/Light.png' },
  ];

  const [selectedLogo, setSelectedLogo] = useState<Logo>(logos[0]);
  const [selectedWallpaper, setSelectedWallpaper] = useState<Wallpaper>(wallpapers[0]);
  const [previewDevice, setPreviewDevice] = useState<'laptop' | 'mobile'>('laptop');

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Brand Header */}
      <header className="mb-16 text-center">
        <div className="inline-flex items-center justify-center rounded-2xl bg-emerald-500/10 p-3 ring-1 ring-emerald-500/20">
          <img src={selectedLogo.src} alt="ArC Gestalt Active Logo" className="h-16 w-auto object-contain transition-transform duration-300 hover:scale-110" />
        </div>
        <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          ArC Gestalt Brand Assets
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
          Explore and download official high-fidelity brand assets, logos, and edge-native optimized wallpapers.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Left Column: Brand Logo Explorer */}
        <section className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-md">
          <h3 className="mb-2 text-2xl font-bold text-white">Logo Variants</h3>
          <p className="mb-6 text-sm text-gray-400">Select any variant to inspect and download the official transparency-safe asset.</p>
          
          {/* Active Logo Stage */}
          <div className="flex h-64 items-center justify-center rounded-2xl border border-white/5 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent)] p-12 transition-all hover:border-white/10">
            <img src={selectedLogo.src} alt={selectedLogo.name} className="max-h-full max-w-full object-contain drop-shadow-[0_0_24px_rgba(16,185,129,0.2)]" />
          </div>
          
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm font-semibold text-emerald-400">{selectedLogo.name}</span>
            <a 
              href={selectedLogo.src} 
              download={`ArC_Gestalt_Logo_${selectedLogo.id}.png`}
              className="inline-flex items-center rounded-xl bg-emerald-500 px-4 py-2 text-sm font-bold text-black transition hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20"
            >
              📥 Download PNG
            </a>
          </div>

          {/* Logo Selector Grid */}
          <div className="mt-8 grid grid-cols-5 gap-3">
            {logos.map((logo) => (
              <button
                key={logo.id}
                onClick={() => setSelectedLogo(logo)}
                className={`group relative flex aspect-square items-center justify-center rounded-xl border p-2 transition-all ${
                  selectedLogo.id === logo.id 
                    ? 'border-emerald-500 bg-emerald-500/10' 
                    : 'border-white/10 bg-white/[0.02] hover:border-white/20'
                }`}
              >
                <img src={logo.src} alt={logo.name} className="max-h-full max-w-full object-contain transition group-hover:scale-105" />
              </button>
            ))}
          </div>
        </section>

        {/* Right Column: Interactive Wallpaper Previewer */}
        <section className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-md flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-2xl font-bold text-white">Brand Wallpapers</h3>
              {/* Device Toggle */}
              <div className="flex rounded-xl bg-white/5 p-1 ring-1 ring-white/10">
                <button
                  onClick={() => setPreviewDevice('laptop')}
                  className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                    previewDevice === 'laptop' ? 'bg-emerald-500 text-black' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  💻 Laptop
                </button>
                <button
                  onClick={() => setPreviewDevice('mobile')}
                  className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                    previewDevice === 'mobile' ? 'bg-emerald-500 text-black' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  📱 Mobile
                </button>
              </div>
            </div>
            <p className="mb-6 text-sm text-gray-400">Choose a design to preview and download for your matching screen.</p>
          </div>

          {/* Interactive Mock Frame Stage */}
          <div className="flex flex-1 items-center justify-center p-4">
            {previewDevice === 'laptop' ? (
              /* Laptop Mock */
              <div className="relative w-full max-w-[420px] transition-all duration-500">
                {/* Screen */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-t-xl border border-white/10 shadow-2xl">
                  <img 
                    src={selectedWallpaper.laptopSrc} 
                    alt="Laptop screen preview" 
                    className="h-full w-full object-cover transition-all duration-300"
                  />
                  {/* Subtle brand watermark on mock screen */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                    <img src="/logo/1.png" className="h-10 opacity-20" alt="Watermark" />
                  </div>
                </div>
                {/* Base */}
                <div className="h-3 w-full rounded-b-xl bg-gradient-to-b from-gray-700 to-gray-800 border-t border-gray-600"></div>
                <div className="mx-auto h-1 w-16 rounded-b bg-gray-900"></div>
              </div>
            ) : (
              /* Mobile Mock */
              <div className="relative w-[180px] aspect-[9/19] rounded-[32px] border-4 border-gray-800 bg-gray-900 p-1.5 shadow-2xl transition-all duration-500 ring-1 ring-white/10">
                {/* Speaker/Camera notch */}
                <div className="absolute left-1/2 top-4 h-4 w-16 -translate-x-1/2 rounded-full bg-gray-800 z-10"></div>
                {/* Screen */}
                <div className="h-full w-full overflow-hidden rounded-[24px] relative">
                  <img 
                    src={selectedWallpaper.mobileSrc} 
                    alt="Mobile screen preview" 
                    className="h-full w-full object-cover transition-all duration-300"
                  />
                  {/* Subtle brand watermark on mock screen */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                    <img src="/logo/1.png" className="h-8 opacity-20" alt="Watermark" />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 flex flex-col gap-4">
            {/* Style Selector Buttons */}
            <div className="flex justify-center gap-2">
              {wallpapers.map((wp) => (
                <button
                  key={wp.name}
                  onClick={() => setSelectedWallpaper(wp)}
                  className={`rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${
                    selectedWallpaper.name === wp.name
                      ? 'border-emerald-500 bg-emerald-500/10 text-white'
                      : 'border-white/10 bg-white/[0.02] text-gray-400 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {wp.name}
                </button>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex justify-between items-center bg-white/[0.02] border border-white/5 rounded-2xl p-4">
              <span className="text-sm font-semibold text-gray-300">
                Style: <span className="text-emerald-400 font-bold">{selectedWallpaper.name}</span> ({previewDevice === 'laptop' ? 'Laptop' : 'Mobile'})
              </span>
              <a 
                href={previewDevice === 'laptop' ? selectedWallpaper.laptopSrc : selectedWallpaper.mobileSrc} 
                download={`ArC_Gestalt_Wallpaper_${selectedWallpaper.name}_${previewDevice}.png`}
                className="inline-flex items-center rounded-xl bg-white px-4 py-2 text-sm font-bold text-black transition hover:bg-gray-100 hover:shadow-lg hover:shadow-white/10"
              >
                📥 Download Wallpaper
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
