'use client';

import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { ResendOtp, sendOtp, verifyOtp } from '@/services/api';
import { toast } from 'react-toastify';

const EmailModal = ({ isOpen, onClose, id, onSuccess }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: ''
    });
    const [otp, setOtp] = useState(Array(4).fill(''));
    const [timeLeft, setTimeLeft] = useState(120);
    const [canResend, setCanResend] = useState(false);
    const inputRefs = useRef([]);
    const modalRef = useRef(null);

    // Close modal on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [onClose]);

    // Timer for OTP resend
    useEffect(() => {
        let timer;
        if (step === 2 && timeLeft > 0) {
            timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
        } else if (timeLeft <= 0) {
            setCanResend(true);
        }
        return () => clearInterval(timer);
    }, [step, timeLeft]);

    // Handle form input changes
    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    // Validate form data
    const validateForm = () => {
        const { firstName, lastName, phone, email } = formData;

        if (!firstName.trim()) {
            alert("Please enter your first name");
            return false;
        }
        if (!lastName.trim()) {
            alert("Please enter your last name");
            return false;
        }
        if (!phone.trim()) {
            alert("Please enter your phone number");
            return false;
        }
        if (!email.trim()) {
            alert("Please enter your email");
            return false;
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address");
            return false;
        }

        // Basic phone validation (adjust regex as needed)
        const phoneRegex = /^[+]?[\d\s\-\(\)]{10,}$/;
        if (!phoneRegex.test(phone)) {
            alert("Please enter a valid phone number");
            return false;
        }

        return true;
    };

    // Send OTP to backend
    const handleSendOtp = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        try {
            // Send all form data along with email for OTP
            await sendOtp({
                email: formData.email,
                firstName: formData.firstName,
                lastName: formData.lastName,
                phone: formData.phone
            });
            setStep(2);
            setTimeLeft(120);
            setCanResend(false);
            setOtp(Array(4).fill(''));
            inputRefs.current[0]?.focus();
        } catch (error) {
            console.error("Error sending OTP:", error);
            alert("Failed to send OTP. Please try again.");
        }
    };

    const handleVerifyOtpSubmit = async (e) => {
        e.preventDefault();

        const fullOtp = otp.join('');
        if (fullOtp.length < 4) {
            toast.warn("Please enter the complete 4-digit OTP.");
            return;
        }

        const submitData = {
            ...formData,
            otp: fullOtp,
        };

        const result = await verifyOtp(submitData);

        if (result.success) {
            toast.success("OTP verified successfully!");

            if (onSuccess) {
                onSuccess();
            }
            onClose();
        } else {
            toast.error(result.error);
        }
    };


    const handleOtpChange = (index, value) => {
        if (!/^\d*$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace') {
            if (otp[index] === '' && index > 0) {
                inputRefs.current[index - 1]?.focus();
            } else {
                const newOtp = [...otp];
                newOtp[index] = '';
                setOtp(newOtp);
            }
        }
    };

    // const handleResend = async () => {
    //     if (canResend) {
    //         try {
    //             await ResendOtp({
    //                 phone: formData.phone
    //             });
    //             setTimeLeft(120);
    //             setCanResend(false);
    //             setOtp(Array(4).fill(''));
    //             inputRefs.current[0]?.focus();
    //         } catch (error) {
    //             console.error("Error resending OTP:", error);
    //             alert("Failed to resend OTP. Please try again.");
    //         }
    //     }
    // };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center">
            <div
                ref={modalRef}
                className="bg-white rounded-xl shadow-lg w-[90%] max-w-lg p-8 relative max-h-[90vh] overflow-y-auto"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
                >
                    <X />
                </button>

                {step === 1 ? (
                    <form onSubmit={handleSendOtp} className="space-y-5">
                        <h2 className="text-2xl font-semibold text-center mb-8">Enter your details</h2>

                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                value={formData.firstName}
                                onChange={(e) => handleInputChange('firstName', e.target.value)}
                                placeholder="First Name"
                                className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-base"
                            />
                            <input
                                type="text"
                                value={formData.lastName}
                                onChange={(e) => handleInputChange('lastName', e.target.value)}
                                placeholder="Last Name"
                                className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-base"
                            />
                        </div>

                        <div className="relative">
                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2 pointer-events-none">
                                <span className="text-lg">🇮🇳</span>
                                <span className="text-gray-600">+91</span>
                                <span className="text-gray-300">|</span>
                            </div>
                            <input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                placeholder="Phone Number"
                                className="w-full p-4 pl-22 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-base"
                            />
                        </div>

                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder="Email Address"
                            className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-base"
                        />

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-700 to-red-500 text-white py-4 rounded-md font-medium hover:opacity-90 transition mt-8 text-base"
                        >
                            Send OTP
                        </button>
                    </form>
                ) : (
                    <form onSubmit={handleVerifyOtpSubmit} className="space-y-6">
                        <h2 className="text-2xl font-semibold text-center">Enter OTP</h2>
                        <p className="text-base text-gray-600 text-center">
                            OTP sent to {formData.email}
                        </p>

                        <div className="flex justify-center gap-3">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    type="text"
                                    inputMode="numeric"
                                    maxLength="1"
                                    value={digit}
                                    onChange={(e) => handleOtpChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    className="w-12 h-14 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            ))}
                        </div>

                        <div className="text-center text-base text-gray-600 space-y-2">
                            {canResend ? (
                                <button
                                    type="button"
                                    onClick={handleSendOtp}
                                    className="text-blue-600 hover:underline"
                                >
                                    Resend OTP
                                </button>
                            ) : (
                                <span>Resend in {formatTime(timeLeft)}</span>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-4 rounded-md font-medium hover:bg-green-700 transition text-base"
                        >
                            Verify OTP
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default EmailModal;