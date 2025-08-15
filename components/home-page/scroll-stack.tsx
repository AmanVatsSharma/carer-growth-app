import ScrollStack, { ScrollStackItem } from "../ui/ScrollStack/ScrollStack";

export default function ScrollStackSection() {
    return (
        <div className="relative h-screen w-full flex items-center justify-center overflow-y-auto snap-y snap-mandatory bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900">
            <ScrollStack className="h-screen w-full overflow-y-auto snap-y snap-mandatory">
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
    )
}