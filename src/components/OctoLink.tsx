import { FunctionComponent, ReactElement } from "react";

interface OctoLinkProps {
  href: string;
  title: string;
}

function sanitizeUrl(url: string): string {
    let u = decodeURI(url).trim().toLowerCase();
    if (u.startsWith("javascript:") || u.startsWith("data:") || u.startsWith("vbscript:"))
        return "about:blank";
    return url;
}

const OctoLink: FunctionComponent<OctoLinkProps> = ({
  href,
  title,
}): ReactElement => {
  return <a href={sanitizeUrl(href)}>{title}</a>;
};

export { OctoLink };
