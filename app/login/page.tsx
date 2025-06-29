import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
import { Suspense } from 'react';


export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="reactive mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="w-32 text-white md:w-36">
          <AcmeLogo />
        </div>
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </main>

  );
}



