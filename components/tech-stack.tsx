import {
  IconBrandFramerMotion,
  IconBrandGraphql,
  IconBrandHtml5,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandNuxt,
  IconBrandPrisma,
  IconBrandRadixUi,
  IconBrandReact,
  IconBrandStripe,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVue,
} from '@tabler/icons-react'

const TechStack = () => {
  return (
    <div className='pt-10 w-full'>
      <h2 className='text-2xl xl:text-3xl font-semibold font-dm-serif tracking-wide'>
        Tech Stack
      </h2>
      <div className='pt-6 grid grid-flow-row grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-5'>
        <div className='aspect-square rounded-lg bg-muted text-foreground flex justify-center items-center'>
          <IconBrandHtml5 size={40} strokeWidth={1} />
        </div>
        <div className='aspect-square rounded-lg bg-muted text-foreground flex justify-center items-center'>
          <IconBrandTypescript size={40} strokeWidth={1} />
        </div>
        <div className='aspect-square rounded-lg bg-muted text-foreground flex justify-center items-center'>
          <IconBrandReact size={45} strokeWidth={1} />
        </div>
        <div className='aspect-square rounded-lg bg-muted text-foreground flex justify-center items-center'>
          <IconBrandNextjs size={45} strokeWidth={1} />
        </div>
        <div className='aspect-square rounded-lg bg-muted text-foreground flex justify-center items-center'>
          <IconBrandTailwind size={45} strokeWidth={1} />
        </div>
        <div className='aspect-square rounded-lg bg-muted text-foreground flex justify-center items-center'>
          <IconBrandFramerMotion size={40} strokeWidth={1} />
        </div>
        <div className='aspect-square rounded-lg bg-muted text-foreground flex justify-center items-center'>
          <IconBrandNodejs size={40} strokeWidth={1} />
        </div>
        <div className='aspect-square rounded-lg bg-muted text-foreground flex justify-center items-center'>
          <IconBrandGraphql size={40} strokeWidth={1} />
        </div>
        <div className='aspect-square rounded-lg bg-muted text-foreground flex justify-center items-center'>
          <IconBrandPrisma size={40} strokeWidth={1} />
        </div>
        <div className='aspect-square rounded-lg bg-muted text-foreground flex justify-center items-center'>
          <IconBrandStripe size={40} strokeWidth={1} />
        </div>
        <div className='aspect-square rounded-lg bg-muted text-foreground flex justify-center items-center'>
          <IconBrandVue size={40} strokeWidth={1} />
        </div>
        <div className='aspect-square rounded-lg bg-muted text-foreground flex justify-center items-center'>
          <IconBrandNuxt size={40} strokeWidth={1} />
        </div>
        <div className='aspect-square rounded-lg bg-muted text-foreground flex justify-center items-center'>
          <IconBrandRadixUi size={40} strokeWidth={1} />
        </div>
        <div className='aspect-square rounded-lg bg-muted text-foreground flex justify-center items-center'>
          <div className='flex flex-col items-center -rotate-45'>
            <div className='w-[30px] h-[2px] bg-foreground rounded-full'></div>
            <div className='w-[20px] h-[2px] bg-foreground rounded-full mt-2'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechStack
