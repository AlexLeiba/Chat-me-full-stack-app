'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from '@/lib/zodSchemas';
import useAuthStore, { FormType } from '@/store/useAuthStore';
import { Container, Row, Col } from '@/components/UI/Grid';
import { Key, Mail, MessageCircleCode } from 'lucide-react';
import { cn } from '@/lib/utils';

import { Input } from '@/components/UI/Input/Input';
import { Spacer } from '@/components/UI/spacer/spacer';
import { Button } from '@/components/UI/Button/Button';
import Link from 'next/link';

function Page() {
  const { isLoadingSignIn, signIn } = useAuthStore();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
    },
  });

  async function onSubmit(data: FormType) {
    await signIn(data);
  }
  return (
    <Container>
      <Row>
        <Col lg={6} lgOffset={3} md={2} mdOffset={1} sm={4}>
          <div className='text-center flex justify-center items-center flex-col'>
            <div className='flex justify-center items-center '>
              <div className='rounded-2xl bg-base-100/50 p-1 flex items-center justify-center'>
                <MessageCircleCode className='w-12 h-12 text-base-content ' />
                <p className=' text-l text-base-content'>{'{me}'}</p>
              </div>
            </div>
            <h2>Sign in</h2>
            <p>Sign in into your account</p>
          </div>

          <Spacer size={6} />

          <form onSubmit={(e) => e.preventDefault()}>
            <Input
              className={''}
              leftIcon={
                <Mail
                  className={cn([
                    'w-5 h-5',
                    errors.email?.message && 'text-red-500',
                  ])}
                />
              }
              label={'Email'}
              error={errors.email?.message}
              {...register('email')}
              type='email'
              placeholder='Your email'
            />
            <Spacer size={4} />
            <Input
              leftIcon={
                <Key
                  className={cn([
                    'w-5 h-5',
                    errors.password?.message && 'text-red-500',
                  ])}
                />
              }
              label={'Password'}
              error={errors.password?.message}
              {...register('password')}
              type='password'
              inputType='password'
              className='relative'
              placeholder='password'
            />

            <Spacer size={6} />

            <Button
              disabled={isLoadingSignIn}
              loading={isLoadingSignIn}
              className='btn btn-primary w-full'
              type='submit'
              onClick={handleSubmit(onSubmit)}
            >
              <p className='text-lg'>Sign in</p>
            </Button>
          </form>

          <Spacer size={4} />

          <div className='flex justify-center items-center gap-2 text-center'>
            <p className='text-sm'>Do not have an account?</p>
            <Link className=' underline ' href='/signup'>
              Sign up
            </Link>
          </div>
        </Col>

        {/* <Col lg={5} lgOffset={1} md={2} sm={2}>
          <AuthImagePattern
            title='Join our community'
            subtitle='Connect with friends,share moments, and stay in touch'
          />
        </Col> */}
      </Row>
    </Container>
  );
}

export default Page;
