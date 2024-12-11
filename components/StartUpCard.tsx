import { formatDate } from '@/lib/utils'
import Image from '@/node_modules/next/image'
import Link from '@/node_modules/next/link'
import { Author, Startup } from '@/sanity/types'
import { EyeIcon } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'

export type StartupCardType = Omit<Startup, "author"> & { author?: Author };

const StartUpCard = ({ post } : { post: StartupCardType }) => {
    const { _id, title, _createdAt, views,
        author,
        description,
        image,
        category,
    } = post
  return (
    <li key={_id} className='startup-card group'>
        <div className='flex-between'>
            <p className='startup_card_date'>
                {formatDate(_createdAt)}
            </p>

            <div className='flex gap-1.5'>
                <EyeIcon className='size-6 test-primary' />
                <span className='text-16-medium'>{views}</span>
            </div>
        </div>

        <div className='flex-between mt-5 gap-5'>
            <div className='flex-1'>
                <Link href={`/user/${author?._id}`}>
                    <p className='text-16-medium line-clamp-1'>{author?.name}</p>
                </Link>
                <Link href={`/startup/${_id}`}>
                    <h3 className="text-26-semibold line-champ-1">
                        {title}
                    </h3>
                </Link>
            </div>
            <Link href={`/user/${author?._id}`}>
                <Image src="https://placehold.co/48x48" 
                    width={48} 
                    height={48} 
                    alt="Avatar image"
                    className="rounded-full"
                />
            </Link>
        </div>

        <Link href={`/startup/${_id}`}>
            <p className='start-card_desc mb-2'>
                { description }
            </p>

            <img src={image} alt="placeholder" className='startup-card_img' />
        </Link>

        <div className='flex-between gap-3 mt-5'>
                <Link href={`/?query=${category.toLowerCase()}`}>
                    <p className='text-16-medium'>{category}</p>
                </Link>
                <Button className='startup-card_btn' asChild>
                    <Link href={`/startup/${_id}`}>
                        Details
                    </Link>
                </Button>
        </div>
    </li>
  )
}

export default StartUpCard