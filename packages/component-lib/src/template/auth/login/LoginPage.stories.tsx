import { Meta, StoryObj } from "@storybook/react";
import { LoginPage } from "./LoginPage";
import { FormProvider, useForm } from "react-hook-form";

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
  title: "LoginPage",
  component: LoginPage,
  decorators: [withFormProvider], // Adiciona o decorator ao story
  parameters: {},
  args: {},
} satisfies Meta<typeof LoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoginPageBase: Story = {};
