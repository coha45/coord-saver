import React from 'react'
import clsx from 'clsx'

const Button = ({ children, variant="default", full, icon, size="md", ...props }) => {
  return (
    <button { ...props } className={clsx(" flex flex-row items-center justify-center gap-2", 
        variant === "default" && "bg-[#272422] text-white ",
        variant === "primary" && "bg-[#272422] text-white ",
        variant === "secondary" && "bg-[#272422] text-white ",
        variant === "success" && "bg-[#3d8427] text-white",
        variant === "danger" && "bg-[#ff2e3b] text-white",
        size === "lg" && "text-lg",
        size === "md" && "text-md",
        size === "sm" && "text-sm",
        size === "xs" && "text-xs",
        icon  && "p-2",
        !icon && "px-10 py-2",
        full && "w-full"
    )}>
        { children }
    </button>
  )
}

export default Button