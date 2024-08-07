import { AMAlert } from "./AMAlert";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "Alert",
	component: AMAlert,
	parameters: {},
	args: {},
} satisfies Meta<typeof AMAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseAlert: Story = {};
