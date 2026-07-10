export default function AssistanceBanner() {
  return (
    <section className="relative h-[450px]">

      <img
        src="/assistance.jpg"
        alt=""
        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        "
      />

      <div className="absolute inset-0 bg-black/40" />

      <div
        className="
        relative
        z-10
        h-full
        flex
        items-center
        "
      >
        <div className="max-w-7xl mx-auto px-6 text-white">

          <h2 className="text-5xl font-bold mb-6">
            Need Assistance?
          </h2>

          <p className="text-xl max-w-xl">
            Our travel experts are ready to help
            you plan your next unforgettable trip.
          </p>

          <button
            className="
            mt-8
            px-8
            py-4
            bg-cyan-500
            rounded-xl
            font-semibold
            "
          >
            Contact Us
          </button>

        </div>
      </div>
    </section>
  );
}