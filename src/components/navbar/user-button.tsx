"use client";

import { UnstyledButton, Group, Avatar, Text } from "@mantine/core";
import classes from "./user-button.module.css";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

type User = {
  avatar_url: string;
  email: string;
  name: string;
};

export default function UserButton() {
  const [user, setUser] = useState<User>();

  const getUserData = async () => {
    const supabase = await createClient();

    const { data } = await supabase.auth.getUser();

    setUser({
      avatar_url: data.user?.user_metadata.avatar_url as string,
      email: data.user?.user_metadata.email as string,
      name: data.user?.user_metadata.name as string,
    });
  };

  useEffect(() => {
    getUserData();
  }, []);

  console.log(user);

  return (
    <UnstyledButton className={classes.user}>
      <Group>
        <Avatar src={user?.avatar_url} radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            {user?.name}
          </Text>

          <Text c="dimmed" size="xs">
            {user?.email}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  );
}
