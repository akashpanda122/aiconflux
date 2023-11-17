import Logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="bg-[#0B0A0C] text-center footer w-full py-16 px-32">
      <div className="flex items-center justify-center gap-2 mb-6">
        <img src={Logo} className="h-7" alt="logo" /> <p className="text-2xl">AIConflux</p>
      </div>
      <p className="text-xl">Unleashing Limitless Imagination and Endless Possibilities</p>
      <div className="flex items-center justify-between mt-16">
        <p className="text-white">&copy; 2023 AIConflux. All rights reserved.</p>
        <div className="flex gap-8">
          <p>Terms and Condition</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
