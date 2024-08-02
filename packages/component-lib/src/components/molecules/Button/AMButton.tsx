import { Button } from "@/components/ui/button"
import { ComponentProps } from "react"

type AMButtonProps = ComponentProps<typeof Button>

export const AMButton = ({ children, ...rest }: AMButtonProps) => <Button {...rest} >{children}</Button>
