import type { Meta, StoryObj } from '@storybook/react';
import { TableExample } from './TableExample';

const meta = {
  component: TableExample,
} satisfies Meta<typeof TableExample>;


export default meta;
type Story = StoryObj<typeof meta>;

export const BaseTable: Story = {
  args: {
  },
};