import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
  Hr,
} from '@react-email/components';
import * as React from 'react';

interface VercelInviteUserEmailProps {
  username?: string;
  verifLink?: string;
  invitedByUsername?: string;
  lacakLink?: string;
  bayarLink?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const VercelInviteUserEmail = ({
  username,
  invitedByUsername,
  lacakLink,
}: VercelInviteUserEmailProps) => {
  const previewText = `Join ${invitedByUsername} on e-kopi`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className='bg-[#FAFAFA] my-auto mx-auto font-sans px-2'>
          <Container className='border relative border-solid border-[#eaeaea] rounded-xl my-[40px] mx-auto p-[20px] w-[660px]'>
            <Section className='flex justify-center gap-2 w-full '>
              <Row>
                <Column align='right'>
                  <Img
                    src={`${baseUrl}/static/e-kopi-logo.png`}
                    width='103.91'
                    height='36'
                    alt='Vercel'
                    className='my-0 p-2 mx-auto'
                  />
                </Column>
              </Row>
            </Section>
            <Heading className=' text-[24px] text-[#432114] font-normal text-center p-0 my-[30px] mx-0'>
              <strong>Pesanan Sedang Dikirim</strong>
            </Heading>
            <Section className='leading-[2px] text-center mt-10'>
              <strong>Hai {username}</strong>
              <Text className='text-black font-semibold text-[14px] text-center px-5 '>
                Pesananmu sedang diproses oleh tim kami dan segera dikirimkan.
                Berikut adalah detail pengiriman
              </Text>
            </Section>

            <Section className='border-[1px]   border-[#BBBBBB] border-solid rounded-[8px] px-[16px] bg-[#FAFAFA] '>
              <Row>
                <Column
                  align='right'
                  className='text-start '
                >
                  <Text>Nomor Resi</Text>
                  <Text>Kurir</Text>
                  <Text>Tanggal Pengiriman</Text>
                </Column>
                <Column align='center'>
                  <Text className='w-[150px]'></Text>
                </Column>

                <Column align='left'>
                  <Text className='font-bold text-end '>001234135368946</Text>
                  <Text className='font-bold text-end '>J&T - Regular</Text>
                  <Text className='font-bold text-end '>
                    28 Januari 2025, 12:24 WIB
                  </Text>
                </Column>
              </Row>
            </Section>

            <Text className='text-center mt-10'>
              Kamu bisa melacak pesananmu menggunakan tautan berikut
            </Text>

            <Section>
              <Row>
                <Column align='center'>
                  <Button
                    className='text-white mb-7 bg-[#D94000] cursor-pointer p-3 text-center rounded-lg w-[370px] '
                    href={lacakLink}
                  >
                    Lacak Pesanan
                  </Button>
                </Column>
              </Row>
            </Section>

            <Hr />

            <Text className='text-center'>
              Terima kasih telah berbelanja di Stance Roasters!{' '}
            </Text>

            <Img
              src={`${baseUrl}/static/bg-e-kopi-logo.png`}
              width='235'
              height='238'
              alt='Vercel'
              className='bottom-0 absolute right-0 mx-auto'
            />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

VercelInviteUserEmail.PreviewProps = {
  username: 'alanturing',
  userImage: `${baseUrl}/static/vercel-user.png`,
  invitedByUsername: 'Alan',
  invitedByEmail: 'alan.turing@example.com',
  teamName: 'Enigma',
  teamImage: `${baseUrl}/static/vercel-team.png`,
  inviteLink: 'https://vercel.com/teams/invite/foo',
  inviteFromIp: '204.13.186.218',
  inviteFromLocation: 'São Paulo, Brazil',
} as VercelInviteUserEmailProps;

export default VercelInviteUserEmail;
