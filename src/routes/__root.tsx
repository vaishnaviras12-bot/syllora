import React from 'react';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { SylloraProvider } from '../lib/store';
import { AppShell } from '../components/syollara/AppShell';

export const Route = createRootRoute({
  component: () => (
    <SylloraProvider>
      <AppShell>
        <Outlet />
      </AppShell>
    </SylloraProvider>
  ),
});
