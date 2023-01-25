import { CloseIcon } from "@chakra-ui/icons";
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
	Button,
	Text,
	useToast,
} from "@chakra-ui/react";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
function Login() {
	const toast = useToast();
	const router = useRouter();
	return (
		<div className="form">
			<form action="" className="formLogin">
				<div className="title">
					<Text fontSize={22} fontWeight="bold">
						Financial App
					</Text>
				</div>

				<Input variant="flushed" placeholder="Email" />
				<Input variant="flushed" placeholder="Password" />
				<Button
					colorScheme="purple"
					onClick={() => {
						toast({
							title: "success",
							description: "You are able to see your Credit Cards Now!!",
							status: "success",
							duration: 9000,
							isClosable: true,
							position: "top-right",
						});
						setTimeout(() => {
							router.push("/Home");
						}, 2000);
					}}
				>
					Login
				</Button>
			</form>
		</div>
	);
}
export default Login;
