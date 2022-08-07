import React from 'react'
import {NavigationDots, SocialMedia} from '../components'


const AppWrap = (Components, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia/>
        <div className='app__wrapper app__flex'>
            <Components/>
        </div>
        <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrap