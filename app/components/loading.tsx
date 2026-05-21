export default function Loading() {
    return (
        <div className="flex h-screen w-screen items-center justify-center bg-transparent">
            {/* Tailwind-based CSS Spinner */}
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-blue-500" />
        </div>
    );
}