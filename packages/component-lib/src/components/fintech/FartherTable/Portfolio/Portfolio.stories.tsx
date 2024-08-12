import type { Meta, StoryObj } from '@storybook/react';
import { Portfolio } from './Portfolio';

const meta = {
  component: Portfolio,
} satisfies Meta<typeof Portfolio>;


export default meta;
type Story = StoryObj<typeof meta>;

export const BasePortfolio: Story = {
  args: {
  },
};