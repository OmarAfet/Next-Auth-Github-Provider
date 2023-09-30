"use client";

import { useSession } from "next-auth/react";

export default function Home() {
	const { data: session } = useSession();

	if (session) {
		return (
			<>
				<div className="flex flex-col gap-8 justify-center items-center">
					<div className="font-bold text-4xl">Home</div>
					<div>
						<code>session.user?.name:</code> {session.user?.name}
					</div>
					<div>
						<code>session.user?.email:</code> {session.user?.email}
					</div>
					<div>
						<code>session.user?.image:</code> {session.user?.image}
					</div>
				</div>
			</>
		);
	}
}
