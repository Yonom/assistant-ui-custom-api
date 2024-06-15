"use client";

import {
	AssistantRuntimeProvider,
	type unstable_ChatModelAdapter as ChatModelAdapter,
	unstable_useLocalRuntime as useLocalRuntime,
} from "@assistant-ui/react";

const CustomModelAdapter: ChatModelAdapter = {
	async run() {
		return {
			content: [
				{
					type: "text",
					text: "ai response", //**this will be an api call**
				},
			],
		};
	},
};

export const CustomRuntimeProvider = ({
	children,
}: { children: React.ReactNode }) => {
	const runtime = useLocalRuntime(CustomModelAdapter);
	return (
		<AssistantRuntimeProvider runtime={runtime}>
			{children}
		</AssistantRuntimeProvider>
	);
};
