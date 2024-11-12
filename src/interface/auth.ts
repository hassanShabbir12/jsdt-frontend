import { FieldErrors, UseFormHandleSubmit, UseFormRegister, UseFormReturn } from 'react-hook-form';

import { z } from 'zod';

import { CreateUserDto, SigninUserDto } from '@/lib/sdk/jsdt/Api';

export interface LoginResponseData {
  user: CreateUserDto;
  access_token: string;
}

export interface UseAdminLoginReturn {
  register: UseFormRegister<SigninUserDto>;
  handleSubmit: UseFormHandleSubmit<SigninUserDto>;
  onSubmit: (data: SigninUserDto) => Promise<void>;
  errors: FieldErrors<SigninUserDto>;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
}

export type Gender = 'male' | 'female' | 'other';
export type NSCType = 'IEB' | 'NSC';

export const UserRole = {
  TEACHER: 'TEACHER',
  LEARNER: 'LEARNER',
} as const;

// Split the base schema into common fields and role-specific fields
const commonFields = {
  userName: z.string().min(1, 'Username is required'),
  name: z.string().min(1, 'Name is required'),
  familyName: z.string().min(1, 'Family name is required'),
  age: z.string().min(1, 'Age is required'),
  province: z.string().min(1, 'Province is required'),
  schoolName: z.string().min(1, 'School name is required'),
  gender: z.enum(['male', 'female', 'other'], {
    required_error: 'Please select a gender',
  }),
  nsc: z.enum(['IEB', 'NSC'], {
    required_error: 'Please select IEB or NSC',
  }),
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/\d/, 'Password must contain at least one number')
    .regex(/[!#$%&*?@]/, 'Password must contain at least one special character'),
};

export const signupSchema = z.discriminatedUnion('role', [
  z.object({
    ...commonFields,
    role: z.literal(UserRole.TEACHER),
    grade: z.string().optional(),
    subjectTeaching: z.string().min(1, 'Subject teaching is required'),
    gradeTeaching: z.string().min(1, 'Grade teaching is required'),
  }),

  z.object({
    ...commonFields,
    role: z.literal(UserRole.LEARNER),
    grade: z.string().min(1, 'Grade is required'),
    subjectTeaching: z.string().optional(),
    gradeTeaching: z.string().optional(),
  }),
]);

export type SignupFormData = z.infer<typeof signupSchema>;

export interface UseSignupReturn {
  form: UseFormReturn<SignupFormData>;
  isLoading: boolean;
  onSubmit: () => void;
  isTeacher: boolean;
}

export const loginSchema = z.object({
  email: z.string().min(1, 'Email is required'),
  password: z.string().min(1, 'Password is required'),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export interface UseLoginReturn {
  form: UseFormReturn<LoginFormData>;
  isLoading: boolean;
  onSubmit: () => void;
  showPassword: boolean;
  togglePassword: () => void;
}
