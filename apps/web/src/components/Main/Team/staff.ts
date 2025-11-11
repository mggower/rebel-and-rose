import staffData from '@/data/staff.json'
import fallbackPortrait from '@/assets/images/image-7.jpg'

export interface StaffMember {
  name: string
  title: string
  bio?: string
  image?: string
}

export interface StaffProfile extends StaffMember {
  portrait: string
}

const staffImages = import.meta.glob<{ default: string }>('../../../assets/staff/*', {
  eager: true,
}) as Record<string, { default: string }>

const imageLookup = Object.entries(staffImages).reduce<Record<string, string>>((acc, [key, mod]) => {
  const fileName = key.split('/').pop()
  if (fileName) {
    acc[fileName.toLowerCase()] = mod.default
  }
  return acc
}, {})

export const FALLBACK_PORTRAIT = fallbackPortrait

export const resolveStaffPortrait = (fileName?: string) => {
  if (!fileName) {
    return FALLBACK_PORTRAIT
  }

  const normalized = fileName.trim().toLowerCase()
  return imageLookup[normalized] ?? FALLBACK_PORTRAIT
}

export const PLACEHOLDER_BIO = 'We’ll update this bio soon.'

export const staffProfiles: StaffProfile[] = (staffData as StaffMember[]).map((member) => ({
  ...member,
  portrait: resolveStaffPortrait(member.image),
}))

