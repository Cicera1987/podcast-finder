"use client"
import { Inputs } from "@/components/atomic/inputs";


export default function Header() {
    return (
        <header className={`p-4}`}>
            <Inputs.SelectLocales/>
        </header>
    );
}
