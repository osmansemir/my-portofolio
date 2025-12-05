import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/ui/dock";
import { cn } from "@/lib/utils";

export default function MyDock() {
  return (
    <Dock
      className={cn(
        "sticky bottom-3 z-50 rounded-full mb-7 p-2 pb-0 border-foreground border-2 bg-primary text-background",
        "shadow-xl",
      )}
      direction="middle"
    >
      <DockIcon>
        <Tooltip>
          <TooltipTrigger>
            <a href="#hero">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M21 19v-6.733a4 4 0 0 0-1.245-2.9L13.378 3.31a2 2 0 0 0-2.755 0L4.245 9.367A4 4 0 0 0 3 12.267V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2Z" />
                  <path d="M9 15a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6H9v-6Z" />
                </g>
              </svg>
            </a>
          </TooltipTrigger>
          <TooltipContent>Home</TooltipContent>
        </Tooltip>
      </DockIcon>

      <DockIcon>
        <Tooltip>
          <TooltipTrigger>
            <a href="mailto:hello@osmansemir.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 20 20"
              >
                <g fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884Z" />
                  <path d="m18 8.118l-8 4l-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118Z" />
                </g>
              </svg>
            </a>
          </TooltipTrigger>
          <TooltipContent>Email</TooltipContent>
        </Tooltip>
      </DockIcon>

      <DockIcon>
        <Tooltip>
          <TooltipTrigger>
            <a
              href="https://www.linkedin.com/in/osman-semir/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M1 2.838A1.838 1.838 0 0 1 2.838 1H21.16A1.837 1.837 0 0 1 23 2.838V21.16A1.838 1.838 0 0 1 21.161 23H2.838A1.838 1.838 0 0 1 1 21.161V2.838Zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634c3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8c-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708V9.388Zm-5.5 10.403h3.208V9.25H4.208v10.54ZM7.875 5.812a2.063 2.063 0 1 1-4.125 0a2.063 2.063 0 0 1 4.125 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </TooltipTrigger>
          <TooltipContent>Linkedin</TooltipContent>
        </Tooltip>
      </DockIcon>

      <DockIcon>
        <Tooltip>
          <TooltipTrigger>
            <a
              href="https://www.github.com/osmansemir/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <g clipPath="url(#akarIconsGithubFill0)">
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"
                      clipRule="evenodd"
                    />
                  </g>
                  <defs>
                    <clipPath id="akarIconsGithubFill0">
                      <path fill="#fff" d="M0 0h24v24H0z" />
                    </clipPath>
                  </defs>
                </g>
              </svg>
            </a>
          </TooltipTrigger>
          <TooltipContent>Github</TooltipContent>
        </Tooltip>
      </DockIcon>
    </Dock>
  );
}
