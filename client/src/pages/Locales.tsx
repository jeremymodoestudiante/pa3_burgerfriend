import { AppBg } from "../components/AppBg"
import { HeroLocales } from "../localespage/HeroLocales"
import { LaMolinaLocal } from "../localespage/LaMolinaLocal";
import { MirafloresLocal } from "../localespage/MirafloresLocal";
import { SanBorjaLocal } from "../localespage/SanBorjaLocal";
import { SanIsidroLocal } from "../localespage/SanIsidroLocal";

export const Locales = () => {
    return (
        <>
        <HeroLocales/>
        <LaMolinaLocal/>
        <SanIsidroLocal/>
        <SanBorjaLocal/>
        <MirafloresLocal/>
        <AppBg fondito={"bg-secondary"}/>
        </>
    )
}