export default function Hero() {
    return (
           <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-2xl">
      <h1 className="mb-8 text-6xl font-bold">A HOLIC MARKETING <br /> AGENCY</h1>
      <p className="mb-6">
        Creativity is intelligence having fun
      </p>
      <button className="btn btn-base-100 text-black">บริการของเรา</button>
    </div>
  </div>
</div>
    );
} 