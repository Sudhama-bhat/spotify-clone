import React from 'react';
import PlayBox from 'components/PlayBox';
import ArtistBox from 'components/ArtistBox';

import { NavLink } from 'react-router-dom';
import {Icon} from 'components/Icons';
import Song from 'components/Song';


export default function Home() {


  const items =[
    {
      id: 1,
      title: 'kesariya',
      artist: 'arjith singh',
      image: 'https://naasongspro.com/wp-content/uploads/2022/06/size_l_1649940707.jpg',
      src: 'https://paglasongs.com/files/download/id/8781'
    },

    {
      id: 2,
      title: 'Sound of salaar',
      artist: 'Ravi Basrur',
      image: 'https://th.bing.com/th/id/OIP.BUQNxEkDR4rrLrzx93B38AHaHa?w=900&h=900&rs=1&pid=ImgDetMain',
      src: 'https://paglasongs.com/files/download/id/16897'
    },

    {
      id: 3,
      title: 'Alag Aasmaan ',
      artist: 'Anuv Jain',
      image: 'https://th.bing.com/th/id/OIP.LW8V7DHFVeZwOyMIRgaezwHaHa?rs=1&pid=ImgDetMain',
      src:'https://paglasongs.com/files/download/id/15883'
    },

   {
      id: 4,
      title: 'Khalasi',
      artist: '	Aditya Gadhvi',
      image: 'https://th.bing.com/th/id/OIP.XfRsAwPN5LRI881lmvJv9QHaHa?rs=1&pid=ImgDetMain',
      src:'https://paglasongs.com/files/download/id/15890'
    },

    {
      id: 5,
      title: 'Husn',
      artist: 'Anuv Jain',
      image: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b6/3d/12/b63d1218-7bc1-f4f2-5fdd-5d1909abda1c/23UM1IM56437.rgb.jpg/1200x1200bf-60.jpg',
      src:'https://paglasongs.com/files/download/id/16807'
    },

    
  ]

  const singer =[
    {
      id: 1,
      position: 'artist',
      name: 'Swasthik R prabhu ',
      image: 'https://media.licdn.com/dms/image/D5603AQFmX3xWZagqGQ/profile-displayphoto-shrink_200_200/0/1679971528335?e=2147483647&v=beta&t=663Fjag7TjjL9bEFEkSziPwXQoLO92QbOJd9m6AaUpw'
    },
    {
      id: 2,
      position: 'artist',
      name: ' G J Sathwik Rai',
      image: 'https://media.licdn.com/dms/image/D5603AQH5QoMZcMm0bA/profile-displayphoto-shrink_200_200/0/1708446420285?e=2147483647&v=beta&t=W32GN3-l-I3ScMGs6pmZ-UOV7nVDO058echHdGxzEqw'
    },
    {
      id: 3,
      position: 'artist',
      name: 'B Yash Kamal Shetty',
      image: 'data:image/jpeg;base64,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'
    },
    {
      id: 4,
      position: 'artist',
      name: 'Dev Kalaria',
      image: 'https://media.licdn.com/dms/image/D5603AQEWFFgMWYeGBg/profile-displayphoto-shrink_200_200/0/1678938730917?e=2147483647&v=beta&t=lSuQ8DcwS3Vjl0hJeiLNdkXE_6hPC1rGgsA43mTAfrk'
    },
    {
      id: 5,
      position: 'artist',
      name: 'Raviraj M J',
      image: 'https://media.licdn.com/dms/image/D5603AQF8OUvHcPomPg/profile-displayphoto-shrink_800_800/0/1678939515541?e=2147483647&v=beta&t=c8rc7ZF6m9sTKZ6P2EB9UZpDgu4a51P21u-tK5q07oE'
    }
  ]

  const mixer =[
    {
      id: 1,
      position: 'hold the full glass upside down',
      name: 'Daily Mix 3',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb5b685456413fc96b946fc2f2/3/tr/default'
    },
    {
      id: 2,
      position: 'sathwik, Swasthik, aaron de caprio',
      name: 'Daily Mix 4',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebe03987a142f6ba53d230a58c/4/tr/default'
    },
    {
      id: 3,
      position: 'sudhama, dev',
      name: 'Daily Mix 5',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb2e83342b0f36ba888c77be62/5/tr/default'
    },
    {
      id: 4,
      position: 'taylor swift,drake ',
      name: 'Daily Mix 6',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebcfc63410e20f29a28a05c37c/6/tr/default'
    },
    {
      id: 5,
      position: 'anabell, conjuring',
      name: 'Daily Mix 1',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebede6e2c2886ad29725a9ebf5/1/tr/default'
    }

  ]



  return (
    <div>
      <div>
      <h3 className='text-3xl text-white font-bold tracking-tight mb-6'>good evening</h3>
      <div className='grid grid-cols-3 items-center justify-center gap-x-6 gap-y-4 mb-6 transition-all'>
        <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
          <img className='w-[5rem] h-[5rem]' src="https://misc.scdn.co/liked-songs/liked-songs-640.png" />
          <h4 className='text-[16px] font-bold p-4'>popular songs</h4>
          <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
            <Icon name="play"/>
          </button>
        </div>
        
        
        <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
          <img className='w-[5rem] h-[5rem]' src="https://mosaic.scdn.co/640/ab67616d0000b2734d59747eb35ad59da0c0cd2fab67616d0000b273d2be316742edcc853ea55141ab67616d0000b273ecb143ba6650682889c07b73ab67616d0000b273fb2bce3c5716f9bd1f0aaad7" />
          <h4 className='text-[16px] font-bold p-4'>indian 2000s</h4>
          <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
            <Icon name="play"/>
          </button>
        </div>
        
        
        <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
          <img className='w-[5rem] h-[5rem]' src="https://i.scdn.co/image/ab67706f000000039b8d1245aebc440c764b5a86" />
          <h4 className='text-[16px] font-bold p-4'>Hot Hits India</h4>
          <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
            <Icon name="play"/>
          </button>
        </div>
        
        
        <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
          <img className='w-[5rem] h-[5rem]' src="https://i.scdn.co/image/ab67616d0000b273ba632c08e3ca8342c20017a5" />
          <h4 className='text-[16px] font-bold p-4'>white</h4>
          <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
            <Icon name="play"/>
          </button>
        </div>
        
        
        <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
          <img className='w-[5rem] h-[5rem]' src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebede6e2c2886ad29725a9ebf5/1/tr/default" />
          <h4 className='text-[16px] font-bold p-4'>Daily Mix 1</h4>
          <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
            <Icon name="play"/>
          </button>
        </div>
        <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
          <img className='w-[5rem] h-[5rem]' src="https://dailymix-images.scdn.co/v2/img/ab67616d0000b27365a248c766e18522893d44c5/2/tr/default" />
          <h4 className='text-[16px] font-bold p-4'>Daily Mix 2</h4>
          <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
            <Icon name="play"/>
          </button>
        </div>

      </div>
      </div>
        <div className='flex justify-between items-end mb-4'>
        <PlayBox title={'compiled for sudhama'}/>
        <PlayBox see />
        </div>
        <div className='grid grid-cols-5 gap-x-6'>
                {items.map(item => <Song item={item} key={item.id} /> )}
                
        </div>
        <div className='flex justify-between items-end mb-4 mt-6'>
        <PlayBox title={'daily mix'}/>
        <PlayBox see />
        </div>
        <div className='grid grid-cols-5 gap-x-6 mb-8'>
                {mixer.map(item => (
                    <NavLink key={item.id} to="/" className={'bg-footer rounded p-4 transition-all hover:bg-menubg group'}>
                        <div className='relative '> 
                          <img className='w-auto h-auto inset-0 object-cover mb-4' src={item.image} />
                          <button className='w-12 h-12 bg-primary absolute right-2 bottom-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
                            <Icon name="play"/>
                          </button>
                        </div>
                        <span className='font-semibold text-white text-[16px] whitespace-nowrap'>{item.name}</span> <br />
                        <span className='mt-1 text-[14px] text-link'>{item.position}</span>
                        
                    </NavLink>
                ))}
        </div>
        <div className='flex justify-between items-end mb-4 mt-6'>
        <PlayBox title={'international POP stars'}/>
        <PlayBox see />
        </div>
        <div className='grid grid-cols-5 gap-x-6 mb-8'>
                {singer.map(item => (
                    <NavLink key={item.id} to="/" className={'bg-footer rounded p-4 transition-all hover:bg-menubg group'}>
                        <div className='relative '> 
                          <img className='w-auto h-auto inset-0 object-cover mb-4 rounded-full' src={item.image} />
                          <button className='w-12 h-12 bg-primary absolute right-2 bottom-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
                            <Icon name="play"/>
                          </button>
                        </div>
                        <span className='font-semibold text-white text-[16px] whitespace-nowrap'>{item.name}</span> <br />
                        <span className='mt-1 text-[14px] text-link'>{item.position}</span>
                        
                    </NavLink>
                ))}
        </div>

    </div>
  )
}