"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import JourneyModal from "../journey-modal/journey-modal";

export function ThreeDMarqueeSection() {
  const images = [
    "/pictures/premium_photo-1714265044590-78b53ec15819.avif",
    "/pictures/jake-patrick-S27O75wrEtA-unsplash.jpg",
    "/pictures/premium_photo-1682974403675-a8c5ac3629b5.avif",
    "/pictures/premium_photo-1683120798332-18614001691b.avif",
    "/pictures/premium_photo-1714265044590-78b53ec15819.avif",
    "/pictures/premium_photo-1683120809420-4820789e4a98.avif",
    "/pictures/premium_photo-1713296254777-0a89f05dcb60.avif",
    "/pictures/premium_photo-1713296256473-66bf2204899e.avif",
    "/pictures/premium_photo-1714211556537-8a2c2cc921bf.avif",
    "/pictures/premium_photo-1714259937317-d7b93cb0241d.avif",
    "/pictures/premium_photo-1714265046278-51dc8ee55405.avif",
    "/pictures/premium_photo-1714397546754-3c1ef1be26e9.avif",
    "/pictures/priscilla-du-preez-AOdELn6senM-unsplash.jpg",
    "/pictures/shalom-ejiofor-0r1EO1B68aM-unsplash.jpg",
    "/pictures/premium_photo-1714265044590-78b53ec15819.avif",
    "/pictures/jake-patrick-S27O75wrEtA-unsplash.jpg",
    "/pictures/premium_photo-1682974403675-a8c5ac3629b5.avif",
    "/pictures/premium_photo-1683120798332-18614001691b.avif",
    "/pictures/premium_photo-1714265044590-78b53ec15819.avif",
    "/pictures/premium_photo-1683120809420-4820789e4a98.avif",
    "/pictures/premium_photo-1713296254777-0a89f05dcb60.avif",
    "/pictures/premium_photo-1713296256473-66bf2204899e.avif",
    "/pictures/premium_photo-1714211556537-8a2c2cc921bf.avif",
    "/pictures/premium_photo-1714259937317-d7b93cb0241d.avif",
    "/pictures/premium_photo-1714265046278-51dc8ee55405.avif",
    "/pictures/premium_photo-1714397546754-3c1ef1be26e9.avif",
    "/pictures/priscilla-du-preez-AOdELn6senM-unsplash.jpg",
    "/pictures/shalom-ejiofor-0r1EO1B68aM-unsplash.jpg",
    "/pictures/premium_photo-1714265044590-78b53ec15819.avif",
    "/pictures/jake-patrick-S27O75wrEtA-unsplash.jpg",
    "/pictures/premium_photo-1682974403675-a8c5ac3629b5.avif",
    "/pictures/premium_photo-1683120798332-18614001691b.avif",
    "/pictures/premium_photo-1714265044590-78b53ec15819.avif",
    "/pictures/premium_photo-1683120809420-4820789e4a98.avif",
    "/pictures/premium_photo-1713296254777-0a89f05dcb60.avif",
    "/pictures/premium_photo-1713296256473-66bf2204899e.avif",
    "/pictures/premium_photo-1714211556537-8a2c2cc921bf.avif",
    "/pictures/premium_photo-1714259937317-d7b93cb0241d.avif",
    "/pictures/premium_photo-1714265046278-51dc8ee55405.avif",
    "/pictures/premium_photo-1714397546754-3c1ef1be26e9.avif",
    "/pictures/priscilla-du-preez-AOdELn6senM-unsplash.jpg",
    "/pictures/shalom-ejiofor-0r1EO1B68aM-unsplash.jpg",

    // "/pictures/premium_photo-1714265044590-78b53ec15819.avif",
    // "/pictures/premium_photo-1714265044590-78b53ec15819.avif",
    // "/pictures/premium_photo-1714265044590-78b53ec15819.avif",
    // "/pictures/premium_photo-1714265044590-78b53ec15819.avif",
    // "/pictures/premium_photo-1714265044590-78b53ec15819.avif",
    // "/pictures/premium_photo-1714265044590-78b53ec15819.avif",
    // "/pictures/premium_photo-1714265044590-78b53ec15819.avif",
    // "/pictures/premium_photo-1714265044590-78b53ec15819.avif",
    // "/pictures/premium_photo-1714265044590-78b53ec15819.avif",
    // "/pictures/premium_photo-1714265044590-78b53ec15819.avif",
    // "/pictures/premium_photo-1714265044590-78b53ec15819.avif",
    // "/pictures/premium_photo-1714265044590-78b53ec15819.avif",
    // "/pictures/premium_photo-1714265044590-78b53ec15819.avif",
    // "/pictures/premium_photo-1714265044590-78b53ec15819.avif",
    // "/pictures/premium_photo-1714265044590-78b53ec15819.avif",
    // "/pictures/premium_photo-1714265044590-78b53ec15819.avif",
    // "/pictures/premium_photo-1714265044590-78b53ec15819.avif",
  ];
  return (
    <div className="relative mx-auto my-0 flex w-full h-[70vh]  flex-col items-center justify-center overflow-hidden rounded-3xl">
      <h2 className="relative z-20 mx-auto max-w-4xl text-center text-2xl font-bold text-balance text-white md:text-4xl lg:text-6xl">
        IPD Alumni
        <span className="relative z-20 inline-block rounded-xl bg-blue-500/40 px-4 py-1 text-white underline decoration-sky-500 decoration-[6px] underline-offset-[16px] backdrop-blur-sm">
          Network
        </span>
        {/* at a time. */}
      </h2>
      <p className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-200 md:text-base">
        At IPD Education, our students are not just learners—they are lifelong members of our global family. The IPD Alumni Network brings together bright minds from across the world who have achieved their dreams of studying abroad and building successful careers. Through this network, alumni can stay connected, share experiences, inspire future students, and explore opportunities for collaboration. Whether you are studying, working overseas, or back in India, the IPD Alumni Network ensures you remain part of a vibrant community that grows stronger every year.
      </p>

      <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
        <JourneyModal className="rounded-md bg-sky-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sky-700 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">

          {/* <button className="rounded-md bg-sky-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sky-700 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-black focus:outline-none"> */}
          Join the club
          {/* </button> */}
        </JourneyModal>
        <button className="rounded-md border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
          Read more
        </button>
      </div>

      {/* overlay */}
      <div className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/40" />
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={images}
      />
    </div>
  );
}
