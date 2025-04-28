const FixedImage = () => {
  return (
    <div className="relative w-full md:w-1/2 lg:w-1/2 h-2/4 md:h-full rounded-l-2xl overflow-hidden">
      {/* Blurred Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{
          backgroundImage: `url(https://aarp.widen.net/content/p4jlwmd8qs/jpeg/AARP_howmuchshouldIweigh-100467.jpg?crop=true&anchor=0,0&q=80&color=ffffffff&u=ovnylx&w=1140&h=655)`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-transparent" />

      {/* Optional content can go here */}
    </div>
  );
};

export default FixedImage;
