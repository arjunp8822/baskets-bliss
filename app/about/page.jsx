"use client";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">About Baskets Bliss</h1>
      
      <div className="max-w-3xl mx-auto space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Baskets Bliss was founded with a simple mission: to create beautiful, thoughtful gift baskets
            that bring joy to both the giver and receiver. What started as a small passion project has
            grown into a beloved destination for those seeking unique and personalized gift solutions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
          <p className="text-gray-600 leading-relaxed">
            We are committed to sourcing the finest products and creating gift baskets that are not
            just beautiful, but also meaningful. Each basket is carefully curated and handcrafted with
            attention to detail, ensuring that every gift tells a story and creates lasting memories.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Quality and craftsmanship in every basket</li>
            <li>Personalized service and attention to detail</li>
            <li>Sustainable and ethical sourcing practices</li>
            <li>Creating memorable gifting experiences</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Handcrafted Quality</h3>
              <p className="text-gray-600">
                Each basket is carefully assembled by our expert team, ensuring the highest quality.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Wide Selection</h3>
              <p className="text-gray-600">
                From gourmet treats to wellness essentials, we offer something for every occasion.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Customization</h3>
              <p className="text-gray-600">
                We offer personalized options to make your gift truly special.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Nationwide Delivery</h3>
              <p className="text-gray-600">
                Fast and reliable delivery to anywhere in Australia.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 