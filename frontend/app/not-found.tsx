export const dynamic = 'force-dynamic';

import { Col, Container, Row } from '@/components/UI/Grid';
import { Spacer } from '@/components/UI/spacer/spacer';
import Link from 'next/link';

async function Page404() {
  return (
    <Container className='flex  items-center'>
      <Row className='items-center'>
        <Col lg={6} lgOffset={3}>
          <h1 className='text-center'>
            Page 404
            <br />
            we can`t find the page you are looking for
          </h1>

          <Spacer size={24} />
          <Link href='/'>
            <button className='btn w-full'>Go back to home page</button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Page404;
