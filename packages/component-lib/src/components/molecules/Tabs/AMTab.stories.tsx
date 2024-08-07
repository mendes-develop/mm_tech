import type { Meta, StoryObj } from "@storybook/react";
import { AMTab } from './AMTab';

const meta = {
  title: 'Tabs',
  component: AMTab,
} satisfies Meta<typeof AMTab>;

export default meta;
type Story = StoryObj<typeof meta>;

const Example = ({ label }: { label: string }) =>
  <div>{label}</div>

function labelTransformer(i: number) {
  return `Tab ${i + 1}`
}

const tabs = Array.from({ length: 3 }).map((_, i) => ({
  trigger: labelTransformer(i),
  content: <Example label={labelTransformer(i)} />,
}));

export const BaseTabs: Story = {
  args: {
    tabs,
    defaultValue: "Tab 2"
  },
};

