import { Meta, StoryObj } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import {SignUpPage} from "./SignUpPage"

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
  title: "SignUpPage",
  component: SignUpPage,
  decorators: [withFormProvider], // Adiciona o decorator ao story
  parameters: {},
  args: {},
} satisfies Meta<typeof SignUpPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SignUpPageBase: Story = {};
