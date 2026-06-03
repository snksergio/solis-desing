import { cva } from "class-variance-authority"

/* ══════════════════════════════════════════════════════════════════════════
   AppSidebar — All styles (CVA + static objects)

   Zero hardcoded values. All colors via sidebar tokens.
   Layout via Tailwind natives. Sizes from Figma measurements.
   ══════════════════════════════════════════════════════════════════════════ */

// ── Container ──

export const sidebarVariants = cva(
  [
    "relative flex h-full flex-col overflow-x-hidden",
    "border-r border-sidebar-border bg-sidebar",
    "transition-[width] duration-300 ease-in-out",
  ].join(" "),
  {
    variants: {
      expanded: {
        true: "w-[280px]",
        false: "w-20",
      },
    },
    defaultVariants: {
      expanded: true,
    },
  }
)

// ── Category ──

export const categoryVariants = cva(
  "flex items-center rounded-lg cursor-pointer transition-all",
  {
    variants: {
      active: {
        true: "bg-card shadow-sm",
        false: "hover:bg-sidebar-border/50",
      },
      collapsed: {
        true: "justify-center px-0 size-[44px]",
        false: "w-full gap-2.5 px-4 py-3",
      },
    },
    defaultVariants: {
      active: false,
      collapsed: false,
    },
  }
)

// ── Static styles ──

export const styles = {
  // ── Header ──
  header: {
    wrapper: "flex h-20 items-center overflow-hidden px-6 py-4 shrink-0",
    inner: "flex items-center gap-3",
    logo: "size-[38px] shrink-0",
    title: "text-xl font-bold tracking-tight text-foreground whitespace-nowrap animate-sidebar-fade-in",
    collapseBtn:
      "ml-auto shrink-0 cursor-pointer rounded-lg p-1 text-sidebar-muted-subtle hover:bg-sidebar-border/50 hover:text-sidebar-muted transition-colors",
    expandBtn:
      "absolute right-0 top-20 translate-x-1/2 z-10 cursor-pointer rounded-full bg-card border border-border p-1 shadow-sm text-sidebar-muted-subtle hover:text-sidebar-muted transition-colors",
    expandBtnIcon: "size-4",
  },

  // ── Module selector ──
  module: {
    trigger:
      "flex w-full cursor-pointer items-center gap-2.5 rounded-lg bg-card py-2 pl-2 pr-4 shadow-sm transition-colors hover:bg-card/80",
    iconContainer:
      "flex size-[34px] shrink-0 items-center justify-center rounded-lg bg-sidebar-primary",
    textContainer: "flex flex-col items-start gap-1 overflow-hidden",
    title: "text-[15px] font-bold leading-4 text-foreground truncate text-left",
    subtitle: "text-[10px] font-semibold leading-[10px] text-sidebar-muted-subtle text-left",
    chevron: "ml-auto shrink-0 text-sidebar-muted-subtle",
    dropdownItem:
      "flex items-center gap-2.5 cursor-pointer",
    dropdownItemIcon:
      "flex size-7 shrink-0 items-center justify-center rounded-md bg-sidebar-primary",
    dropdownItemLabel: "text-sm font-medium",
  },

  // ── Search ──
  search: {
    wrapper:
      "flex w-full items-center justify-between rounded-xl bg-sidebar-search py-[7px] pl-2.5 pr-1.5 transition-all focus-within:bg-sidebar-search/80 focus-within:ring-1 focus-within:ring-sidebar-border",
    inner: "flex flex-1 items-center gap-2 opacity-60 focus-within:opacity-100",
    icon: "shrink-0 text-sidebar-muted",
    text: "text-sm font-medium text-sidebar-foreground placeholder:text-sidebar-foreground",
    shortcutBadge:
      "shrink-0 flex items-center justify-center rounded-lg bg-card px-2 py-1 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05),0px_10px_15px_0px_rgba(10,27,57,0.04)]",
    shortcutText: "text-sm font-medium text-sidebar-foreground",
  },

  // ── Category text/icon states ──
  category: {
    text: {
      active: "flex-1 text-sm text-left font-bold text-sidebar-primary whitespace-nowrap overflow-hidden text-ellipsis animate-sidebar-fade-in",
      inactive: "flex-1 text-sm text-left font-medium text-sidebar-foreground whitespace-nowrap overflow-hidden text-ellipsis animate-sidebar-fade-in",
    },
    icon: {
      active: "size-5 shrink-0 text-sidebar-primary",
      inactive: "size-5 shrink-0 text-sidebar-muted",
    },
    chevron: {
      active: "shrink-0 text-sidebar-primary",
      inactive: "shrink-0 text-sidebar-muted-subtle",
    },
  },

  // ── Sub-item (MenuItem) ──
  menuItem: {
    wrapper:
      "flex h-[38px] items-center gap-[18px] pl-[18px] pr-4 cursor-pointer transition-colors hover:bg-sidebar-border/30",
    border: {
      selected: "h-full w-0 shrink-0 border-l-[3px] border-sidebar-primary",
      default: "h-full w-0 shrink-0 border-l border-sidebar-subitem-border",
    },
    text: {
      selected: "text-[13px] text-left font-semibold text-sidebar-foreground animate-sidebar-fade-in",
      default: "text-[13px] text-left font-medium text-sidebar-muted animate-sidebar-fade-in",
    },
  },

  // ── Footer ──
  footer: {
    wrapper: "px-2.5 py-3.5",
    button:
      "flex w-full cursor-pointer items-center gap-2.5 rounded-lg bg-sidebar-user-bg px-4 py-3 transition-colors hover:bg-sidebar-user-bg/80",
    avatar:
      "flex size-8 shrink-0 items-center justify-center rounded-full bg-sidebar-50/50",
    avatarIcon: "text-sidebar-muted",
    textContainer: "flex flex-col items-start gap-0.5 overflow-hidden",
    name: "text-[13px] font-semibold text-foreground truncate w-full text-left",
    email: "text-[10px] font-medium text-sidebar-foreground truncate w-full text-left",
    chevron: "ml-auto shrink-0 text-sidebar-muted-subtle",
    dropdownLabel: "flex flex-col gap-0.5 px-1.5 py-1",
    dropdownLabelName: "text-sm font-semibold",
    dropdownLabelEmail: "text-xs text-muted-foreground font-normal",
    dropdownItem: "flex items-center gap-2 cursor-pointer",
    dropdownItemIcon: "size-4 shrink-0",
  },

  // ── Layout ──
  // Text content fade — hides text during width transition to avoid text wrapping
  textFadeIn: "animate-sidebar-fade-in",
  textFadeOut: "opacity-0",

  divider: "mx-[18px] h-px bg-sidebar-border",
  sectionPadding: "flex flex-col gap-3.5 px-[18px] py-6 shrink-0 overflow-hidden",
  navContainer: "flex flex-1 flex-col overflow-y-auto overflow-x-hidden py-6",
  navContainerExpanded: "px-[18px]",
  navContainerCollapsed: "items-center",
  navList: "flex flex-col",
  subItemList: "flex flex-col py-2.5",
} as const
