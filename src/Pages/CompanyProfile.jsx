import React from "react";
import { useTranslation } from "react-i18next";

export default function CompanyProfile() {
    const { t } = useTranslation();

    return (
        <div className="w-full h-screen flex flex-col">
            <div className="flex-grow w-full h-full">
                <iframe
                    src="/company-profile.pdf"
                    className="w-full h-full border-none"
                    title={t("Company Profile")}
                />
            </div>
        </div>
    );
}
