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
} from '@react-email/components';
import * as React from 'react';

interface VercelInviteUserEmailProps {
  username?: string;
  verifLink?: string;
  invitedByUsername?: string;
  template?: 'reset' | 'regis';
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const VercelInviteUserEmail = ({
  username,
  verifLink,
  invitedByUsername,

  template = 'regis',
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
                    width='40'
                    height='37'
                    alt='Vercel'
                    className='my-0 p-2 mx-auto'
                  />
                </Column>

                <Column align='left'>
                  <Text className='mt-2 ml-5 font-bold text-[#6D410B]'>
                    Nama Brand
                  </Text>
                </Column>
              </Row>
            </Section>
            <Heading className='text-black text-[24px] text-[#432114] font-normal text-center p-0 my-[30px] mx-0'>
              <strong>
                {' '}
                {template === 'regis'
                  ? 'Verifikasi Akun'
                  : 'Permintaan Reset Password'}{' '}
              </strong>
            </Heading>
            <Section className='leading-[2px] text-center mt-10'>
              <strong>
                {template === 'regis' ? 'Selamat datang' : 'Hai'} {username},
              </strong>
              <Text className='text-black font-semibold text-[14px] text-center px-20 '>
                {template === 'regis'
                  ? `Selamat datang ${username}, Untuk memverifikasi ke akunmu, `
                  : 'Kamu baru saja mengirim permintaan untuk reset password pada akunmu'}
                silahkan klik tombol dibawah ini. Link dibawah hanya berlaku
                selama 10 menit
              </Text>
            </Section>

            <Section>
              <Row>
                <Column align='center'>
                  <Button
                    className='text-white my-10 bg-[#432114] cursor-pointer p-3 text-center rounded-lg w-[370px] '
                    href={verifLink}
                  >
                    {template === 'regis' ? 'Register' : 'reset password'}
                  </Button>
                </Column>
              </Row>
            </Section>

            <Text className='text-black text-center text-[14px] leading-[24px]'>
              <strong>
                Ada masalah saat verifikasi? Copy dan paste link dibawah ini ke
                browser
              </strong>
            </Text>

            <Text className='bg-[#E0B79F33] text-center  p-5 rounded-md'>
              {verifLink}
            </Text>

            <Text className='my-10 text-center font-medium'>
              Tidak mengajukan permintaan{' '}
              {template === 'regis' ? 'daftar akun?' : 'reset password'} Anda
              dapat mengabaikan pesan ini dengan aman. Akun Anda tidak dapat
              diakses tanpa link di email ini.
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
