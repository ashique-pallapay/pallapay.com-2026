"use client";
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export const Link = (props: NextLinkProps & { children?: any; className?: string }) => {
  return <NextLink {...props} />;
};

export function usePage<T = Record<string, any>>() {
  const pathname = usePathname();
  return { url: pathname ?? '/', props: {} as T };
}

type FormReturn<T> = {
  data: T;
  setData: (key: keyof T | T, value?: any) => void;
  delete: (url: string, options?: any) => Promise<void>;
  processing: boolean;
  reset: () => void;
  errors: Record<string, string>;
  clearErrors: () => void;
};

export function useForm<T extends Record<string, any>>(initial: T): FormReturn<T> {
  const [data, setDataState] = useState<T>(initial);

  const setData = (key: keyof T | T, value?: any) => {
    if (typeof key === 'string') {
      setDataState((prev) => ({ ...prev, [key]: value }));
    } else {
      setDataState(key as T);
    }
  };

  const _delete = async (url: string, options?: any) => {
    try {
      await fetch(url, { method: 'DELETE' });
      options?.onSuccess && options.onSuccess();
    } catch (e) {
      options?.onError && options.onError(e);
    } finally {
      options?.onFinish && options.onFinish();
    }
  };

  const reset = () => setDataState(initial);
  const clearErrors = () => {};

  return {
    data,
    setData,
    delete: _delete,
    processing: false,
    reset,
    errors: {},
    clearErrors,
  } as FormReturn<T>;
}
