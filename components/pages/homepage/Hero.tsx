import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="w-full bg-gray-50 py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-500">Elegance Meets Style</h1>
          <p className="text-gray-400 max-w-[600px] text-sm md:text-base">
            Explore a world of stylish eyewear, crafted for clarity and comfort.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center px-6 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Explore shop
          </Link>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-12">
            <div>
              <Image
                src="/images/femaleimg1.png"
                alt="Person wearing purple glasses"
                width={300}
                height={300}
              />
            </div>
            <div className="">
              <Image
                src="/images/maleimg1.png"
                alt="Person wearing black frame glasses"
                width={300}
                height={300}
              />
            </div>
            <div className="">
              <Image
                src="/images/femaleimg2.png"
                alt="Person wearing red sunglasses"
                width={300}
                height={300}
              />
            </div>
            <div className="">
              <Image
                src="/images/maleimg2.png"
                alt="Person wearing light frame glasses"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

