/**
 * @copyright 2024 nathan
 * @license Apache-2.0
 */

const aboutItems = [
    {
      label: 'Projects done',
      number: 3
    },
    {
      label: 'Years of experience',
      number: 1
    }
  ];

const About = () => {
  return (
    <section id="about" className="section">
        <div className="container">
            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[45ch] text-justify">
                Welcome! I&apos;m Nathan Tjokrosaputra, Dynamic and proactive IT Specialist that is currently serving as an IT Application Development 
                at PT Nanobank Syariah. My key strengths include being a fast learner, ambitious, and highly adaptive to new environments and challenges. I possess a creative mindset 
                that drives innovative solutions, ensuring the delivery of high-quality digital applications.
                </p>

                <div className="flex flex-wrap items-center gap-10 md:gap-7">
                    {
                        aboutItems.map(({label, number }, key) => (
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-bold md:text-4xl">{number}</span>
                                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                </div>

                                <p className="text-sm text-zinc-400">{label}</p>
                            </div>
                        ))
                    }

                    <img src="/images/logo.svg" alt="Logo" width={35} height={35}className="ml-auto md:w-[40px] md:h-[40px]" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
