import { ReactNode } from 'react';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import { ButtonBase } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { twJoin } from 'tailwind-merge';
import BulbIcon from '@/app/_assets/bulb-icon';
import CardIcon from '@/app/_assets/card-icon';
import StyleIcon from '@/app/_assets/style-icon';
import AppButton from '@/app/_components/app-button';
import AppContainer from '@/app/_components/app-container';
import BenefitsSection from '@/app/_components/benefits-section';
import GeneratedExamplesSwiper from '@/app/_components/generate-examples-swiper';
import InteriorSettingPicturesSwiper from '@/app/_components/interior-setting-pictures-swiper';
import ReviewsSwiper from '@/app/_components/reviews-swiper';
import Typography from '@/app/_components/typography';
const generateSteps = [
  {
    title: 'Opisz swój pomysł',
    description: 'Przekaż nam swoją wizję, a nasza sztuczna inteligencja przemieni ją w unikalne dzieło.',
    Icon: BulbIcon,
  },
  {
    title: 'Wybierz styl',
    description:
      'Wybierz spośród naszych starannie dobranych stylów, aby nadać swojemu dziełu niepowtarzalny charakter.',
    Icon: StyleIcon,
  },
  {
    title: 'Zamów z łatwością',
    description: 'Bez zakładania konta! Sfinalizuj zamówienie w chwilę.',
    Icon: CardIcon,
  },
];

const GenerateStep = ({
  title,
  description,
  children,
  index,
}: {
  title: string;
  description: string;
  children: ReactNode;
  index?: number;
}) => (
  <div className="flex flex-col items-center gap-5">
    <div className="relative">
      <hr
        className={twJoin(
          'absolute left-1/2 top-1/2 h-2 -translate-y-1/2 border-y border-[#57C6A3] bg-primary',
          index === 0 && 'w-[50vw]',
          index && index !== 0 && 'w-screen -translate-x-1/2',
          index === undefined && 'w-[50vw] -translate-x-[100%]',
        )}
      />
      <div className="relative z-10 flex aspect-square w-24 items-center justify-center rounded-full border border-[#57C6A3] bg-[#41BE96]">
        {children}
      </div>
    </div>
    <div className="flex flex-col gap-2.5">
      <h3 className="text-xl font-semibold leading-[120%] tracking-[1px]">{title}</h3>
      <p className="leading-[150%] tracking-[0.5px]">{description}</p>
    </div>
  </div>
);

