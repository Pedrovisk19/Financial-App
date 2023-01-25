import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
	providers: [
		Providers.Credentials({
			name: "Credentials",
			type: "Credentials",

			async authorize(credentials, req) {
				const res = await fetch(proce);
			},
		}),
	],
});
