import React from 'react';

export function TopBar() {
  return (
    <div className="top-bar">
      <div className="search-bar">
        <i className="icon-search"></i>
        <input type="text" placeholder="Search..." />
      </div>
      <div className="user-menu">
        <i className="icon-notification"></i>
        <div className="user-avatar">AD</div>
      </div>
    </div>
  );
}