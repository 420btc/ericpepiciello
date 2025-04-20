"use client"

import { useState } from "react"
import Image from "next/image"

type Language = {
  code: string
  name: string
  flag: string
}

const languages: Language[] = [
  {
    code: "es",
    name: "Español",
    flag: "/assets/flag-es.png",
  },
  {
    code: "en",
    name: "English",
    flag: "/assets/flag-en.png",
  },
  {
    code: "it",
    name: "Italiano",
    flag: "/assets/flag-it.png",
  },
]

export function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState("es")

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode)
    // Aquí se implementaría la lógica para cambiar el idioma de la aplicación
    console.log(`Cambiando idioma a: ${langCode}`)
  }

  return (
    <div>
      <h3 className="text-xl font-medium mb-4">Idiomas</h3>
      <div className="flex space-x-4">
        {languages.map((lang) => (
          <button
            key={lang.code}
            className={`flex items-center space-x-2 transition-colors ${
              currentLang === lang.code ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
            onClick={() => handleLanguageChange(lang.code)}
          >
            <Image
              src={lang.flag || "/placeholder.svg"}
              alt={lang.name}
              width={24}
              height={16}
              className="rounded-sm"
            />
            <span className="sr-only md:not-sr-only md:text-sm">{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
