import { useRouter } from "next/router";
import { createContext } from "react";


interface InterfaceIC {
    isLanguagesActive: (value: string) => boolean;
    locale?: string;
    push?: any;
}

const defaultValue: InterfaceIC = {
    isLanguagesActive: () => false,
};

export const InternalizationContext = createContext<InterfaceIC>(defaultValue);

export function InternalizationContextProvider({ children }: any) {

    const { locale, push } = useRouter();

    const isLanguagesActive = (value: string) => value === locale


    return (
        <InternalizationContext.Provider value={{ isLanguagesActive, locale, push }}>
            {children}
        </InternalizationContext.Provider>
    )
}