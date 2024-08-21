import { AlertEmailReset } from "./AlertEmailReset";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "AlertEmailReset",
	component: AlertEmailReset,
	parameters: {},
	args: {},
} satisfies Meta<typeof AlertEmailReset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseAlert: Story = {
	args: {
	  showAlert: true,
	},
  };
