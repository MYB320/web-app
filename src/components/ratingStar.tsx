import React from 'react'
import { Star } from 'lucide-react'

interface RatingStarsProps {
  rating: number
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  const starElements = []

  for (let i = 0; i < 5; i++) {
    if (rating >= i + 1) {
      starElements.push(
        <Star key={i} className='fill-yellow-400 stroke-yellow-400' size={20} />
      )
    } else {
      starElements.push(
        <Star
          key={i}
          opacity='0.3'
          className='fill-yellow-400 stroke-yellow-400'
          size={20}
        />
      )
    }
  }

  return (
    <div className='flex items-center'>
      {starElements.map((star, index) => (
        <div key={index} className='mr-1'>
          {star}
        </div>
      ))}
    </div>
  )
}

export default RatingStars
