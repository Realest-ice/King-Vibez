import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";

export default function Dashboard() {
  const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
  const [email, setEmail] = useState(null);

  useEffect(() => {
    const e = window.localStorage.getItem("kv_admin_email");
    if (!e) return (window.location.href = "/admin/login");
    setEmail(e);
  }, []);

  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
          <div className="text-sm text-zinc-400">Signed in as <strong className="text-white">{email}</strong></div>
        </div>

        <section className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg bg-[#080808] border border-zinc-800">
            <h3 className="font-semibold">Upload Song</h3>
            <p className="text-sm text-zinc-500">Add title, audio URL (or upload later), cover, release date.</p>
            {/* Form - to be wired to API */}
            <div className="mt-4">
              <input placeholder="Title" className="w-full p-2 rounded-md bg-[#0b0b0b] border border-zinc-800 mb-2" />
              <input placeholder="Audio URL" className="w-full p-2 rounded-md bg-[#0b0b0b] border border-zinc-800 mb-2" />
              <input placeholder="Cover URL" className="w-full p-2 rounded-md bg-[#0b0b0b] border border-zinc-800 mb-2" />
              <button className="mt-2 px-4 py-2 bg-kvgold text-black rounded-md font-semibold">Create Song</button>
            </div>
          </div>

          <div className="p-6 rounded-lg bg-[#080808] border border-zinc-800">
            <h3 className="font-semibold">Upload Image / Media</h3>
            <p className="text-sm text-zinc-500">Upload files to backend uploads/ (uses authenticated endpoint)</p>
            <input type="file" className="mt-4" />
            <div className="mt-3">
              <button className="px-4 py-2 bg-kvred rounded-md text-black font-semibold">Upload</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
    }
