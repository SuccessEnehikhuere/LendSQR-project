import React, { useState } from 'react'
import sublinks from '../utils/Data'

const Sidebar = () => {
  const [isIcon, setIsIcon] = useState(true)
  return (
    <main>
      {sublinks.map((link) => {
        const { pageId, page, icon, Icon, links } = link
        return (
          <article key={pageId}>
            <div className="sub-links">
              {/* {isIcon ? (
                <div>
                <h2>{page}</h2>
                <img src={icon}/> 
               </div>
               ) : (<h2>{page}</h2>)} */}
              <div>
                <h2>{page}</h2>
                <img src={Icon} />
                <img src={icon} />
              </div>
            </div>
            <div>
              {links.map((links) => {
                const { id, label, icon } = links
                return (
                  <div key={id}>
                    <img src={icon} />
                    <h4>{label}</h4>
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
