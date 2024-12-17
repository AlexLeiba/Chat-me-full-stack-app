import React from 'react';
import { Container, Row, Col } from '../UI/Grid';
import { Github, LinkedinIcon, Mail } from 'lucide-react';
import Link from 'next/link';
import { Spacer } from '../UI/spacer/spacer';

export function Footer({ type }: { type: 'auth' | 'dashboard' }) {
  return (
    <Container spacing='none' variant={'fluid'} className='bg-secondary/80'>
      <Row>
        <Container spacing='none'>
          <Row>
            <Col lg={2} md={1} sm={2} className=' p-2 flex  justify-start '>
              <div className='flex flex-col'>
                <p className=' font-bold text-xl'>Contact</p>
                <Spacer size={2} />
                <div className='flex gap-2  flex-col'>
                  <Link href={'https://github.com/AlexLeiba?tab=repositories'}>
                    <div className='flex gap-2'>
                      <Github />
                      <p>Github</p>
                    </div>
                  </Link>

                  <Link href={'mailto:alexleiba13@gmail.com'}>
                    <div className='flex gap-2'>
                      <Mail />
                      <p>Email</p>
                    </div>
                  </Link>

                  <Link
                    href={
                      'https://www.linkedin.com/in/alex-leiba-9205801ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
                    }
                  >
                    <div className='flex gap-2'>
                      <LinkedinIcon />
                      <p>Linkedin</p>
                    </div>
                  </Link>
                </div>
              </div>
            </Col>
            <Col
              lg={2}
              lgOffset={1}
              md={1}
              sm={2}
              className='flex  justify-start   p-2'
            >
              <div className='flex flex-col '>
                <p className='text-xl font-bold'>Pages</p>
                <Spacer size={2} />
                <Link
                  href={type === 'auth' ? '/settings' : '/dashboard/settings'}
                  className='flex gap-1'
                >
                  <p>Settings</p>
                </Link>
                {type === 'dashboard' && (
                  <>
                    <Link href='/dashboard/profile' className='flex gap-1'>
                      <p>Profile</p>
                    </Link>
                    <Link href='/dashboard' className='flex gap-1'>
                      <p>Chat</p>
                    </Link>
                  </>
                )}
                <Link
                  href={type === 'dashboard' ? '/dashboard/about' : '/about'}
                  className='flex gap-1'
                >
                  <p>About</p>
                </Link>
              </div>
            </Col>
            <Col lg={7} md={2} sm={4} className='   p-2'>
              <div className='flex md:justify-end lg:justify-end justify-start '>
                <div>
                  <p className='text-xl font-bold'>Main technologies used</p>
                  <Spacer size={2} />
                  <div className='flex gap-12'>
                    <div>
                      <p className='font-bold'>Front-end</p>
                      <p>Next.js</p>
                      <p>TypeScript</p>
                      <p>Tailwind CSS</p>
                    </div>

                    <div>
                      <p className='font-bold'>Back-end</p>
                      <p>Node.js</p>
                      <p>Express.js</p>
                      <p>MongoDB</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
}
