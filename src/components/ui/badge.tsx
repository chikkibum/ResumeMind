import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-base border-2 border-border px-2.5 py-0.5 text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-main text-main-foreground shadow-[2px_2px_0px_0px_var(--border)]",
        secondary:
          "bg-secondary text-secondary-foreground shadow-[2px_2px_0px_0px_var(--border)]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-[2px_2px_0px_0px_var(--border)]",
        outline:
          "bg-secondary-background text-foreground shadow-[2px_2px_0px_0px_var(--border)]",
        neutral:
          "bg-secondary-background text-foreground shadow-[2px_2px_0px_0px_var(--border)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
