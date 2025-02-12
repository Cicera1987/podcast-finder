import { ReactNode } from "react";

interface TemplateProps {
    header?: ReactNode;
    sidebar?: ReactNode;
    body?: ReactNode;
    footer?: ReactNode;
}

export default function Template({ header, sidebar, body, footer }: TemplateProps) {

    return (
        <div>
    
            <div
                className="flex min-h-screen transition-colors duration-300"
            >
                {sidebar}
                <main className={`flex-1 flex flex-col`}>
                    <section className="flex-1 p-6 ">
                        {header}
                        {body}
                    </section>
                    {footer}
                </main>
            </div>

        </div>
    );
}
