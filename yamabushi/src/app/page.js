import Image from "next/image";
import Link from "next/link";

import yamabushi from "../../public/yamabushi.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white font-bianzhidai text-xs text-black">
      <div>YAMABUSHI FARMS</div>
      <Image src={yamabushi} width="500" height="500" />
      <div>
        LOCALLY GROWN LION’S MANE <br />
        LOS ANGELES, CA
      </div>
      <div className="flex flex-row">
        <Link href="instagram.com/yamabushifarms">INSTAGRAM</Link>
        <Link href="instagram.com/yamabushifarms">EMAIL</Link>
      </div>
    </main>
  );
}
