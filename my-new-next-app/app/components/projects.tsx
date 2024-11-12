import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [
    {
        id: 0,
        title: "Countdown Timer",
        desc: "A HTML and Next JS project to track time",
        img: "/countdown.jpeg",
        tags: ["HTML", "Node", "CSS", "Typescript"],
    },


{
  id: 1,
  title: "LOGO",
  desc: "An Illustration to design a company logo",
  img: "/4trees logo.jpg 1.jpg",
  tags: ["Illustrator"],
},

{
  id: 2,
  title: "Flyer",
  desc: "An Illustration to design a company flyer",
  img: "/BURGER OFFER FLYER.jpg",
  tags: ["Illustrator" , "Photoshop"],
},

{
  id: 3,
  title: "LOGO",
  desc: "An Illustration to design a company Logo",
  img: "/easy logo 2.jpg",
  tags: ["Illustrator" ,],
},

{
  id: 4,
  title: "Banner",
  desc: "An Illustration to design a company banner",
  img: "/banner copy.jpg",
  tags: ["Illustrator" , "Photoshop"],
},
];

const projects = () => {
  return (
    <div id='projects' className='container pt-32' data-aos="zoom-in-down">
     <Heading title='My projects'/>
    <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center' data-aos="zoom-in-down">
      {
        data.map((el) => (<Card
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}

        />))
      }
    </div>
    </div>
  )
}

export default projects
