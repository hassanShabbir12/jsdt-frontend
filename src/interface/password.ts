import { z } from 'zod';

export const ChangePasswordSchema = z
  .object({
    oldPassword: z
      .string()
      .min(1, 'Current password is required')
      .min(8, 'Password must be at least 8 characters')
      .refine((value) => value.trim().length > 0, 'Current password cannot be empty or just spaces')
      .transform((value) => value.trim()),
    newPassword: z
      .string()
      .min(1, 'New password is required')
      .min(8, 'Password must be at least 8 characters')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!$%&*?@])[\d!$%&*?@A-Za-z]{8,}$/,
        'Password must have an uppercase, lowercase, number, and special character.',
      ),
    confirmPassword: z.string().min(1, 'Please confirm your password'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export type ChangePasswordFormValues = z.infer<typeof ChangePasswordSchema>;
