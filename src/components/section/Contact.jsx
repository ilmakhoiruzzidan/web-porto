import React, { useState } from 'react';

function Contact() {
  const ContactForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // Check if any field is empty
      if (!formData.name || !formData.email || !formData.message) {
        alert('Please fill in all fields');
        return;
      }
      // Form submission logic
      console.log('Form submitted:', formData);
    };

    return (
      <form method='POST' action="https://getform.io/f/pamqreja" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-2 border-[#333333]'>Contact</p>
          <p className='py-4'>// Submit the form below or shoot me an <span className='underline-offset-1'><a href="mailto:ilmakhoiruzzid@gmail.com" style={{fontWeight: 'bold'}}>email</a></span></p>
        </div>
        <input
          className='my-2 p-2 bg-[#A3B18A] text-[#344E41] placeholder-[#3A5A40] rounded-md' 
          type="text" 
          placeholder='Name' 
          name="name" 
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className='my-2 p-2 bg-[#A3B18A] text-[#344E41] placeholder-[#3A5A40] rounded-md' 
          placeholder='Email' 
          type='email' 
          name="email" 
        />
        <textarea
          className='my-2 p-2 bg-[#A3B18A] text-[#344E41] placeholder-[#3A5A40] rounded-md' 
          placeholder='Message'
          name="message"
          rows={10}
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button className='px-4 py-3 my-2 mx-auto items-center bg-[#A3B18A] border-[#3A5A40] text-white flex transition-colors duration-300 hover:bg-white hover:text-[#3A5A40] hover:shadow-md rounded-full' onClick={handleSubmit}>
          Submit
        </button>
      </form>
    );
  };

  return (
    <div name='contact' className='w-full h-screen  bg-[#DAD7CD] text-[#3A5A40] flex justify-center items-center p-4'>
      <ContactForm />
    </div>
  );
}

export default Contact;
