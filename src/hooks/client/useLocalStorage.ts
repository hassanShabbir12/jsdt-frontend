/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable no-console */

/* eslint-disable padding-line-between-statements */
import { Dispatch, SetStateAction, useCallback, useLayoutEffect, useRef, useState } from 'react';

export const isBrowser = typeof window !== 'undefined';

type ParserOptions<T> =
  | {
      raw: true;
    }
  | {
      raw: false;
      serializer: (value: T) => string;
      deserializer: (value: string) => T;
    };

export const useLocalStorage = <T>(
  key: string,
  initialValue?: T,
  options?: ParserOptions<T>,
): [T | undefined, Dispatch<SetStateAction<T | undefined>>, () => void] => {
  if (!isBrowser) {
    return [initialValue, (): void => {}, (): void => {}];
  }

  if (!key) {
    throw new Error('The key provided to useLocalStorage must not be empty.');
  }

  const deserializer = options?.raw
    ? (value: string): T => value as unknown as T
    : options?.deserializer || JSON.parse;

  const serializer = options?.raw ? String : options?.serializer || JSON.stringify;

  const initializeState = useRef(() => {
    try {
      const localStorageValue = localStorage.getItem(key);

      if (localStorageValue !== null) {
        return deserializer(localStorageValue);
      }

      if (initialValue !== undefined) {
        localStorage.setItem(key, serializer(initialValue));
      }

      return initialValue;
    } catch (error) {
      console.error('Failed to initialize localStorage state:', error);
      return initialValue;
    }
  });

  const [state, setState] = useState<T | undefined>(initializeState.current);

  useLayoutEffect(() => {
    setState(initializeState.current());
  }, [key]);

  const set = useCallback(
    (valueOrUpdater: T | ((prevState: T | undefined) => T | undefined)) => {
      try {
        const newValue =
          typeof valueOrUpdater === 'function'
            ? (valueOrUpdater as (prevState: T | undefined) => T | undefined)(state)
            : valueOrUpdater;

        if (newValue === undefined) {
          return;
        }

        const serializedValue = serializer(newValue);
        localStorage.setItem(key, serializedValue);
        setState(deserializer(serializedValue));
      } catch (error) {
        console.error('Failed to set localStorage item:', error);
      }
    },
    [key, state, deserializer, serializer],
  );

  const remove = useCallback(() => {
    try {
      localStorage.removeItem(key);
      setState(undefined);
    } catch (error) {
      console.error('Failed to remove localStorage item:', error);
    }
  }, [key]);

  useLayoutEffect(() => {
    const handleBeforeUnload = (): void => {
      localStorage.removeItem(key);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return (): void => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [key]);

  return [state, set as Dispatch<SetStateAction<T | undefined>>, remove];
};
