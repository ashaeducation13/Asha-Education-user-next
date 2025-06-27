'use client';

import React, { useEffect, useRef, useState } from 'react';
import { X, Mail, Phone, User, Shield, CheckCircle, AlertCircle, Download, FileText } from 'lucide-react';
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
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [downloadProgress, setDownloadProgress] = useState(0);
    const [isPreparingDownload, setIsPreparingDownload] = useState(false);
    const inputRefs = useRef([]);
    const modalRef = useRef(null);
    const [shake, setShake] = useState(false);

    // Enhanced validation rules
    const validationRules = {
        firstName: {
            required: true,
            minLength: 2,
            pattern: /^[a-zA-Z\s]+$/,
            message: 'First name must be at least 2 characters and contain only letters'
        },
        lastName: {
            required: true,
            minLength: 1,
            pattern: /^[a-zA-Z\s]+$/,
            message: 'Last name must be at least 2 characters and contain only letters'
        },
        phone: {
            required: true,
            pattern: /^[6-9]\d{9}$/,
            message: 'Please enter a valid 10-digit Indian mobile number'
        },
        email: {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Please enter a valid email address'
        }
    };

    // Real-time validation
    const validateField = (field, value) => {
        const rule = validationRules[field];
        if (!rule) return '';

        if (rule.required && !value.trim()) {
            return `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
        }

        if (rule.minLength && value.trim().length < rule.minLength) {
            return rule.message;
        }

        if (rule.pattern && !rule.pattern.test(value.trim())) {
            return rule.message;
        }

        return '';
    };

    // Close modal on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setShake(true);
                setTimeout(() => setShake(false), 500);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

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

    // Handle form input changes with validation
    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));

        // Real-time validation
        if (touched[field]) {
            const error = validateField(field, value);
            setErrors(prev => ({
                ...prev,
                [field]: error
            }));
        }
    };

    // Handle input blur for validation
    const handleBlur = (field) => {
        setTouched(prev => ({
            ...prev,
            [field]: true
        }));

        const error = validateField(field, formData[field]);
        setErrors(prev => ({
            ...prev,
            [field]: error
        }));
    };

    // Validate entire form
    const validateForm = () => {
        const newErrors = {};
        let isValid = true;

        Object.keys(validationRules).forEach(field => {
            const error = validateField(field, formData[field]);
            if (error) {
                newErrors[field] = error;
                isValid = false;
            }
        });

        setErrors(newErrors);
        setTouched(Object.keys(validationRules).reduce((acc, field) => {
            acc[field] = true;
            return acc;
        }, {}));

        return isValid;
    };

    // Send OTP to backend
    const handleSendOtp = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            toast.error("Please fix the errors before proceeding");
            return;
        }

        setIsLoading(true);
        try {
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
            toast.success("OTP sent successfully!");
        } catch (error) {
            console.error("Error sending OTP:", error);
            toast.error("Failed to send OTP. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    // Simulate download preparation with progress
    const simulateDownloadPreparation = () => {
        setIsPreparingDownload(true);
        setDownloadProgress(0);
        
        const progressInterval = setInterval(() => {
            setDownloadProgress(prev => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    setTimeout(() => {
                        setIsPreparingDownload(false);
                        toast.success("Download ready!");
                        if (onSuccess) {
                            onSuccess();
                        }
                        onClose();
                    }, 500);
                    return 100;
                }
                return prev + Math.random() * 15 + 5; // Random progress increment
            });
        }, 200);
    };

    const handleVerifyOtpSubmit = async (e) => {
        e.preventDefault();

        const fullOtp = otp.join('');
        if (fullOtp.length < 4) {
            toast.warn("Please enter the complete 4-digit OTP.");
            return;
        }

        setIsLoading(true);
        const submitData = {
            ...formData,
            otp: fullOtp,
        };

        try {
            const result = await verifyOtp(submitData);

            if (result.success) {
                toast.success("OTP verified successfully!");
                setIsLoading(false);
                setStep(3); // Move to download preparation step
                simulateDownloadPreparation();
            } else {
                toast.error(result.error);
                // Clear OTP on error
                setOtp(Array(4).fill(''));
                inputRefs.current[0]?.focus();
            }
        } catch (error) {
            toast.error("Verification failed. Please try again.");
            setOtp(Array(4).fill(''));
            inputRefs.current[0]?.focus();
        } finally {
            setIsLoading(false);
        }
    };

    const handleOtpChange = (index, value) => {
        if (!/^\d*$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 3) {
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

    const handleResendOtp = async () => {
        if (!canResend) return;
        
        setIsLoading(true);
        try {
            await sendOtp({
                email: formData.email,
                firstName: formData.firstName,
                lastName: formData.lastName,
                phone: formData.phone
            });
            setTimeLeft(120);
            setCanResend(false);
            setOtp(Array(4).fill(''));
            inputRefs.current[0]?.focus();
            toast.success("OTP resent successfully!");
        } catch (error) {
            console.error("Error resending OTP:", error);
            toast.error("Failed to resend OTP. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    const getInputClassName = (field) => {
        const baseClass = "w-full p-4 border rounded-xl focus:outline-none transition-all duration-300 text-base font-medium";
        if (errors[field] && touched[field]) {
            return `${baseClass} border-red-400 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-200`;
        }
        if (!errors[field] && touched[field] && formData[field]) {
            return `${baseClass} border-green-400 bg-green-50 focus:border-green-500 focus:ring-2 focus:ring-green-200`;
        }
        return `${baseClass} border-gray-300 bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-gray-400`;
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/40 backdrop-blur-md z-50 flex justify-center items-center p-4">
            <div
                ref={modalRef}
                className={`bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 w-full max-w-lg p-8 relative max-h-[90vh] overflow-y-auto transition-all duration-300 ${shake ? 'shake' : ''}`}
                style={{
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                }}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-full transition-all duration-200"
                >
                    <X size={20} />
                </button>

                {step === 1 ? (
                    <div className="space-y-6">
                        <div className="text-center mb-8">
                            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-red-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                                <User className="text-white" size={28} />
                            </div>
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent">
                               Almost There!
                            </h2>
                            <p className="text-gray-600 mt-2">Verify your number to download the brochure.</p>
                        </div>

                        <form onSubmit={handleSendOtp} className="space-y-5">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="relative">
                                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                        <User size={18} />
                                    </div>
                                    <input
                                        type="text"
                                        value={formData.firstName}
                                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                                        onBlur={() => handleBlur('firstName')}
                                        placeholder="First Name"
                                        className={`${getInputClassName('firstName')} pl-12`}
                                    />
                                    {!errors.firstName && touched.firstName && formData.firstName && (
                                        <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500" size={18} />
                                    )}
                                    {errors.firstName && touched.firstName && (
                                        <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500" size={18} />
                                    )}
                                </div>
                                <div className="relative">
                                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                        <User size={18} />
                                    </div>
                                    <input
                                        type="text"
                                        value={formData.lastName}
                                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                                        onBlur={() => handleBlur('lastName')}
                                        placeholder="Last Name"
                                        className={`${getInputClassName('lastName')} pl-12`}
                                    />
                                    {!errors.lastName && touched.lastName && formData.lastName && (
                                        <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500" size={18} />
                                    )}
                                    {errors.lastName && touched.lastName && (
                                        <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500" size={18} />
                                    )}
                                </div>
                            </div>

                            {((errors.firstName && touched.firstName) || (errors.lastName && touched.lastName)) && (
                                <div className="grid grid-cols-2 gap-4 text-xs">
                                    <div className="text-red-500">{errors.firstName && touched.firstName ? errors.firstName : ''}</div>
                                    <div className="text-red-500">{errors.lastName && touched.lastName ? errors.lastName : ''}</div>
                                </div>
                            )}

                            <div className="relative">
                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                                    <Phone size={18} className="text-gray-400" />
                                    <span className="text-lg">🇮🇳</span>
                                    <span className="text-gray-600 font-medium">+91</span>
                                    <span className="text-gray-300">|</span>
                                </div>
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => handleInputChange('phone', e.target.value.replace(/\D/g, '').slice(0, 10))}
                                    onBlur={() => handleBlur('phone')}
                                    placeholder="Phone Number"
                                    className={`${getInputClassName('phone')} pl-28`}
                                />
                                {!errors.phone && touched.phone && formData.phone && (
                                    <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500" size={18} />
                                )}
                                {errors.phone && touched.phone && (
                                    <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500" size={18} />
                                )}
                            </div>
                            {errors.phone && touched.phone && (
                                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                            )}

                            <div className="relative">
                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <Mail size={18} />
                                </div>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                    onBlur={() => handleBlur('email')}
                                    placeholder="Email Address"
                                    className={`${getInputClassName('email')} pl-12`}
                                />
                                {!errors.email && touched.email && formData.email && (
                                    <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500" size={18} />
                                )}
                                {errors.email && touched.email && (
                                    <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500" size={18} />
                                )}
                            </div>
                            {errors.email && touched.email && (
                                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                            )}

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-gradient-to-r from-red-500 to-blue-600 text-white py-4 rounded-xl font-semibold hover:from-red-600 hover:to-blue-700 transition-all duration-300 mt-8 text-base shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {isLoading ? (
                                    <div className="flex items-center justify-center space-x-2">
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        <span>Sending OTP...</span>
                                    </div>
                                ) : (
                                    'Send OTP'
                                )}
                            </button>
                        </form>
                    </div>
                ) : step === 2 ? (
                    <div className="space-y-6">
                        <div className="text-center mb-8">
                            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-red-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                                <Shield className="text-white" size={28} />
                            </div>
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent">
                                Verify OTP
                            </h2>
                            <p className="text-gray-600 mt-2">
                                Code sent to +91-{formData.phone.slice(0, 5)}***{formData.phone.slice(-2)}
                            </p>
                        </div>

                        <form onSubmit={handleVerifyOtpSubmit} className="space-y-6">
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
                                        className="w-14 h-16 text-center text-2xl font-bold border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-gray-50 hover:border-gray-400 transition-all duration-200"
                                    />
                                ))}
                            </div>

                            <div className="text-center text-base text-gray-600 space-y-2">
                                {canResend ? (
                                    <button
                                        type="button"
                                        onClick={handleResendOtp}
                                        disabled={isLoading}
                                        className="text-blue-600 hover:text-blue-700 font-medium hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isLoading ? 'Resending...' : 'Resend OTP'}
                                    </button>
                                ) : (
                                    <div className="flex items-center justify-center space-x-2">
                                        <span>Resend in</span>
                                        <span className="font-mono font-bold text-blue-600">{formatTime(timeLeft)}</span>
                                    </div>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading || otp.join('').length < 4}
                                className="w-full bg-gradient-to-r from-red-500 to-blue-600 text-white py-4 rounded-xl font-semibold hover:from-red-600 hover:to-blue-700 transition-all duration-300 text-base shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {isLoading ? (
                                    <div className="flex items-center justify-center space-x-2">
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        <span>Verifying...</span>
                                    </div>
                                ) : (
                                    'Verify OTP'
                                )}
                            </button>
                        </form>
                    </div>
                ) : (
                    // Step 3: Download Preparation
                    <div className="space-y-6">
                        <div className="text-center mb-8">
                            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mb-4 animate-pulse">
                                <Download className="text-white" size={28} />
                            </div>
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
                                Preparing Download
                            </h2>
                            <p className="text-gray-600 mt-2">
                                Getting your files ready...
                            </p>
                        </div>

                        <div className="space-y-4">
                            {/* Progress Bar */}
                            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                                <div 
                                    className="h-full bg-gradient-to-r from-green-500 to-blue-600 rounded-full transition-all duration-300 ease-out shadow-lg"
                                    style={{ width: `${Math.min(downloadProgress, 100)}%` }}
                                ></div>
                            </div>
                            
                            {/* Progress Text */}
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-600 font-medium">
                                    {Math.round(downloadProgress)}% Complete
                                </span>
                                <span className="text-blue-600 font-mono font-bold">
                                    {downloadProgress < 100 ? 'Preparing...' : 'Ready!'}
                                </span>
                            </div>

                            {/* File Preparation Status */}
                            <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                                <div className="flex items-center space-x-3">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${downloadProgress > 20 ? 'bg-green-100' : 'bg-gray-200'}`}>
                                        {downloadProgress > 20 ? (
                                            <CheckCircle className="text-green-600" size={16} />
                                        ) : (
                                            <div className="w-3 h-3 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                                        )}
                                    </div>
                                    <span className={`text-sm font-medium ${downloadProgress > 20 ? 'text-green-700' : 'text-gray-600'}`}>
                                        Verifying user details
                                    </span>
                                </div>
                                
                                <div className="flex items-center space-x-3">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${downloadProgress > 50 ? 'bg-green-100' : downloadProgress > 20 ? 'bg-blue-100' : 'bg-gray-200'}`}>
                                        {downloadProgress > 50 ? (
                                            <CheckCircle className="text-green-600" size={16} />
                                        ) : downloadProgress > 20 ? (
                                            <div className="w-3 h-3 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                                        ) : (
                                            <FileText className="text-gray-400" size={16} />
                                        )}
                                    </div>
                                    <span className={`text-sm font-medium ${downloadProgress > 50 ? 'text-green-700' : downloadProgress > 20 ? 'text-blue-700' : 'text-gray-600'}`}>
                                        Generating documents
                                    </span>
                                </div>
                                
                                <div className="flex items-center space-x-3">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${downloadProgress > 80 ? 'bg-green-100' : downloadProgress > 50 ? 'bg-blue-100' : 'bg-gray-200'}`}>
                                        {downloadProgress > 80 ? (
                                            <CheckCircle className="text-green-600" size={16} />
                                        ) : downloadProgress > 50 ? (
                                            <div className="w-3 h-3 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                                        ) : (
                                            <Download className="text-gray-400" size={16} />
                                        )}
                                    </div>
                                    <span className={`text-sm font-medium ${downloadProgress > 80 ? 'text-green-700' : downloadProgress > 50 ? 'text-blue-700' : 'text-gray-600'}`}>
                                        Preparing download
                                    </span>
                                </div>
                            </div>

                            {/* Completion Message */}
                            {downloadProgress >= 100 && (
                                <div className="text-center py-4">
                                    <div className="inline-flex items-center space-x-2 text-green-600 font-semibold">
                                        <CheckCircle size={20} />
                                        <span>Download will start shortly!</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            <style jsx>{`
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    10%, 30%, 50%, 70%, 90% { transform: translateX(-8px); }
                    20%, 40%, 60%, 80% { transform: translateX(8px); }
                }

                .shake {
                    animation: shake 0.6s ease-in-out;
                    will-change: transform;
                }
            `}</style>
        </div>
    );
};

export default EmailModal;