import type { Meta, StoryObj } from "@storybook/react";
import { AMButton } from "./AMButton";

const meta = {
	title: "Button",
	component: AMButton,
	parameters: {},
	args: {},
} satisfies Meta<typeof AMButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryButton: Story = {
	args: {
		children: "Hello, World!",
	},
};

export const SecondaryButton: Story = {
	args: {
		children: "Hello, World!",
	},
};
