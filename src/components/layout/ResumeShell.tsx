import type { ReactNode } from 'react';

type ResumeShellProps = {
  children: ReactNode;
};

function ResumeShell({ children }: ResumeShellProps) {
  return (
    <div className="min-h-screen bg-transparent">
      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}

export default ResumeShell;
