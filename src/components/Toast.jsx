'use client';
import { useStore } from '@/context/store';

export default function Toast() {
  const { toast } = useStore();
  if (!toast) return null;
  return (
    <div role="status" className="fixed bottom-6 left-1/2 z-[60] max-w-[90vw] -translate-x-1/2 rounded-md bg-ink px-[18px] py-[11px] text-white">
      {toast}
    </div>
  );
}
