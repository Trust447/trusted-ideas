import React from 'react'
import Bounded from './Bounded'
import Heading from './Heading'
import Button from '../components/Button'
import Avatar from './Avatar'

const Biography = () => {
  return (
    <Bounded>
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">

        {/* Heading */}
        <Heading size="xl" className="col-start-1">
          About Trust
        </Heading>

        {/* Body text */}
        <div className="prose prose-xl prose-slate prose-invert col-start-1">
          <p>
            I’m Trust — a software engineer who loves turning ideas into simple,
            useful, and beautiful digital experiences. I enjoy building tools and applications that make life easier,
            solving problems in ways that feel natural, and creating products
            people enjoy using.
          </p>
          <p>
            Building software is about bringing ideas to life and creating
            experiences that people can connect with. I care about clarity,
            simplicity, and work that feels thoughtful and intentional.
          </p>
          <p>
            I’m always learning, exploring new technologies, and improving my craft.
            Every project is a chance to grow, create something meaningful, and
            make a positive impact.
          </p>
        </div>

        {/* Button */}
        <div className="col-start-1">
          <Button href="/contact" label="Resume" />
        </div>

        {/* Avatar */}
        <Avatar
          imageUrl="trust.jpg"
          className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"
        />
      </div>
    </Bounded>
  )
}

export default Biography
