import React, { useId, useState } from 'react'
import sublinks from '../utils/Data'
import icon1 from '../assets/briefcase 1.svg'
import icon2 from '../assets/np_next_2236826_000000 2.svg'

const Sidebar = () => {
  return (
    <main className="sidebar">
      <div className='sidebar-container'>
        <img src={icon1} className='icon'/>
        <h1>switch organization</h1>
        <img src={icon2} className='arrow-icon'/>
      </div>

      {sublinks.map((link) => {
        const { pageId, page, links } = link
        const id = pageId?.page?.links || useId()
        return (
          <article key={id}>
            <h2 className='main-links'>
              {page}
            </h2>
            <div >
              {links.map((link) => {
                const { id, label, icon } = link
                return (
                  <div key={id} className="links">
                    <img src={icon} />
                    <h3>{label}</h3>
                  </div>
                )
              })}
            </div>
          </article>
        )
      })}
    </main>
  )
}

export default Sidebar
