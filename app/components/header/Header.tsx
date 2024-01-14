import Image from 'next/image';
import Link from 'next/link';
import Searchbar from './Searchbar';
import Navbar from './Navbar';

const Header = ({placeholder}: {placeholder?: string}) => {
  return (
    <header className='sticky top-0 z-50 bg-white shadow-md py-5'>
       <div className='container grid grid-cols-3 relative'>
       <Link href='/' className='relative flex items-center h-12 my-auto'>
            <Image 
                src="https://img.freepik.com/free-vector/detailed-travel-logo_23-2148616611.jpg?size=338&ext=jpg&ga=GA1.1.1412446893.1704931200&semt=ais"
                alt='logo'
                fill
                className='object-contain object-left'
            />
        </Link>
        <Searchbar placeholder={placeholder} />
        <Navbar />
       </div>
    </header>
  )
}

export default Header;