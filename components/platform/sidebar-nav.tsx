import React from 'react';

export function SidebarNav() {
  return (
    <aside className="w-64 h-screen flex-shrink-0 flex flex-col shadow-xl z-20 bg-slate-900 text-slate-300">
      <div className="h-16 flex items-center px-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-white font-bold">B</div>
          <span className="text-white text-lg font-bold tracking-wide">Blufountain</span>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-6">
        <ul className="space-y-2 px-4">
          <li>
            <a href="#" className="flex items-center px-4 py-3 rounded-lg text-white bg-blue-600 transition-colors">
              <span className="mr-3 text-lg">📊</span>
              <span className="font-medium">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-4 py-3 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
              <span className="mr-3 text-lg">📅</span>
              <span className="font-medium">Appointments</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-4 py-3 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
              <span className="mr-3 text-lg">⚙️</span>
              <span className="font-medium">Services</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-4 py-3 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
              <span className="mr-3 text-lg">👥</span>
              <span className="font-medium">Users</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-4 py-3 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
              <span className="mr-3 text-lg">📄</span>
              <span className="font-medium">Documents</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="p-4 border-t border-slate-800">
         <ul className="space-y-2 px-4">
          <li>
            <a href="#" className="flex items-center px-4 py-3 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
              <span className="mr-3 text-lg">🔧</span>
              <span className="font-medium">Settings</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-4 py-3 rounded-lg hover:text-red-400 transition-colors">
              <span className="mr-3 text-lg">🚪</span>
              <span className="font-medium">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}