// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'
import Card from './compontent/Card'
import Form from './compontent/Form'
import EffectHook from './compontent/EffectHook'
import UseMemoExample from './compontent/UseMemo'
import UseCallbackHook from './compontent/UseCallback'
import { CustomHook } from './compontent/CustomHook'


function App() {

  // let [count, setCount]= useState(0)
  
  return (

  <>

  {/* Hooks  */}

  {/* <EffectHook/> */}

  {/* <UseMemoExample/> */}

  {/* <UseCallbackHook/> */}

  <CustomHook/>

  {/* <Form/> */}

  {/* class3 useState*/}
  {/* <h1 className='text-center'>{count}</h1>
  <button  className='text-center' onClick={()=>{
    setCount(count++)
  }}>Click Here</button> */}

  {/* class2 component props */}

  {/* <h1 className='text-center'>What to watch</h1>
  <div className='card-row'>
        <Card imgSrc={'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2172010/capsule_616x353.jpg?t=1750959555'} title={'Until Dawn'} description={'One year after her sister disappeared, Clover and her friends head to the remote valley where she vanished to search for answers.'}/>
        <Card imgSrc={'https://westwoodhorizon.com/wp-content/uploads/2020/02/dolittle-universal-1080x793-5e1cc7ac93aa5-1.jpg'} title={'Dolittle'} description={'A physician, who can speak with animals, is summoned by the queen to find a cure for her life-threatening disease.'}/>
        <Card imgSrc={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUs2O_epN9iXy1BjSN6r1iBFMsn5PPVrfAqQ&s'} title={'Venom: The Last Dance'} description={'As Eddie and Venom are tirelessly pursued by forces from both of their worlds, they find themselves out of options and left with a shattering last resort.'}/>
        
        <Card imgSrc={'https://resizing.flixster.com/nP7E9uDCBQ6sHcIuGfO0Hb8107Q=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17965575_v_h8_ad.jpg'} title={'Bad Boys: Ride or Die'} description={`Mike and Marcus face their toughest case yet as their late captain's reputation hangs in the balance. Subsequently, they unravel a complex web of cartel connections in a high-stakes mission.`}/>

        <Card imgSrc={'https://www.onlymelbourne.com.au/image/film-prabbit2.jpg'} title={'Peter Rabbit 2: The Runaway'} description={`Peter Rabbit runs away from his human family when he learns they are going to portray him in a bad light in their book. Soon, he crosses paths with an older rabbit who ropes him into a heist.`}/>

        <Card imgSrc={'https://pacificlegal.org/wp-content/uploads/2022/10/Ghostbusters-Poster.jpg'} title={'Ghostbusters'} description={`Paranormal enthusiasts Abby, Erin, Jillian and Patty set out to capture ghosts when they realise that someone is attempting to cause an apocalypse by summoning ghosts in the city of New York.`}/>

        <Card imgSrc={'https://resizing.flixster.com/5M5FCkUD9CjVOVe8bu6aZv9Ffnw=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p19885745_v_h9_ac.jpg'} title={`He's All That`} description={`An influencer who specializes in makeovers bets that she can transform an unpopular classmate into a prom king.`}/>

        <Card imgSrc={'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3716910/67c9eff9ac6b3075a894fe7a64d0d1a247be13ea/capsule_616x353.jpg?t=1750454362'} title={`The Fog`} description={`When supernatural events occur in their town, Nick and Elizabeth discover that the ghosts of a crew of sailors who were killed in a shipwreck more than 100 years ago have come to exact revenge.`}/>
    </div> */}
  </>

    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App
