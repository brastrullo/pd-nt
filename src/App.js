import { useEffect, useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import './App.css'
import ContributionCharts from './components/ContributionCharts/ContributionCharts'
import vid1 from './assets/vid1.mp4'
import { Canvas } from '@react-three/fiber'


function App() {
  const scrollRef = useRef(null)
  const { scrollYProgress, scrollY } = useScroll();
  const links = [
    {
      name: 'Documentation',
      url: 'https://nuclei.projectdiscovery.io/templating-guide/',
    },
    {
      name: 'Contributions',
      url: 'https://github.com/projectdiscovery/nuclei-templates/blob/main/README.md#-contributions',
    },
    {
      name: 'Discussion',
      url: 'https://github.com/projectdiscovery/nuclei-templates/blob/main/README.md#-discussion',
    },
    {
      name: 'Community',
      url: 'https://github.com/projectdiscovery/nuclei-templates/blob/main/README.md#-community',
    },
    { name: 'FAQs', url: 'https://nuclei.projectdiscovery.io/faq/templates/' },
    { name: 'Join Discord', url: 'https://discord.gg/projectdiscovery' },
  ]
  const springScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const springScrollAlt = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const elem = document.getElementById('elemScroll');
    const video = document.querySelector('video');
    return springScroll.onChange((latest) => {
      // const distanceFromTop = latest + elem.getBoundingClientRect().top;
      // const rawPercentScrolled = (latest - distanceFromTop) / (elem.scrollHeight - window.innerHeight);
      // const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);
      // video.currentTime = percentScrolled;
      video.currentTime = latest;
      console.log("Spring scroll: ", latest, video.currentTime, video.duration)
    })
  }, [])

  const useParallax = (value, distance) => {
    return useTransform(value, [0, 1], [-distance, distance]);
  }

  const moveY1 = useParallax(scrollYProgress, -600);
  const moveY2 = useParallax(scrollYProgress, 400);

  return (
    <div ref={scrollRef} className="App bg-black text-white relative">
      <header className="fixed top-0 left-0 w-full flex justify-between py-4 px-40 text-sm z-50 border-b  bg-gradient-to-b from-black via-black">
        <h1 className='transition ease-in-out hover:text-slate-400'><a href="/">NUCLEI TEMPLATES</a></h1>
        <nav>
          <ul className="flex w-full justify-between">
            {links.map((link,i) => (
              <li key={`link${i}`} className="relative group ml-4 transition ease-in-out hover:text-slate-400 hover">
                <a href={link.url}>
                  {link.name}
                </a>
                <div className='transition scale-x-0 group-hover:border-b group-hover:scale-x-100 translate-y-4 group-hover:translate-y-0 border-slate-800 '/>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <section id="elemScroll" className='h-[300vh] top-0 flex justify-start items-start'>
          <div className="h-screen w-full sticky top-0 flex justify-center items-center">
            <motion.h1 style={{ y: moveY2, x: '-50%' }} className='text-6xl font-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40'>nuclei templates</motion.h1>
            <motion.p style={{ y: moveY1, x: '-50%', opacity: scrollY }} className='text-4xl font-black text-slate-100 absolute top-[60vh] left-1/2 -translate-x-1/2 -translate-y-1/2 z-40'>
              Community curated lst of templates for the nuclei engine to find
              security vulnerabilities in applications.
            </motion.p>
            <motion.video className='w-screen m-auto opacity-50' muted={true} preload="true" autoPlay={false}>
              <source src={vid1} type="video/mp4"/>
              <p>Your user agent does not support the HTML5 Video element.</p>
            </motion.video>
          </div>
      </section>
      <section className='h-screen flex justify-center items-center'>
        <div id="canvas-container" className='w-screen h-screen'>
        <Canvas width="100%" height="100%">
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <mesh>
            <boxGeometry />
            <meshStandardMaterial />
          </mesh>
        </Canvas>
        </div>
        <p className='w-[60vw] text-2xl'>
          Templates are the core of the nuclei scanner which powers the actual
          scanning engine. This repository stores and houses various templates
          for the scanner provided by our team, as well as contributed by the
          community. We hope that you also contribute by sending templates via
          pull requests or Github issues to grow the list.
        </p>
      </section>
      <section className='h-screen flex justify-center items-center'>
        <h2 className='text-4xl mb-10'>Nuclei Templates Overview</h2>
        <p className='text-xl w-[60vw]'>
          An overview of the nuclei template project, including statistics on
          unique tags, author, directory, severity, and type of templates. The
          table below contains the top ten statistics for each matrix; an
          expanded version of this is available here, and also available in JSON
          format for integration.
        </p>
      </section>
      <section className='h-screen flex justify-center items-center'>
        <h2>Nuclei Templates Top 10 statistics</h2>
        <table></table>
        <p>321 directories, 4736 files.</p>
      </section>
      <section className='h-screen flex justify-center items-center'>
        <h2>Documentation</h2>
        <p>
          Please navigate to https://nuclei.projectdiscovery.io for detailed
          documentation to build new or your own custom templates. We have also
          added a set of templates to help you understand how things work.
        </p>
      </section>
      <section className='h-screen flex justify-center items-center'>
        <h2>Contributions</h2>
        <p>
          Nuclei-templates is powered by major contributions from the community.
          Template contributions , Feature Requests and Bug Reports are more
          than welcome.
        </p>
        <ContributionCharts />
      </section>
      <section className='h-screen flex justify-center items-center'>
        <h2>Discussions</h2>
        <p>
          Have questions / doubts / ideas to discuss? Feel free to open a
          discussion on Github discussions board.
        </p>
      </section>
      <section className='h-screen flex justify-center items-center'>
        <h2>Community</h2>
        <p>
          You are welcome to join the active Discord Community to discuss
          directly with project maintainers and share things with others around
          security and automation. Additionally, you may follow us on Twitter to
          be updated on all the things about Nuclei.
        </p>
        <div>contributors</div>
        <p>
          Thanks again for your contribution and keeping this community vibrant.
          ❤️
        </p>
      </section>
    </div>
  )
}

export default App
