import {
  TwitterLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon
} from '@radix-ui/react-icons'
import { Box, Heading, Link } from '@radix-ui/themes'

export default function Socials() {
  return (
    <Box align="center">
      <Heading mb="3">On The Web</Heading>

      <div className="flex space-x-2 justify-center text-center">
        <Link
          href="https://github.com/Noahwekesa"
          target="_blank"
          rel="noah wekesa"
        >
          <GitHubLogoIcon className="w-6 h-6" />
        </Link>
        <Link>{/* <YouTubeLogoIcon className="w-6 h-6" /> */}</Link>
        <Link>
          <TwitterLogoIcon className="w-6 h-6" />
        </Link>
        <Link>
          <LinkedInLogoIcon className="w-6 h-6" />
        </Link>
        <Link>
          <InstagramLogoIcon className="w-6 h-6" />
        </Link>
      </div>
    </Box>
  )
}