const Home = () => {
  return (
    <>
      <AppContainer className="relative pb-5 pt-[--save-navbar-padding-top] lg:min-h-screen">
        <AppContainer.Content className="flex flex-col items-center gap-10">
          <Typography.H1 className="max-w-xl text-center text-2xl md:text-4xl">
            <span className="text-primary">Ożyw</span> swoje marzenia na płótnie z pomocą{' '}
            <span className="text-primary">AI</span>!
          </Typography.H1>
          <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2">
            <ButtonBase
              className="relative order-1 flex h-full w-full cursor-pointer flex-col items-start justify-between gap-5 rounded-xl border border-primary/10 bg-white p-5 shadow-sm transition-all hover:scale-[1.01] hover:border-primary hover:shadow-md md:order-none md:p-10"
              href="/generate"
              LinkComponent={Link}
            >
              <div className="flex flex-col gap-2.5">
                <Typography.H2 className="text-xl md:text-3xl">Stwórz swój obraz</Typography.H2>
                <Typography.Body className="max-w-sm">
                  Przekaż nam swoją wizję, a nasza sztuczna inteligencja przemieni ją w unikalne dzieło.
                </Typography.Body>
              </div>
              <div className="w-fit rounded-full bg-primary px-5 py-2.5 text-white">Stwórz obraz</div>
              <div className="relative aspect-[1.44] w-full shrink-0">
                <Image
                  fill
                  priority
                  alt="Wygenerowany obraz przedstawiający astronautę grającego na skrzypcach na powierzchni księżyca"
                  src="/home-hero-picture.png"
                />
              </div>
            </ButtonBase>
            <ButtonBase
              className="relative flex h-full w-full cursor-pointer flex-col items-start justify-between gap-5 rounded-xl border border-primary/10 bg-primary p-5 text-white shadow-sm transition-all hover:scale-[1.01] hover:border-accent hover:shadow-md md:p-10"
              href="/generate/portrait"
              LinkComponent={Link}
            >
              <div className="flex flex-col gap-2.5">
                <Typography.H2 className="text-xl md:text-3xl">Stwórz swój portret</Typography.H2>
                <Typography.Body className="max-w-md">
                  Wybierz zdjęcie, które powinno zawierać twarz. Zostanie następnie zintegrowane z wybranym szablonem.
                </Typography.Body>
              </div>
              <div className="w-fit rounded-full bg-accent px-5 py-2.5">Stwórz portret</div>
              <div className="relative aspect-[1.44] w-full shrink-0">
                <Image
                  fill
                  priority
                  alt="Wygenerowany obraz przedstawiający astronautę grającego na skrzypcach na powierzchni księżyca"
                  src="/home-hero-portrait.png"
                />
              </div>
              <InsertPhotoOutlinedIcon className="absolute bottom-0 left-0 h-auto w-1/2 -translate-x-1/4 translate-y-1/4 opacity-[0.03]" />
            </ButtonBase>
          </div>
        </AppContainer.Content>
      </AppContainer>
      <AppContainer className="overflow-hidden bg-primary py-10 lg:py-20">
        <AppContainer.Content className="flex-col gap-10 text-center text-neutral lg:gap-20">
          <Typography.H2>Jak wygenerować obraz?</Typography.H2>
          <div className="flex flex-col gap-10 lg:flex-row">
            {generateSteps.map(({ title, description, Icon }, index) => (
              <GenerateStep key={title} description={description} index={index} title={title}>
                <Icon className="h-11 w-auto" />
              </GenerateStep>
            ))}
            <GenerateStep
              description="Otrzymaj swój wyjątkowy obraz. Stworzymy go na płótnie najwyższej jakości i dostarczymy prosto do Ciebie!"
              title="Obraz jest Twój"
            >
              <Image
                alt="Wygenerowane zdjęcie"
                className="rounded-xl border border-[#57C6A3]"
                height={111}
                src="/home-generate-result.webp"
                width={111}
              />
            </GenerateStep>
          </div>
          <AppButton
            className="self-center"
            color="neutral"
            // @ts-ignore
            component={Link}
            href="/generate"
            size="large"
            variant="contained"
          >
            Wygeneruj obraz
          </AppButton>
        </AppContainer.Content>
      </AppContainer>
      <AppContainer className="py-10">
        <AppContainer.Content className="flex-col gap-10 text-text">
          <div className="flex flex-col gap-2.5">
            <h3 className="text-lg leading-[140%] tracking-[0.5px] text-primary">
              Setki tysięcy unikalnych wygenerowanych obrazów
            </h3>
            <h2 className="text-3xl font-semibold leading-[120%] tracking-[1px]">
              Zainspiruj się naszymi wyjątkowymi realizacjami
            </h2>
          </div>
        </AppContainer.Content>
      </AppContainer>
      <GeneratedExamplesSwiper />
      <AppContainer className="py-10">
        <AppContainer.Content>
          <AppButton
            classes={{ contained: 'normal-case font-normal leading-[150%] tracking-[0.5px] px-5 py-2.5' }}
            href="/inspirations"
            LinkComponent={Link}
            size="large"
            variant="contained"
          >
            Sprawdź nasze inspiracje
          </AppButton>
        </AppContainer.Content>
      </AppContainer>
      <AppContainer className="py-10 text-text">
        <AppContainer.Content className="flex flex-col gap-10">
          <h2 className="text-3xl font-semibold leading-[120%] tracking-[1px]">Najwyższa jakość gwarantowana</h2>
          <div className="flex flex-col gap-10 xl:flex-row">
            <Image
              alt="Przykładowy obraz"
              className="md:hidden"
              height={500}
              src="/home-quality-pitures-mobile.png"
              width={500}
            />
            <Image
              alt="Przykładowy obraz"
              className="hidden md:block"
              height={500}
              src="/home-quality-pitures-desktop.png"
              width={850}
            />
            <div className="flex flex-col gap-5">
              <p className="max-w-md leading-[150%] tracking-[0.5px]">
                Każdy obraz to wyjątkowe połączenie Twojej wyobraźni i potęgi sztucznej inteligencji, które razem tworzą
                dzieła najwyższej jakości. Odmień swoje wnętrza i zaskocz bliskich niepowtarzalnym prezentem. Stwórz i
                zamów swój obraz już dziś!
              </p>
              <AppButton
                href="/generate"
                LinkComponent={Link}
                size="large"
                variant="contained"
                classes={{
                  contained: 'normal-case font-normal leading-[150%] tracking-[0.5px] px-5 py-2.5 w-fit',
                }}
              >
                Stwórz swój obraz teraz
              </AppButton>
            </div>
          </div>
        </AppContainer.Content>
      </AppContainer>
      <ReviewsSwiper />
      <AppContainer className="py-10">
        <AppContainer.Content className="flex-col gap-10 text-text">
          <div className="flex flex-col gap-2.5">
            <h3 className="text-lg leading-[140%] tracking-[0.5px] text-primary">
              Wysokiej jakości obraz do każdego wnętrza
            </h3>
            <h2 className="text-3xl font-semibold leading-[120%] tracking-[1px]">
              Twoja przestrzeń, Twoja wizja: wizualizacje obrazów
            </h2>
          </div>
        </AppContainer.Content>
      </AppContainer>
      <div className="pb-5">
        <InteriorSettingPicturesSwiper />
      </div>
      <AppContainer className="pb-10">
        <AppContainer.Content>
          <AppButton color="primary" href="/inspirations" LinkComponent={Link} size="large" variant="contained">
            Sprawdź pomysły na obrazy
          </AppButton>
        </AppContainer.Content>
      </AppContainer>
      <BenefitsSection />
    </>
  );
};

export default Home;
