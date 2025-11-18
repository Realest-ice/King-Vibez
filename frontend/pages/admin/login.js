import { useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";

export default function AdminLogin() {
  const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [otp, setOtp] = useState("");

  const handleSend = async () => {
    setStatus("Sending...");
    try {
      const res = await axios.post(`${API}/api/auth/send-otp`, { email });
      setStatus("OTP sent (check email)");
      setStep(2);
    } catch (err) {
      setStatus(err.response?.data?.message || "Error sending OTP");
    }
  };

  const handleVerify = async () => {
    setStatus("Verifying...");
    try {
      const res = await axios.post(`${API}/api/auth/verify-otp`, { email, otp });
      setStatus("Login successful");
      // optionally store token or redirect to dashboard
      window.localStorage.setItem("kv_admin_email", email);
      window.location.href = "/admin/dashboard";
    } catch (err) {
      setStatus(err.response?.data?.message || "Invalid OTP");
    }
  };

  return (
    <>
      <Navbar />
      <main className="max-w-2xl mx-auto px-6 py-12">
        <div className="p-8 rounded-2xl bg-gradient-to-br from-[#080808] to-[#0b0b0b] border border-zinc-800 shadow-lg">
          <h2 className="text-2xl font-bold">Admin Login</h2>
          <p className="text-sm text-zinc-400 mt-2">Only admins can access. Use your admin email.</p>

          {step === 1 && (
            <div className="mt-6">
              <label className="text-sm">Admin Email</label>
              <input value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full mt-2 p-3 rounded-md bg-[#0b0b0b] border border-zinc-800"/>
              <div className="flex gap-3 mt-4">
                <button onClick={handleSend} className="px-4 py-2 bg-kvred rounded-md font-semibold">Send OTP</button>
                <button onClick={()=>{setEmail('')}} className="px-4 py-2 border border-zinc-700 rounded-md">Clear</button>
              </div>
              <div className="mt-3 text-sm text-zinc-400">{status}</div>
            </div>
          )}

          {step === 2 && (
            <div className="mt-6">
              <label className="text-sm">Enter OTP</label>
              <input value={otp} onChange={(e)=>setOtp(e.target.value)} className="w-full mt-2 p-3 rounded-md bg-[#0b0b0b] border border-zinc-800"/>
              <div className="flex gap-3 mt-4">
                <button onClick={handleVerify} className="px-4 py-2 bg-kvred rounded-md font-semibold">Verify</button>
                <button onClick={()=>setStep(1)} className="px-4 py-2 border border-zinc-700 rounded-md">Back</button>
              </div>
              <div className="mt-3 text-sm text-zinc-400">{status}</div>
            </div>
          )}
        </div>
      </main>
    </>
  );
      }
