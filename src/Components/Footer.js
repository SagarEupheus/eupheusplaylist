import React, { forwardRef } from 'react'
import "./footer.css";

// const Footer = forwardRef((props,refs) => {
const Footer = () => {

  // React.useImperativeHandle(refs, () => ({
  //   sendAudio() {
  //   },
  // }));

  return (
    <div className='bg-zinc-800 h-[10vh] absolute bottom-0 w-full footermain  '>
        
        <div className="h-[10vh]  bg-[#1f656f] lg:relative footer  relative z-30  md:relative songs">
        <div className="playlist">
          <audio
            controls
            className="audio"
            controlsList="nodownload"
          >
            <source src="https://files.freemusicarchive.org/storage-freemusicarchive-org/music/MusOpen/Skidmore_College_Orchestra/Mussorgskys_Pictures_at_an_Exhibition/Skidmore_College_Orchestra_-_01_-_Promenade_Allegro_giusto_nel_modo_russico_senza_allegrezza_ma.mp3" type="audio/mp3" />
          </audio>
        </div>
      </div>
    </div>
  )
}

export default forwardRef(Footer)