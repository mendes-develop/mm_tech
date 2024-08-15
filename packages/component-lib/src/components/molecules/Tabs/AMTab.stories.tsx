import type { Meta, StoryObj } from "@storybook/react";
import { AMTab, tabsText } from './AMTab';

const meta = {
  title: 'Tabs',
  component: AMTab,
} satisfies Meta<typeof AMTab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseTabs: Story = {
  args: {
    tabs: tabsText,
    defaultValue: "Tab test"
  },
};

