'use client'
import { useState } from "react"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import { LeadFormModal } from "./lead-form-modal"

export default function JourneyModal({ children, arrow, className }: { children: React.ReactNode, arrow?: boolean, className?: string }) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <Button
                size="lg"
                className={` transition-all duration-300 transform hover:scale-105 touch-manipulation ${className}`}
                onClick={() => setIsModalOpen(true)}
            >
                {children}
                { arrow &&
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
