"use client";

import {
  Text,
  Paper,
  Group,
  PaperProps,
  Center,
} from '@mantine/core';

import GoogleButton from './google-button';

export default function AuthenticationForm(props: PaperProps) {
  return (
    <Center h="100%">
      <Paper radius="md" p="xl" withBorder {...props} miw={320}>
        <Text size="lg" fw={500}>
          Welcome to Mantine
        </Text>

        <Group grow mb="md" mt="md">
          <GoogleButton radius="xl">Login with Google</GoogleButton>
        </Group>
      </Paper>
    </Center>
  );
}