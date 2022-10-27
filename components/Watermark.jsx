import Link from "next/link";    

export default function Watermark() {
    return (
        <p className="fixed right-1 bottom-0 text-light"><Link target={"_blank"} href={"https://www.nordic-code.com/"}>Nordic Code © 2022</Link></p>
    );
}