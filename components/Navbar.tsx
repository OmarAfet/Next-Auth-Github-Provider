"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

function AuthButton() {
	const { data: session } = useSession();

	if (session) {
		return (
			<>
				<div className="flex justify-between px-32 py-4 items-center">
					<div className="flex gap-2 items-center">
						<Image width={48} height={48} alt="User Logo" src={session.user?.image || ""} />
						<div>{session.user?.name}</div>
					</div>
					<button onClick={() => signOut()}>Sign Out</button>
				</div>
			</>
		);
	}

	return (
		<>
			<div className="flex justify-center px-32 py-4 items-center">
				<button onClick={() => signIn()}>Sign In</button>
			</div>
		</>
	);
}

export default function Navbar() {
	return (
		<>
			<AuthButton />
		</>
	);
}
