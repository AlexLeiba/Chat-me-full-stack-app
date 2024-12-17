'use client';
import React, { useEffect, useState } from 'react';

import { Container, Row, Col } from '@/components/UI/Grid';
import { Eye, User } from 'lucide-react';

import { Input } from '@/components/UI/Input/Input';
import { Spacer } from '@/components/UI/spacer/spacer';

import Image from 'next/image';
import useChatStore from '@/store/useChatStore';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import { useRouter } from 'next/navigation';

function Page() {
  const router = useRouter();
  const { selectedUser } = useChatStore();
  const [openLightbox, setOpenLightbox] = useState({
    visible: false,
    index: 0,
  });

  useEffect(() => {
    if (!selectedUser) return router.push('/dashboard');
  }, [selectedUser, router]);

  function handleShowProfileImage() {
    const displayedImage = selectedUser?.profilePicture;
    if (displayedImage) {
      return (
        <div
          className='relative'
          onClick={() =>
            setOpenLightbox({
              visible: true,
              index: 0,
            })
          }
        >
          <Image
            width={100}
            height={100}
            src={displayedImage}
            alt='profile picture'
            className='rounded-full w-40 h-40 object-cover ring-4 ring-primary cursor-pointer'
          />
          <Eye className='absolute bottom-2 right-2 cursor-pointer' />
        </div>
      );
    } else {
      return (
        <Image
          onClick={() =>
            setOpenLightbox({
              visible: true,
              index: 0,
            })
          }
          width={100}
          height={100}
          src={'/default-avatar.png'}
          alt='profile picture'
          className='rounded-full w-40 h-40 object-cover ring-4 ring-primary'
        />
      );
    }
  }

  return (
    <Container>
      <Lightbox
        plugins={[Zoom]}
        open={openLightbox.visible}
        close={() =>
          setOpenLightbox({
            visible: false,
            index: 0,
          })
        }
        slides={[
          {
            src: selectedUser?.profilePicture
              ? selectedUser?.profilePicture
              : '/default-avatar.png',
          },
        ]}
      />
      <Row>
        <Col lg={6} lgOffset={3}>
          <Spacer size={6} />
          <div className='text-center flex justify-center items-center flex-col'>
            <h2> {selectedUser?.fullName}`s Profile</h2>
          </div>

          <Spacer size={6} />
          <div className='flex justify-center flex-col items-center gap-2'>
            <div className='relative rounded-full w-40 h-40 flex justify-center items-center bg-gray-400'>
              {handleShowProfileImage()}
            </div>
          </div>
          <Spacer size={8} />
          <Input
            defaultValue={selectedUser?.fullName}
            leftIcon={<User />}
            label={'Full name'}
            type={'text'}
            placeholder={'Your full name'}
            className={'grow'}
            error={''}
            readOnly
          />

          <Spacer size={8} />

          <div className='flex justify-between items-center gap-2'>
            <p>Email</p>
            <p className='text-sm'>{selectedUser?.email}</p>
          </div>
          <div className='flex justify-between items-center gap-2'>
            <p>Member since</p>
            <p className='text-sm'>
              {selectedUser?.createdAt?.substring(0, 10)}
            </p>
          </div>
          <div className='flex justify-between items-center gap-2'>
            <p>Last updated profile</p>
            <p className='text-sm'>
              {selectedUser?.updatedAt?.substring(0, 10)}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Page;
