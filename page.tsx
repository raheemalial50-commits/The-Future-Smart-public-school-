"use client";

import { useState, useRef } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

type Mode = "face" | "fingerprint" | null;
type Status = "idle" | "scanning" | "success" | "error";

export default function AttendancePage() {
  const [mode, setMode] = useState<Mode>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [studentName, setStudentName] = useState("");
  const [message, setMessage] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [cameraOn, setCameraOn] = useState(false);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setCameraOn(true);
      }
    } catch (err) {
      setMessage("Camera access denied. Please allow camera permission.");
      setStatus("error");
    }
  };

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach((t) => t.stop());
      videoRef.current.srcObject = null;
      setCameraOn(false);
    }
  };

  const handleFaceScan = async () => {
    setMode("face");
    setStatus("scanning");
    setMessage("Looking for face...");
    await startCamera();

    // Simulate face recognition
    setTimeout(() => {
      setStatus("success");
      setStudentName("Ahmed Raza - Class 9-A");
      setMessage("Attendance marked as PRESENT via Face Recognition");
      stopCamera();
    }, 2800);
  };

  const handleFingerprint = () => {
    setMode("fingerprint");
    setStatus("scanning");
    setMessage("Place your finger on the scanner...");

    // Simulate fingerprint
    setTimeout(() => {
      setStatus("success");
      setStudentName("Ahmed Raza - Class 9-A");
      setMessage("Attendance marked as PRESENT via Fingerprint");
    }, 2200);
  };

  const reset = () => {
    setMode(null);
    setStatus("idle");
    setStudentName("");
    setMessage("");
    stopCamera();
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar role="admin" />
      <div className="flex-1 flex flex-col">
        <Header title="Attendance System" subtitle="Mark presence using Face Recognition or Fingerprint" />

        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            {/* Mode Selection */}
            {!mode && (
              <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
                <button
                  onClick={handleFaceScan}
                  className="group bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-[#D4A017] shadow-sm hover:shadow-lg transition text-left card-hover"
                >
                  <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition">
                    📷
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1F44] mb-2">Face Recognition</h3>
                  <p className="text-slate-500 text-sm">
                    Use the camera to scan your face and mark attendance automatically.
                  </p>
                </button>

                <button
                  onClick={handleFingerprint}
                  className="group bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-[#D4A017] shadow-sm hover:shadow-lg transition text-left card-hover"
                >
                  <div className="w-16 h-16 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition">
                    👆
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1F44] mb-2">Fingerprint / Figure Password</h3>
                  <p className="text-slate-500 text-sm">
                    Place your finger on the biometric scanner to mark attendance.
                  </p>
                </button>
              </div>
            )}

            {/* Scanning UI */}
            {mode && (
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden animate-fade-in">
                <div className="bg-[#0A1F44] text-white px-6 py-4 flex items-center justify-between">
                  <h3 className="font-bold">
                    {mode === "face" ? "Face Recognition Attendance" : "Fingerprint Attendance"}
                  </h3>
                  <button onClick={reset} className="text-sm bg-white/20 hover:bg-white/30 px-3 py-1 rounded-lg transition">
                    Cancel
                  </button>
                </div>

                <div className="p-8">
                  {mode === "face" && (
                    <div className="relative mx-auto max-w-md aspect-video bg-slate-900 rounded-2xl overflow-hidden mb-6">
                      <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        muted
                        className={`w-full h-full object-cover ${cameraOn ? "block" : "hidden"}`}
                      />
                      {!cameraOn && status === "scanning" && (
                        <div className="absolute inset-0 flex items-center justify-center text-white">
                          <div className="text-center">
                            <div className="w-12 h-12 border-4 border-[#D4A017] border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                            <p>Starting camera...</p>
                          </div>
                        </div>
                      )}
                      {status === "scanning" && cameraOn && (
                        <div className="absolute inset-0 border-4 border-[#D4A017] rounded-2xl pointer-events-none pulse-gold"></div>
                      )}
                    </div>
                  )}

                  {mode === "fingerprint" && status === "scanning" && (
                    <div className="flex flex-col items-center py-10">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center text-6xl mb-4 pulse-gold">
                        👆
                      </div>
                      <p className="text-slate-600 animate-pulse">Scanning fingerprint...</p>
                    </div>
                  )}

                  {/* Status Result */}
                  <div className="text-center space-y-3">
                    {status === "scanning" && (
                      <p className="text-slate-600 font-medium">{message}</p>
                    )}
                    {status === "success" && (
                      <div className="space-y-3">
                        <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center text-4xl">
                          ✓
                        </div>
                        <h4 className="text-2xl font-bold text-green-700">PRESENT</h4>
                        <p className="text-lg font-medium text-[#0A1F44]">{studentName}</p>
                        <p className="text-sm text-slate-500">{message}</p>
                        <button
                          onClick={reset}
                          className="mt-4 px-6 py-2.5 bg-[#0A1F44] text-white rounded-xl font-medium hover:bg-[#0d2a5c] transition"
                        >
                          Mark Next Student
                        </button>
                      </div>
                    )}
                    {status === "error" && (
                      <div className="space-y-3">
                        <div className="w-20 h-20 mx-auto rounded-full bg-red-100 flex items-center justify-center text-4xl">
                          ✕
                        </div>
                        <p className="text-red-600 font-medium">{message}</p>
                        <button
                          onClick={reset}
                          className="mt-4 px-6 py-2.5 bg-slate-200 text-slate-800 rounded-xl font-medium hover:bg-slate-300 transition"
                        >
                          Try Again
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Info */}
            <div className="mt-8 bg-blue-50 border border-blue-100 rounded-2xl p-5 text-sm text-blue-800">
              <p className="font-medium mb-1">How it works</p>
              <ul className="list-disc list-inside space-y-1 text-blue-700">
                <li><strong>Present</strong> — Marked only when Face or Fingerprint is successfully verified.</li>
                <li><strong>Leave</strong> — Student/Parent must submit leave application with photo.</li>
                <li><strong>Absent</strong> — Automatically marked if student is not present and has no approved leave.</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
