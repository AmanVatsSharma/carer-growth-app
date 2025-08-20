export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-blue-500 dark:border-blue-400"></div>
      <p className="text-gray-700 dark:text-gray-300 ml-4">Loading...</p>
    </div>
  );
}