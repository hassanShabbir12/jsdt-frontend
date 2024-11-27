import { z } from 'zod';

export interface VerfiyPinResponse {
  message: string;
  status: boolean;
  authToken: string;
}

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

export const ResetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must be at least 8 characters')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!$%&*?@])[\d!$%&*?@A-Za-z]{8,}$/,
        'Password must have an uppercase, lowercase, number, and special character.',
      )
      .refine((value) => value.trim().length > 0, 'Password cannot be empty or just spaces')
      .transform((value) => value.trim()),
    confirmPassword: z.string().min(1, 'Confirm password is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'], // The error will appear for confirmPassword
  });

export type ResetPasswordFormValues = z.infer<typeof ResetPasswordSchema>;
