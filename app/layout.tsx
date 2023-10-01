import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { getServerSession } from "next-auth";
import SessionProvider from "@components/SessionProvider";
import Navbar from "@components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Next Auth Github Provider",
	description: "Next Auth Github Provider Example App",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const session = await getServerSession();

	return (
		<html>
			<body className={inter.className}>
				<SessionProvider session={session}>
					<Navbar />
					<hr className="mb-16" />
					<main>{children}</main>
				</SessionProvider>
			</body>
		</html>
	);
}
