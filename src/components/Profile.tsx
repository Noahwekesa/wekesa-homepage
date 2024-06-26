import { Avatar } from '@radix-ui/themes'

export default function Profile() {
  return (
    <div className="avatar ml-7">
      <div className="w-24 rounded-full">
        <Avatar size="7" src="noah.jpg" radius="full" fallback="NW" />
      </div>
    </div>
  )
}
