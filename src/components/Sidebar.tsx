import React from 'react';

const Sidebar = () => {
  return (
    <div className="">
      <aside className="w-100 p-4 bg-inherit h-screen">
        <h2 className="text-xl font-bold mb-4">Sidebar</h2>
        <ul>
          <li className="mb-2">
            <a href="#" className="text-blue-600">
              Home
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-blue-600">
              Profile
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-blue-600">
              Settings
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
