"use client"

import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useEffect } from "react"

interface SlideOverProps {
  open: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  width?: string
}

export function SlideOver({ open, onClose, title, children, width = "w-[420px]" }: SlideOverProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-[var(--bf-gray-900)]/30 transition-opacity"
          onClick={onClose}
        />
      )}
      {/* Panel */}
      <div
        className={cn(
          "fixed right-0 top-0 z-50 flex h-full flex-col border-l border-[var(--bf-gray-200)] bg-[var(--card)] shadow-2xl transition-transform duration-300 ease-in-out",
          width,
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between border-b border-[var(--bf-gray-200)] px-5 py-4">
            <h2 className="text-base font-semibold text-[var(--bf-gray-800)]">{title}</h2>
            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-[var(--bf-gray-400)] hover:bg-[var(--bf-gray-100)] hover:text-[var(--bf-gray-600)]"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        )}
        {/* Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {children}
        </div>
      </div>
    </>
  )
}
