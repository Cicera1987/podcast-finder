import Link, { LinkProps } from "next/link";

interface LinkTextProps extends LinkProps {
    text: string
}

export default function LinkNav({ text, href, ...rest }: LinkTextProps) {
    return (
        <Link href={href} className="text-blue-500 underline" {...rest}/>
    )
}