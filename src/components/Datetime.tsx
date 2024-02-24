import { LOCALE } from "@config";
import ReadingTime from "./ReadingTime";
import { formatDiagnostic } from "typescript";

export interface Props {
  datetime: string | Date;
  size?: "sm" | "lg";
  className?: string;
  fileName: string;
  customDuration: string | undefined;
  format: string;
}

export default function Datetime({
  datetime,
  fileName,
  customDuration,
  size = "sm",
  className,
  format,
}: Props) {
  return (
    <div className={`flex items-center space-x-2 opacity-80 ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          size === "sm" ? "scale-90" : "scale-100"
        } inline-block h-6 w-6 fill-skin-base`}
        aria-hidden="true"
      >
        <path d="M11 17h2v-6h-2v6zm1-15C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        <circle cx="12" cy="9" r="1" />
      </svg>
      <span className="sr-only">Posted on:</span>
      <span className={`italic ${size === "sm" ? "text-sm" : "text-base"}`}>
        <Format format={format} />
        <FormattedDatetime datetime={datetime} />
        <ReadingTime fileName={fileName} customDuration={customDuration} />
      </span>
    </div>
  );
}

const FormattedDatetime = ({ datetime }: { datetime: string | Date }) => {
  const myDatetime = new Date(datetime);

  const date = myDatetime.toLocaleDateString(LOCALE, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const time = myDatetime.toLocaleTimeString(LOCALE, {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      {date}
      <span aria-hidden="true"> | </span>
    </>
  );
};

const Format = ({ format }: { format: string }) => {
  return (
    <>
      {format}
      <span aria-hidden="true"> | </span>
    </>
  );
};
