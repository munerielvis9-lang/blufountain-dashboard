import { SidebarNav } from '../components/platform/sidebar-nav';

export default function Home() {
  return (
    <div className="flex h-screen w-full bg-slate-50 font-sans text-slate-800">
      {/* Left Sidebar */}
      <SidebarNav />

      {/* Right Side Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Top Navigation Bar */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
          <div className="relative w-64">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" 
            />
            <span className="absolute left-3 top-2 text-slate-400">🔍</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-yellow-500 text-xl cursor-pointer">🔔</span>
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">AD</div>
          </div>
        </header>

        {/* Main Dashboard Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-8">
          
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
            <p className="mt-1 text-sm text-slate-500">Overview of your home affairs management system</p>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-slate-500 mb-1">Total Appointments</p>
                  <h3 className="text-3xl font-bold text-slate-800">1,419</h3>
                </div>
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-xl">📅</div>
              </div>
              <p className="text-xs text-green-600 mt-4 font-medium">↑ 12% from last month</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-slate-500 mb-1">Pending Requests</p>
                  <h3 className="text-3xl font-bold text-slate-800">211</h3>
                </div>
                <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center text-xl">⏳</div>
              </div>
              <p className="text-xs text-red-500 mt-4 font-medium">↑ 5% from yesterday</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-slate-500 mb-1">Registered Users</p>
                  <h3 className="text-3xl font-bold text-slate-800">3,614</h3>
                </div>
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-xl">👥</div>
              </div>
              <p className="text-xs text-green-600 mt-4 font-medium">↑ 8% from last week</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-slate-500 mb-1">Documents Processed</p>
                  <h3 className="text-3xl font-bold text-slate-800">720</h3>
                </div>
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-xl">📄</div>
              </div>
              <p className="text-xs text-green-600 mt-4 font-medium">↑ 15% from last month</p>
            </div>
          </div>

          {/* The Nice Table */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-200 flex justify-between items-center">
              <h2 className="text-lg font-bold text-slate-800">Recent Appointments</h2>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-lg text-sm font-semibold transition-colors w-full md:w-auto text-center">
                View All
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/50 text-slate-500 text-xs uppercase tracking-wider border-b border-slate-200">
                    <th className="px-6 py-4 font-semibold">ID</th>
                    <th className="px-6 py-4 font-semibold">Client Name</th>
                    <th className="px-6 py-4 font-semibold">Service</th>
                    <th className="px-6 py-4 font-semibold">Date & Time</th>
                    <th className="px-6 py-4 font-semibold">Status</th>
                    <th className="px-6 py-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-slate-700 divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-900">#APT-001</td>
                    <td className="px-6 py-4">John Doe</td>
                    <td className="px-6 py-4">ID Application</td>
                    <td className="px-6 py-4">Mar 7, 2026 - 10:00 AM</td>
                    <td className="px-6 py-4">
                      <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold tracking-wide">Confirmed</span>
                    </td>
                    <td className="px-6 py-4 flex gap-2">
                      <button className="bg-blue-600 text-white px-4 py-1.5 rounded-md text-xs font-semibold hover:bg-blue-700 transition-colors">View</button>
                      <button className="bg-slate-200 text-slate-700 px-4 py-1.5 rounded-md text-xs font-semibold hover:bg-slate-300 transition-colors">Edit</button>
                    </td>
                  </tr>
                  
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-900">#APT-002</td>
                    <td className="px-6 py-4">Jane Smith</td>
                    <td className="px-6 py-4">Passport Renewal</td>
                    <td className="px-6 py-4">Mar 8, 2026 - 2:30 PM</td>
                    <td className="px-6 py-4">
                      <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold tracking-wide">Pending</span>
                    </td>
                    <td className="px-6 py-4 flex gap-2">
                      <button className="bg-blue-600 text-white px-4 py-1.5 rounded-md text-xs font-semibold hover:bg-blue-700 transition-colors">View</button>
                      <button className="bg-slate-200 text-slate-700 px-4 py-1.5 rounded-md text-xs font-semibold hover:bg-slate-300 transition-colors">Edit</button>
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-900">#APT-003</td>
                    <td className="px-6 py-4">Michael Johnson</td>
                    <td className="px-6 py-4">Birth Certificate</td>
                    <td className="px-6 py-4">Mar 9, 2026 - 9:00 AM</td>
                    <td className="px-6 py-4">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold tracking-wide">Scheduled</span>
                    </td>
                    <td className="px-6 py-4 flex gap-2">
                      <button className="bg-blue-600 text-white px-4 py-1.5 rounded-md text-xs font-semibold hover:bg-blue-700 transition-colors">View</button>
                      <button className="bg-slate-200 text-slate-700 px-4 py-1.5 rounded-md text-xs font-semibold hover:bg-slate-300 transition-colors">Edit</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}