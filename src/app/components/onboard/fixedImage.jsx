const FixedImage = () => {
  return (
    <div className="relative w-full md:w-1/2 lg:w-1/2 h-4/4 md:h-full rounded-l-2xl overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{
          backgroundImage: `url(https://www.beatxp.com/blog/wp-content/uploads/2023/05/BMI-Calculator.jpg)`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-transparent" />
      <svg
        className="lg:hidden md:hidden absolute -bottom-0.5 left-0 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#f4f4f5"
          d="M0,160 C690,-190 1080,480 1440,160 L1440,320 L0,320 Z"
        />
      </svg>
    </div>
  );
};

export default FixedImage;
