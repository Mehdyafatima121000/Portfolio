import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-3'>
        <div className='grid md:grid-cols-2 items-center' data-aos="zoom-in-down">
            <div>
                <h2 className='text-4xl md:text-5xl' data-aos="zoom-in-down">Technologies I work with</h2>
                <p className='text-rose-500 pt-2' data-aos="zoom-in-down">
                    I have a solid foundation in web development,specializing in HTML,CSS and Javascript.
                    Also I'm a experienced Graphics Designer ,Animator and Video editort too..
                    Also I am a professional CHEF plus a Youtuber and a part time vlogger.
                    
                </p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-accent text-yellow-300 text-3xl sm:text-4xl'>
                    <div className='space-y-2'>
                         <h2 data-aos="zoom-in-down">TypeScript</h2>
                         <h2 data-aos="zoom-in-down">React.js</h2>
                         <h2 data-aos="zoom-in-down">Next.js</h2>
                    </div>
                    
                    <div className='space-y-2'>
                         <h2 data-aos="zoom-in-down">Photoshop</h2>
                         <h2 data-aos="zoom-in-down">Illustrator</h2>
                         <h2 data-aos="zoom-in-down">AfterEffect</h2>
                    </div>

                    <div className='space-y-2'>
                         <h2 data-aos="zoom-in-down">Tailwind</h2>
                         <h2 data-aos="zoom-in-down">CSS</h2>
                         <h2 data-aos="zoom-in-down">Node.js</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills