type ContentProps = {
    content: string;
}

export default function Text({content}: ContentProps) {
    return (
        <p className="text-lg mt-4">
            {content}
        </p>
    )
}