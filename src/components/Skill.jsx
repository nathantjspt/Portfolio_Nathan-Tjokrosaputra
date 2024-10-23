/**
 * @copyright 2024 nathan
 * @license Apache-2.0
 */

import SkillCard from "./SkillCard";

const skillItem = [
    {
      imgSrc: '/images/appsheet.svg',
      label: 'AppSheet',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/appscript.svg',
      label: 'AppScript',
      desc: 'JavaScript Platform'
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/vite.svg',
      label: 'Vite',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/nodejs.svg',
      label: 'NodeJS',
      desc: 'Web Server'
    },
  ];

const Skill = () => {
  return (
    <section className="section">
        <div className="container">
            <h2 className="headline-2 reveal-up">
                Technical Skills
            </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[75ch] reveal-up">
                I have strong skills in Quality Assurance and Software Development using Industry-Standard Tools.
            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({imgSrc, label, desc}, key) => (
                        <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} classes="reveal-up"/>

                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skill