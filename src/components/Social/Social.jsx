import React from 'react'
import Youtube from '../../images/social/youtube.png'
import Facebook from '../../images/social/facebook.png'
import Instagram from '../../images/social/instagram.png'

const Social = () => {
  return (
    <div className='flex gap-12 mt-24'>
      <a href='https://www.youtube.com/channel/UCoWBIRFtNNordnSyfl55gYQ'>
        <img src={Youtube} alt='Youtube' />
      </a>
      <a href='https://www.facebook.com/profile.php?id=100093179952696'>
        <img src={Facebook} alt='Facebook' />
      </a>
      <a href='https://www.instagram.com/deepinblue_band/'>
        <img src={Instagram} alt='Instagram' />
      </a>
    </div>
  )
}

export default Social
