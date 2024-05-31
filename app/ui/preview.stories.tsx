import type { Meta, StoryObj } from "@storybook/react";
import { MantineProvider } from "@mantine/core";
import article from "@/__mocks__/article";
import Preview from "./preview";

const meta = {
  component: Preview,
  decorators: [
    (Story) => (
      <MantineProvider>
        <Story />
      </MantineProvider>
    ),
  ],
} satisfies Meta<typeof Preview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    article,
  },
};
