import { redirect } from 'next/navigation';

export default function RootPage() {
  redirect('/inicio');
  // This component will never actually render anything
  // because it immediately redirects to the main home page
  return null;
}