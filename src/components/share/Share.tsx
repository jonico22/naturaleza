'use client'
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'next-share'

export const Share = ({url,title,description}:any) => {
  return(
    <>
      <div className='flex justify-center gap-4 mt-10'>
          <FacebookShareButton
            url={url}
            quote={title}
          >
            <FacebookIcon size={48} round />
          </FacebookShareButton>
          <LinkedinShareButton url={url}>
            <LinkedinIcon size={48} round />
          </LinkedinShareButton>
          <WhatsappShareButton
            url={url}
          >
            <WhatsappIcon size={48} round />
          </WhatsappShareButton>
      </div>
      
    </>
  )
}