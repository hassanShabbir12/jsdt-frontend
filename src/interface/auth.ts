import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

import { CreateUserDto, SigninUserDto } from '@/lib/sdk/jsdt/Api';

export interface LoginResponseData {
  user: CreateUserDto;
  access_token: string;
}

// export interface LoginResponse {
//   success: boolean;
//   message: string;
//   data: LoginResponseData;
// }

export interface UseAdminLoginReturn {
  register: UseFormRegister<SigninUserDto>;
  handleSubmit: UseFormHandleSubmit<SigninUserDto>;
  onSubmit: (data: SigninUserDto) => Promise<void>;
  errors: FieldErrors<SigninUserDto>;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
}
