import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight" style={{color:'#fff'}}>
              KING VIBEZ
            </h2>
            <p className="mt-6 text-zinc-300 max-w-lg">
              Street-born bars. Luxury vibes. New album dropping soon — stay tuned.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="px-6 py-3 rounded-md bg-kvred text-black font-semibold hover:scale-105 transition">
                Listen Now
              </button>
              <button className="px-6 py-3 rounded-md border border-zinc-700 text-zinc-200 hover:border-kvgold">
                Merch
              </button>
            </div>

            <div className="mt-8 text-sm text-zinc-400">
              <strong>Latest single:</strong> <span className="text-zinc-200">"Street Gold"</span>
            </div>
          </div>

          <div className="bg-gradient-to-tr from-kvblack to-[#121212] p-6 rounded-2xl shadow-xl">
            <div className="h-72 w-full rounded-lg bg-[url('/placeholder-album.jpg')] bg-cover bg-center" />
            <div className="mt-4 flex items-center justify-between">
              <div>
                <div className="text-lg font-semibold">Street Gold</div>
                <div className="text-sm text-zinc-400">ft. Major Artist</div>
              </div>
              <div className="px-3 py-1 rounded-md bg-kvgold text-black font-semibold">NEW</div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h3 className="text-2xl font-semibold">Music</h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* placeholders - later map songs from API */}
            {Array.from({length:3}).map((_,i) => (
              <div key={i} className="bg-[#080808] p-4 rounded-lg border border-zinc-800">
                <div className="h-40 bg-zinc-900 rounded-md" />
                <h4 className="mt-3 text-lg">Song {i+1}</h4>
                <p className="text-xs text-zinc-500 mt-1">Short description</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-16 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between text-zinc-400">
          <div>© {new Date().getFullYear()} King Vibez</div>
          <div className="flex gap-4">
            <a>Instagram</a>
            <a>Twitter</a>
            <a>YouTube</a>
          </div>
        </div>
      </footer>
    </>
  );
    }
