export const lg = "lg";
export const md = "md";
export const sm = "sm";

interface Breakpoints {
  lg: string
  md: string
  sm: string
}

export const MQ: Breakpoints = {
  lg: "@media (max-width: 1024px)",
  md: "@media (max-width: 768px)",
  sm: "@media (max-width: 576px)"
}