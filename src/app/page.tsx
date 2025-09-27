import Image from "next/image";
import bg from "@/public/bg.png"

export default function page() {

  return (
    <div>
      <Image src={bg} alt="data" fill />
    </div>
  )
}