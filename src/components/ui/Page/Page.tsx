import React from 'react';
import { Header, User } from '@/components/ui/Header/Header';

export interface PageProps {
  children?: React.ReactNode;
  className?: string;
}

export const Page = () => {
  const [user, setUser] = React.useState<User | null>(null);

  const handleLogin = () => {
    setUser({ name: 'Example User' });
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleCreateAccount = () => {
    setUser({ name: 'New User' });
  };

  return (
    <article>
      <Header
        user={user}
        onLogin={handleLogin}
        onLogout={handleLogout}
        onCreateAccount={handleCreateAccount}
      />

      <section className="dark:bg-slate-800 dark:text-white">
        <h2>Pages in ddubb-ui</h2>
        <div className="tip-wrapper">
          <span className="tip">Hot Tip</span> {/* Customized the tip text */}
          Adjust the width of the canvas with the Viewports addon in the toolbar
        </div>
      </section>
    </article>
  );
};
