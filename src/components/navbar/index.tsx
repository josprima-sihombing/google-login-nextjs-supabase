"use client";

import { Group, Code, ScrollArea, rem, Button, Stack } from "@mantine/core";
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
} from "@tabler/icons-react";
import UserButton from "./user-button";
import LinksGroup from "./navbar-links-group";
import Logo from "./logo";
import classes from "./navbar.module.css";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

const mockdata = [
  { label: "Dashboard", icon: IconGauge },
  {
    label: "Market news",
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: "Overview", link: "/" },
      { label: "Forecasts", link: "/" },
      { label: "Outlook", link: "/" },
      { label: "Real time", link: "/" },
    ],
  },
  {
    label: "Releases",
    icon: IconCalendarStats,
    links: [
      { label: "Upcoming releases", link: "/" },
      { label: "Previous releases", link: "/" },
      { label: "Releases schedule", link: "/" },
    ],
  },
  { label: "Analytics", icon: IconPresentationAnalytics },
  { label: "Contracts", icon: IconFileAnalytics },
  { label: "Settings", icon: IconAdjustments },
  {
    label: "Security",
    icon: IconLock,
    links: [
      { label: "Enable 2FA", link: "/" },
      { label: "Change password", link: "/" },
      { label: "Recovery codes", link: "/" },
    ],
  },
];

export default function Navbar() {
  const router = useRouter();

  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

  const handleSignout = async () => {
    const supabase = await createClient();

    await supabase.auth.signOut();
    router.replace("/");
  };

  return (
    <nav className={classes.navbar}>
      <div className={classes.header}>
        <Group justify="space-between">
          <Logo style={{ width: rem(120) }} />
          <Code fw={700}>v3.1.2</Code>
        </Group>
      </div>

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>

      <div className={classes.footer}>
        <Stack px="md">
          <UserButton />
          <Button onClick={handleSignout} variant="outline">
            Logout
          </Button>
        </Stack>
      </div>
    </nav>
  );
}
