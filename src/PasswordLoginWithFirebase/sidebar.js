// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import './sidebar.css';
// import { sidebarData } from './sidebarData';

// function Sidebar() {
//   const location = useLocation();

//   return (
//     <div className='sidebar'>
//       <ul className='sidebarlist'>
//         {sidebarData.map((item, index) => (
//           <li
//             key={index}
//             className={`row ${location.pathname === item.link ? 'active' : ''}`}
//           >
//             <Link to={item.link}>
//               <div id='icon'>{item.icon}</div>
//               <div id='title'>{item.title}</div>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;












import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.css'; // Import your custom sidebar styles
import { sidebarData } from './sidebarData';

function Sidebar() {
  const location = useLocation();

  return (
    <div className='sidebar'>
      <ul className='sidebarlist'>
        {sidebarData.map((item, index) => (
          <li
            key={index}
            className={`row ${location.pathname === item.link ? 'active' : ''}`}
          >
            <Link to={item.link}>
              <div id='icon'>{item.icon}</div>
              <div id='title'>{item.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
