import { useActionData, Form } from 'react-router-dom';
import { loginSchema, LoginFormData } from '@/lib/schemas';

export function useLoginAction() {
  const actionData = useActionData() as LoginFormData | undefined;

  const handleSubmit = async (formData: FormData) => {
    const rawData = Object.fromEntries(formData);
    const result = loginSchema.safeParse(rawData);

    if (!result.success) {
      return { errors: result.error.flatten() };
    }

    // Perform login logic here
    // ...

    return { success: true };
  };

  return { Form, actionData, handleSubmit };
}
