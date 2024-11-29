import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

import { apiClient } from '@/api/clients/apiClient';
import { useAuth } from '@/context/AuthContext';
import { toast } from '@/hooks/use-toast';
import { SignupFormData, signupSchema, UseSignupReturn } from '@/interface/auth';
import { CreateUserDto, CreateUserDtoRoleEnum } from '@/lib/sdk/jsdt/Api';

export const useSignup = (): UseSignupReturn => {
  const { userRole } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validRole = userRole === 'teacher' ? 'TEACHER' : 'LEARNER';

  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      userName: '',
      name: '',
      familyName: '',
      age: '',
      grade: '',
      province: '',
      schoolName: '',
      gender: undefined,
      nsc: undefined,
      email: '',
      password: '',
      role: validRole,
      subjectTeaching: validRole === 'TEACHER' ? '' : undefined,
      gradeTeaching: validRole === 'TEACHER' ? '' : undefined,
    },
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<SignupFormData> = async (data) => {
    try {
      setIsLoading(true);
      const createUserDto: CreateUserDto = {
        userName: data.userName,
        name: data.name,
        faimlyName: data.familyName,
        age: data.age,
        grade: data.grade || '',
        province: data.province,
        schoolName: data.schoolName,
        gender: data.gender,
        nsc: data.nsc,
        email: data.email,
        password: data.password,
        role:
          data.role === 'TEACHER' ? CreateUserDtoRoleEnum.Teacher : CreateUserDtoRoleEnum.Learner,
        subjectTeaching: data.subjectTeaching || '',
        gradeTeaching: data.gradeTeaching || '',
        isSubscribed: false,
        customerId: '',
      };

      await apiClient.auth.usersControllerCreate(createUserDto);
      toast({
        title: 'Success',
        description: 'Signup successful',
      });
      navigate('/login');
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast({
          title: 'Error',
          description: error.response.data.message,
        });
      } else {
        toast({
          title: 'Error',
          description: 'An unexpected error occurred',
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.onload = (): void => {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 150);
    };
  }, []);

  return {
    form,
    isLoading,
    onSubmit: form.handleSubmit(onSubmit),
    isTeacher: validRole === 'TEACHER',
    showPassword,
    setShowPassword,
  };
};
