// @ts-ignore
import {Link} from "react-router-dom";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";

export function WorkHistoryItem({company, title, from, to, logoSrc, link}) {
  return <div className={"flex gap-4"}>
    <Link to={link}>
      <Avatar className={"size-10"}>
        <AvatarImage src={logoSrc}/>
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </Link>
    <div>
      <div className={"font-semibold"}>{title}</div>
      <div>
        <span>{company}</span>-
        <span>Full time</span>
      </div>
      <div>
        <span>{from}</span> - <span>{to}</span>
      </div>
    </div>
  </div>
}