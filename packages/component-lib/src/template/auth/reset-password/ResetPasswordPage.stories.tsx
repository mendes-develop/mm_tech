import { Meta, StoryObj } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import {ResetPasswordPage} from "./ResetPasswordPage"

// Decorator para envolver o componente com o FormProvider
const withFormProvider = (Story: any) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <Story />
    </FormProvider>
  );
};

const meta = {
  title: "ResetPasswordPage",
  component: ResetPasswordPage,
  decorators: [withFormProvider], // Adiciona o decorator ao story
  parameters: {},
  args: {},
} satisfies Meta<typeof ResetPasswordPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ResetPasswordPageBase: Story = {};
