import { useEffect, useRef, useState } from "react";
import ScrollStack, { ScrollStackItem } from "../ui/ScrollStack/ScrollStack";

export default function ScrollStackSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isPinned, setIsPinned] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            // Section is at the top of the viewport
            if (rect.top <= 0 && rect.bottom > 0) {
                setIsPinned(true);
            } else {
                setIsPinned(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            ref={sectionRef}
            className="relative h-screen w-full flex items-center justify-center overflow-y-auto snap-y snap-mandatory bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900"
            style={{ position: "sticky", top: 0, zIndex: 20 }}
        >
            <ScrollStack className="h-screen w-full overflow-y-auto snap-y snap-mandatory" itemScale={isPinned ? 0.03 : 0} itemDistance={isPinned ? 100 : 0}>
                <ScrollStackItem itemClassName="bg-red-500 snap-center h-screen flex flex-col items-center justify-center">
                    <h2 className="text-4xl font-bold text-white mb-4">Card 1</h2>
                    <p className="text-xl text-gray-200">This is the first card in the stack</p>
                </ScrollStackItem>
                <ScrollStackItem itemClassName="bg-blue-500 snap-center h-screen flex flex-col items-center justify-center">
                    <h2 className="text-4xl font-bold text-white mb-4">Card 2</h2>
                    <p className="text-xl text-gray-200">This is the second card in the stack</p>
                </ScrollStackItem>
                <ScrollStackItem itemClassName="bg-green-500 snap-center h-screen flex flex-col items-center justify-center">
                    <h2 className="text-4xl font-bold text-white mb-4">Card 3</h2>
                    <p className="text-xl text-gray-200">This is the third card in the stack</p>
                </ScrollStackItem>
            </ScrollStack>
        </div>
    );
}