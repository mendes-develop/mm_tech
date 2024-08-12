import type { Meta, StoryObj } from '@storybook/react';
import { HistoricalPerformance } from './HistoricalPerformance';

const meta = {
  component: HistoricalPerformance,
} satisfies Meta<typeof HistoricalPerformance>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HistoricalBase: Story = {
  args: {}
};