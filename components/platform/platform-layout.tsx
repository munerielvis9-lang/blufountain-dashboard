"use client"

import { SidebarNav } from "./sidebar-nav"
import { TopBar } from "./top-bar"

export function PlatformLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[var(--background)]">
      <SidebarNav />
      <div className="ml-60 flex flex-1 flex-col">
        <TopBar />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
