import { Rasa, Georama } from 'next/font/google'

const serif = Rasa({
  display: 'swap',
  weight: '300',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
})

const sansSerif = Georama({
  display: 'swap',
  weight: ['300', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-sans-serif',
})

const className = [serif.variable, sansSerif.variable].join(' ')

const fonts = {
  serif,
  sansSerif,
  className,
}

export default fonts
