import React from 'react'
import virat from '../assets/kohli.jpg'
import hardik from '../assets/hardik.jpg'
const Fightback = () => {
  return (
    <div className="w-full min-h-screen flex background max-sm:flex-col">
      <div className="w-2/5 flex flex-col border-r border-black p-2 max-sm:w-full max-sm:border-r-0 max-sm:border-b max-sm:border-black">
        <h1 className="text-[5vw] uppercase whitespace-nowrap leading-none font-bold my-4 max-sm:text-[6vw] max-sm:text-center">Stand and deliver</h1>
        <img src={hardik} alt="Left side image" className="w-full h-80 object-cover mb-4 max-sm:h-auto" />
        <p className="text-[2.3vw] leading-[2.3vw] w-[85%] max-sm:text-[5vw] max-sm:leading-[5vw] max-sm:w-full max-sm:text-justify">
         Hardik Pandya shone with both bat and ball. He partnered with Virat Kohli in a crucial 113-run stand for the fifth wicket. Earlier, his bowling made a big impact too. He was the standout bowler in the first innings, taking 3 wickets for just 30 runs in his 4 overs.
        </p>
      </div>
      <div className="w-3/5 flex flex-col p-4 max-sm:w-full max-sm:p-2">
        <img src={virat}  className="w-full object-cover mb-4 " />
        <p className="text-[3vw] leading-[3vw] max-sm:text-[5vw] max-sm:leading-[5vw]  max-sm:text-justify">
        "Here is a game that's almost gone. It's an India-Pakistan game, the emotion behind an India-Pakistan game. Nobody's watching it rationally. I say Kohli goes down the ground because I have no idea that ball's going for a six. That shot not going for a six is very, very rare; that a player has the skill to play that shot for a six, so I don't know it's going for a six. If you place this one, which he does on 18.6, you can see as soon as it hit the bat that it's probably going for six," Bhogle says.
        </p>
      </div>
    </div>
  )
}

export default Fightback
