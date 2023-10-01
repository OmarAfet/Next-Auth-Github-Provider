"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

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
					<div className="flex gap-2">
						<button onClick={() => signOut()}>Sign Out</button>
						<Link className="github-btn" href={"https://github.com/OmarAfet/Next-Auth-Github-Provider"}>
							Github Repo
						</Link>
					</div>
				</div>
			</>
		);
	}

	return (
		<>
			<div className="flex justify-center px-32 py-4 items-center gap-2">
				<button onClick={() => signIn()}>Sign In</button>
				<Link className="github-btn" href={"https://github.com/OmarAfet/Next-Auth-Github-Provider"}>
					Github Repo
				</Link>
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
