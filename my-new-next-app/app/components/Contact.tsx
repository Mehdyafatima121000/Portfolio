import React from 'react'



 import { GrMailOption } from "react-icons/gr";
 import { MdOutlineAddIcCall } from "react-icons/md";
const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl'>Get In Touch</h2>
                <p className='text-rose-500 text-[18px] pt-2'>
                    Drop your message via email by submitting the form,also you can call me.
                </p>
                <div className='flex gap-3 items-center'>
                <GrMailOption size={30}/> realmisspieces5@gmail.com
                </div>

                <div className='flex gap-3 items-center'>
                <MdOutlineAddIcCall size={30}/> +92 875 7654356
                </div>
                 </div>
                 <div className='space-y-8'>
                    <div className='flex flex-col gap-1' data-aos="zoom-in-down">
                        <label htmlFor="name">Name</label>
                        <input type="text"
                        className='h-[40px] bg-transparent border border-accent'
                        id='name' />
                    </div>
                    
                    <div className='flex flex-col gap-1' data-aos="zoom-in-down">
                        <label htmlFor="email">Email</label>
                        <input type="text"
                        className='h-[40px] bg-transparent border border-accent' data-aos="zoom-in-down"
                        id='email' />
                    </div>
                    
                    <div className='flex flex-col gap-1' >
                        <label htmlFor="msg" data-aos="zoom-in-down">Message</label>
                        <textarea 
                        className=' bg-transparent border border-accent'
                        id='message' rows={8}>
                            </textarea >
                        
                    </div>
                    
                    <button className="neu-button">Send</button>
                 </div>
        </div>
    </div>
  )
}

export default Contact