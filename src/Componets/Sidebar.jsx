import React from 'react';
import 'bulma/css/bulma.min.css'; // Import Bulma CSS


const Sidebar = () => {
  return (
    <aside className="menu is-hidden-touch" style={{ marginTop: '350px' }}>
      {/* Hide on touch devices for smaller screens */}
      <div className="menu-container">
        {/* Apply custom styles */}
        <p className="menu-label">Student Results</p>
        <ul className="menu-list">
          <li><a href="#" className="sidebar-item">Dashboard</a></li>
          <li><a href="#" className="sidebar-item">Students</a></li>
          <li><a href="#" className="sidebar-item">Results</a></li>
          <li><a href="#" className="sidebar-item">Reports</a></li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
