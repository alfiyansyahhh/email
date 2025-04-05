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
  template?:
    | 'reset'
    | 'regis'
    | 'dalam proses'
    | 'barang dikirim'
    | 'dibatalkan'
    | 'habis waktu'
    | 'menunggu konfirmasi'
    | 'belum bayar'
    | 'sukses bayar';
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const VercelInviteUserEmail = ({
  username,
  verifLink,
  invitedByUsername,
  lacakLink,
  bayarLink,
  template = 'dalam proses',
}: VercelInviteUserEmailProps) => {
  const previewText = `Join ${invitedByUsername} on e-kopi`;

  let headingText = {
    regis: 'Verifikasi Akun',
    reset: 'Permintaan Reset Password',
    'dalam proses': 'Pesanan Sedang Dikirim',
    'barang dikirim': 'Pesananmu Telah Sampai!',
    dibatalkan: 'Pesanan Telah Dibatalkan',
    'habis waktu': 'Pesanan Dibatalkan Karena Pembayaran Tidak Diterima',
    'menunggu konfirmasi': 'Pembayaran Diterima, Pesanan Sedang Diproses',
    'belum bayar': 'Menunggu Pembayaran',
  };

  let contentText = {
    regis: `Untuk memverifikasi akun, silahkan klik tombol dibawah ini. Link dibawah hanya berlaku selama 10 menit`,
    reset: `Anda baru saja mengirim permintaan untuk reset password pada akun. silahkan klik tombol dibawah ini. Link dibawah hanya berlaku selama 10 menit`,
    'dalam proses': `Pesananmu sedang diproses oleh tim kami dan segera dikirimkan. 
Berikut adalah detail pengiriman`,
    'barang dikirim': `Kami senang memberi tahu bahwa pesanan telah berhasil dikirim dan diterima.`,
    dibatalkan: `Kami telah menerima permintaan pembatalan pesanan. Pesanan ini telah dibatalkan sesuai dengan permintaan.`,
    'habis waktu': `Kami ingin memberitahukan bahwa pesanan telah dibatalkan karena batas waktu pembayaran telah berakhir dan kami tidak menerima pembayaran.`,
    'menunggu konfirmasi': `Kami telah menerima pembayaran untuk pesanan dibawah ini. Saat ini, tim kami sedang memverifikasi pembayaran Anda.`,
    'belum bayar': `Terima kasih telah melakukan pemesanan di Stance Roasters. 
Kami telah menerima pesanan pada 26 Januari 2025, 22:08 WIB.`,
  };

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
              <strong>{headingText[template]}</strong>
            </Heading>
            <Section className='leading-[2px] text-center mt-10'>
              <strong>
                {template === 'regis' ? 'Selamat datang' : 'Hai'} {username},
              </strong>
              <Text className='text-black font-semibold text-[14px] text-center px-5 '>
                {contentText[template]}
              </Text>
            </Section>

            {(template === 'regis' || template === 'reset') && (
              <>
                <Section>
                  <Row>
                    <Column align='center'>
                      <Button
                        className='text-white my-10 bg-[#D94000] cursor-pointer p-3 text-center rounded-lg w-[370px] '
                        href={verifLink}
                      >
                        {template === 'regis'
                          ? 'Verifikasi Akun'
                          : 'reset password'}
                      </Button>
                    </Column>
                  </Row>
                </Section>

                <Text className='text-black text-center text-[14px] leading-[24px]'>
                  <strong>
                    Ada masalah saat verifikasi? Copy dan paste link dibawah ini
                    ke browser
                  </strong>
                </Text>

                <Text className='bg-[#FFE9DE80] text-[#D94000] text-center  p-5 rounded-md'>
                  {verifLink}
                </Text>

                <Text className='my-10 text-center font-medium'>
                  Tidak mengajukan permintaan{' '}
                  {template === 'regis' ? 'daftar akun?' : 'reset password'}{' '}
                  Anda dapat mengabaikan pesan ini dengan aman. Akun Anda tidak
                  dapat diakses tanpa link di email ini.
                </Text>
              </>
            )}

            {(template === 'dalam proses' || template === 'barang dikirim') && (
              <>
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
                      <Text className='font-bold text-end '>
                        001234135368946
                      </Text>
                      <Text className='font-bold text-end '>J&T - Regular</Text>
                      <Text className='font-bold text-end '>
                        28 Januari 2025, 12:24 WIB
                      </Text>
                    </Column>
                  </Row>
                </Section>

                {template === 'barang dikirim' && (
                  <Text className='text-center mt-10'>
                    Pesananmu telah sampai di alamat tujuan. Silahkan konfirmasi
                    jika sudah menerima pesanan.
                  </Text>
                )}

                {template === 'dalam proses' && (
                  <Text className='text-center mt-10'>
                    Kamu bisa melacak pesananmu menggunakan tautan berikut
                  </Text>
                )}

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
              </>
            )}

            {(template === 'belum bayar' ||
              template === 'menunggu konfirmasi' ||
              template === 'habis waktu' ||
              template === 'dibatalkan') && <></>}

            {template === 'dibatalkan' && (
              <>
                <Text className='text-center'>
                  Pengembalian dana akan dilakukan maksimal 3 hari kerja. Jika
                  ada hal lain yang bisa kami bantu, jangan ragu untuk
                  menghubungi tim kami.
                </Text>
                <Hr />

                <Text className='text-center'>
                  Terima kasih telah mengunjungi Stance Roasters. Kami harap
                  dapat melayani kamu di lain waktu!{' '}
                </Text>
              </>
            )}

            {template === 'habis waktu' && (
              <>
                <Text className='text-center'>
                  Jika Anda masih ingin melanjutkan pembelian, silakan lakukan
                  pemesanan ulang melalui situs kami.
                </Text>
                <Hr />

                <Text className='text-center'>
                  Jika Anda merasa ada kesalahan atau sudah membayar namun belum
                  terkonfirmasi, harap hubungi tim kami segera.
                </Text>
              </>
            )}

            {template === 'menunggu konfirmasi' && (
              <>
                <Text className='text-center'>
                  Kami akan segera memperbarui status pesananmu setelah
                  pembayaran berhasil diverifikasi.
                </Text>
                <Hr />

                <Text className='text-center'>
                  Terima kasih telah berbelanja di Stance Roasters!
                </Text>
              </>
            )}

            {template === 'dalam proses' && (
              <>
                <Text className='text-center'>
                  Silakan lakukan pembayaran sesuai dengan metode yang Anda
                  pilih untuk melanjutkan proses pesanan.{' '}
                </Text>

                <Section>
                  <Row>
                    <Column align='center'>
                      <Button
                        className='text-white mb-7 bg-[#D94000] cursor-pointer p-3 text-center rounded-lg w-[370px] '
                        href={bayarLink}
                      >
                        Bayar Sekarang
                      </Button>
                    </Column>
                  </Row>
                </Section>

                <Hr />

                <Text className='text-center'>
                  Terima kasih! Jika ada pertanyaan, jangan ragu untuk
                  menghubungi tim kami.{' '}
                </Text>
              </>
            )}

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
