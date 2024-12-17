'use client';
import { Col, Container, Row } from '@/components/UI/Grid';
import useChatStore from '@/store/useChatStore';
import ChatComponent from '@/components/ChatComponents/ChatComponent';
import NoChatComponent from '@/components/ChatComponents/NoChatComponent';
import Sidebar from '@/components/ChatComponents/Sidebar';
import { ChevronRight } from 'lucide-react';

export default function Home() {
  const { selectedUser, slideMenuOnMobile, handleSlideMenuOnMobile } =
    useChatStore();

  return (
    <Container spacing='none'>
      <Row className='lg:mt-12 md:mt-12 mt-8 mb-8 px-0 justify-center rounded-lg shadow-lg lg:max-h-[900px] md:max-h-[900px] max-h-[800px] h-[calc(100vh-200px)]'>
        <Col
          lg={3}
          md={1}
          sm={slideMenuOnMobile.usersList}
          className=' transition-all ease-out  flex h-full  overflow-hidden px-0 md:px-0 md:mx-0 lg:px-0 lg:mx-0 border-r border-base-300 rounded-l-lg  bg-secondary/15'
        >
          <Sidebar />
        </Col>

        {selectedUser ? (
          <Col
            className='transition-all ease-out flex h-full rounded-r-lg overflow-hidden lg:px-0 md:px-0  bg-pimary '
            lg={9}
            md={3}
            sm={slideMenuOnMobile.chat}
          >
            {/* CHAT */}

            <ChatComponent />
          </Col>
        ) : (
          <Col
            className='flex h-full   overflow-hidden lg:px-0 relative '
            lg={9}
            md={3}
            sm={slideMenuOnMobile.chat}
          >
            {slideMenuOnMobile.chat === 3 && (
              <div className='md:hidden lg:hidden p-2  absolute top-2 left-2'>
                <ChevronRight
                  onClick={() =>
                    handleSlideMenuOnMobile({ chat: 1, usersList: 3 })
                  }
                />
              </div>
            )}

            {/* NO CHAT STATE*/}
            <NoChatComponent />
          </Col>
        )}
      </Row>
    </Container>
  );
}
