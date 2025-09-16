import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Dashboard Login",
    description: "Login to access the admin dashboard",
    robots: {
        index: false,
        follow: false,
        noarchive: true,
        nosnippet: true,
        noimageindex: true,
    },
};

export default function LoginLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}