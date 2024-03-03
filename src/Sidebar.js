import React from 'react'
import './Sidebar.css'
import { Avatar } from '@material-ui/core'
import sidebarbackground from './features/photo-1561816544-21ecbffa09a3.png'


function Sidebar() {

    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )



  return (
    <div className='Sidebar'>
        <div className='sidebar__top'>
            <img src={sidebarbackground} alt='' />
            <Avatar className='sidebar__avatar'/>
            <h2>Mubashir Mughal</h2>
            <h4>jmubashir278@gmail.com</h4>
        </div>

        <div className='sidebar__stats'>
            <div className='sidebar__stat'>
                <p>Who viewed you</p>
                <p className='sidebar__statNumber'>2,645</p>
            </div>
            <div className='sidebar__stat'>
                <p>Views on post</p>
                <p className='sidebar__statNumber'>2,487</p>
            </div>
        </div>

        
        <div className='sidebar__bottom'>
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('softwareengineering')}
        {recentItem('design')}
        {recentItem('developer')}

        </div>

    </div>
    
  )
}

export default Sidebar