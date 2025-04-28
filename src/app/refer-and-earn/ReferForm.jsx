'use client'
import Image from 'next/image';
// components/ReferralForm.jsx
import React, { useState } from 'react';
import Arrow from '../../assets/refer-and-earn/arrow.svg'

// FormInput component
const FormInput = ({ label, id, name, type = 'text', value, onChange, placeholder = '' }) => {
  return (
    <div className="mb-6">
      <label htmlFor={id} className="block font-inter font-semibold md:text-[14px] text-[12px] leading-[20px] text-[#6D758F] mb-1">{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-[#F1F3F7] rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
      />
    </div>
  );
};

// FormSelect component
const FormSelect = ({ label, id, name, value, onChange, options }) => {
  return (
    <div className="mb-6">
      <label htmlFor={id} className="block font-inter font-semibold md:text-[14px] text-[12px] leading-[20px] text-[#6D758F] mb-1">{label}</label>
      <div className="relative">
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="" disabled>{`Select ${label.toLowerCase()}`}</option>
          {options.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
};

// RadioButton component
const RadioButton = ({ selected, value, label, onChange }) => {
  return (
    <div className="flex items-center">
      <div 
        className={`w-6 h-6 rounded-full border flex items-center justify-center cursor-pointer ${
          selected === value ? 'bg-green-500 border-green-500' : 'border-gray-300'
        }`}
        onClick={() => onChange(value)}
      >
        {selected === value && (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        )}
      </div>
      <span className="ml-2 text-gray-700">{label}</span>
    </div>
  );
};

// RadioGroup component
const RadioGroup = ({ label, options, value, onChange }) => {
  return (
    <div className="mb-6">
      <label className="block font-inter font-semibold md:text-[14px] text-[12px] leading-[20px] text-[#6D758F] mb-2 ">{label}</label>
      <div className="flex space-x-4">
        {options.map(option => (
          <RadioButton 
            key={option.value}
            selected={value} 
            value={option.value} 
            label={option.label} 
            onChange={onChange} 
          />
        ))}
      </div>
    </div>
  );
};

// Main ReferralForm component
const ReferralForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    college: '',
    isMbaGraduate: '',
    friendName: '',
    friendContact: '',
    program: '',
    university: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRadioChange = (value) => {
    setFormData({
      ...formData,
      isMbaGraduate: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const programOptions = [
    { value: 'mba', label: 'MBA' },
    { value: 'bba', label: 'BBA' },
    { value: 'msc', label: 'MSc' }
  ];

  const universityOptions = [
    { value: 'harvard', label: 'Harvard University' },
    { value: 'stanford', label: 'Stanford University' },
    { value: 'mit', label: 'MIT' }
  ];

  const graduateOptions = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
  ];

  return (
    <div className="containers lg:py-16 md:py-12 py-8">
      <h1 className="font-open-sans font-bold lg:text-[24px] md:text-[20px] text-[16px] leading-[28px] text-center mb-6 bg-clip-text text-transparent lg:w-[65%] md:w-[75%] mx-auto" style={{backgroundImage: "linear-gradient(90deg, #0A0078 5.5%, #FF383B 96.5%)"}}>
      Join our Refer and Earn program today and be a part of our community dedicated to educational excellence.
      </h1>
      
      <div className="bg-white rounded-[20px] shadow-lg md:p-8 p-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
            {/* First column */}
            <div className='font-inter font-normal md:text-[14px] text-[12px] leading-[20px] text-[#6D758F]'>
              <FormInput 
                label="Name" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Brian Clark" 
                className=""
              />
              
              <RadioGroup 
                label="Are you an MBA Graduate?" 
                options={graduateOptions} 
                value={formData.isMbaGraduate} 
                onChange={handleRadioChange} 
              />
              
              <FormInput 
                label="Your friend's name" 
                id="friendName" 
                name="friendName" 
                value={formData.friendName} 
                onChange={handleChange} 
                placeholder="Brian Clark" 
              />
              
              <FormSelect 
                label="Interested program" 
                id="program" 
                name="program" 
                value={formData.program} 
                onChange={handleChange} 
                options={programOptions} 
              />
            </div>
            
            {/* Second column */}
            <div>
              <FormInput 
                label="Phone" 
                id="phone" 
                name="phone" 
                type="tel" 
                value={formData.phone} 
                onChange={handleChange} 
                placeholder="(123) 456 - 7890" 
              />
              {formData.isMbaGraduate == 'Yes' && (
                  <FormInput 
                    label="Enter college name" 
                    id="college" 
                    name="college" 
                    value={formData.college} 
                    onChange={handleChange} 
                  />
              )}
              
              <FormInput 
                label="Your friend's contact" 
                id="friendContact" 
                name="friendContact" 
                type="tel" 
                value={formData.friendContact} 
                onChange={handleChange} 
                placeholder="(123) 456 - 7890" 
              />
              
              <FormSelect 
                label="Interested university" 
                id="university" 
                name="university" 
                value={formData.university} 
                onChange={handleChange} 
                options={universityOptions} 
              />
            </div>
          </div>
          
          <div className="flex justify-end md:mt-4 lg:mt-6">
            <button 
              type="submit" 
              className="flex gap-2 font-inter font-semibold md:text-[14px] text-[12px] leading-[20px] px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Submit
              <Image src={Arrow} alt='arrow' />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReferralForm;