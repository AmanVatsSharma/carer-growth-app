'use client'
import { useState } from "react"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import { LeadFormModal } from "./lead-form-modal"

export default function JourneyModal({ children, arrow }: { children: React.ReactNode, arrow?: boolean }) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <Button
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto min-h-[56px] touch-manipulation"
                onClick={() => setIsModalOpen(true)}
            >
                {children}
                { 
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                }

            </Button>

            {/* Lead Form Modal */}
            <LeadFormModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    )
}
