import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { English, Indo, Thailan, Vietnam } from "@/public/languages"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { FC } from "react"

interface LanguageProps {
  language: "English" | "Vietnam" | "Thailan" | "Indo"
}

const Language: FC<LanguageProps> = ({ language }) => {
  function renderIcon() {
    switch (language) {
      case "English":
        return English
      case "Vietnam":
        return Vietnam
      case "Thailan":
        return Thailan
      case "Indo":
        return Indo
    }
  }

  function renderLanguage() {
    switch (language) {
      case "English":
        return "English"
      case "Vietnam":
        return "Tiếng việt"
      case "Thailan":
        return "ภาษาไทย"
      case "Indo":
        return "Bahasa"
    }
  }
  return (
    <p className="flex items-center gap-[12px] px-[12px] py-[6px] cursor-pointer">
      <Image alt="language" src={renderIcon()} className="size-[20px]" />
      <span className="text-sm">{renderLanguage()}</span>
    </p>
  )
}

const SelectLanguage = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <p className="flex items-center gap-[4px] cursor-pointer">
          <Image alt="language" src={English} className="size-[12px]" />
          <span className="text-xs">English</span>
          <ChevronDown size={12} />
        </p>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[171px] pt-[16px] translate-x-[-46px]">
        <Language language="English" />
        <Language language="Vietnam" />
        <Language language="Thailan" />
        <Language language="Indo" />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default SelectLanguage
