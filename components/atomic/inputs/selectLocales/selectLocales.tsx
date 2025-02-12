"use client";

import { useTranslation } from "react-i18next";
import { useState, useEffect, ChangeEvent } from "react";

export default function SelectLocales() {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState(i18n.language);

    useEffect(() => {
        setLanguage(i18n.language);
    }, [i18n.language]);

    const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
        const newLanguage = e.target.value;
        i18n.changeLanguage(newLanguage);
        setLanguage(newLanguage);
    };

    return (
        <div className="flex justify-end w-full">
            <select
                value={language}
                onChange={changeLanguage}
                className="border border-gray-300 p-2 rounded-md ml-2"
            >
                <option value="pt">🇧🇷 Português</option>
                <option value="en">🇺🇸 Inglês</option>
            </select>
        </div>
    );
}
