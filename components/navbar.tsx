'use client'

import { Sparkles } from "lucide-react"
import { Poppins } from "next/font/google"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { UserButton } from "@clerk/nextjs"
import { Button } from "./ui/button"
import { ModeToggle } from "./mode-toggle"
import { MobileSidebar } from "./mobile-sidebar"
import { useProModel } from "@/hooks/use-pro-model"

const font = Poppins({
    weight: "600",
    subsets: ["latin"]
})

interface NavbarProps{
    isPro: boolean
}

export const Navbar = ({
    isPro
}: NavbarProps) => {
    const proModal = useProModel()
    return(
        <div className="fixed w-full z-50 flex justify-between items-center py-2 px-2 border-b border-primary/10 bg-secondary h-16">
            <div className="flex items-center">
                <MobileSidebar isPro={isPro}/>
                <Link href='/'>
                    <h1 className={cn(
                        "hidden md:block text-xl md:text-3xl font-bold text-primary",
                        font.className
                    )}>
                        Companion.ai
                    </h1>
                </Link>
            </div>
            <div className="flex items-center gap-x-3">
                {!isPro && (  
                    <Button onClick={proModal.onOpen} variant="premium" size="sm">
                        Upgrade
                        <Sparkles className="h-4 w-4 fill-white text-white ml-2"/>
                    </Button>
                )}
                <ModeToggle/>
                <UserButton afterSignOutUrl="/"/>
            </div>
        </div>
    )
}