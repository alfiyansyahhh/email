import {
  Body,
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
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const VercelInviteUserEmail = ({
  username,
  invitedByUsername,
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
            <Heading className=' text-[20px] text-[#432114] font-normal text-center p-0 my-[30px] mx-0'>
              <strong>
                Pesanan Dibatalkan Karena Pembayaran Tidak Diterima
              </strong>
            </Heading>
            <Section className='leading-[2px] text-center mt-10'>
              <strong>Hai {username}</strong>
              <Text className='text-black font-semibold text-[14px] text-center px-5 '>
                Kami ingin memberitahukan bahwa pesanan telah dibatalkan karena
                batas waktu pembayaran telah berakhir dan kami tidak menerima
                pembayaran.
              </Text>
            </Section>

            <Section className='border-[1px]  border-[#BBBBBB] border-solid rounded-[8px] px-[16px]  bg-[#FAFAFA] '>
              <Row>
                <Column
                  align='right'
                  className='text-start m-0 p-0 w-[115px]'
                >
                  <Img
                    src={`${baseUrl}/static/product.png`}
                    width='100'
                    height='100'
                    alt='Vercel'
                    className='mx-auto p-0 m-0 bg-red-300'
                  />
                </Column>

                <Column align='center'>
                  <Text className='font-bold text-[20px] text-start '>
                    Kopi Gayo Pegasing
                  </Text>
                  <Text className='text-start  '>Biji &bull; 200 g</Text>
                  <Text className='font-medium text-start '>
                    + 4 produk lainnya
                  </Text>
                </Column>
              </Row>
              <Hr />
              <Row className='px-[16px]'>
                <Column
                  align='right'
                  className='text-start '
                >
                  <Text>Total</Text>
                  <Text>Batas Waktu Pembayaran</Text>
                </Column>
                <Column align='left'>
                  <Text className='font-bold text-end '>Rp 680.000</Text>
                  <Text className='font-bold text-end '>
                    26 Januari 2025, 22:28 WIB
                  </Text>
                </Column>
              </Row>
            </Section>

            <Text className='text-center mt-10'>
              Jika Anda masih ingin melanjutkan pembelian, silakan lakukan
              pemesanan ulang melalui situs kami.
            </Text>

            <Hr />

            <Text className='text-center'>
              Jika Anda merasa ada kesalahan atau sudah membayar namun belum
              terkonfirmasi, harap hubungi tim kami segera.
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
