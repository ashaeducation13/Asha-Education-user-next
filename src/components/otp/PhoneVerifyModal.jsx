"use client";

import React, { useEffect, useRef, useState } from "react";
import { X, Shield, CheckCircle, AlertCircle } from "lucide-react";
import { sendOtp, verifyOtp } from "@/services/api";
import { toast } from "react-toastify";

const PhoneVerifyModal = ({ isOpen, onClose, phone, onVerified }) => {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [timeLeft, setTimeLeft] = useState(120);
    const [canResend, setCanResend] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const inputRefs = useRef([]);

    useEffect(() => {
        if (!isOpen) return;

        setOtp(["", "", "", ""]);
        sendOtpToUser();
        inputRefs.current[0]?.focus();
    }, [isOpen]);

    // Start OTP timer
    useEffect(() => {
        if (!isOpen || timeLeft <= 0) return setCanResend(true);

        const timer = setInterval(() => setTimeLeft(p => p - 1), 1000);
        return () => clearInterval(timer);
    }, [timeLeft, isOpen]);

    const sendOtpToUser = async () => {
        if (!phone) return toast.error("Phone not provided!");

        setIsLoading(true);
        try {
            await sendOtp({ phone });
            toast.success("OTP sent!");
            setTimeLeft(120);
            setCanResend(false);
        } catch (err) {
            toast.error("Failed to send OTP.");
        } finally {
            setIsLoading(false);
        }
    };

    // Format timer
    const formatTime = () => {
        const m = Math.floor(timeLeft / 60);
        const s = timeLeft % 60;
        return `${m}:${s.toString().padStart(2, "0")}`;
    };

    // Handle OTP Input
    const handleChange = (idx, val) => {
        if (!/^\d*$/.test(val)) return;

        const copy = [...otp];
        copy[idx] = val;
        setOtp(copy);

        if (val && idx < 3) inputRefs.current[idx + 1]?.focus();
    };

    const handleKeyDown = (idx, e) => {
        if (e.key === "Backspace" && otp[idx] === "" && idx > 0) {
            inputRefs.current[idx - 1]?.focus();
        }
    };

    const handleVerify = async () => {
        const fullOtp = otp.join("");
        if (fullOtp.length < 4) return toast.warning("Enter full OTP");

        setIsLoading(true);
        try {
            const res = await verifyOtp({ phone, otp: fullOtp });

            if (res.success) {
                toast.success("Phone Verified!");
                onVerified(phone);
                onClose();
            } else {
                toast.error("Invalid OTP");
                setOtp(["", "", "", ""]);
                inputRefs.current[0]?.focus();
            }
        } catch {
            toast.error("Verification failed");
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100000] flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md relative">

                {/* Close btn */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 p-2 text-gray-500 hover:text-red-500"
                >
                    <X size={20} />
                </button>

                {/* Header */}
                <div className="text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-red-500 to-blue-600 flex items-center justify-center text-white mb-4">
                        <Shield size={28} />
                    </div>
                    <h1 className="text-2xl font-bold">Verify Phone Number</h1>
                    <p className="text-gray-600 mt-1">OTP sent to +91-{phone}</p>
                </div>

                {/* OTP Inputs */}
                <div className="flex justify-center gap-3 mt-6">
                    {otp.map((num, i) => (
                        <input
                            key={i}
                            ref={(el) => (inputRefs.current[i] = el)}
                            maxLength={1}
                            value={num}
                            onChange={(e) => handleChange(i, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(i, e)}
                            className="w-14 h-16 text-2xl text-center border-2 rounded-xl"
                        />
                    ))}
                </div>

                {/* Timer or Resend */}
                <div className="text-center mt-5 text-gray-600">
                    {canResend ? (
                        <button
                            onClick={sendOtpToUser}
                            className="text-blue-600 hover:underline"
                            disabled={isLoading}
                        >
                            Resend OTP
                        </button>
                    ) : (
                        <span>Resend in {formatTime()}</span>
                    )}
                </div>

                {/* Verify Button */}
                <button
                    onClick={handleVerify}
                    disabled={isLoading}
                    className="w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-red-500 to-blue-600 text-white font-medium shadow hover:scale-[1.02] transition"
                >
                    {isLoading ? "Verifying..." : "Verify"}
                </button>
            </div>
        </div>
    );
};

export default PhoneVerifyModal;
